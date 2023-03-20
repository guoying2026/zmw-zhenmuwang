<!--
 * @Author: joytou
 * @Date: 2023-03-17
 * @LastEditors: joytou
 * @LastEditTime: 2023-03-17
 * @FilePath: /zmw-zhenmuwang/src/components/GoodsRecommends.vue
 * @Description: 
-->
<template>
  <el-col class="hidden-xs-only" :span="8" :offset="1">
    <el-card shadow="hover">
      <el-row>
        <el-col>为你推荐</el-col>
        <template v-for="(item, index) in list" v-bind:key="item">
          <el-col class="recommend_goods-item">
            <el-row justify="center">
              <el-col class="recommend_goods-item-image_frame">
                <el-image class="recommend_goods-item-image" :src="item.image" fit="cover" />
              </el-col>
              <el-col class="recommend_goods-item-info">
                <el-row justify="center">
                  <el-col class="recommend_goods-item-info-title">{{ item.goods_name }}</el-col>
                  <el-col class="recommend_goods-item-info-price">
                    <span class="font-size-extra-small">￥</span>{{ item.spell_price }}&nbsp;/&nbsp;{{ item.unit }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </template>
      </el-row>
    </el-card>
  </el-col>
</template>
<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default () {
      return []
    }
  },
})
</script>
<style scoped>
.recommend_goods-item {
  margin-top: 20px;
}
.recommend_goods-item-image_frame {
  text-align: center;
  z-index: 0;
}
.recommend_goods-item-image {
  width: calc((100vw - (var(--el-main-padding) * 2)) * 0.2);
  height: calc((100vw - (var(--el-main-padding) * 2)) * 0.2);
}
.recommend_goods-item-info {
  margin-top: -25px;
  background-color: rgba(255,255,255, 0.7);
  z-index: 1;
}
.recommend_goods-item-info-title {
  text-align: center;
  font-size: var(--el-font-size-base);
}
.recommend_goods-item-info-price {
  text-align: center;
  font-size: var(--el-font-size-base);
  color: #FE4342;
}
.font-size-extra-small {
  font-size: var(--el-font-size-extra-small);
}
</style>