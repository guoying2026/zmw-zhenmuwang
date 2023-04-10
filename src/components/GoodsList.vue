<template>
  <el-row :gutter="8" class="goods" :class="isGrey? 'grey_bg':'white_bg'">
    <el-col
        v-for="(item,index) in list"
        :key="index"
        :span="12"
        :md="6"
    >
      <router-link class="goods_card" :to="'/goodsDetail?type=1&goods_id='+item.goods_id">
        <!-- x-oss-process=image/resize参数可参考https://help.aliyun.com/document_detail/44688.html -->
        <img
          :alt="item.goods_title"
          decoding="async"
          loading="lazy"
          :srcset="item.mainurl+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 150w, '+item.mainurl+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 300w, '+item.mainurl+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 100w'"
          sizes="(max-width: 150px) 100vw, 150px"
          :style="`width:100%; height: ${image_height};object-fit: fill;`"
          :onerror="'this.src=\''+goodsErrorImg+'\';this.srcset=\''+goodsErrorImg+' 150w, '+goodsErrorImg+' 300w, '+goodsErrorImg+' 100w\';'"
        >
        <div class="goods_item font-12-size">
          <text class="font-15-size">{{item.goods_title}}</text>
          <text class="margin-10-top">详细发货地址：{{item.area}}</text>
          <div class="margin-10-top green_btn buy_btn">
            <text>¥ </text>
            <text class="font-18-size">{{item.goods_price}}</text>
          </div>
        </div>
      </router-link>
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
  },
  image_height:{
    type: String,
    default: '30vh',
  }
})
props.list.forEach(item=>{
  let el=document.createElement('link')
  el.rel='preload'
  el.as='image'
  el.href=item.mainurl+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp'
  window.document.head.append(el)
})
</script>
<script>
const goodsErrorImg = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
export default{
  name: 'GoodsList'
}
</script>
<style scoped>
.el-col{
  margin-bottom: 10px;
}
.goods_card{
  display: inline-block;
  width: 100%;
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
a {
  color: inherit;
}
</style>
