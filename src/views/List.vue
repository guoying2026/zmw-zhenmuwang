<style>
.left_1{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
}
.left_1 .left_1_2{
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
}
.tag{
  align-self: flex-start;
}
.left_1_2_2{
  display: flex;
  flex-wrap: wrap;
}
.left{
  display: flex;
  flex-direction: column;
}
.padding-20{
  padding: 0px 20px 0px 20px !important;
}
.el-col{
  margin-bottom: 10px;
}
</style>
<template>
  <el-container
    direction="vertical"
    :gutter="24"
  >
    <div class="top_1_tag font-15-size">
      <div
          class="custom_tag font-60-weight"
          :class="isCreditScoreDesc?'green_btn':'blue_btn'"
          @click="changeCreditScoreSort">
        信用分
        <el-icon>
          <SortDown v-if="isCreditScoreDesc" />
          <SortUp v-else />
        </el-icon>
      </div>
      <text
          :class="isOnlyViewBlackList?'yellow_btn':'black_btn'"
          @click="handleOnlyViewBlackList"
          class="custom_tag font-60-weight"
      >
        只看黑名单
      </text>
      <text
          class="custom_tag font-60-weight"
          :class="isOnlyViewFranchisee?'blue_btn':'black_btn'"
          @click="handleOnlyViewFranchisee"
      >
        只看加盟商
      </text>
    </div>
    <div>
      <!-- pc端在加载时显示骨架屏，移动端在加载第一页时显示骨架屏，其它页底部显示骨架屏 -->
      <el-skeleton v-if="isMobile?currentPage===1&&isLoading:isLoading" :rows="5" />
      <el-empty v-else-if="isMobile?currentPage===1&&isLoadFailed:isLoadFailed">
        <template #description>
          <span class="fail_tips_text">加载失败，请稍后<el-link :underline="false" @click="reloadHandle">重试</el-link></span>
        </template>
      </el-empty>
      <div v-for="(item,index) in list" :key="index" v-else>
        <div class="first">
<!--          不展示商品 start-->
          <div class="padding-20 left" v-if="item.isBlacklist">
            <div class="left_1">
              <CreditScore :credit-score="item.score" credit-score-text="信用分" :font-size="40" height="80" width="100px"></CreditScore>
              <div class="left_1_2">
                <text class="font-18-size font-60-weight margin-10-left">{{ item.company_name }}</text>
                <div class="left_1_2_2">
                  <Tag class="tag" tag="黑名单" number="60" color="black" v-if="item.isBlacklist"></Tag>
                  <Tag class="tag" tag="加盟商" number="60" color="orange" v-if="item.isFranchisee"></Tag>
                  <Tag class="tag margin-10-left" :tag="item.province" number="60" color="blue"></Tag>
                </div>
              </div>
            </div>
            <SellerInfo :item="item"></SellerInfo>
          </div>
<!--          不展示商品end-->
<!--          展示商品开始-->
          <el-row :gutter="24" v-else>
            <el-col :span="24" :md="12">
              <div class="padding-20 left">
                <div class="left_1">
                  <CreditScore :credit-score="item.score" credit-score-text="信用分" :font-size="40" height="80" width="100px"></CreditScore>
                  <div class="left_1_2">
                    <text class="font-18-size font-60-weight margin-10-left">{{ item.company_name }}</text>
                    <div class="left_1_2_2">
                      <Tag class="tag" tag="黑名单" number="60" color="black" v-if="item.isBlacklist"></Tag>
                      <Tag class="tag" tag="加盟商" number="60" color="orange" v-if="item.isFranchisee"></Tag>
                      <Tag class="tag margin-10-left" :tag="item.province" number="60" color="blue"></Tag>
                    </div>
                  </div>
                </div>
                <SellerInfo :item="item"></SellerInfo>
              </div>
            </el-col>
            <el-col :span="24" :md="12">
              <GoodsList :list="item.goods"></GoodsList>
            </el-col>
          </el-row>
<!--          展示商品结束-->
        </div>
      </div>
    </div>

    <el-footer
      class="list_page_footer"
      v-if="!isMobile"
    >
      <el-row :gutter="1" justify="center" class="hidden-xs-only">
        <el-col :span="1" class="no_max_width">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            @current-change="currentPageChange"
          />
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script setup>
import '../assets/tag.css'
import CreditScore from "../components/CreditScore.vue";
import GoodsList from "../components/GoodsList.vue";
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { getIndexDataApi } from "../api/list.js";
import { useSearchStore } from '../pinia/search.js';
import SellerInfo from "../components/SellerInfo.vue";
const searchStore = useSearchStore()

