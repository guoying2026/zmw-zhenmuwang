<style>
a,a:hover {
  color: inherit;
}
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
  cursor: pointer;
}
@media (min-width: 576px) {
  .padding-20{
    padding: 10px 20px 10px 50px !important;
  }
}
@media (max-width: 576px) {
  .padding-20{
    padding: 0px 20px 0px 20px !important;
  }
}
.el-col{
  margin-bottom: 10px;
}
.goods_card {
  height: 100%;
}
.goods_item {
  height: calc(100% - 30vh - 5px);
  justify-content: space-between;
}
.pages.is-background {
  justify-content: center;
}
.pages.is-background .el-pager .number {
  padding: 0.5rem 1rem;
}
.pages.is-background .el-pager .number
,.pages.is-background .el-pager .more.btn-quicknext
,.pages.is-background .el-pager .more.btn-quickprev
,.pages.is-background .btn-prev
,.pages.is-background .btn-next {
  outline: 0;
  text-decoration: none;
  transition: .3s;
  margin: 1rem 0.2rem;
  background-color: #151515;
  color: #fff;
  border-radius: 6px;
}
.pages.is-background .el-pager .number.is-active {
  background: none;
  color: #151515;
}
.all_list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
}
.all_list_item{
  width: 100%;
}
</style>
<template>
    <div class="top_1_tag font-15-size margin-60-top">
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
    <div class="all_list">
      <!-- pc端在加载时显示骨架屏，移动端在加载第一页时显示骨架屏，其它页底部显示骨架屏 -->
      <template v-if="isMobile?currentPage===1&&isLoading:isLoading">
        <el-skeleton animated>
          <template #template>
            <div v-for="i in 10">
              <div class="first">
                <el-row :gutter="24">
                  <el-col :span="24" :md="12">
                    <div class="padding-20 left">
                      <div class="left_1" style="align-items: flex-start;">
                        <el-skeleton-item variant="image" style="height: 80px;width: 100px;" />
                        <div class="left_1_2">
                          <el-skeleton-item variant="h1" class="margin-10-left" style="width: 340px;height: 27px;" />
                          <div class="left_1_2_2">
                            <el-skeleton-item variant="rect" class="margin-10-left margin-10-top margin-10-bottom" style="width: 95px;height: 44px;" />
                          </div>
                        </div>
                      </div>
                      <div class="info">
                        <div class="item margin-10-top" v-for="j in 6">
                          <el-skeleton-item variant="p" />
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="24" :md="12">
                    <el-row :gutter="8" class="goods">
                      <el-col v-for="j in 4" :span="12" :md="6">
                        <div class="goods_card">
                          <el-skeleton-item variant="image" style="width: 100%; height: 30vh;" />
                          <div style="display: flex;flex-direction: column;justify-content: space-between;">
                            <el-skeleton-item variant="h3" class="margin-10-top" style="width: 50%;" />
                            <el-skeleton-item variant="text" class="margin-10-top" v-for="k in 2" />
                            <el-skeleton-item variant="text" class="margin-10-top" style="width: 30%;align-self: flex-end;" />
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
        </el-skeleton>
      </template>
      <el-empty v-else-if="isMobile?currentPage===1&&isLoadFailed:isLoadFailed">
        <template #description>
          <span class="fail_tips_text">加载失败，请稍后<el-link :underline="false" @click="reloadHandle">重试</el-link></span>
        </template>
      </el-empty>
      <template v-else>
        <el-empty v-if="list.length === 0">
          <template #description>
            <span class="fail_tips_text">暂时没有<template v-if="isOnlyViewFranchisee">加盟商</template><template v-else-if="isOnlyViewBlackList">黑名单</template><template v-else>任何</template>记录哦</span>
          </template>
        </el-empty>
        <div v-for="(item,index) in list" :key="index" class="all_list_item" v-else>
          <div class="first">
  <!--          不展示商品 start-->
            <router-link :to="'/blackDetail?company_info_id='+item.id" v-if="item.isBlacklist">
              <div class="padding-20 left">
                <div class="left_1">
                  <CreditScore :credit-score="item.score" credit-score-text="信用分" :font-size="40" height="80" width="100px"></CreditScore>
                  <div class="left_1_2">
                    <template v-if="item.id&&item.id!='0'&&item.id!=0&&item.id!='-1'&&item.id!=-1&&item.id.length>0">
                      <text class="font-18-size font-60-weight margin-10-left">{{ item.company_name }}</text>
                    </template>
                    <template v-else>
                      <el-link type="info" :underline="false" @click.stop="hasNoItemIdTips"><text class="font-18-size font-60-weight margin-10-left">{{ item.company_name }}</text></el-link>
                    </template>
                    <div class="left_1_2_2">
                      <Tag class="tag" tag="黑名单" number="60" color="black" v-if="item.isBlacklist"></Tag>
                      <Tag class="tag" tag="加盟商" number="60" color="orange" v-if="item.isFranchisee"></Tag>
                      <Tag class="tag margin-10-left" v-if="item.province&&typeof item.province=='string'&&item.province.length>0" :tag="item.province" number="60" color="blue"></Tag>
                    </div>
                  </div>
                </div>
                <SellerInfo :item="item"></SellerInfo>
              </div>
            </router-link>
  <!--          不展示商品end-->
  <!--          展示商品开始-->
            <el-row :gutter="24" v-else>
              <el-col :span="24" :md="12" :class="item.goods.length>0?'':'grey_bg'">
                <router-link :to="'/detail?company_info_id='+item.id">
                  <div class="padding-20 left">
                    <div class="left_1">
                      <CreditScore :credit-score="item.score" credit-score-text="信用分" :font-size="40" height="80" width="100px"></CreditScore>
                      <div class="left_1_2">
                        <template v-if="item.id&&item.id!='0'&&item.id!=0&&item.id!='-1'&&item.id!=-1&&item.id.length>0">
                          <text class="font-18-size font-60-weight margin-10-left">{{ item.company_name }}</text>
                        </template>
                        <template v-else>
                          <el-link type="info" :underline="false" @click.stop="hasNoItemIdTips"><text class="font-18-size font-60-weight margin-10-left">{{ item.company_name }}</text></el-link>
                        </template>
                        <div class="left_1_2_2">
                          <Tag class="tag" tag="黑名单" number="60" color="black" v-if="item.isBlacklist"></Tag>
                          <Tag class="tag" tag="加盟商" number="60" color="orange" v-if="item.isFranchisee"></Tag>
                          <Tag class="tag margin-10-left" :tag="item.province" number="60" color="blue"></Tag>
                        </div>
                      </div>
                    </div>
                    <SellerInfo :item="item"></SellerInfo>
                  </div>
                </router-link>
              </el-col>
              <el-col :span="24" :md="12">
                <GoodsList :list="item.goods" :size="300" v-if="item.goods.length>0"></GoodsList>
                <GuidePublishGoods :flag=1 v-else></GuidePublishGoods>
              </el-col>
            </el-row>
  <!--          展示商品结束-->
          </div>
        </div>
      </template>
    </div>

      <el-row v-if="!isMobile&&list.length>0" :gutter="1" justify="center" class="hidden-xs-only" :xs="0">
        <el-col :span="1" class="no_max_width">
          <el-pagination
            class="pages"
            background
            :layout="(currentPage<=1?'':'prev, ')+'pager'+(currentPage>=totalPage?'':', next')"
            :total="total"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            @current-change="currentPageChange"
          />
        </el-col>
      </el-row>
      <el-backtop :right="10" :bottom="10">
        <i class="el-icon el-backtop__icon" style="color: #151515;">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M512 320 192 704h639.936z"></path>
          </svg>
        </i>
      </el-backtop>
