<template>
  <div class="padding-10 margin-10-top margin-60-top">
    <div class="top_1_tag">
      <Tag v-if="isFranchisee" tag="加盟商" number="60" color="orange"></Tag>
      <Tag :tag="credit_score_text" number="60" color="yellow"></Tag>
      <Tag tag="入驻真木网" number="60" color="purple"></Tag>
      <template v-for="(item,index) in wood_name" :key="index">
        <Tag :tag="item" number="60" color="blue"></Tag>
      </template>
    </div>
    <div class="top_2 margin-20-top">
      <div class="margin-10-top top_2_1">
        <!--          <text>我们是</text>-->
        <div class="svg_hello">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path fill="#EF9645" d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625c-.793-1.129-.519-2.686.611-3.478z"/><path fill="#FFDC5D" d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"/><g fill="#5DADEC"><path d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"/><path d="M7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zM24 2c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"/><path d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"/></g>
          </svg>
        </div>
      </div>
      <text class="margin-20-top emphasize">{{ company_name}}</text>
      <text class="margin-20-top">社会统一信用代码：</text>
      <text class="margin-20-top emphasize">{{credit_code}}</text>
    </div>
    <el-row :gutter="24">
      <el-col :span="24" :md="12" class="top_1_parent">
        <div class="top margin-20-top">
          <CreditScore
              :credit-score="credit_score"
              height="200"
              width="300px">
          </CreditScore>
        </div>
      </el-col>
      <el-col :span="24" :md="12">
        <div class="top margin-20-top">
          <div class="top_2">
            <div class="margin-20-top top_tip">
              <text>我们在真木网平台上经营的主要有：</text>
              <div class="margin-20-top top_tip_2">
                <div class="svg_happy">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"/><path fill="#664500" d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"/><path fill="#FFF" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"/><path fill="#E95F28" d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z"/></svg>
                </div>
                <div class="font-18-size top_tip_2_2">
                  <template v-for="(item,index) in wood_name" :key="index">
                    <text v-if="index === 0" class="emphasize">{{item}}</text>
                    <text v-else class="margin-10-top emphasize">{{item}}</text>
                  </template>
                </div>
              </div>
            </div>
            <text class="margin-20-top font-12-size">用我们名字或社会统一信用代码可以在ZMW精准搜索到我们哦~</text>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <el-container direction="vertical" :gutter="18" class="margin-20-top">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
      <el-tab-pane label="公司首页" name="first">
<!--        公司首页的精选商品开始-->
<!--        <el-descriptions title="精选商品">-->
<!--          <template #extra>-->
<!--            <el-button type="" text>-->
<!--              查看全部<el-icon class="el-icon&#45;&#45;right"><ArrowRight /></el-icon>-->
<!--            </el-button>-->
<!--          </template>-->
<!--        </el-descriptions>-->
        <GoodsList :list="list.arr" :is-grey="1" :size="300"></GoodsList>
<!--        <div class="adv_1">-->
<!--          <div class="top_1_2">-->
<!--            <text class="top_1_2_left emphasize">ZMW</text>-->
<!--            <div class="top_1_2_right font-10-size">-->
<!--              <text class="light_emphasize font-15-size">加入真木网官方木材平台</text>-->
<!--              <text>在买木头小程序以及ZMW端出售您的商品</text>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        公司首页的精选商品结束-->
<!--        公司首页的问大家开始-->
<!--          <el-descriptions title="问大家">-->
<!--          <template #extra>-->
<!--            <el-button type="" text>-->
<!--              查看全部<el-icon class="el-icon&#45;&#45;right"><ArrowRight /></el-icon>-->
<!--            </el-button>-->
<!--          </template>-->
<!--          </el-descriptions>-->
<!--        问答列表开始-->
          <QuestionList
            :company-info-id="company_info_id_text"
            :list="questionList.arr"
          >
          </QuestionList>
<!--        问答列表结束-->
<!--        公司首页的问大家结束-->
            <!--        公司首页的大众评论开始-->
