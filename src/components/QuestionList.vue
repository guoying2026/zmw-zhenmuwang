<template>
  <div class="ask" :class="[index == 0?'':'margin-10-top']" v-for="(item, index) in list.arr" :key="index">
    <div class="general_item">
      <text class="ask_item_1">问：</text>
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
          <text class="ask_item_2 margin-10-left">我要提问</text>
        </template>
      </AddComment>
    </div>
    <div class="ask_item margin-10-top">
      <div class="ask_item_top">
        <text class="ask_item_1">{{item.question}}</text>
        <text class="ask_item_2 margin-10-left">{{item.ask_count}}个回答</text>
      </div>
      <el-row :gutter="8" class="margin-10-top">
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
    <div class="answer_item margin-10-top">
      <text class="ask_item_1">答：</text>
      <AddComment
          placeholder-text="我要回答"
          cancel-text="取消回答"
          confirm-text="发布回答"
          @toFatherQuestionList="receiveChildAddComment"
          :company-info-id="companyInfoId"
          :question-id="item.id"
          :question-index="index"
          addType="question"
          questionType="ask"
      >
        <template #clickDrawer>
          <text class="ask_item_2 margin-10-left">我要回答</text>
        </template>
      </AddComment>
    </div>
    <div class="answer_item margin-10-top"
         v-for="(itemAsk,indexAsk) in item.ask_list" :key="indexAsk">
      <div class="answer_item_left">
        <el-avatar
            :size="48"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <div class="answer_item_left_2">
            <text>{{itemAsk.name}}</text>
            <text class="margin-10-top">{{itemAsk.ask}}</text>
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
                  style="width:100%;height: 20vw;"
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
                <div>
                  <text>有用</text>
                  <text>{{itemAsk.useful_count}}</text>
                </div>
                <div class="margin-10-left">
                  <text>没用</text>
                  <text>{{itemAsk.useless_count}}</text>
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
import { reactive,onMounted } from "vue";
import { questionListApi } from "../api/question.js";

//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
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
  questionListApi({},props.companyInfoId).then(async(res) => {
    console.log(res);
    console.log(res.data.data);
    list.arr = res.data.data;
  })
})
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
      ask_count: 0,
      image: question.image,
      ask_list:[]
    })
  } else {
    list.arr[param.questionIndex].ask_list.unshift({
      id: question.id,
      user_id: userStore.userId,
      name: userStore.phone,
      created_time: question.created_time,
      ask: question.question,
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
.answer_item .answer_item_left .answer_item_left_2 .answer_item_left_2_3 .answer_item_left_2_3_right{
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
}
.ask{
  display: flex;
  flex-direction: column;
}
.ask .ask_item{
  display: flex;
  flex-direction: column;
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
