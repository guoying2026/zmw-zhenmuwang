<template>
  <div class="all">
    <div class="top_1_tag">
      <text class="black_btn custom_tag font-60-weight">黑名单</text>
    </div>
    <div class="first">
      <text class="margin-20-top emphasize">费县众泽木业板材厂费县众泽木业板材厂</text>
      <text class="margin-20-top">社会统一信用代码：</text>
      <text class="margin-20-top emphasize">91120222058746278C</text>
    </div>
    <el-row class="margin-20-top next" :gutter="24">
      <el-col :span="24" :md="12">
        <div class="third">
          <img src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_39c423de-1fc6-4d7d-be1e-6804ddc119ff.png" />
        </div>
      </el-col>
      <el-col :span="24" :md="12">
        <div class="fourth">
          <text class="second font-18-size">为什么成为黑名单？</text>
          <el-steps direction="vertical" class="margin-20-top" :space="150">
            <el-step title="Step 1" description="Some description" status="process"/>
            <el-step title="Step 2" description="Some description" status="process"/>
            <el-step title="Step 3" description="Some description" status="process"/>
            <el-step title="Step 3" description="Some description" status="process"/>
            <el-step title="Step 3" description="Some description" status="process"/>
            <el-step title="Step 3" description="Some description" status="process"/>
          </el-steps>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import "../assets/tag.css"
</script>
<style scoped>
.all{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.next{
  display: flex;
  width: 100%;
}
.emphasize{
  font-weight: 900;
  font-size: 24px;
  text-align: center;
}
.third{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fourth{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.first{
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
}
.second{
  align-self: center;
  font-weight: 600;
  letter-spacing: 2px;
}
</style>
