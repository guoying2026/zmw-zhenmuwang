<template>
  <div class="app-container">
    <div class="projects-section">
      <div class="projects-section-header">
        <p>投诉区</p>
        <!--      <p class="time">December, 12</p>-->
      </div>
      <div class="projects-section-line">
        <div class="projects-status">
          <div class="item-status">
            <span class="status-number">6</span>
            <span class="status-type">投诉总数</span>
          </div>
          <div class="item-status">
            <span class="status-number">1</span>
            <span class="status-type">已证实总数</span>
          </div>
          <div class="item-status">
            <span class="status-number">1</span>
            <span class="status-type">待证实总数</span>
          </div>
        </div>
        <div class="view-actions">
<!--          <AddComment-->
<!--              placeholder-text="我要投诉"-->
<!--              cancel-text="取消投诉"-->
<!--              confirm-text="发布投诉"-->
<!--              @toFatherQuestionList="receiveChildAddComment"-->
<!--              :company-info-id="companyInfoId"-->
<!--              addType="question"-->
<!--              questionType="question"-->
<!--          >-->
<!--            <template #clickDrawer>-->
              <text class="general_item_2 blue_btn margin-10-left">我要投诉</text>
<!--            </template>-->
<!--          </AddComment>-->
        </div>
      </div>
    </div>
    <div class="messages-section">
      <div class="messages margin-20-top">
        <div class="message-box">
          <img class="photo_img" :src="image_arr[0]" alt="profile image">
          <div class="message-content">
            <div class="message-header">
              <div class="name">🥳guoguo</div>
              <div class="star-checkbox">
                <input type="checkbox">
              </div>
            </div>
            <text class="message-line margin-20-top">投诉描述：</text>
            <p class="message-line margin-20-left">我于2023年5月1日在贵公司购买了一批黑胡桃木，用于制作定制的衣柜和书架。但在收到货物后，我发现所购买的黑胡桃木存在严重的质量问题，这让我非常失望。
            </p>
            <p class="message-line margin-20-left">
              1、部分木材存在虫蛀现象，尤其是在木材的边缘和中部。这导致木材的强度大大降低，无法承受预期的重量。<br/>
              2、有些木板明显有腐朽现象，质地疏松，甚至可以用手轻轻掰断。这种木材根本无法用于制作家具。<br/>
              3、部分木材表面有深度的划痕和凹陷，严重影响了木材的美观和家具的整体效果。<br/>
              4、部分木板尺寸不准确，与我订购时的要求相差甚远，导致无法直接使用，需重新加工。<br/>
            </p>
            <text class="message-line margin-20-top">证据：</text>
            <p class="message-line margin-20-left">
              1、订单编号：#23567 <br/>
              2、购买日期：2023-05-01<br/>
              3、收货日期：2023-05-10<br/>
            </p>
            <text class="message-line margin-20-top">附件（照片或视频）：</text>

            <!--            <el-row :gutter="8" class="margin-10-top">-->
<!--              <el-col-->
<!--                  v-for="(itemAskImage, indexAskImage) in itemAsk.image"-->
<!--                  :key="indexAskImage"-->
<!--                  :span="8"-->
<!--                  :md="8"-->
<!--              >-->
<!--                <el-image-->
<!--                    :hide-on-click-modal=true-->
<!--                    :src="itemAskImage"-->
<!--                    class="image_list"-->
<!--                    :zoom-rate="1.2"-->
<!--                    :preview-src-list="itemAsk.image"-->
<!--                    :initial-index="indexAskImage"-->
<!--                    fit="fill"-->
<!--                    lazy />-->
<!--              </el-col>-->
<!--            </el-row>-->
            <p class="message-line time"> 2023-05-01 12:00:00 </p>
          </div>
        </div>
      </div>
    </div>
