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
            :type="isOnlyViewBlackList?'primary':''"
            round
            @click="handleOnlyViewBlackList"
            >只看黑名单</el-button
          >
          <el-button
            :type="isOnlyViewFranchisee?'primary':''"
            round
            @click="handleOnlyViewFranchisee"
            >只看加盟商</el-button
          >
        </el-col>
      </el-row>
    </el-header>
    <el-main v-loading="isLoading">
      <el-skeleton v-if="isLoading" :rows="5" />
      <el-empty v-else-if="isLoadFailed">
        <template #description>
          <span class="fail_tips_text">加载失败，请稍后<el-link :underline="false" @click="reloadHandle">重试</el-link></span>
        </template>
      </el-empty>
      <el-row v-else>
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
              :credit-score="item.score"
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
          <el-pagination class="hidden-xs-only" background layout="prev, pager, next" :total="total" v-model:current-page="currentPage" v-model:page-size="pageSize" @current-change="currentPageChange" />
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script setup>
import { nextTick, ref } from 'vue'
import { tailCargoList, getIndexData } from "../api/list.js";
const getTailCargoList = () => {
  tailCargoList({}).then(async(res) => {
    console.log('tailCargoList');
    console.log(res);
  })
}
getTailCargoList()

// 信用分升序或降序排序
const isCreditScoreDesc = ref(true)
// 总条数
const total = ref(0)
// 每页数量
const pageSize = ref(10)
// 当前页码数
const currentPage = ref(1)
// 数据列表
const list = ref([])
// 是否加载中
const isLoading = ref(false)
// 是否加载失败或者没有数据
const isLoadFailed = ref(false)
// 是否显示推荐商家
const isShowRecommend = ref(true)
// 是否显示加盟商
const isShowFranchisee = ref(true)
// 是否显示黑名单
const isShowBlacklist = ref(true)
// 是否只看黑名单
const isOnlyViewBlackList = ref(false)
// 是否只看加盟商
const isOnlyViewFranchisee = ref(false)
/**
 * 加载数据
 * @description 
 * ```currentPage.value``` 当前页码数
 * 
 * ```pageSize.value``` 每页数量
 * 
 * ```isCreditScoreDesc.value``` 是否按照信用分降序排序。```true``` 降序；```false``` 升序
 * 
 * ```isOnlyViewBlackList.value``` 是否仅显示黑名单
 * 
 * ```isOnlyViewFranchisee.value``` 是否仅显示加盟商
 */
const loadmore = () => {
  isLoading.value = true
  isLoadFailed.value = false
  let paramsStr = ''
  paramsStr += 'is_show_recommend=' + (isShowRecommend.value ? 1 : 0)
  paramsStr += '&is_show_franchisee=' + (isShowFranchisee.value ? 1 : 0)
  paramsStr += '&is_show_blacklist=' + (isShowBlacklist.value ? 1 : 0)
  paramsStr += '&page=' + currentPage.value
  paramsStr += '&page_size=' + pageSize.value
  paramsStr += '&score_asc=' + (isCreditScoreDesc.value ? 0 : 1)
  nextTick(() => {
    getIndexData({},paramsStr).then(res => {
      console.log(res)
      if (res.status != 200 || res.data.status != 1000 || !res.data.data || res.data.data.length === 0) {
        isLoadFailed.value = true
        return false
      }
      isLoadFailed.value = false
      list.value = res.data.data
      currentPage.value = Number(res.data.current_page)
      pageSize.value = Number(res.data.page_size)
      total.value = Number(res.data.total_count)
    }).catch(reason => {
      console.log(reason)
      isLoadFailed.value = true
    }).finally(() => {
      isLoading.value = false
    })
  })
}
/**
 * 监听分页的当前页码的点击变化
 * @param {Number} pageNum 
 */
const currentPageChange = (pageNum) => {
  console.log(pageNum)
  currentPage.value = pageNum
  loadmore()
}
/**
 * 重新加载当前页码的数据
 */
const reloadHandle = () => {
  loadmore()
}
// 切换信用分升降序排序
const changeCreditScoreSort = () => {
  isCreditScoreDesc.value = !isCreditScoreDesc.value
  currentPage.value = 1
  loadmore()
}
// 切换是否仅查看黑名单
const handleOnlyViewBlackList = () => {
  isOnlyViewBlackList.value = !isOnlyViewBlackList.value
  isShowRecommend.value = true
  isShowFranchisee.value = true
  isShowBlacklist.value = true
  if (isOnlyViewBlackList.value) {
    // 仅查看黑名单
    isShowRecommend.value = false
    isShowFranchisee.value = false
    isOnlyViewFranchisee.value = false
  }
  currentPage.value = 1
  loadmore()
}
// 切换是否仅查看加盟商
const handleOnlyViewFranchisee = () => {
  isOnlyViewFranchisee.value = !isOnlyViewFranchisee.value
  isShowRecommend.value = true
  isShowFranchisee.value = true
  isShowBlacklist.value = true
  if (isOnlyViewFranchisee.value) {
    // 仅查看加盟商
    isShowRecommend.value = false
    isShowBlacklist.value = false
    isOnlyViewBlackList.value = false
  }
  currentPage.value = 1
  loadmore()
}
// 默认进来的时候就加载数据
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
.fail_tips_text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: var(--el-font-size-base);
}
</style>
