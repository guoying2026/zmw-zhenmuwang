<template>
  <div class="card" data-state="#about">
    <div class="card-header">
      <div class="card-cover" style="background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"></div>
      <img class="card-avatar" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="avatar" />
      <h1 class="card-fullname">William Rocheald</h1>
      <h2 class="card-jobtitle">UI Developer</h2>
    </div>
    <div class="card-main">
      <div class="card-section" id="about">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
          <el-tab-pane label="订单列表" name="first">
          </el-tab-pane>
          <el-tab-pane label="投诉列表" name="second" lazy>
          </el-tab-pane>
        </el-tabs>

      </div>
    </div>
  </div>
</template>
<script setup>
//导航栏切换开始
import {ref} from "vue";

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
//导航栏切换结束
</script>
<style lang="scss" scoped>
.card-section:deep(.el-tabs__header) {
  position: -webkit-sticky;
  position: sticky;
  background: #fff;
  top: 50px;
  z-index: 1000;
  opacity: 0.8;
  margin: 0;
}
.card-section:deep(.el-tabs__nav-wrap) {
  padding: 0 20px;
  letter-spacing: 2px;
}
.card-section:deep(.el-tabs__nav-scroll) {
  overflow-x: auto;
}
.el-descriptions{
  padding:0 10px;
}
.card-section:deep(.el-tabs__nav-scroll::-webkit-scrollbar) {
  display: none;
}
.card-section:deep(.el-tabs__nav-wrap::after) {
  background-color: unset !important;
}
.card-section:deep(.el-tabs__item.is-active) {
  color: #000;
}
.card-section:deep(.el-tabs__active-bar) {
  background-color: #000;
}
.card-section:deep(.el-tabs__item:hover) {
  color:#000;
}
.card-section:deep(.el-descriptions__header) {
  margin-bottom: 0;
  padding: 10px 0px;
}
.card {
  margin: auto;
  margin-top: 60px !important;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  width: 80%;
}

.card.is-active {
  .card-header {
    height: 80px;
  }

  .card-cover {
    height: 100px;
    top: -50px;
  }

  .card-avatar {
    transform: none;
    left: 20px;
    width: 50px;
    height: 50px;
    bottom: 10px;
  }

  .card-fullname {
    bottom: 18px;
    font-size: 19px;
  }

}

.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}


.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-section {
    display: block;
    animation: fadeIn 0.6s both;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(40px);
  }
  100% {
    opacity: 1;
  }
}

</style>
