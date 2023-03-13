<template>
  <div class="ask" v-for="(item, index) in list.arr" :key="index">
    <div class="general_item">
      <text class="ask_item_1">问：</text>
      <text class="ask_item_2">我要提问</text>
    </div>
    <div class="ask_item margin-10-top">
      <div class="ask_item_top">
        <text class="ask_item_1">{{item.question}}</text>
        <text class="ask_item_2">{{item.ask_count}}个回答</text>
      </div>
      <el-row :gutter="24" class="margin-15-top">
        <el-col
            v-for="(itemImage, indexImage) in item.image"
            :key="indexImage"
            :span="24"
            :md="8"
        >
          <el-image
              :src="itemImage"
              style="width:100%; height: 250px"
              :zoom-rate="1.2"
              :preview-src-list="item.image"
              :initial-index="indexImage"
              fit="cover"
              lazy />
        </el-col>
      </el-row>
    </div>
    <div class="answer_item margin-10-top">
        <text class="ask_item_1">答：</text>
        <text class="ask_item_2">我要回答</text>
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
            <el-row :gutter="24" class="margin-15-top">
            <el-col
                v-for="(itemAskImage, indexAskImage) in itemAsk.image"
                :key="indexAskImage"
                :span="24"
                :md="8"
            >
              <el-image
                  :src="itemAskImage"
                  style="width:100%; height: 250px"
                  :zoom-rate="1.2"
                  :preview-src-list="itemAsk.image"
                  :initial-index="indexAskImage"
                  fit="cover"
                  lazy />
            </el-col>
            </el-row>
            <div class="answer_item_left_2_3 margin-10-top">
              <text>2024-09-08 12:11:11</text>
              <div class="answer_item_left_2_3_right">
                <text>有用{{itemAsk.useful_count}}</text>
                <text>没用{{itemAsk.useless_count}}</text>
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
</script>
<style scoped>
/*回答开始*/
.answer_item .answer_item_left .answer_item_left_2 .answer_item_left_2_3 .answer_item_left_2_3_right{
  display: flex;
  flex-direction: row;
}
.answer_item .answer_item_left .answer_item_left_2 .answer_item_left_2_3{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  margin-left: 40px;
  text-align: end;
}
/*回答结束*/
</style>
