<template>
  <el-container direction="vertical" :gutter="24">
    <el-header>
      <el-row>
        <el-col>
          <el-button 
            class="select_btn"
            type="info" 
            round
            @click="changeCreditScoreSort"
          >信用分<el-icon>
              <SortDown v-if="isCreditScoreDesc" />
              <SortUp v-else />
            </el-icon>
          </el-button>
          <el-button
            v-if="isOnlyViewBlackList"
            type="primary"
            round
            @click="handleOnlyViewBlackList"
            >只看黑名单</el-button
          >
          <el-button 
            v-else 
            round
            @click="handleOnlyViewBlackList"
            >只看黑名单</el-button
          >
          <el-button
            v-if="isOnlyViewFranchisee"
            type="primary"
            round
            @click="handleOnlyViewFranchisee"
            >只看加盟商</el-button
          >
          <el-button 
            v-else 
            round
            @click="handleOnlyViewFranchisee"
            >只看加盟商</el-button
          >
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <template v-for="(item, index) in list" v-bind:key="item">
          <el-col 
            :span="24" 
            :md="index <= 1 ? { span: 24 } : { span: 12 }" 
            v-if="index < pageSize"
          >
            <SellerInfo
              :province="item.province"
              :name="item.company_name"
              :is-franchisee="item.isFranchisee"
              :is-blacklist="item.isBlacklist"
              :credit-score="item.creditScore"
              :unified-social-credit-code="item.credit_code"
              :legal-representative="item.corporation"
              :time-of-establishment="item.foundation_date"
              :registered-capital="item.registered_capital"
              :address="item.address"
              :range="item.business_scope"
              :phone="item.contact_phone"
              :is-show-goods="index <= 1"
              :goods="item.goods"
            />
          </el-col>
      </template>
      </el-row>
    </el-main>
    <el-footer>
      <el-row :gutter="1" justify="center">
        <el-col :span="1" class="no_max_width">
          <el-pagination class="hidden-sm-and-up" small background layout="prev, pager, next" :total="total" v-model:current-page="currentPage" v-model:page-size="pageSize" @current-change="currentPageChange" />
          <el-pagination class="hidden-sm-and-down" background layout="prev, pager, next" :total="total" v-model:current-page="currentPage" v-model:page-size="pageSize" @current-change="currentPageChange" />
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script setup>
import { ref } from 'vue'
import Mock from 'mockjs'
import { tailCargoList } from "../api/list.js";
const getTailCargoList = () => {
  tailCargoList({}).then(async(res) => {
    console.log('tailCargoList');
    console.log(res);
  })
}
getTailCargoList()

const isCreditScoreDesc = ref(true)
const changeCreditScoreSort = () => {
  isCreditScoreDesc.value = !isCreditScoreDesc.value
}

// 总条数
const total = ref(0)
// 每页数量
const pageSize = ref(10)
// 当前页码数
const currentPage = ref(1)
// 数据列表
const list = ref([])

const loadmore = () => {
  // 模拟数据
  Mock.mock({
    'list|100': [{
      'id|+1': 1,
      'province': '@province',
      'company_name': '沭阳沪沭木制品有限公司',
      // 'isFranchisee': '@boolean',
      'isFranchisee': true,
      'isBlacklist': false,
      'creditScore|0-100': 100,
      'credit_code': '91321322MA215HKM23',
      'corporation': '@cname',
      'foundation_date': '@date',
      'registered_capital': '500万人民币',
      'address': '@province@city@county',
      'business_scope': '一般项目：木材加工；人造板制造；人造板销售；软木制品制造；家具制造',
      'contact_phone': '13800138000',
      'goods': Mock.mock({
        'list|3': [{
          'id|+1': 1,
          'goods_title': '刨花脚墩',
          'goods_price|10-100.0-2': 100,
          'mainurl': 'http://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_sumai_imagea821434b7b9d8240a45110f58729a2d4.jpg',
        }]
      }).list
    }]
  }).list.forEach(item => list.value.push(item))
  console.log(list.value)
  total.value = list.value.length
}
const currentPageChange = (pageNum) => {
  console.log(pageNum)
}
loadmore()
</script>
<style scoped>
.el-header {
  line-height: var(--el-header-height);
}
@media screen and (max-width: 355px) {
  .el-header {
    padding: 0;
    margin: 0 auto;
  }
  .el-header .el-row:first-of-type {
    flex-wrap: nowrap;
  }
}
.select_btn {
  background: rgb(134,78,40);
  border-color: rgb(134,78,40);
}
.no_max_width {
  max-width: none;
}
ul {
  list-style: none;
}
</style>