<!--            <el-descriptions title="大众评论">-->
<!--              <template #extra>-->
<!--                <el-button type="" text>-->
<!--                  查看全部<el-icon class="el-icon&#45;&#45;right"><ArrowRight /></el-icon>-->
<!--                </el-button>-->
<!--              </template>-->
<!--            </el-descriptions>-->

            <!--        评论列表开始-->
            <CommentList
                :company-info-id="company_info_id_text"
                :list="commentList.arr"
            >
            </CommentList>
            <!--        评论列表结束-->
            <!--        公司首页的大众评论结束-->
      </el-tab-pane>
      <el-tab-pane label="商品" name="second">
        <GoodsList :list="list.arr" :size="300"></GoodsList>
      </el-tab-pane>
      <el-tab-pane label="问大家" name="third">
        <QuestionList
            :company-info-id="company_info_id_text"
            :list="questionList.arr"
        >
        </QuestionList>
      </el-tab-pane>
      <el-tab-pane label="大众评论" name="fourth">
        <CommentList
            :company-info-id="company_info_id_text"
            :list="commentList.arr"
        >
        </CommentList>
      </el-tab-pane>
      <el-tab-pane label="联系公司" name="fifth">
        <div class="fifth">
          <div class="fifth_item">
            <svg t="1679469730863" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11714" data-spm-anchor-id="a313x.7781069.0.i20" width="200" height="200"><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z m211.7-261.5c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" fill="#25d366" p-id="11715" data-spm-anchor-id="a313x.7781069.0.i17" class=""></path></svg>
            <text class="light_emphasize margin-20-left">15230103179</text>
          </div>
          <div class="fifth_item">
            <svg t="1679471610724" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15127" width="200" height="200"><path d="M877.216 491.808M895.904 448c0-212.064-171.936-384-384-384-212.064 0-384 171.936-384 384 0 104.672 42.016 199.456 109.92 268.736L237.664 716.736l1.568 1.568c0.768 0.768 1.536 1.568 2.336 2.336l217.12 217.12c29.376 29.376 76.992 29.376 106.368 0l217.12-217.12c0.768-0.768 1.568-1.536 2.336-2.336l1.568-1.568-0.16 0C853.888 647.456 895.904 552.672 895.904 448zM565.088 847.36c-53.12 53.12-53.152 53.248-106.368 0L285.76 673.472C228 615.648 191.904 536.224 191.904 448c0-176.736 143.264-320 320-320 176.736 0 320 143.264 320 320 0 88.224-36.096 167.648-93.856 225.472L565.088 847.36zM512 256c-106.048 0-192 85.952-192 192s85.952 192 192 192 192-85.952 192-192S618.048 256 512 256zM512 576c-70.688 0-128-57.312-128-128s57.312-128 128-128 128 57.312 128 128S582.688 576 512 576z" fill="#000000" p-id="15128"></path></svg>
            <text class="light_emphasize margin-20-left">河北省邯郸市永年县</text>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>
