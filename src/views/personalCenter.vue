<template>
  <div class="card">
    <div class="card-header">
<!--      <div class="card-cover" :style="`background-image: url(${image_arr[userStore.clickIndex]})`"></div>-->
      <div class="card-cover colorful"></div>
      <img class="card-avatar" :src="image_arr[userStore.clickIndex]" alt="avatar" />
      <h1 class="card-fullname">{{name_arr[userStore.clickIndex]}}</h1>
      <h2 class="card-jobtitle">个人中心</h2>
    </div>
    <text class="login_out blue_btn" @click="login_out">退出登录</text>
    <div class="card-main">
      <div class="card-section" id="about">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
          <el-tab-pane label="我的投诉" name="first">
            <div class="app-container">
            <div class="messages-section" v-for="(item, index) in brokenRecordList.arr" :key="index">
              <div class="projects-section-header general_item">
                <text v-if="item.is_passed * 1 === 0">等待审核</text>
                <text v-else-if="item.is_passed * 1 === 1">投诉成功</text>
                <text v-else>投诉失败</text>
                <text>投诉{{index+1}}</text>
                <div class="star-checkbox">
                  <input type="checkbox" :id="`star-${index}-${index+2}`">
                  <label :for="`star-${index}-${index+2}`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                      </polygon>
                    </svg>
                  </label>
                </div>
              </div>
              <div class="messages">
                <div class="message-box">
                  <div class="message-content">
                    <p class="message-line"> {{item.complaint}}</p>
                    <el-row :gutter="8" class="margin-10-top" v-if="item.image">
                      <el-col
                          v-for="(itemImage, indexImage) in item.image"
                          :key="indexImage"
                          :span="8"
                          :md="8"
                      >
                        <el-image
                            :hide-on-click-modal=true
                            :src="itemImage"
                            class="image_list"
                            fit="fill"
                            :zoom-rate="1.2"
                            :preview-src-list="item.image"
                            :initial-index="indexImage"
                            lazy />
                      </el-col>
                    </el-row>
                    <p class="message-line time"> {{item.created_time}} </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的订单" name="second" lazy>
            <el-table :data="tradeLog" empty-text="您还没有下过单哦">
              <el-table-column label="购买产品" prop="goods_title" />
              <el-table-column label="购买规格" prop="specs" />
              <el-table-column label="购买数量">
                <template
                  #default="scope"
                >{{ Number(scope.row.goods_sumnumber) }}{{ formatUnit(scope.row.unit) }}</template>
              </el-table-column>
              <el-table-column label="联系电话" prop="user_phone" />
              <el-table-column label="联系地址" prop="user_address"/>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from "../pinia/user.js";
import {image_arr,name_arr} from "../utils/user.js";
import { brokenRecordListByUserIdApi } from "../api/brokenRecord.js";
import { getTradeLogsApi } from "../api/goods.js";
import { formatUnit } from "../utils/good.js";
import {useRouter} from 'vue-router'
import "../assets/comment.scss"
//导航栏切换开始
import {onActivated, onDeactivated, onMounted, onUnmounted, reactive, ref, watchEffect} from "vue";
const userStore = useUserStore();

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
const router = useRouter()

