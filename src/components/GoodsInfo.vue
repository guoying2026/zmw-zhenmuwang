<template>
  <el-row>
    <el-image class="goods_image" :src="goodsImage" fit="cover" :lazy="true" />
  </el-row>
  <el-row v-if="type === 0" class="goods_info">
    <el-col class="goods_info-price"><span>￥</span>{{ goodsPrice }}</el-col>
    <el-col class="goods_info-name">{{ goodsTitle }}</el-col>
  </el-row>
  <el-row v-else-if="type === 1" class="goods_info1">
    <el-col class="goods_info1-name">{{ goodsTitle }}</el-col>
    <el-col class="goods_info1-price"><span>￥</span>{{ goodsPrice }}</el-col>
  </el-row>
</template>
<script setup>
const props = defineProps({
  goodsTitle: {
    type: String, 
    required: true, 
    default () {
      return ''
    }
  },
  goodsPrice: {
    type: Number, 
    required: true, 
    default () {
      return 0
    }
  },
  goodsImage: {
    type: String, 
    required: true, 
    default () {
      return ''
    }
  },
  type: {
    type: Number, 
    required: false, 
    default () {
      return 0
    }
  }
})
</script>
<style scoped>
.goods_image {
  width: 100%;
  height: 166.375px;
}

@media screen and (max-width: 320px) {
  .goods_image {
    height: 120px;
  }
}
@media screen and (min-width: 425px) and (max-width: 768px) {
  .goods_image {
    height: 320px;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .goods_image {
    height: 320px;
  }
}
.goods_info {
  background: #684525;
  padding: 5px;
}
.goods_info-price,
.goods_info-name {
  font-size: var(--el-font-size-small);
  text-align: right;
  word-wrap: break-word;
}
.goods_info-price {
  font-size: var(--el-font-size-large);
  color: #ffe400;
}
.goods_info-price span {
  font-size: var(--el-font-size-extra-small);
}
.goods_info-name {
  color: #ffffff;
}
.goods_info1 {
  background: #ffffff;
  padding: 5px;
  border: 1px solid var(--el-border-color);
}
.goods_info1-price,
.goods_info1-name {
  text-align: left;
  word-wrap: break-word;
}
.goods_info1-price {
  font-size: var(--el-font-size-large);
  color: rgb(249,46,37);
}
.goods_info1-price span {
  font-size: var(--el-font-size-extra-small);
}
.goods_info1-name {
  font-size: var(--el-font-size-small);
  color: rgb(51,51,51);
}
</style>
