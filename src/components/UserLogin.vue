<template>
    <text class="font-10-size" v-if="userStore.userId == 0">登录</text>
    <el-icon v-else><HomeFilled /></el-icon>
</template>
<script setup>
import { ref } from 'vue'
//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();
</script>
<style scoped>

</style>
