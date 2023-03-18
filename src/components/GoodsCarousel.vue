<template>
  <!-- pc端产品图轮播 start -->
  <el-col class="hidden-xs-only" :span="5">
    <el-carousel :autoplay="false" height="calc((100vw - (var(--el-main-padding) * 2)) * 0.208333333333)">
      <template v-for="(item, index) in list" v-bind:key="item">
        <el-carousel-item>
          <el-image class="goods_banner_image" :src="item" fit="cover" />
        </el-carousel-item>
      </template>
    </el-carousel>
  </el-col>
  <!-- pc端产品图轮播 end -->
  <!-- 移动端产品图轮播 start -->
  <el-col class="hidden-sm-and-up">
    <el-carousel>
      <template v-for="(item, index) in list" v-bind:key="item">
        <el-carousel-item>
          <el-image
            class="goods_banner_image"
            :src="item"
            fit="cover"
            :hide-on-click-modal="true"
            :preview-src-list="list"
            :initial-index="index"
            :close-on-press-escape="true"
            :preview-teleported="true"
          />
        </el-carousel-item>
      </template>
    </el-carousel>
  </el-col>
  <!-- 移动端产品图轮播 end -->
</template>
<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default () {
      return []
    }
  }
})
</script>
<style scoped>
.goods_banner_image {
  width: 100%;
  height: calc((100vw - (var(--el-main-padding) * 2)) * 0.208333333333);
}
@media screen and (max-width: 768px) {
  .goods_banner_image {
    height: calc(100vw - (var(--el-main-padding) * 2));
  }
}
</style>