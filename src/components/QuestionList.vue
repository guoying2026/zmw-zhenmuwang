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
          >
            <template #clickDrawer>
              <text class="general_item_2 blue_btn margin-10-left">我要提问</text>
            </template>
          </AddComment>
        </div>
      </div>
      <div class="project-boxes jsGridView">
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
              <p class="box-content-header">能做某种规格？</p>
              <p class="box-content-subheader">调整购买策略</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header"></p>
              <div class="box-progress-bar">
                <span class="box-progress comment_tip"></span>
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
              >
                <template #clickDrawer>
              <div class="days-left">
                去提问
              </div>
                </template>
              </AddComment>
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
                <span class="box-progress comment_tip"></span>
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
              >
                <template #clickDrawer>
              <div class="days-left">
                去提问
              </div>
                </template>
              </AddComment>
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
              <p class="box-content-header">多少天给我发？</p>
              <p class="box-content-subheader">调整购买策略</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header"></p>
              <div class="box-progress-bar">
                <span class="box-progress comment_tip"></span>
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
              >
                <template #clickDrawer>
                  <div class="days-left">
                    去提问
                  </div>
                </template>
              </AddComment>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="messages-section" v-for="(item, index) in list.arr" :key="index">
      <div class="projects-section-header general_item">
        <div class="general_item_left">
          <text class="font-60-weight">{{item.question}}</text>
        </div>
        <svg t="1684309451462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7738" width="200" height="200"><path d="M862.42287 0.000539A134.305614 134.305614 0 0 1 997.051852 134.683415v640.969768a135.060139 135.060139 0 0 1-135.114035 134.682877H236.058568L26.947099 1024V134.683415A135.060139 135.060139 0 0 1 162.061133 0.000539h700.361737zM242.525933 754.526458h48.289659V273.731763H242.525933V754.526458z m180.655063-476.483118A694.21774 694.21774 0 0 0 340.560408 161.684664l-43.277451 18.755359a704.511629 704.511629 0 0 1 83.10564 118.783937l42.792399-21.18062z m-32.336825 328.380459h238.861348v-240.3704H390.844171v240.3704z m190.571689-196.176739l0.538947 152.414235H439.511092V410.24706h141.850873z m52.277867 341.369083l71.679962-0.431157c50.229868 0 76.099328-24.090935 76.099329-71.679963V204.477063H475.404968v44.732608h257.778391v418.276832c0 28.402511-12.93473 41.822294-37.780191 40.852189h-73.189014l11.479573 43.277451z" fill="var(--selected-left-color)" p-id="7739"></path></svg>
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
                class="image_list_1"
                fit="fill"
                :zoom-rate="1.2"
                :preview-src-list="item.image"
                :initial-index="indexImage"
                lazy />
          </el-col>
        </el-row>
      </div>
      <div class="general_item_1">
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
              <text class="general_item_2 margin-10-right margin-20-top blue_btn">我要回答</text>
            </template>
          </AddComment>
      </div>
      <div class="messages margin-20-top">
        <div class="message-box" v-for="(itemAsk,indexAsk) in item.answer_list" :key="indexAsk" v-if="item.answer_list">
          <img class="photo_img" :src="image_arr[itemAsk.click_index]" alt="profile image">
          <div class="message-content">
              <div class="message-header">
                <div class="name">🥳{{name_arr[itemAsk.click_index]}}</div>
                <svg t="1684310657412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2499" width="200" height="200"><path d="M409.3 511h200.6c-26.6-14.3-39.6-22.5-103.1-68.3-37.5 32.1-56.6 45.1-97.5 68.3zM362.8 668.7H655v63.5H362.8z" fill="var(--selected-left-color)" p-id="2500"></path><path d="M873.3 150.1l0.6-0.3C781.3 57.6 653.3 0.3 511.9 0.3 370.2 0.3 242.7 57.6 150.2 149.9l-2.5 2.2C56.8 244.9 0 371.8 0 511.8c0 55.4 9 108.8 25.2 158.8 15.1 47.5 37.7 92 65.7 132.2v181.4c0 22.3 17.6 39.4 39.4 39.4H511.9c141.5 0 269.5-56.8 361.5-149.8h0.6c92.2-92.6 150.1-220.6 150.1-362.1-0.1-141-58-268.8-150.8-361.6z m-219 678.3V797H362.8v31.4H287c2.7-21.2 4.1-44.4 4.1-72.4v-86c0-30.7-0.7-45.7-3.4-65.5 17.1 2 33.5 2.7 63.5 2.7h314.7c31.4 0 47.1-0.7 64.2-2.7-2 16.4-2.7 32.8-2.7 65.5v86.7c0 31.4 0.7 51.9 3.4 71.7h-76.5zM810 552.6c-6.8 11.6-7.5 12.3-16.4 34.8-48.5-14.3-95.6-32.8-132.4-51.2-2.7-1.4-3.4-1.4-5.5-2.7v40.3c-19.8-2-42.3-2.7-62.8-2.7H423.6c-29.4 0-41.6 0.7-63.5 2.7v-37.5c-39.6 18.4-81.9 34.8-133.1 51.9-7.5-25.9-17.1-43.7-37.5-71C283 496 327.4 481 379.3 451.7c49.1-26.7 90.7-60.2 116.7-93l34.8 16.4c-21.2-15-28.7-19.1-50.5-30 9.6-10.9 13-15.7 17.1-21.2-8.9-1.4-30.7-2-54.6-2h-29.4c10.9 21.2 16.4 34.1 29.4 68.3l-67 21.8c-7.5-30-15.7-56-30.7-90.1h-27.3c-28 41.6-45.1 63.5-77.8 95.6-15-22.5-28.7-38.2-47.8-55.3C246.8 314.4 285 255 301.4 195.6l73.7 13c-3.4 7.5-6.1 13.7-7.5 17.1-8.2 19.1-9.6 23.2-14.3 32.1h82.6c31.4 0 46.4-0.7 64.2-4.1v67.6c27.3-36.2 51.2-86.7 59.4-124.9l72.4 12.3c-9.6 25.9-12.3 33.5-18.4 48.5h132.4c30.7 0 49.8-0.7 70.3-4.1v72.4c-21.2-2.7-42.3-3.4-70.3-3.4h-52.6c11.6 19.1 21.2 38.2 34.8 68.9l-67.6 23.9c-13-40.3-22.5-62.1-38.9-92.8h-38.9c-10.9 19.8-24.6 41-38.9 59.4l15 6.8c-3.4 4.1-6.1 7.5-8.2 10.2 112 70.3 167.9 93.5 284 119.5-9.6 9.4-9.6 9.4-24.6 34.6z" fill="var(--selected-left-color)" p-id="2501"></path></svg>
