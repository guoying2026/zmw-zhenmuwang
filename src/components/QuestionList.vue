<template>
  <div class="app-container">
    <div class="projects-section">
      <div class="projects-section-header">
        <p>问答区</p>
        <!--      <p class="time">December, 12</p>-->
      </div>
      <div class="projects-section-line">
        <div class="projects-status">
          <div class="item-status">
            <span class="status-number">{{answer_question_count}}</span>
            <span class="status-type">问题总数</span>
          </div>
          <div class="item-status">
            <span class="status-number">{{answer_count}}</span>
            <span class="status-type">回复总数</span>
          </div>
          <div class="item-status">
            <span class="status-number">{{all_answer_useful_count}}</span>
            <span class="status-type">有用总数</span>
          </div>
        </div>
        <div class="view-actions">
          <AddComment
              placeholder-text="我要提问"
              cancel-text="取消提问"
              confirm-text="发布提问"
              @toFatherQuestionList="receiveChildAddComment"
              :company-info-id="companyInfoId"
              addType="question"
              questionType="question"
              v-if="userStore.userId > 0"
          >
            <template #clickDrawer>
              <text class="general_item_2 blue_btn margin-10-left">我要提问</text>
            </template>
          </AddComment>
          <router-link to="/login" v-else>
            <text class="general_item_2 blue_btn margin-10-left">我要提问</text>
          </router-link>
        </div>
      </div>
      <div class="project-boxes jsGridView">
        <div class="project-box-wrapper">
          <div class="project-box" style="background-color: #e9e7fd;">
            <div class="project-box-header">
              <span>2023</span>
              <div class="more-wrapper">
                <button class="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
              </div>
            </div>
            <div class="project-box-content-header">
              <p class="box-content-header">能不能做某种规格？</p>
              <p class="box-content-subheader">调整购买策略</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header"></p>
              <div class="box-progress-bar">
                <span class="box-progress" style="width: 100%; background-color: #4f3ff0"></span>
              </div>
              <p class="box-progress-percentage"></p>
            </div>
            <div class="project-box-footer">
              <div class="participants">
                <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80" alt="participant">
                <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80" alt="participant">
              </div>
              <AddComment
                  placeholder-text="我要提问"
                  cancel-text="取消提问"
                  confirm-text="发布提问"
                  @toFatherQuestionList="receiveChildAddComment"
                  :company-info-id="companyInfoId"
                  addType="question"
                  questionType="question"
                  v-if="userStore.userId > 0"
              >
                <template #clickDrawer>
              <div class="days-left" style="color: #4f3ff0;">
                去提问
              </div>
                </template>
              </AddComment>
              <router-link to="/login" v-else>
                <div class="days-left" style="color: #4f3ff0;">
                  去提问
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project-box-wrapper">
          <div class="project-box">
            <div class="project-box-header">
              <span>2023</span>
              <div class="more-wrapper">
                <button class="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
              </div>
            </div>
            <div class="project-box-content-header">
              <p class="box-content-header">看看实物视频？</p>
              <p class="box-content-subheader">调整购买策略</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header"></p>
              <div class="box-progress-bar">
                <span class="box-progress" style="width: 100%; background-color: #096c86"></span>
              </div>
              <p class="box-progress-percentage"></p>
            </div>
            <div class="project-box-footer">
              <div class="participants">
                <img src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant">
                <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80" alt="participant">
              </div>
              <AddComment
                  placeholder-text="我要提问"
                  cancel-text="取消提问"
                  confirm-text="发布提问"
                  @toFatherQuestionList="receiveChildAddComment"
                  :company-info-id="companyInfoId"
                  addType="question"
                  questionType="question"
                  v-if="userStore.userId > 0"
              >
                <template #clickDrawer>
              <div class="days-left" style="color: #096c86;">
                去提问
              </div>
                </template>
              </AddComment>
              <router-link to="/login" v-else>
                <div class="days-left" style="color: #096c86;">
                  去提问
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project-box-wrapper">
          <div class="project-box" style="background-color: #c8f7dc;">
            <div class="project-box-header">
              <span>2023</span>
              <div class="more-wrapper">
                <button class="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
              </div>
            </div>
            <div class="project-box-content-header">
              <p class="box-content-header">多少天给我发？</p>
              <p class="box-content-subheader">调整购买策略</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header"></p>
              <div class="box-progress-bar">
                <span class="box-progress" style="width: 100%; background-color: #34c471"></span>
              </div>
              <p class="box-progress-percentage"></p>
            </div>
            <div class="project-box-footer">
              <div class="participants">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant">
              </div>
              <AddComment
                  placeholder-text="我要提问"
                  cancel-text="取消提问"
                  confirm-text="发布提问"
                  @toFatherQuestionList="receiveChildAddComment"
                  :company-info-id="companyInfoId"
                  addType="question"
                  questionType="question"
                  v-if="userStore.userId > 0"
              >
                <template #clickDrawer>
                  <div class="days-left" style="color: #34c471;">
                    去提问
                  </div>
                </template>
              </AddComment>
              <router-link to="/login" v-else>
                <div class="days-left" style="color: #34c471;">
                  去提问
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="messages-section" v-for="(item, index) in list.arr" :key="index">
      <div class="projects-section-header general_item">
        <p>{{item.question}}</p>
        <div>
          <AddComment
              placeholder-text="我要提问"
              cancel-text="取消提问"
              confirm-text="发布提问"
              @toFatherQuestionList="receiveChildAddComment"
              :company-info-id="companyInfoId"
              addType="question"
              questionType="question"
          >
            <template #clickDrawer>
              <text class="general_item_2 blue_btn margin-10-left">我要提问</text>
            </template>
          </AddComment>
          <AddComment
              placeholder-text="我要回答"
              cancel-text="取消回答"
              confirm-text="发布回答"
              @toFatherQuestionList="receiveChildAddComment"
              :company-info-id="companyInfoId"
              :question-id="item.id"
              :question-index="index"
              addType="question"
              questionType="answer"
          >
            <template #clickDrawer>
              <text class="general_item_2 margin-10-left green_btn">我要回答</text>
            </template>
          </AddComment>
        </div>
      </div>
      <div class="general_item">
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
      </div>
      <div class="messages">
        <div class="message-box" v-for="(itemAsk,indexAsk) in item.answer_list" :key="indexAsk" v-if="item.answer_list">
          <img class="photo_img" :src="image_arr[itemAsk.click_index]" alt="profile image">
          <div class="message-content">
              <div class="message-header">
                <div class="name">🥳{{name_arr[itemAsk.click_index]}}</div>
                <div class="star-checkbox">
                  <input type="checkbox" id="star-1">
                  <label for="star-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                      </polygon>
                    </svg>
                  </label>
                </div>
              </div>
              <p class="message-line"> {{itemAsk.answer}}</p>
            <el-row :gutter="8" class="margin-10-top">
              <el-col
                  v-for="(itemAskImage, indexAskImage) in itemAsk.image"
                  :key="indexAskImage"
                  :span="8"
                  :md="8"
              >
                <el-image
                    :hide-on-click-modal=true
                    :src="itemAskImage"
                    class="image_list"
                    :zoom-rate="1.2"
                    :preview-src-list="itemAsk.image"
                    :initial-index="indexAskImage"
                    fit="fill"
                    lazy />
              </el-col>
            </el-row>
              <p class="message-line time"> {{itemAsk.created_time}} </p>
              <div class="answer_item_left_2_3_right margin-10-top">
              <div class="answer_item_left_2_3_right" @click="liked_question(index,indexAsk,itemAsk.id,itemAsk.is_useful,itemAsk.useful_count,itemAsk.useless_count)">
                <ClickLike text="有用" v-if="itemAsk.is_useful == 1" :like-bool=true></ClickLike>
                <ClickLike text="有用" v-else :like-bool=false></ClickLike>
                <text class="margin-5-left font-12-size grey_color">{{itemAsk.useful_count}}</text>
              </div>
              <div class="answer_item_left_2_3_right margin-20-left" @click="disliked_question(index,indexAsk,itemAsk.id,itemAsk.is_useful,itemAsk.useful_count,itemAsk.useless_count)">
                <ClickDislike text="没用" v-if="itemAsk.is_useful == 2" :dislike-bool=true></ClickDislike>
                <ClickDislike text="没用" v-else :dislike-bool=false></ClickDislike>
                <text class="margin-5-left font-12-size grey_color">{{itemAsk.useless_count}}</text>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'QuestionList'
}
</script>
<script setup>
import {usefulAnswerApi, uselessAnswerApi, cancelAnswerApi, questionListApi} from "../api/question.js";
import "../assets/comment.scss"
import "../assets/fonts.css"

