<template>
  <el-affix>
    <el-row justify="space-between" class="navbar" align="middle">
      <el-col :span="3" :push="1">
        <span class="text-extra-large font-600 mr-3">zmw</span>
      </el-col>
      <el-col :span="16">
        <SearchBar />
      </el-col>
      <el-col :span="3" :pull="1" style="display: flex;flex-direction: row-reverse;">
        <UserLogin />
      </el-col>
    </el-row>
  </el-affix>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="/introduce" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="/detail" target="_blank">go to detail</a>
  </div>
  <router-view />
  <HelloWorld msg="Vite + Vue" />
</template>
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router'
import './assets/main.css'
</script>
<style scoped>
.navbar {
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
</style>