<!--                <div class="star-checkbox">-->
<!--                  <input type="checkbox" :id="`star-${indexAsk.id}-${indexAsk}`">-->
<!--                  <label :for="`star-${indexAsk.id}-${indexAsk}`">-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">-->
<!--                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">-->
<!--                      </polygon>-->
<!--                    </svg>-->
<!--                  </label>-->
<!--                </div>-->
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
});
//问题
const all_answer_useful_count = ref(0)
const answer_count = ref(0)
const answer_question_count = ref(0)

onMounted(() => {
  questionListApi({company_info_id: props.companyInfoId,user_id: userStore.userId}).then(async(res) => {
    if(res.status === 200){
      console.log('question');
      console.log(res);
      list.arr = res.data.data;
      all_answer_useful_count.value = res.data.all_answer_useful_count;
      answer_count.value = res.data.answer_count;
      answer_question_count.value = res.data.answer_question_count;
    } else{
      ElNotification({
        title: 'Error',
        message: '可能网络服务差，刷新后再试一下',
        type: 'error',
      })
    }
  })
})
//有用开始
const liked_question = (index,indexAsk,id,is_useful,useful_count,useless_count) => {
  if(userStore.userId > 0){
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
  } else {
    ElNotification({
      title: 'Info',
      message: '登录后才可以点赞！',
      type: 'info',
    })
  }
}
//有用结束
//没用开始
const disliked_question = (index,indexAsk,id,is_useful,useful_count,useless_count) => {
  if(userStore.userId > 0){
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
  } else {
    ElNotification({
      title: 'Info',
      message: '登录后才可以点赞！',
      type: 'info',
    })
  }
}
//没用结束
//提问之后，将问题放到问答列表
const receiveChildAddComment = (param) => {
  console.log(param);
  let question = param.question;
  if(param.questionType === 'question'){
    answer_question_count.value = answer_question_count.value * 1 + 1;
    list.arr.unshift({
      id: question.id,
      user_id: userStore.userId,
      name: userStore.phone,
      question: question.question,
      created_time: question.created_time,
      click_index: question.click_index,
      answer_count: 0,
      image: question.image,
      answer_list:[]
    })
  } else {
    answer_count.value = answer_count.value * 1 + 1;
    list.arr[param.questionIndex].answer_list.unshift({
      id: question.id,
      user_id: userStore.userId,
      name: userStore.phone,
      created_time: question.created_time,
      answer: question.question,
      useful_count: 0,
      useless_count: 0,
      click_index: question.click_index,
      is_useful: 0,
      useful_id: 0,
      image: question.image
    })
  }
}
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
  padding: 0 15px 0 20px;
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
.icon{
  width: 25px;
  height: 25px;
}
.general_item_left{
  display: flex;
  flex-direction: row;
  align-items: center;
}
/*回答结束*/
</style>
