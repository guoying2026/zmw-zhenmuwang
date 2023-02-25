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
<!--  router-view和router-link是由vue-router注册的全局组件，
router-link负责跳转不同的页面，相当于vue世界中的超链接a标签
router-view负责渲染路由匹配的组件，可以通过把router-view放在不同的地方，实现复杂项目的页面布局-->
  <router-view />
</template>
<script setup>
import './assets/main.css'
//登录成功后，需要把登录状态让多页面共享
import { onMounted } from "vue";
import {useUserStore} from "./pinia/user.js";

const userStore = useUserStore();
onMounted(()=>{
  console.log(userStore.userId);
  console.log(userStore.phone);
})
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
