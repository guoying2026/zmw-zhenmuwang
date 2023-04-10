<!--
 * @Author: joytou
 * @Date: 2023-03-17
 * @LastEditors: joytou
 * @LastEditTime: 2023-04-10
 * @FilePath: /zmw-zhenmuwang/src/components/GoodsRecommends.vue
 * @Description: 
-->
<template>
  <el-col class="hidden-xs-only" :span="6" :offset="0" :xs="0">
    <el-card shadow="hover">
      <el-row>
        <el-col>为你推荐</el-col>
        <template v-for="(item, index) in list" v-bind:key="item">
          <el-col class="recommend_goods-item">
            <router-link :to="'/goodsDetail?type='+type+'&goods_id='+item.goods_id">
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
            </router-link>
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
  type: {
    type: String,
    required: true,
    default () {
      return '0'
    }
  },
})
</script>
<style scoped>
.recommend_goods-item {
  margin-top: 20px;
  cursor: pointer;
}
.recommend_goods-item-image_frame {
  text-align: center;
  z-index: 0;
}
.recommend_goods-item-image {
  width: calc((100vw - 40px) * 0.2);
  height: calc((100vw - 40px) * 0.3);
}
.recommend_goods-item-info {
  margin-top: -40px;
  background-color: rgba(255,255,255, 0.7);
  z-index: 1;
}
.recommend_goods-item-info-title {
  text-align: center;
  font-size: var(--el-font-size-base);
}
a {
  color: inherit;
}
a:hover {
  color: var(--el-color-info);
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