<script setup>
import { ref,onMounted,reactive } from 'vue'
import { useRoute } from 'vue-router'
import QuestionList from "../components/QuestionList.vue";
import CommentList from '../components/CommentList.vue';
import GoodsList from "../components/GoodsList.vue";
import "../assets/tag.css"
import {goodsListApi} from "../api/goods.js";
import CreditScore from "../components/CreditScore.vue";
import {questionListApi} from "../api/question.js";
import {commentListApi} from "../api/comment.js";
import {shopDetailApi} from "../api/shopDetail.js";
import { useUserStore } from "../pinia/user.js";
import Tag from "../components/Tag.vue"
const userStore = useUserStore();
//
const text = ref('')
const company_info_id_text = ref(0);
company_info_id_text.value = 18;
const company_info_id = ref(null);
// company_info_id.value = 2644899;
company_info_id.value = useRoute().query.company_info_id
//导航栏切换开始
const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
//评论开始
// 数据列表
const commentList = reactive({
  arr:[]
});
const questionList = reactive({
  arr: []
});
//导航栏切换结束
const list = reactive({
  arr: []
});
const wood_name = ref([])
const company_name = ref('')
const credit_score = ref('')
const credit_score_text = ref('')
const credit_code = ref('')
const isFranchisee = ref(0)
onMounted(() => {
  shopDetailApi({company_info_id:company_info_id.value}).then(async(res) => {
    company_name.value = res.data.company_info.company_name
    credit_score.value = res.data.company_info.credit_score
    credit_score_text.value = '信用分 '+ credit_score.value
    credit_code.value = res.data.company_info.credit_code
    isFranchisee.value = res.data.isFranchisee
  })
  goodsListApi({company_info_id:company_info_id.value}).then(async(res) => {
    list.arr =  res.data;
    console.log(res.data);
    wood_name.value = res.data.map((item) => {
      return item = item.wood_name
    })
    wood_name.value = Array.from(new Set(wood_name.value));
  })
  questionListApi({company_info_id: company_info_id_text.value,user_id: userStore.userId}).then(async(res) => {
    questionList.arr = res.data.data;
  })
  commentListApi({company_info_id: company_info_id_text.value,user_id: userStore.userId}).then(async(res) => {
    console.log(res);
    commentList.arr = res.data.data;
  })
})
</script>
<style scoped>
.top_1_tag{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.fifth{
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 2px;
  padding: 0 20px 20px 20px;
}
.fifth_item{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}
.el-col{
  margin-bottom: 10px;
}
.icon{
  width: 30px;
  height: 30px;
}
.top_1_parent{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.adv_1{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(109.6deg, rgb(53 53 53) 11.2%, rgb(98 83 133) 91.1%);
}
.top_1_2{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #000;
}
.top_1_2 .top_1_2_left{
  padding: 20px;
  background-color: #000;
  color: #fff;
}
.top_1_2 .top_1_2_right{
  display: flex;
  flex-direction: column;
  background-color: #645386;
  color: #fff;
  padding: 20px;
  letter-spacing: 2px;
  align-items: flex-start;
}
.top_1_2:hover{
  transform: scale(1.1);
  transition-duration: 80ms;
}
/* .el-container>>>.el-tabs__header{ */
.el-container:deep(.el-tabs__header) {
  position: -webkit-sticky;
  position: sticky;
  background: #fff;
  top: 50px;
  z-index: 1000;
  opacity: 0.8;
}
/* .el-container>>>.el-tabs__nav-wrap{ */
.el-container:deep(.el-tabs__nav-wrap) {
  padding: 0 20px;
  letter-spacing: 2px;
}
/* .el-container>>>.el-tabs__nav-scroll{ */
.el-container:deep(.el-tabs__nav-scroll) {
  overflow-x: auto;
}
.el-descriptions{
  padding:0 10px;
}
/* .el-container>>>.el-tabs__nav-scroll::-webkit-scrollbar{ */
.el-container:deep(.el-tabs__nav-scroll::-webkit-scrollbar) {
  display: none;
}
/* .el-container>>>.el-tabs__nav-wrap::after{ */
.el-container:deep(.el-tabs__nav-wrap::after) {
  background-color: unset !important;
}
/* .el-container>>>.el-tabs__item.is-active { */
.el-container:deep(.el-tabs__item.is-active) {
  color: #000;
}
/* .el-container>>>.el-tabs__active-bar{ */
.el-container:deep(.el-tabs__active-bar) {
  background-color: #000;
}
/* .el-container>>>.el-tabs__item:hover{ */
.el-container:deep(.el-tabs__item:hover) {
  color:#000;
}
/* .el-container>>>.el-descriptions__header{ */
.el-container:deep(.el-descriptions__header) {
  margin-bottom: 0;
  padding: 10px 0px;
}
.top_tip_2{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.top_tip_2_2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.svg_happy{
  width: 50px;
  height: 50px;
}
.top_tip{
  width: 90%;
  padding: 15px;
  color: #11269a;
  background-image: linear-gradient(109.6deg, rgb(156, 252, 248) 11.2%, rgb(110, 123, 251) 91.1%);
  /*border-radius: 62% 47% 82% 35%/45% 45% 80% 66%;*/
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
.top_2_1{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.light_emphasize{
  font-weight: 600;
  text-align: center;
}
.emphasize{
  font-weight: 900;
  font-size: 24px;
  text-align: center;
}
.top{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /*background-color: #151515;*/
  /*color: #fff;*/
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 2.8px 2.2px rgba(0,0,0,.034), 0 6.7px 5.3px rgba(0,0,0,.048), 0 12.5px 10px rgba(0,0,0,.06), 0 22.3px 17.9px rgba(0,0,0,.072), 0 41.8px 33.4px rgba(0,0,0,.086), 0 100px 80px rgba(0,0,0,.12);
  letter-spacing: 2px;
  padding: 20px;
  width: 90%;
  box-sizing: unset;
}
.top_2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.svg_hello{
  height: 2em !important;
  width: 2em !important;
}

.padding-10{
  padding: 0 10px 20px 10px;
  letter-spacing: 2px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