//导航栏切换结束
const brokenRecordList = reactive({
  arr: []
})
const brokenRecordCount = ref(0)
const tradeLog = ref([])
const tradeLogCurrentPage = ref(1)
const tradeLogTotalPage = ref(1)
const tradeLogIsLoading = ref(false)
const tradeLogThreshold = 10
const tradeLogScrollHandleLoaded = ref(false)
const getTradeLog = () => {
  if (tradeLogIsLoading.value == true) {
    return false
  }
  if (tradeLogCurrentPage.value > tradeLogTotalPage.value) {
    return false
  }
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
  if (scrollTop + windowHeight + tradeLogThreshold < scrollHeight) {
    return false
  }
  tradeLogIsLoading.value = true
  getTradeLogsApi({
    user_id: userStore.userId,
    phone: userStore.phone,
    page: tradeLogCurrentPage.value,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      return false
    }
    tradeLog.value = tradeLog.value.concat(res.data.data)
    tradeLogTotalPage.value = Number(res.data.total_page)
    tradeLogCurrentPage.value = Number(res.data.current_page) + 1
  }).finally(() => {
    tradeLogIsLoading.value = false
  })
}
onMounted(() => {
  brokenRecordListByUserIdApi({user_id: userStore.userId}).then(async(res) => {
    console.log(res);
    if(res.status === 200){
      brokenRecordList.arr = res.data.data;
      brokenRecordCount.value = res.data.broken_record_count;
    }
  })
  getTradeLog()
  if (tradeLogScrollHandleLoaded.value == false && activeName.value == 'second') {
    document.querySelector("#app").addEventListener('scroll', getTradeLog)
    tradeLogScrollHandleLoaded.value = true
  }
})
onActivated(() => {
  if (tradeLogScrollHandleLoaded.value == false && activeName.value == 'second') {
    document.querySelector("#app").addEventListener('scroll', getTradeLog)
    tradeLogScrollHandleLoaded.value = true
  }
})
onDeactivated(() => {
  if (tradeLogScrollHandleLoaded.value == true) {
    document.querySelector("#app").removeEventListener('scroll', getTradeLog)
    tradeLogScrollHandleLoaded.value = false
  }
})
onUnmounted(() => {
  if (tradeLogScrollHandleLoaded.value == true) {
    document.querySelector("#app").removeEventListener('scroll', getTradeLog)
    tradeLogScrollHandleLoaded.value = false
  }
})
watchEffect(() => {
  if (activeName.value == 'second') {
    if (tradeLogScrollHandleLoaded.value == false) {
      document.querySelector("#app").addEventListener('scroll', getTradeLog)
      tradeLogScrollHandleLoaded.value = true
    }
  } else {
    if (tradeLogScrollHandleLoaded.value == true) {
      document.querySelector("#app").removeEventListener('scroll', getTradeLog)
      tradeLogScrollHandleLoaded.value = false
    }
  }
})
const login_out = () => {
  userStore.$reset();
  console.log(userStore.userId);
  router.push({path: '/login'})
}
</script>
<style lang="scss" scoped>
.colorful{
  background-image: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
}
.login_out{
  align-self: center;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 13px;
}
.blue_btn{
  background-color: #e9f9ff;
  color: #000000;
}
.app-container{
  background-color: #fff !important;
}
.card-section:deep(.el-tabs__header) {
  position: -webkit-sticky;
  position: sticky;
  background: #fff;
  top: 50px;
  z-index: 1000;
  opacity: 0.8;
  margin: 0;
}
.card-section:deep(.el-tabs__nav-wrap) {
  padding: 0 20px;
  letter-spacing: 2px;
}
.card-section:deep(.el-tabs__nav-scroll) {
  overflow-x: auto;
}
.el-descriptions{
  padding:0 10px;
}
.card-section:deep(.el-tabs__nav-scroll::-webkit-scrollbar) {
  display: none;
}
.card-section:deep(.el-tabs__nav-wrap::after) {
  background-color: unset !important;
}
.card-section:deep(.el-tabs__item.is-active) {
  color: #000;
}
.card-section:deep(.el-tabs__active-bar) {
  background-color: #000;
}
.card-section:deep(.el-tabs__item:hover) {
  color:#000;
}
.card-section:deep(.el-descriptions__header) {
  margin-bottom: 0;
  padding: 10px 0px;
}
@media only screen and (max-width: 520px){
  .card{
    width: 100%;
  }
}
@media only screen and (min-width: 520px){
  .card{
    width: 80%;
  }
}
.card {
  margin: auto;
  margin-top: 60px !important;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}

.card.is-active {
  .card-header {
    height: 80px;
  }

  .card-cover {
    height: 100px;
    top: -50px;
  }

  .card-avatar {
    transform: none;
    left: 20px;
    width: 50px;
    height: 50px;
    bottom: 10px;
  }

  .card-fullname {
    bottom: 18px;
    font-size: 19px;
  }

}

.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}


.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-section {
  display: block;
  animation: fadeIn 0.6s both;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(40px);
  }
  100% {
    opacity: 1;
  }
}

</style>