<!--    <template v-for="(item, index) in list.arr" :key="index">-->
<!--      <div class="messages-section" v-if="index*1 === 0">-->
<!--        <div class="messages margin-20-top">-->
<!--          <div class="message-box" v-for="(itemAsk,indexAsk) in item.answer_list" :key="indexAsk" v-if="item.answer_list">-->
<!--            <img class="photo_img" :src="image_arr[itemAsk.click_index]" alt="profile image">-->
<!--            <div class="message-content">-->
<!--              <div class="message-header">-->
<!--                <div class="name">🥳{{name_arr[itemAsk.click_index]}}</div>-->
<!--                <div class="star-checkbox">-->
<!--                  <input type="checkbox" :id="`star-${indexAsk.id}-${indexAsk}`">-->
<!--                  <label :for="`star-${indexAsk.id}-${indexAsk}`">-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">-->
<!--                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">-->
<!--                      </polygon>-->
<!--                    </svg>-->
<!--                  </label>-->
<!--                </div>-->
<!--              </div>-->
<!--              <p class="message-line"> {{itemAsk.answer}}</p>-->
<!--              <el-row :gutter="8" class="margin-10-top">-->
<!--                <el-col-->
<!--                    v-for="(itemAskImage, indexAskImage) in itemAsk.image"-->
<!--                    :key="indexAskImage"-->
<!--                    :span="8"-->
<!--                    :md="8"-->
<!--                >-->
<!--                  <el-image-->
<!--                      :hide-on-click-modal=true-->
<!--                      :src="itemAskImage"-->
<!--                      class="image_list"-->
<!--                      :zoom-rate="1.2"-->
<!--                      :preview-src-list="itemAsk.image"-->
<!--                      :initial-index="indexAskImage"-->
<!--                      fit="fill"-->
<!--                      lazy />-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--              <p class="message-line time"> {{itemAsk.created_time}} </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->
  </div>
</template>
<script>
export default{
  name: 'Complaint'
}
</script>
<script setup>
import {usefulAnswerApi, uselessAnswerApi, cancelAnswerApi, questionListApi} from "../api/question.js";
import "../assets/comment.scss"
import "../assets/fonts.css"

//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
import AddComment from "../components/AddComment.vue";
import {onMounted, reactive, ref} from "vue";
const userStore = useUserStore();
import { image_arr, name_arr} from "../utils/user.js";
import { ElNotification } from 'element-plus'


const props = defineProps({
  companyInfoId:{
    type: [Number,String],
    default: 0
  },
})
const list = reactive({
  arr: []
})
// //问题
// const all_answer_useful_count = ref(0)
// const answer_count = ref(0)
// const answer_question_count = ref(0)
//
// onMounted(() => {
//   questionListApi({company_info_id: props.companyInfoId,user_id: userStore.userId}).then(async(res) => {
//     if(res.status === 200){
//       console.log('question');
//       console.log(res);
//       list.arr = res.data.data;
//       all_answer_useful_count.value = res.data.all_answer_useful_count;
//       answer_count.value = res.data.answer_count;
//       answer_question_count.value = res.data.answer_question_count;
//     } else{
//       ElNotification({
//         title: 'Error',
//         message: '可能网络服务差，刷新后再试一下',
//         type: 'error',
//       })
//     }
//   })
// })
// //投诉之后，将问题放到问答列表
// const receiveChildAddComment = (param) => {
//   console.log(param);
//   let question = param.question;
//   if(param.questionType === 'question'){
//     answer_question_count.value = answer_question_count.value * 1 + 1;
//     list.arr.unshift({
//       id: question.id,
//       user_id: userStore.userId,
//       name: userStore.phone,
//       question: question.question,
//       created_time: question.created_time,
//       click_index: question.click_index,
//       answer_count: 0,
//       image: question.image,
//       answer_list:[]
//     })
//   } else {
//     answer_count.value = answer_count.value * 1 + 1;
//     list.arr[param.questionIndex].answer_list.unshift({
//       id: question.id,
//       user_id: userStore.userId,
//       name: userStore.phone,
//       created_time: question.created_time,
//       answer: question.question,
//       useful_count: 0,
//       useless_count: 0,
//       click_index: question.click_index,
//       is_useful: 0,
//       useful_id: 0,
//       image: question.image
//     })
//   }
// }
</script>
<style scoped>
@media screen and (max-width: 520px){
  .image_list_1{
    width: 100%;
    height: 100px;
  }
  .image_list{
    width:100%;
    height: 80px;
  }
}
@media screen and (min-width: 520px){
  .image_list{
    width: 100%;
    height: 170px;
  }
  .image_list_1{
    width: 100%;
    height: 190px;
  }
}
.grey_color{
  color: #4A4A4A;
  opacity: 0.7;
}
/*回答开始*/
.answer_item_left_2_3_right{
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
}
.general_item{
  padding: 0px 0px 0px 20px;
}
.general_item_1{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
}
.messages-section{
  padding: 20px 20px 20px 20px !important;
}
.messages-section .projects-section-header{
  background-color: var(--messages-section-bg) !important;
}
/*回答结束*/
</style>