</template>
<script setup>
import '../assets/tag.css'
import CreditScore from "../components/CreditScore.vue";
import GoodsList from "../components/GoodsList.vue";
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { getIndexDataApi } from "../api/list.js";
import SellerInfo from "../components/SellerInfo.vue";
import Tag from "../components/Tag.vue"
import GuidePublishGoods from "../components/GuidePublishGoods.vue";

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
  if (totalPage.value > 0 && currentPage.value > totalPage.value) {
    return false
  }
  isLoading.value = true
  isLoadFailed.value = false
  nextTick(() => {
    getIndexDataApi({
      is_show_recommend: isShowRecommend.value ? 1 : 0,
      is_show_franchisee: isShowFranchisee.value ? 1 : 0,
      is_show_blacklist: isShowBlacklist.value ? 1 : 0,
      page: currentPage.value,
      page_size: pageSize.value,
      score_asc: isCreditScoreDesc.value ? 0 : 1,
    }).then(res => {
      console.log(res)
      if (res.status != 200 || res.data.status != 1000 || !res.data.data) {
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
        if (!item.hasOwnProperty('credit_score')) {
          item.credit_score = "0"
        }
        if (item.hasOwnProperty('credit_score') && !item.hasOwnProperty('score')) {
          item.score = item.credit_score
        }
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
// 点击了没有id的商家的链接时，给出提示
const hasNoItemIdTips = () => {
  ElMessage({
    message: '很抱歉，暂时没有该商家的详细信息哦',
    type: 'warning',
  })
}
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