// 信用分升序或降序排序
const isCreditScoreDesc = ref(true)
// 总条数
const total = ref(0)
// 总页码数
const totalPage = ref(0)
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
// 是否显示搜索结果
const isShowSearchResult = ref(false)
// 是否初始化完成
const isInited = ref(false)
// 是否为移动端(屏幕宽度在768px以下)
const isMobile = window.outerWidth < 768 ? true : false
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
  if (isLoading.value) {
    return false
  }
  if (!isMobile || (isMobile && currentPage.value === 1)) {
    list.value = []
    document.querySelector('html').scrollTo(0,0)
  }
  isLoading.value = true
  isLoadFailed.value = false
  nextTick(() => {
    if (isShowSearchResult.value) {
      searchStore.search({
        page: currentPage.value,
        size: searchStore._pageSize,
        name: searchStore._name,
      })
      return false
    }
    getIndexDataApi({
      is_show_recommend: isShowRecommend.value ? 1 : 0,
      is_show_franchisee: isShowFranchisee.value ? 1 : 0,
      is_show_blacklist: isShowBlacklist.value ? 1 : 0,
      page: currentPage.value,
      page_size: pageSize.value,
      score_asc: isCreditScoreDesc.value ? 0 : 1,
    }).then(res => {
      console.log(res)
      if (res.status != 200 || res.data.status != 1000 || !res.data.data || res.data.data.length === 0) {
        isLoadFailed.value = true
        return false
      }
      res.data.data = res.data.data.map(item => {
        item.isBlacklist = Number(item.isBlacklist) === 1
        item.isFranchisee = Number(item.isFranchisee) === 1
        item.goods = item.goods.map(item1 => {
          item1.goods_price = Number(item1.goods_price)
          return item1
        })
        return item
      })
      isInited.value = true
      isLoadFailed.value = false
      if (isMobile) {
        list.value.push(...res.data.data)
      } else {
        list.value = res.data.data
      }
      totalPage.value = Number(res.data.total_page)
      if (isMobile && currentPage.value <= totalPage.value) {
        currentPage.value = Number(res.data.current_page) + 1
      } else {
        currentPage.value = Number(res.data.current_page)
      }
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
// 订阅搜索
const unsubscribeSearchStore = searchStore.$subscribe((mutation, state) => {
  /*
   * mutation主要包含三个属性值：
   *   events：当前state改变的具体数据，包括改变前的值和改变后的值等等数据
   *   storeId：是当前store的id
   *   type：用于记录这次数据变化是通过什么途径，主要有三个分别是
   *         “direct” ：通过 action 变化的
   *         ”patch object“ ：通过 $patch 传递对象的方式改变的
   *         “patch function” ：通过 $patch 传递函数的方式改变的
   *
   *
   */
  // 在此处监听store中值的变化，当变化为某个值的时候，做一些业务操作
  console.log(mutation, state)
  if (Number(state._currentPage) === 1) {
    document.querySelector('html').scrollTo(0,0)
  }
  isShowSearchResult.value = true
  total.value = state._totalSize
  totalPage.value = state._totalPage
  pageSize.value = state._pageSize
  currentPage.value = isMobile && isShowSearchResult.value ? Number(state._currentPage) + 1 : state._currentPage
  if (!state._isLoading && state._isSuccess) {
    list.value = isMobile && Number(state._currentPage) === 1 ? state._list : list.value.concat(state._list)
  }
  isLoading.value = state._isLoading
  isLoadFailed.value = state._isFailed
  isInited.value = state._list.length > 0
}, {
  detached: false,
  // detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
  // 如果设置detached值为 true 时，即使所在组件被卸载，订阅依然在生效
  // 参考文档：https://pinia.web3doc.top/core-concepts/state.html#%E8%AE%A2%E9%98%85%E7%8A%B6%E6%80%81
})
const threshold = 4000
const pageScrollHandle = () => {
  if (!isMobile) {
    return false
  }
  if (isLoading.value) {
    return false
  }
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
  if (scrollTop + windowHeight + threshold >= scrollHeight) {
    console.log('到达底部');
    loadmore()
  }
}
onMounted(() => {
  window.addEventListener('scroll', pageScrollHandle)
})
// 卸载时要取消监听事件
onUnmounted(() => {
  window.removeEventListener('scroll', pageScrollHandle)
  unsubscribeSearchStore()
})
// 默认进来的时候就加载数据
loadmore()
</script>
<style scoped>
.top_1_tag{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
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
