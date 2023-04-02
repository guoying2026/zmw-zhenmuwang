<template>
  <router-link to="/login" v-if="userStore.userId == 0">
    <text class="font-10-size black">登录</text>
  </router-link>
    <img v-else :src="userStore.photo" class="photo"/>
</template>
<script setup>
import {reactive, ref} from 'vue'
//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();
</script>
<style scoped>
.photo{
  width: 25px;
  height: 25px;
}
.black{
  color: #000;
}
</style>
