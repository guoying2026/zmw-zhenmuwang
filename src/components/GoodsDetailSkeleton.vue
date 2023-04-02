<template>
  <!-- PC端骨架屏 start -->
  <el-main class="hidden-xs-only pc_loading_main margin-60-top" :xs="0">
    <el-skeleton :animated="true" :loading="isLoading">
      <template #template>
        <el-row justify="start" align="middle">
          <el-col>
            <el-row>
              <el-col class="pc_loading_main-side_image_frame" :span="8" :push="0">
                <el-skeleton-item class="pc_loading_main-side_image" variant="image" />
              </el-col>
              <el-col class="pc_loading_main-center_image_frame" :span="8">
                <el-skeleton-item class="pc_loading_main-center_image" variant="image" />
              </el-col>
              <el-col class="pc_loading_main-side_image_frame" :span="8" :pull="0">
                <el-skeleton-item class="pc_loading_main-side_image" variant="image" />
              </el-col>
            </el-row>
          </el-col>
          <el-col class="pc_loading_main-title">
            <el-row>
              <el-col :span="6">
                <el-skeleton-item variant="h1" />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="19" :offset="1">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="4">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="19" :offset="1">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="4">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="19" :offset="1">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col class="pc_loading_main-title" :span="16">
            <el-skeleton-item variant="h3" />
          </el-col>
          <el-col class="pc_loading_main-title">
            <el-skeleton-item variant="h3" />
          </el-col>
          <el-col class="pc_loading_main-title">
            <el-skeleton-item variant="h3" />
          </el-col>
          <el-col class="pc_loading_main-title">
            <el-skeleton-item variant="h3" />
          </el-col>
          <el-col class="pc_loading_main-title" :span="20">
            <el-skeleton-item variant="h3" />
          </el-col>
        </el-row>
      </template>
    </el-skeleton>
  </el-main>
  <!-- PC端骨架屏 end -->
  <!-- 移动端骨架屏 start -->
  <el-main class="hidden-sm-and-up mobile_loading_main" :sm="0" :md="0" :lg="0" :xl="0">
    <el-skeleton :animated="true" :loading="isLoading">
      <template #template>
        <el-row align="middle">
          <el-col>
            <el-skeleton-item class="mobile_loading_main-image" variant="image" />
          </el-col>
          <el-col class="mobile_loading_main-title">
            <el-skeleton-item variant="h1" />
          </el-col>
          <el-col :span="4">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="19" :offset="1">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="4">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="19" :offset="1">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="4">
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="19" :offset="1">
            <el-row>
              <el-col :span="19" :offset="1">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="4">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="19" :offset="1">
                <el-row>
                  <el-col :span="4">
                    <el-skeleton-item variant="text" />
                  </el-col>
                  <el-col :span="19" :offset="1">
                    <el-skeleton-item variant="text" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-skeleton-item variant="text" />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-skeleton-item class="mobile_loading_main-header" variant="image" />
          </el-col>
          <el-col :span="12" :offset="1">
            <el-skeleton-item variant="text" />
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col :span="6" :offset="1">
            <el-skeleton-item variant="button" />
          </el-col>
          <el-col>
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col>
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col>
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col>
            <el-skeleton-item variant="text" />
          </el-col>
          <el-col>
            <el-skeleton-item variant="text" />
          </el-col>
        </el-row>
      </template>
    </el-skeleton>
  </el-main>
  <!-- 移动端骨架屏 end -->
</template>
<script setup>
import { ref } from 'vue'
const isLoading = ref(true)
</script>
<style scoped>
.pc_loading_main {
  height: calc(100vh - var(--navbar-height));
  overflow: hidden;
}
.pc_loading_main-side_image_frame {
  position:relative;
  top: 2.5vw;
  z-index: 0;
}
.pc_loading_main-side_image {
  width: calc((100vw - (var(--el-main-padding) * 2)) / 3);height: 20vw;
}
.pc_loading_main-center_image_frame {
  z-index: 1;
}
.pc_loading_main-center_image {
  width: calc((100vw - (var(--el-main-padding) * 2)) / 2);
  height: 25vw;
  position: relative;
  right: calc((((100vw - (var(--el-main-padding) * 2)) / 2) - ((100vw - (var(--el-main-padding) * 2)) / 3)) / 2);
}
.pc_loading_main-title {
  padding-top: 14px;
}
.mobile_loading_main {
  height: calc(100vh - (var(--navbar-height) * 2));
  overflow: hidden;
}
.mobile_loading_main-image {
  width: 90vw;
  height: 90vw;
}
.mobile_loading_main-title {
  padding-top: 14px;
}
.mobile_loading_main-header {
  width: calc((100vw - (var(--el-main-padding) * 2)) * 0.166666666667);
  height: calc((100vw - (var(--el-main-padding) * 2)) * 0.166666666667);
}
</style>