//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
import ClickLike from "./ClickLike.vue";
import ClickDislike from "./ClickDislike.vue";
import {onMounted, reactive, ref} from "vue";
const userStore = useUserStore();
import { image_arr, name_arr} from "../utils/user.js";

const props = defineProps({
  companyInfoId:{
    type: [Number,String],
    default: 0
  },
})
const list = reactive({
  arr: []
});
//问题
const all_answer_useful_count = ref(0)
const answer_count = ref(0)
const answer_question_count = ref(0)

onMounted(() => {
  questionListApi({company_info_id: props.companyInfoId,user_id: userStore.userId}).then(async(res) => {
    console.log('question');
    console.log(res);
    list.arr = res.data.data;
    all_answer_useful_count.value = res.data.all_answer_useful_count;
    answer_count.value = res.data.answer_count;
    answer_question_count.value = res.data.answer_question_count;
  })
})
//有用开始
const liked_question = (index,indexAsk,id,is_useful,useful_count,useless_count) => {
  //如果is_useful是1。就是有用，再点赞就是取消有用
  if(is_useful === 1){
    cancelAnswerApi({company_info_id:props.companyInfoId,answer_id: id,user_id: userStore.userId}).then(async(res) => {
      if(res.status === 200 && res.data.useful_id > 0){
         list.arr[index].answer_list[indexAsk].is_useful = 0;
        all_answer_useful_count.value = all_answer_useful_count.value * 1 - 1;
        if(useful_count * 1 > 1){
           list.arr[index].answer_list[indexAsk].useful_count = useful_count * 1 - 1;
        } else {
           list.arr[index].answer_list[indexAsk].useful_count = 0;
        }
      }
    })
  } else {
    usefulAnswerApi({company_info_id:props.companyInfoId,answer_id: id,user_id: userStore.userId}).then(async(res) => {
      if(res.status === 200 && res.data.useful_id > 0){
        if(is_useful === 2){//如果从无用变成有用，需要减少无用数量
          if(useless_count * 1 > 1){
             list.arr[index].answer_list[indexAsk].useless_count = useless_count * 1 - 1;
          } else {
             list.arr[index].answer_list[indexAsk].useless_count = 0;
          }
        }
         list.arr[index].answer_list[indexAsk].is_useful = 1;
         list.arr[index].answer_list[indexAsk].useful_count = useful_count * 1 + 1;
         all_answer_useful_count.value = all_answer_useful_count.value * 1 + 1;
      }
    })
  }
}
//有用结束
//没用开始
const disliked_question = (index,indexAsk,id,is_useful,useful_count,useless_count) => {
  //如果is_useful是2。就是没用，再点赞就是取消没用
  if(is_useful === 2){
    cancelAnswerApi({company_info_id:props.companyInfoId,answer_id: id,user_id: userStore.userId}).then(async(res) => {
      if(res.status === 200 && res.data.useful_id > 0){
         list.arr[index].answer_list[indexAsk].is_useful = 0;
        if(useless_count * 1 > 1){
           list.arr[index].answer_list[indexAsk].useless_count = useless_count * 1 - 1;
        } else {
           list.arr[index].answer_list[indexAsk].useless_count = 0;
        }
      }
    })
  } else {
    uselessAnswerApi({company_info_id:props.companyInfoId,answer_id:id,user_id: userStore.userId}).then(async(res) => {
      if(res.status === 200 && res.data.useful_id > 0){
        if(is_useful === 1){//如果从有用变成无用，需要减少有用数量
          all_answer_useful_count.value = all_answer_useful_count.value * 1 - 1;
          if(useful_count * 1 > 1){
            list.arr[index].answer_list[indexAsk].useful_count = useful_count * 1 - 1;
          } else {
             list.arr[index].answer_list[indexAsk].useful_count = 0;
          }
        }
         list.arr[index].answer_list[indexAsk].is_useful = 2;
         list.arr[index].answer_list[indexAsk].useless_count = useless_count * 1 + 1;
      }
    })
  }
}
//没用结束
//提问之后，将问题放到问答列表
const receiveChildAddComment = (param) => {
  console.log(param);
  let question = param.question;
  if(param.questionType === 'question'){
     list.arr.unshift({
      id: question.id,
      user_id: userStore.userId,
      name: userStore.phone,
      question: question.question,
      created_time: question.created_time,
      answer_count: 0,
      image: question.image,
      answer_list:[]
    })
  } else {
     list.arr[param.questionIndex].answer_list.unshift({
      id: question.id,
      user_id: userStore.userId,
      name: userStore.phone,
      created_time: question.created_time,
      answer: question.question,
      useful_count: 0,
      useless_count: 0,
      is_useful: 0,
      useful_id: 0,
      image: question.image
    })
  }
}
</script>
<style scoped>
@media screen and (max-width: 520px){
  .image_list{
    width:100%;
    height: 50px;
  }
}
@media screen and (max-width: 1200px){
  .image_list{
    width: 100%;
    height: auto;
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
.general_item .general_item_1{
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
}
.general_item_2{
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
}
/*回答结束*/
</style>
