<template>
  <el-container>
    <el-main>默认显示的是list</el-main>
  </el-container>
</template>
<script setup>
import { tailCargoList } from "../api/list.js";
const getTailCargoList = () =>{
  tailCargoList({}).then(async(res) =>{
    console.log('tailCargoList');
    console.log(res);
  })
}
getTailCargoList()
</script>
<style scoped></style>
