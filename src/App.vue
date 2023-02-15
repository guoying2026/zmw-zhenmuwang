<template>
    <el-affix :offset="0">
      <el-row class="nav_header">
        <el-col :span="8" class="col_1">ZMW</el-col>
        <el-col :span="8" class="col_2">ggg</el-col>
        <el-col :span="8" class="col_3">登录</el-col>
      </el-row>
    </el-affix>
  <router-view />
</template>
<script setup>
</script>
<style scoped>
.nav_header{
  height: 48px;
  display: flex;
  background:rgba(22, 22, 23, .8);
  color: var(--el-color-white);
  align-items: center;
}
.col_1{
  text-align: left;
}
.col_2{
  text-align: center;
}
.col_3{
  text-align: right;
}
</style>
