<template>
  <el-row :gutter="8" class="goods" >
    <el-col
        v-for="(item,index) in list.arr"
        :key="index"
        :span="12"
        :md="6"
    >
      <el-card>
        <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
        />
        <div class="goods_item font-12-size">
          <text class="font-15-size">{{item.name}}</text>
          <text class="margin-10-top">详细发货地址：{{item.area}}</text>
          <div class="margin-10-top green_btn buy_btn">
            <text>¥ </text>
            <text class="font-18-size">{{item.price}}</text>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { goodsListApi } from "../api/goods.js";
const props = defineProps({
  companyInfoId:{
    type: Number,
    default: 0,
  }
})
const list = reactive({
  arr: []
})
onMounted(() => {
  goodsListApi({},props.companyInfoId).then(async(res) => {
    list.arr =  res.data.data;
  })
})
</script>
<script>
export default{
  name: 'GoodsList'
}
</script>
<style scoped>
.image {
  width: 100%;
  display: block;
}
.el-col{
  margin-bottom: 10px;
}
.goods{
  background-color: #f0f2f7;
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
}
</style>
