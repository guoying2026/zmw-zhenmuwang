<template>
  <div class="nav_header">
    <div class="nav">
      <span class="font-60-weight font-10-size">ZMW</span>
      <el-icon class="font-20-size"><search></search></el-icon>
      <UserLogin/>
    </div>
  </div>
  <div class="space">

  </div>
  <div class="mini-live-search-cont miniSlideDown">
    <label class="cf-one" for="mini-ls-input">搜索你想要的任何</label>
    <input v-model="input" type="text" id="mini-ls-input" name="live-posts-search" placeholder="加盟" @change="handleInput">
    <div class="mini-ls-loader" role="status">
      <span></span>
    </div>
    <div class="mini-ls-results" style="display: none;"></div>
  </div>
<!--  router-view和router-link是由vue-router注册的全局组件，
router-link负责跳转不同的页面，相当于vue世界中的超链接a标签
router-view负责渲染路由匹配的组件，可以通过把router-view放在不同的地方，实现复杂项目的页面布局-->
  <router-view/>
</template>
<script setup>
import { onMounted, ref } from "vue";

const input = ref('')
const handleInput = (value) => {
  input.value = value
  console.log(input.value);
}
</script>
<style scoped>
.nav_header {
  position: fixed;
  top: 0;
  width: 100%;
  color:var(--navbar-color);
  background-color: var(--navbar-bg-color);
  opacity:0.8;
  z-index: 100;
}
.space{
  height: 42px;
  width: 100%;
}
.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 0 20px;
}
</style>
<script>
import "./assets/liveSearch.scss"
// import SearchBar from "./components/SearchBar.vue";
import UserLogin from "./components/UserLogin.vue";
export default {
  components: {UserLogin}
}
</script>
