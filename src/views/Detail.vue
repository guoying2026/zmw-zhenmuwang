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
