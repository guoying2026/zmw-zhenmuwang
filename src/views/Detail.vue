<template>
  <div class="padding-10">
    <div class="top">
      <div class="top_1">
      </div>
      <div class="top_2">
        <div class="svg_hello">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#EF9645" d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625c-.793-1.129-.519-2.686.611-3.478z"/><path fill="#FFDC5D" d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"/><g fill="#5DADEC"><path d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"/><path d="M7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zM24 2c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"/><path d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"/></g></svg>
        </div>
        <text class="top_2_2 margin-10-top">费县众泽木业板材厂</text>
      </div>
      <div class="top_3">
        社会统一信用代码：91120222058746278C
        法定代表人：刘海东
        成立时间：2013-05-15
        注册资本：500万元人民币
        注册地址：天津市武清区豆张庄乡世纪中路东侧拓展中心A座104-25(集中办公区)
        经营范围：电子设备技术开发塑料制品、木制品、计算机外围设备制...
      </div>
    </div>
  <el-container direction="vertical" :gutter="24" class="margin-20-top">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="公司首页" name="first">
<!--        公司首页的精选商品开始-->
        <el-descriptions title="精选商品">
          <template #extra>
            <el-button type="" text>
              查看全部<el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </template>
        </el-descriptions>
        <el-row :gutter="20">
          <el-col
              v-for="(o, index) in 8"
              :key="o"
              :span="24"
              :md="12"
          >
            <el-card>
              <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
              />
              <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                  <el-button text class="button">Operating</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
<!--        公司首页的精选商品结束-->
<!--        公司首页的问大家开始-->
        <el-descriptions title="问大家">
          <template #extra>
            <el-button type="" text>
              查看全部<el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </template>
        </el-descriptions>
<!--        问答列表开始-->
        <QuestionList
            :company-info-id="company_info_id">
        </QuestionList>
<!--        问答列表结束-->
<!--        公司首页的问大家结束-->
<!--        公司首页的大众评论开始-->
        <el-descriptions title="大众评论" class="margin-20-top">
          <template #extra>
            <el-button type="" text>
              查看全部<el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </template>
        </el-descriptions>
<!--        评论列表开始-->
        <CommentList
            :company-info-id="company_info_id">
        </CommentList>
<!--        评论列表结束-->
<!--        公司首页的大众评论结束-->
      </el-tab-pane>
      <el-tab-pane label="商品" name="second">
      </el-tab-pane>
      <el-tab-pane label="问大家" name="third">问大家</el-tab-pane>
      <el-tab-pane label="大众评论" name="fourth">大众评论</el-tab-pane>
    </el-tabs>
  </el-container>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import QuestionList from "../components/QuestionList.vue";
import CommentList from '../components/CommentList.vue'
//
const company_info_id = ref(0);
company_info_id.value = 255;

//商品里面显示时间开始
const currentDate = ref(new Date())
//商品里面显示时间结束

//导航栏切换开始
const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
//导航栏切换结束

const text = ref('')
</script>
<style scoped>
.top_2_2{
  color: #000;
  font-weight: 700;
}
@keyframes miniShape{
  0%,100%{
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  34%{
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform:  translate3d(0,5px,0) rotateZ(0.01deg);
  }
  50%{
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  67%{
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60% ;
    transform: translate3d(0,-3px,0) rotateZ(0.01deg);
  }
}
.top{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.top_1::before{
  position: relative;
  content: "100";
  text-align: center;
  font-size: 100px;
  font-family: fantasy;
  height: 130px;
  width: 200px;
  font-style: italic;
  background-position: center;
  background-size: cover;
  color: #11269a;
  background-image: linear-gradient(109.6deg, rgb(156, 252, 248) 11.2%, rgb(110, 123, 251) 91.1%);
  border-radius: 62% 47% 82% 35%/45% 45% 80% 66%;
  will-change: border-radius,transform,opacity;
  display: block;
  -webkit-animation: 5s linear infinite miniShape;
  animation: 5s linear infinite miniShape;
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
.el-col{
  margin-bottom: 20px;
}
.padding-10{
  padding: 0 10px 20px 10px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
