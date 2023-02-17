<template>
<!--  固定在顶部用el-affix offset是距离顶部多少px 顶部导航开始-->
    <el-affix :offset="0">
      <el-row class="nav_header">
        <el-col :span="8" class="col_1">ZMW</el-col>
        <el-col :span="8" class="col_2">ggg</el-col>
        <el-col :span="8" class="col_3">登录</el-col>
      </el-row>
    </el-affix>
  <!--  固定在顶部用el-affix offset是距离顶部多少px 顶部导航结束-->
<!--  router-view和router-link是由vue-router注册的全局组件，
router-link负责跳转不同的页面，相当于vue世界中的超链接a标签
router-view负责渲染路由匹配的组件，可以通过把router-view放在不同的地方，实现复杂项目的页面布局-->
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
