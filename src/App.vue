<template>
<!--  固定在顶部用el-affix offset是距离顶部多少px 顶部导航开始-->
  <el-affix>
    <el-row justify="space-between" class="nav_header" align="middle">
      <el-col :span="3" :push="1" class="col_1">
        <span class="text-extra-large font-600 mr-3">zmw</span>
      </el-col>
      <el-col :span="16" class="col_2">
        <SearchBar />
      </el-col>
      <el-col :span="3" :pull="1" class="col_3">
        <UserLogin />
      </el-col>
    </el-row>
  </el-affix>
  <!--  固定在顶部用el-affix offset是距离顶部多少px 顶部导航结束-->
  <router-view />
</template>
<script setup>
import './assets/main.css'
</script>
<style scoped>
.nav_header {
  height: var(--navbar-height);
  line-height: var(--navbar-line-height);
  background-color: var(--navbar-bg-color);
}
.el-affix,
.el-affix--fixed {
  background-color: var(--navbar-bg-color);
  color: var(--navbar-ft-color);
}
.search_hide {
  color: var(--navbar-ft-color);
  background-color: var(--navbar-bg-color);
  border-color: var(--navbar-bg-color);
}
.col_1{
  text-align: left;
}
.col_2{
  text-align: center;
}
.col_3{
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
}
</style>
