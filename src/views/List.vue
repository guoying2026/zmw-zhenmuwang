<style>
a,a:hover {
  color: inherit;
}
.left_1{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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
@media (min-width: 990px) {
  .padding-20{
    padding: 10px 30px 10px 30px !important;
  }
}
@media (max-width: 990px) {
  .padding-20{
    padding: 0px 20px 0px 20px !important;
  }
}
.el-col{
  padding-top: 10px;
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
}
.el-skeleton {
  width: 92%;
}
.all_list_item{
  width: 92%;
}

.row:nth-child(odd) .column:nth-child(odd),
.row:nth-child(even) .column:nth-child(even) {
  background-color: #f3f6fd;
}

.row:nth-child(odd) .column:nth-child(even),
.row:nth-child(even) .column:nth-child(odd) {
  background-color: #fff;
}
[data-theme="dark"] .row:nth-child(odd) .column:nth-child(odd),
[data-theme="dark"] .row:nth-child(even) .column:nth-child(even){
  background-image: linear-gradient(109.61deg,#070708 4.26%,#385f7f 84.84%)
}
[data-theme="dark"] .row:nth-child(odd) .column:nth-child(even),
[data-theme="dark"] .row:nth-child(even) .column:nth-child(odd) {
  background-color: #000;
}
@media screen and (max-width: 991px) {
  .row:nth-child(odd) .column:nth-child(odd),
  .row:nth-child(even) .column:nth-child(even),
  .row:nth-child(odd) .column:nth-child(even),
  .row:nth-child(even) .column:nth-child(odd) {
    background-color: #fff;
  }
  .row:nth-child(even) .column:nth-child(odd),
  .row:nth-child(odd) .column:nth-child(odd) {
    background-color: #f3f6fd;
  }
}
.introduce{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_image03ab7c9bb851470576d5542d055ee021.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.introduce_space{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 94%;
}
.introduce_space_1{
  justify-content: space-between !important;
}
.introduce_1_item{
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 10px;
}
.mask_1{
  width: 50%;
}
.mask_3{
  width: 400px;
}
.mask_2{
  width: 24%;
}
.mask_4{
  width: 300px;
}
.introduce_1{
  height: 200px;
  border-radius: 10px;
  background: #f3f6fd;
  display: flex;
  justify-content: center;
  align-items: center;
}
.introduce_2{
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-left: 6%;
}
.introduce_2_right{
  display: flex;
  flex-direction: column;
  align-items: center;
  /*background-color: #385f7f;*/
  background-color: #ea300e;
  color: #fff;
  padding: 10px 20px;
}
.introduce_3 {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 21px auto 84px; */
  margin: 11px auto 40px;
  /* padding: 16px 25px; */
  padding: 8px 20px;
  background: #C3DAEE;
  /* font-size: 20px; */
  font-size: 0.8em;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #243344;
  border-radius: 27px;
}
.introduce_4 {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
}
.introduce_4 h1 {
  display: inline-block;
  /* font-size: 70px; */
  font-family: MiSans;
  font-weight: 600;
  color: #385F7F;
}
.introduce_4_right {
  display: inline-flex;
  flex-direction: column;
  line-height: 30px;
  padding: 21px 26px;
  background: linear-gradient(45deg, #4E6193, #31729B);
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  border-radius: 6px;
}
.introduce_5 {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 80px;
}
.introduce_5_input {
  --el-input-border: unset;
  --el-input-border-color: #fff;
  --el-input-bg-color: #fff;
  --el-input-hover-border-color: #fff;
  --el-input-clear-hover-color: #fff;
  --el-input-focus-border-color: #fff;
  --el-input-border-radius: 6px 0px 0px 6px;
  --el-input-placeholder-color: #999999;
  --el-input-text-color: var(--el-text-color-regular);
  width: 60vw;
  height: 60px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
}
.introduce_5_input .el-input-group__append {
  background: #385F7F;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  border-radius: 0px 6px 6px 0px;
}
@media (max-width: 425px) {
  .introduce_3 {
    width: 95%;
  }
  .introduce_4 h1 {
    font-size: 30px;
  }
  .introduce_4_right {
    font-size: 16px;
    padding: 1px 16px;
  }
  .introduce_4_right text {
    height: 20px;
    line-height: 20px;
  }
  .introduce_4_right text:first-of-type {
    margin-top: 5px;
  }
  .introduce_4_right text:last-of-type {
    margin-bottom: 5px;
  }
  .introduce_5_input {
    width: 90vw;
  }
  .introduce_5_input {
    --el-input-height: 20px;
    font-size: 15px;
  }
  .introduce_5_input .el-input-group__append {
    font-size: 16px;
  }
  .custom_tag {
    font-size: 12px;
    padding: 10px 15px;
    margin: 5px;
  }
  .left_1_2 text {
    font-size: 14px;
  }
}
@media (max-width: 375px) {
  .introduce_3 {
    width: 95%;
    border-radius: 100px;
  }
  .introduce_4 h1 {
    font-size: 25px;
  }
  .introduce_4_right {
    font-size: 14px;
    padding: 1px 16px;
  }
  .introduce_5_input {
    width: 90vw;
  }
  .introduce_5_input {
    --el-input-height: 20px;
    font-size: 14px;
  }
  .introduce_5_input .el-input-group__append {
    font-size: 14px;
  }
}
@media (max-width: 320px) {
  .introduce_3 {
    width: 95%;
    font-size: 0.7em;
    border-radius: 100px;
  }
  .introduce_4 h1 {
    font-size: 25px;
  }
  .introduce_4_right {
    font-size: 12px;
    padding: 1px 16px;
  }
  .introduce_5_input {
    width: 90vw;
  }
  .introduce_5_input {
    --el-input-height: 20px;
    font-size: 12px;
  }
  .introduce_5_input .el-input-group__append {
    font-size: 12px;
    padding: 0 18px;
  }
}
</style>
<template>
    <div class="margin-60-top introduce">
      <div class="introduce_3">真木网共收集了{{companyInfoCount}}家木材商，平台交易有保障，线上交易更便捷 ,黑名单商家已被平台拉黑，请勿与其交易</div>
      <div class="introduce_4">
        <h1>真木网&nbsp;|&nbsp;</h1>
        <div class="introduce_4_right">
          <text>全国木材商评价信用系统</text>
          <text>木材商必入驻的官方平台</text>
        </div>
      </div>
      <div class="introduce_5">
        <el-input class="introduce_5_input" prefix-icon="Search" v-model.trim="searchContent" placeholder="请输入企业名、人名等关键词查询">
          <template #append>
            <el-button class="introduce_5_button" @click="showSearchResult">查一下</el-button>
          </template>
        </el-input>
        <!-- 搜索框遮罩层 -->
        <div @click="searchSlideUp" :style="(isSearchSlideDown?'':'display: none;')+'position: fixed;top: 0;left: 0;width: 100vw;height: 100vh;z-index: 9999;'"></div>
        <!-- 搜索框主体 -->
        <div :class="'mini-live-search-cont '+(isSearchSlideDown?'miniSlideDown':'')">
          <!-- <label class="cf-one" for="mini-ls-input">搜索你需要的🥳</label>
          <input type="text" id="mini-ls-input" name="live-posts-search" v-model.trim="searchContent" placeholder="请输入企业名、商品、社会统一信用代码等关键词查询">
          <div :class="'mini-ls-loader'+(isSearching?' to-show':'')" role="status">
            <span></span>
          </div> -->
          <div class="mini-ls-results">
            <div class="mini-ls-scroller" v-if="searchResult.length>0">
              <template v-for="(item, index) in searchResult" :key="index">
                <router-link
                  class="mini-ls-item cf-one"
                  :to="item.type==0?('/detail?company_info_id='+item.id):('/goodsDetail?type=1&goods_id='+item.goods_id)"
                  :title="item.type==0?item.company_name:item.goods_title"
                  @click="searchSlideUp"
                >
                  <img
                    width="150"
                    height="150"
                    :src="(item.type==0?item.miniapp_img:item.main_url)"
                    class="mini-ls-thumb wp-post-image"
                    :alt="item.type==0?item.company_name:item.goods_title"
                    decoding="async"
                    loading="lazy"
                    :srcset="(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300 150w, '+(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300 300w, '+(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300 100w'"
                    sizes="(max-width: 150px) 100vw, 150px"
                    :onerror="'this.src=\''+(item.type==0?businessErrorImg:goodsErrorImg)+'\';this.srcset=\''+(item.type==0?businessErrorImg:goodsErrorImg)+' 150w, '+(item.type==0?businessErrorImg:goodsErrorImg)+' 300w, '+(item.type==0?businessErrorImg:goodsErrorImg)+'100w\';'"
                  >
                  <div class="mini-ls-title">{{ item.type==0?item.company_name:item.goods_title }}</div>
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="introduce_2">
        <h1>真木网｜</h1>
        <div class="introduce_2_right">
          <text>全国木材商评价信用系统</text>
          <text>木材商必入驻的官方平台</text>
        </div>
      </div> -->
<!--      <div class="introduce_space introduce_space_1">-->
<!--        <div class="introduce_1 mask_4">-->
<!--          <div class="introduce_1_item">-->
<!--            <h1>1234</h1>-->
<!--            <text class="font-20-size font-60-weight">加盟商</text>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="introduce_1 mask_3">-->
<!--          <div class="introduce_1_item">-->
<!--            <h1>45231993</h1>-->
<!--            <text class="font-20-size font-60-weight">木材商</text>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="introduce_1 mask_4">-->
<!--          <div class="introduce_1_item">-->
<!--            <h1>0</h1>-->
<!--            <text class="font-20-size font-60-weight">黑名单</text>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="introduce_space">-->
<!--        <div class="introduce_1 mask_1">-->
<!--          <div class="introduce_1_item">-->
<!--            <h1>45231993</h1>-->
<!--            <text class="font-20-size font-60-weight">木材商</text>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="introduce_space margin-20-top">-->
<!--        <div class="introduce_1 mask_2">-->
<!--          <div class="introduce_1_item">-->
<!--            <h1>1234</h1>-->
<!--            <text class="font-20-size font-60-weight">加盟商</text>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="introduce_1 mask_2 margin-2-left">-->
<!--          <div class="introduce_1_item">-->
<!--            <h1>0</h1>-->
<!--            <text class="font-20-size font-60-weight">黑名单</text>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="top_1_tag font-15-size margin-20-top">
      <div
          class="custom_tag font-60-weight dark_blue_reinforce_btn"
          @click="changeCreditScoreSort">
        信用分
        <el-icon>
          <SortDown v-if="isCreditScoreDesc" />
          <SortUp v-else />
        </el-icon>
      </div>
      <text
          class="custom_tag font-60-weight"
          :class="isOnlyViewFranchisee?'dark_blue_reinforce_btn':'blue_btn'"
          @click="handleOnlyViewFranchisee"
      >
        只看加盟商
      </text>
      <text
          :class="isOnlyViewBlackList?'dark_blue_reinforce_btn':'blue_btn'"
          @click="handleOnlyViewBlackList"
          class="custom_tag font-60-weight"
      >
        只看黑名单
      </text>
    </div>
    <div class="all_list">
      <!-- pc端在加载时显示骨架屏，移动端在加载第一页时显示骨架屏，其它页底部显示骨架屏 -->
      <template v-if="isMobile?currentPage===1&&isLoading:isLoading">
        <el-skeleton animated>
          <template #template>
            <div v-for="i in 10" class="margin-30-top">
              <el-row :gutter="24" class="row" v-for="(row, rowIndex) in numberOfRows" :key="'row-' + rowIndex">
                <el-col :span="24" :md="12" v-for="(item, columnIndex) in getRowItems(rowIndex)" :key="'column-' + rowIndex + '-' + columnIndex" class="column">
                  <div class="padding-20 left">
                    <div class="left_1">
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
              </el-row>
            </div>
          </template>
        </el-skeleton>
      </template>
      <el-empty v-else-if="isMobile?currentPage===1&&isLoadFailed:isLoadFailed">
        <template #description>
          <span class="fail_tips_text">加载失败，<template v-if="retryCount > retryMaxCount">请稍后<el-link :underline="false" @click="reloadHandle">重试</el-link></template><template v-else>{{retryCountdown}}秒后<el-link :underline="false" @click="reloadHandle">重新加载</el-link></template></span>
        </template>
      </el-empty>
      <template v-else>
        <el-empty v-if="list.length === 0">
          <template #description>
            <span class="fail_tips_text">暂时没有<template v-if="isOnlyViewFranchisee">加盟商</template><template v-else-if="isOnlyViewBlackList">黑名单</template><template v-else>任何</template>记录哦</span>
          </template>
        </el-empty>
        <div class="all_list_item margin-30-top" v-else>
  <!--          不展示商品 start-->
          <el-row :gutter="24" class="row" v-for="(row, rowIndex) in numberOfRows" :key="'row-' + rowIndex">
            <el-col :span="24" :md="12" v-for="(item, columnIndex) in getRowItems(rowIndex)" :key="'column-' + rowIndex + '-' + columnIndex" class="column">
              <router-link class=" left" to="/forum">
                <div class="left_1">
                  <CreditScore :credit-score="item.score" credit-score-text="信用分" :font-size="creditScoreFontSize" :font-size1="creditScoreFontSize1" height="80" :width="creditScoreWidth"></CreditScore>
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
                <SellerInfo :item="item" :item-middle-width="SellerInfoItemMiddleWidth" :item-middle-font-size="SellerInfoItemMiddleFontSize" :item-right-font-size="SellerInfoItemRightFontSize"></SellerInfo>
              </router-link>
            </el-col>
          </el-row>
  <!--          不展示商品end-->
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
import {computed, nextTick, onActivated, onDeactivated, onMounted, onUnmounted, ref} from 'vue'
import { getIndexDataApi, getCountsApi } from "../api/list.js";
import SellerInfo from "../components/SellerInfo.vue";
import Tag from "../components/Tag.vue"
import { getSearchResultApi } from '../api/search';
import { formatHttpsProtocol } from '../utils/httpReplace';

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
//颜色交替
const numberOfColumns = ref(2);

const numberOfRows = computed(() => {
  return Math.ceil(list.value.length / numberOfColumns.value);
});

const getRowItems = (rowIndex) => {
  const startIndex = rowIndex * numberOfColumns.value;
  return list.value.slice(startIndex, startIndex + numberOfColumns.value);
};

const creditScoreWidth = ref('100px');
const creditScoreFontSize = ref(40);
const creditScoreFontSize1 = ref(15);
const SellerInfoItemMiddleWidth = ref('170px');
const SellerInfoItemMiddleFontSize = ref('16px');
const SellerInfoItemRightFontSize = ref('16px');
if (window.innerWidth <= 425) {
  creditScoreWidth.value = '65px';
  creditScoreFontSize.value = 20;
  creditScoreFontSize1.value = 10;
  SellerInfoItemMiddleWidth.value = '85px';
  SellerInfoItemMiddleFontSize.value = '12px';
  SellerInfoItemRightFontSize.value = '13px';
}

const companyInfoCount = ref(0)
getCountsApi().then(res => {
  if (res.status != 200 || res.data.status != 1000) {
    return false
  }
  companyInfoCount.value = res.data.data.count.company_info
})

const isSearchSlideDown = ref(false);
const searchResult = ref([]);
const searchContent = ref('');
const isSearching = ref(false);
const goodsErrorImg = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png';
const businessErrorImg = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png';
const showSearchResult = () => {
  if (searchContent.value.length === 0) {
    return false
  }
  let searchCont = document.querySelector('.introduce_5 .mini-live-search-cont')
  searchCont.style.margin = '0'
  let searchBarRect = document.querySelector('.introduce_5 .el-input .el-input__wrapper').getBoundingClientRect()
  searchCont.style.left = searchBarRect.left + 'px'
  searchCont.style.width = searchBarRect.width + 'px'
  searchCont.style.top = searchBarRect.bottom + 'px'
  isSearchSlideDown.value = true
  // 执行搜索
  let promiseArr = []
  searchResult.value = []
  isSearching.value = true
  for (let i = 0; i < 3; i++) {
    promiseArr.push(getSearchResultApi({
      type: i,
      name: searchContent.value,
      page: 1,
    }).then(res => {
      if (res.status != 200 || res.data.status != 1000) {
        return false
      }
      res.data.data.forEach(item => {
        item.type = i
        if (item.type == 0) {
          if (item.miniapp_img) {
            item.miniapp_img = formatHttpsProtocol(item.miniapp_img)
          } else {
            item.miniapp_img = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
          }
        } else {
          if (item.main_url) {
            item.main_url = formatHttpsProtocol(item.main_url)
          } else {
            item.main_url = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
          }
        }
        searchResult.value.push(item)
      })
    }))
  }
  Promise.all(promiseArr).finally(() => {
    isSearching.value = false
  })
}
const searchSlideUp = () => {
  let searchCont = document.querySelector('.introduce_5 .mini-live-search-cont')
  searchCont.style.top = '0px'
  isSearchSlideDown.value = false
}

// 是否加载中
const isLoading = ref(false)
// 是否加载失败或者没有数据
const isLoadFailed = ref(false)
// 加载失败后进行重试的定时器
const loadFailedTimer = ref(null)
// 重新加载的剩余秒数
const retryCountdown = ref(3)
// 重新加载的次数
const retryCount = ref(0)
// 可连续重新加载的最大次数
const retryMaxCount = ref(5)
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
      // 倒计时秒数重置
      retryCountdown.value = 3
      if (loadFailedTimer.value) {
        clearInterval(loadFailedTimer.value)
        loadFailedTimer.value = null
      }
      if (isLoadFailed.value) {
        // 如果超过最大的加载次数，则不再重新加载数据，显示“加载失败”的消息
        if (retryCount.value > retryMaxCount.value) {
          return false
        }
        // 如果加载失败，则倒计时自动重新加载
        loadFailedTimer.value = setInterval(() => {
          if (retryCountdown.value > 0) {
            // 剩余秒数大于0,则自动递减
            retryCountdown.value = retryCountdown.value - 1
          } else {
            // 加载数据
            loadmore()
            // 记录已连续重新加载的次数
            retryCount.value = retryCount.value + 1
            // 清除定时器
            clearInterval(loadFailedTimer.value)
            loadFailedTimer.value = null
          }
        }, 1000)
      } else {
        // 已连续重新加载的次数清零
        retryCount.value = 0
      }
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
  if (isSearchSlideDown.value) {
    let searchBarRect = document.querySelector('.introduce_5 .el-input .el-input__wrapper').getBoundingClientRect()
    let searchCont = document.querySelector('.introduce_5 .mini-live-search-cont')
    searchCont.style.width = searchBarRect.width + 'px'
    searchCont.style.top = searchBarRect.bottom + 'px'
  }
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
onActivated(() => {
  window.addEventListener('scroll', pageScrollHandle)
})
onDeactivated(() => {
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
  position: sticky;
  top: 60px;
  z-index: 1500;
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
