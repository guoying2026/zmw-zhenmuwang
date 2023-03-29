<template>
  <div class="ask" :class="[index % 2 == 0?'grey_bg':'']" v-for="(item, index) in list.arr" :key="index" v-if="list.arr.length > 0">
    <div class="general_item font-12-size">
      <text class="general_item_1">问</text>
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
    <div class="ask_item margin-10-top">
      <div class="ask_item_top">
        <text class="ask_item_1">{{item.question}}</text>
        <text class="ask_item_2 margin-10-left">{{item.answer_count}}个回答</text>
      </div>
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
              style="width:100%;height: 20vw;"
              fit="fill"
              :zoom-rate="1.2"
              :preview-src-list="item.image"
              :initial-index="indexImage"
              lazy />
        </el-col>
      </el-row>
    </div>
    <div class="answer_item general_item margin-10-top font-12-size">
      <text class="general_item_1">答</text>
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
    <div class="answer_item margin-10-top"
         v-for="(itemAsk,indexAsk) in item.answer_list" :key="indexAsk" v-if="item.answer_list">
      <div class="answer_item_left">
        <el-avatar
            :size="48"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <div class="answer_item_left_2">
            <text>{{itemAsk.name}}</text>
            <text class="margin-10-top">{{itemAsk.answer}}</text>
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
                  style="width:100%;height: 18vw;"
                  :zoom-rate="1.2"
                  :preview-src-list="itemAsk.image"
                  :initial-index="indexAskImage"
                  fit="fill"
                  lazy />
              </el-col>
            </el-row>

          <div class="answer_item_left_2_3 margin-10-top">

            <text>{{itemAsk.created_time}}</text>
              <div class="answer_item_left_2_3_right margin-10-top">
                <div class="answer_item_left_2_3_right" @click="liked_question(index,indexAsk,itemAsk.id,itemAsk.is_useful,itemAsk.useful_count,itemAsk.useless_count)">
                  <ClickLike text="有用" v-if="itemAsk.is_useful == 1" :like-bool=true></ClickLike>
                  <ClickLike text="有用" v-else :like-bool=false></ClickLike>
                  <text class="margin-5-left">{{itemAsk.useful_count}}</text>
                </div>
                <div class="answer_item_left_2_3_right margin-20-left" @click="disliked_question(index,indexAsk,itemAsk.id,itemAsk.is_useful,itemAsk.useful_count,itemAsk.useless_count)">
                  <ClickDislike text="没用" v-if="itemAsk.is_useful == 2" :dislike-bool=true></ClickDislike>
                  <ClickDislike text="没用" v-else :dislike-bool=false></ClickDislike>
                  <text class="margin-5-left">{{itemAsk.useless_count}}</text>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <AddComment
      placeholder-text="我要提问"
      cancel-text="取消提问"
      confirm-text="发布提问"
      @toFatherQuestionList="receiveChildAddComment"
      :company-info-id="companyInfoId"
      addType="question"
      questionType="question"
      v-else
  >
    <template #clickDrawer>
      <text class="general_item_2 blue_btn margin-10-left">我要提问</text>
    </template>
  </AddComment>
</template>
<script>
export default{
  name: 'QuestionList'
}
</script>
<script setup>
import { reactive,onMounted } from "vue";
import { questionListApi,likeQuestionApi,dislikeQuestionApi,cancelQuestionApi } from "../api/question.js";

//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
import ClickLike from "./ClickLike.vue";
import ClickDislike from "./ClickDislike.vue";
const userStore = useUserStore();

const props = defineProps({
  companyInfoId:{
    type: Number,
    default: 0
  },
})
const list = reactive({
  arr: []
});
onMounted(() => {
  questionListApi({company_info_id: props.companyInfoId}).then(async(res) => {
    console.log(res);
    console.log(res.data.data);
    list.arr = res.data.data;
  })
})
//有用开始
const liked_question = (index,indexAsk,id,is_useful,useful_count,useless_count) => {
  //如果is_useful是1。就是有用，再点赞就是取消有用
  if(is_useful === 1){
    list.arr[index].answer_list[indexAsk].is_useful = 0;
    if(useful_count * 1 > 1){
      list.arr[index].answer_list[indexAsk].useful_count = useful_count * 1 - 1;
    } else {
      list.arr[index].answer_list[indexAsk].useful_count = 0;
    }
    // cancelQuestionApi({id: id,user_id: userStore.userId}).then(async(res) => {
    //   if(res.data.status === false){
    //     list.arr[index].answer_list[indexAsk].is_useful = 1;
    //   }
    // })
  } else {
    if(is_useful === 2){//如果从无用变成有用，需要减少无用数量
      if(useless_count * 1 > 1){
        list.arr[index].answer_list[indexAsk].useless_count = useless_count * 1 - 1;
      } else {
        list.arr[index].answer_list[indexAsk].useless_count = 0;
      }
    }
    list.arr[index].answer_list[indexAsk].is_useful = 1;
    list.arr[index].answer_list[indexAsk].useful_count = useful_count * 1 + 1;
    // likeQuestionApi({id: id,user_id: userStore.userId}).then(async(res) => {
    //   if(res.data.status === false){
    //     list.arr[index].answer_list[indexAsk].is_useful = is_useful;
    //   }
    // })
  }
}
//有用结束
//没用开始
const disliked_question = (index,indexAsk,id,is_useful,useful_count,useless_count) => {
  //如果is_useful是2。就是没用，再点赞就是取消没用
  if(is_useful === 2){
    list.arr[index].answer_list[indexAsk].is_useful = 0;
    if(useless_count * 1 > 1){
      list.arr[index].answer_list[indexAsk].useless_count = useless_count * 1 - 1;
    } else {
      list.arr[index].answer_list[indexAsk].useless_count = 0;
    }
    // cancelQuestionApi({id: id,user_id: userStore.userId}).then(async(res) => {
    //   if(res.data.status === false){
    //     list.arr[index].answer_list[indexAsk].is_useful = 1;
    //   }
    // })
  } else {
    if(is_useful === 1){//如果从有用变成无用，需要减少有用数量
      if(useful_count * 1 > 1){
        list.arr[index].answer_list[indexAsk].useful_count = useful_count * 1 - 1;
      } else {
        list.arr[index].answer_list[indexAsk].useful_count = 0;
      }
    }
    list.arr[index].answer_list[indexAsk].is_useful = 2;
    list.arr[index].answer_list[indexAsk].useless_count = useless_count * 1 + 1;
    // dislikeQuestionApi({id:id,user_id: userStore.userId}).then(async(res) => {
    //   if(res.data.status === false){
    //     list.arr[index].answer_list[indexAsk].is_useful = is_useful;
    //   }
    // })
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
  console.log(list.arr);
}
</script>
<style scoped>
/*回答开始*/
.answer_item_left_2_3_right{
  display: flex;
  flex-direction: row;
}
.answer_item .answer_item_left .answer_item_left_2 .answer_item_left_2_3{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.answer_item .answer_item_left .answer_item_left_2{
  display: flex;
  flex-direction: column;
  flex:1;
}
.answer_item .answer_item_left{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}
.answer_item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 20px;
  max-width: 780px;
  width: 100%;
  padding-right: 20px;
}
.ask{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  letter-spacing: 2px;
}
.ask .ask_item{
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
}
.ask .ask_item .ask_item_top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.ask .general_item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  width: 100%;
}
.general_item .general_item_1{
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
}
.general_item .general_item_2{
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
}
.ask .ask_item_1{
  flex: 1;
}
.ask .ask_item_2{
  min-width: 100px;
  text-align: end;
}
/*回答结束*/
</style>
