<template>
  <div class="padding-10">
  <el-container direction="vertical" :gutter="24">
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
              :md="index <= 8 ? {span:12} :{span:24}"
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
        <el-row :gutter="20">

        </el-row>
<!--        公司首页的问大家结束-->
<!--        公司首页的大众评论开始-->
        <el-descriptions title="大众评论">
          <template #extra>
            <el-button type="" text>
              查看全部<el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </template>
        </el-descriptions>
<!--        评论列表开始-->
        <div class="comment_list">
          <div class="comment_list_1">
            <el-avatar
                class="comment_list_1_left"
                :size="48"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <div class="comment_list_1_right">
              <text>海贼王</text>
              <text>稳定性好，木质细腻，密度比较高，硬度比较高，气味芳香</text>
            </div>
          </div>
          <div class="comment_list_2">
            <el-icon><ChatDotRound /></el-icon>
          </div>
        </div>
<!--        该评论的回复列表开始-->
        <div></div>
<!--        该评论的回复列表结束-->
<!--        评论列表结束-->
<!--        添加评论组件开始-->
        <AddComment
            :placeholder-text="placeholderText"
            :start-text="startText"
            :cancel-text="cancelText"
            :confirm-text="confirmText"
        ></AddComment>
<!--        添加评论组件结束-->
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
import { onMounted } from 'vue'
//评论开始
//引入评论api
import { commentListApi } from "../api/comment.js";
// onMounted(() => {
//   commentListApi({}).then(async(res) => {
//     console.log(res);
//   })
// })
//引入点击评论组件
import AddComment from "../components/AddComment.vue";
//给添加评论组件传值开始
const placeholderText = ref('请输入评论');
const startText = ref('我要评价');
const cancelText = ref('取消评论');
const confirmText = ref('发布评论');
//给添加评论组件传值结束
//评论结束
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
.comment_list{
  display: flex;
  flex-direction: column;
}
.comment_list .comment_list_1{
  display: flex;
  flex-direction: row;
}
.comment_list .comment_list_1 .comment_list_1_left{
  width: 48px;
  height: 48px;
}
.comment_list .comment_list_1 .comment_list_1_right{
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.comment_list .comment_list_2{
  display: flex;
  flex-direction: row;
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
