<template>
  <el-row :gutter="8" class="goods" :class="isGrey? 'grey_bg':'white_bg'">
    <el-col
        v-for="(item,index) in list"
        :key="index"
        :span="12"
        :md="6"
    >
      <div class="goods_card" @click="gotoGoodsDetail(item.goods_id)">
        <!-- x-oss-process=image/resize参数可参考https://help.aliyun.com/document_detail/44688.html -->
        <img
          :src="item.mainurl+'?x-oss-process=image/format,webp'"
          :alt="item.goods_title"
          decoding="async"
          loading="lazy"
          :srcset="item.mainurl+'?x-oss-process=image/resize,m_lfit,h_150,w_150/format,webp 150w, '+item.mainurl+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 300w, '+item.mainurl+'?x-oss-process=image/resize,m_lfit,h_100,w_100/format,webp 100w'"
          sizes="(max-width: 150px) 100vw, 150px"
          style="width:100%; height: 30vh;object-fit: fill;"
        >
        <div class="goods_item font-12-size">
          <text class="font-15-size"><el-link type="info" :underline="false" :href="'/goodsDetail?type=1&goods_id='+item.goods_id" target="_blank">{{item.goods_title}}</el-link></text>
          <text class="margin-10-top">详细发货地址：{{item.area}}</text>
          <div class="margin-10-top green_btn buy_btn">
            <text>¥ </text>
            <text class="font-18-size">{{item.goods_price}}</text>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
const props = defineProps({
  list:{
    type: Array,
    default: [],
  },
  size: {
    type: Number,
    default: -1,
  },
  isGrey:{
    type: Number,
    default: 0,
  }
})
</script>
<script>
const gotoGoodsDetail = (goodsId) => {
  window.open('/goodsDetail?type=1&goods_id=' + goodsId, '_blank')
}
export default{
  name: 'GoodsList'
}
</script>
<style scoped>
.el-col{
  margin-bottom: 10px;
}
.goods_card{
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
.white_back{
  background-color: #fff;
}
.goods{
  padding: 10px 10px 0 10px;
}
.buy_btn{
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 900;
  align-self: flex-end;
}
.goods_item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  letter-spacing: 2px;
  height: calc(100% - 30vh - 5px);
  justify-content: space-between;
}
.el-link {
  color: inherit;
}
</style>
