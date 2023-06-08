<template>
  <div v-if="isMobile" class="inner">
    <ul id="user_votes" class="list-users-votes">
      <li class="js-hidden-list-element list-jury-notes__item" v-for="(item, index) in rankList" :key="index" @click="gotoDetail(item.id)">
        <p v-if="(calcRankIndex(index) - 1) * 1 <= 2">NO.{{ calcRankIndex(index) }} {{item.company_name}}</p>
        <p class="detail_text" v-else>{{ calcRankIndex(index) }}. {{item.company_name}}</p>
        <div class="info_all">
          <div class="info2">
            <div class="info2_1">
              <svg viewBox="0 0 8.4666669 8.4666669" class="icon_l"  fill="var(--navbar-color)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs2"></defs> <g id="layer1" transform="translate(0,-288.53332)"> <path d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z" id="path929" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:var(--navbar-color);solid-opacity:1;vector-effect:none;fill:var(--navbar-color);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"></path> </g> </g></svg>
              <text class="margin-10-left">{{item.address}}</text>
            </div>
            <div class="address_text info2_2">
              <text>法定代表人：{{ item.corporation }}</text>
              <text>社会信用代码：{{ item.credit_code }}</text>
            </div>
          </div>
          <div class="info_right">
            <AdvantageIcon location="right" size="3">
              <template #iconDetail>
                <CreditScore :credit-score="item.score" credit-score-text="信用分" :font-size="18" :font-size1="5" height="70px"></CreditScore>
              </template>
            </AdvantageIcon>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="inner" v-else>
<!--    排行榜开始-->
    <div>

    </div>
<!--    排行榜结束-->
    <div class="heading-section mb-0">
      <div class="heading-section__left">
      </div>
    </div>
    <div class="content-tabs">
      <div class="content-tabs__item active" id="votes-3">
        <div class="grid-score grid-score--titles" style="--score-cols: 4">
          <div class="grid-score__item">评论</div>
          <div class="grid-score__item">问答</div>
          <div class="grid-score__item">投诉</div>
          <div class="grid-score__item orderable" @click="changeScoreOrder">信用分
            <svg t="1686210211523" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2376" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" style="display: inline-block;width: 24px;height: 24px;">
              <path d="M873.28 681.28a32 32 0 0 1 45.44 45.44l-128 128a32 32 0 0 1-45.44-45.44z" p-id="2377" v-if="scoreOrder==='desc'"></path>
              <path d="M871.28 405.16a32 32 0 0 0 45.44 -45.44l-128 -128a32 32 0 0 1-45.44+45.44z" p-id="2378" v-else></path>
              <path d="M800 832a32 32 0 0 1-64 0V256a32 32 0 0 1 64 0zM192 288a32 32 0 0 1 0-64h448a32 32 0 0 1 0 64z m0 192a32 32 0 0 1 0-64h448a32 32 0 0 1 0 64z m0 192a32 32 0 0 1 0-64h448a32 32 0 0 1 0 64z m0 192a32 32 0 0 1 0-64h448a32 32 0 0 1 0 64z" p-id="2378"></path>
            </svg>
          </div>
        </div>
        <ul id="user_votes" class="list-users-votes">
          <li class="js-hidden-list-element list-jury-notes__item" v-for="(item, index) in rankList" :key="index" @click="gotoDetail(item.id)">
            <div class="list-jury-notes__info">
              <div class="info">
                <Strong class="info_1" style="font-size: 20px" v-if="(calcRankIndex(index))*1 <= 10">NO.<span style="font-size: 50px">{{ calcRankIndex(index) }}</span></strong>
                <figure class="info_1" v-else>
                  <!--                如果index小于99，就用size=3,而且rank_text_3，如果index大于99，就用size=9而且strong使用class rank_text_9-->
                  <AdvantageIcon location="none" size="3" v-show="calcRankIndex(index) <=  99">
                    <template #iconDetail>
                      <Strong class="rank_text rank_text_3">{{ calcRankIndex(index) }}</Strong>
                    </template>
                  </AdvantageIcon>
                  <AdvantageIcon location="none" size="9" v-show="calcRankIndex(index) >  99">
                    <template #iconDetail>
                      <Strong class="rank_text rank_text_9">{{ calcRankIndex(index) }}</Strong>
                    </template>
                  </AdvantageIcon>
                </figure>
                <div class="info_2">
                  <p class="strong_text ">{{item.company_name}}</p>
                </div>
              </div>
              <div class="info2">
                <div class="info2_1">
                  <svg viewBox="0 0 8.4666669 8.4666669" class="icon_l"  fill="var(--navbar-color)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs2"></defs> <g id="layer1" transform="translate(0,-288.53332)"> <path d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z" id="path929" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:var(--navbar-color);solid-opacity:1;vector-effect:none;fill:var(--navbar-color);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"></path> </g> </g></svg>
                  <text class="address_text margin-10-left">{{item.address}}</text>
                </div>
                <div class="address_text info2_2">
                  <text>法定代表人：{{ item.corporation }}</text>
                  <text>社会信用代码：{{ item.credit_code }}</text>
                </div>
              </div>
            </div>

            <div class="list-jury-notes__score">
              <div class="grid-score" style="--score-cols: 4">
                <div class="grid-score__item" data-dl-uid="78" data-dl-original="true" data-dl-translated="true">{{ item.comment_count }}</div>
                <div class="grid-score__item" data-dl-uid="79" data-dl-original="true" data-dl-translated="true">{{ item.ask_count }}</div>
                <div class="grid-score__item" data-dl-uid="80" data-dl-original="true" data-dl-translated="true">{{ item.complaint_count }}</div>
                <div class="grid-score__item grid-score__item--total" data-dl-uid="82" data-dl-original="true" data-dl-translated="true"> <div class="grid-score__item" data-dl-uid="81" data-dl-original="true" data-dl-translated="true">{{item.score}}</div></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="pagination_container">
    <div class="pagination">
      <template v-for="(item, index) in pagination">
        <span v-if="isNaN(Number(item))" class="pagination__ellipsis">{{ item }}</span>
        <template v-else>
          <span v-if="paginationCurrentPage == item" class="pagination__item pagination__item--current">{{ item }}</span>
          <a v-else href="javascript:void(0);" @click="getRankList({page: item, isAuto: false})" class="pagination__item">{{ item }}</a>
        </template>
      </template>
      <a v-if="paginationCurrentPage < totalPage" href="javascript:void(0);" @click="getRankList({page: paginationCurrentPage + 1, isAuto: false})" class="pagination__next ">下一页</a>
    </div>
  </div>
</template>
<style scoped>
.rank_text{
  color:var(--navbar-bg-color);
}
.rank_text_3{
  width: 300px;
  font-size: 2em;
  display: flex;justify-content: center;align-items: center;

}
.rank_text_9{
  padding: 10px 10px;
  display: flex;justify-content: center;align-items: center;
}
.info{
  line-height: 2em;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.info_1{
  width: 120px;
}
.info_2{
  flex:1;
}
.info2{
  flex: 1;
}
.info2_1{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 0;
}
.info2_2{
  margin: 10px 0 0 30px;
  display: flex;
  flex-direction: column;
}
.info2_2 text:last-child{
  margin-top: 10px;
}
.address_text{
  font-size: 1em;
  line-height: 1.5em;
  flex: 1;
}
.strong_text{
  font-size: 1.1em;
  margin: 0 0.5em 0 0;
  font-weight: 400;
}
.detail_text{
  font-size: 0.9em;
}
.inner {
  --innerWidth: 1920px;
  width: 100%;
  max-width: var(--innerWidth);
  margin-top: 50px;
  padding: 0 8px;
}
.mb-0{
  margin-bottom: 0 !important;
}
.heading-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 71px;
  margin-bottom: 48px;
  background-image: var(--dotted-color);
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x
}

.heading-section.sticky {
  position: sticky;
  top: 71px;
  z-index: 1
}

.heading-section__left {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%
}

.heading-section .menu-tabs {
  display: flex;
  align-items: center;
  height: 100%
}

.content-tabs__item {
  position: relative;
  display: none
}

.content-tabs__item.active {
  display: block
}

.grid-score {
  position: relative;
  right: -20px;
  display: grid;
  grid-template-columns: repeat(var(--score-cols, 9), 1fr)
}

.grid-score--titles {
  position: absolute;
  top: -50px;
  right: 0;
  font-weight: 300
}

.grid-score__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  text-align: center;
  line-height: normal
}

.grid-score__item.orderable {
  cursor: pointer;
}

.grid-score__item.orderable svg {
  fill: var(--navbar-color);
}

.grid-score__item--total {
  position: relative;
  top: -16px;
  height: calc(100% + 32px);
  font-weight: bold;
  background: #0deaf6;
  font-size: 1.8em;
}
[data-theme="dark"] .grid-score__item--total {
  background: #003b51;
}
.list-jury-notes {
  position: relative
}

.list-jury-notes__item {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
}

.list-jury-notes__item:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--dotted-color);
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  pointer-events: none
}

.list-jury-notes__item:last-child {
  background-image: none
}

.list-jury-notes__item:nth-child(odd) {
  /*background: var(--list-jury-notes__item-odd);*/
}

.list-jury-notes__info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 28px
}

.list-jury-notes__info figure {
  flex-shrink: 0
}

.list-jury-notes__info figure img {
  display: block;
  border-radius: 50%
}

.list-jury-notes__score {
  display: flex;
  justify-content: flex-end
}

.pagination {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin: 50px 8px 10px;
  font-weight: bold;
  line-height: 200%;
}
@media screen and (max-width: 425px) {
  .pagination {
    justify-content: center;
    letter-spacing: 2px;
  }
}
@media screen and (max-width: 375px) {
  .pagination {
    gap: 4px;
    margin-left: 3px;
    margin-right: 3px;
    letter-spacing: 1px;
  }
}
@media screen and (max-width: 340px) {
  .pagination {
    gap: 4px;
    margin-left: 2px;
    margin-right: 2px;
    letter-spacing: 0px;
  }
}
.pagination a {
  text-decoration: none;
}
.pagination__item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  min-height: 32px;
  padding: 0 5px;
  border-radius: 8px;
  font-size: 12px;
  color: #222;
  transition: all 0.3s;
}
[data-theme="dark"] .pagination__item {
  color: #fff;
}
.pagination__item--current, .pagination__item:hover {
  background: #222;
  color: #fff;
  padding: 0 5px;
}
[data-theme="dark"] .pagination__item--current, [data-theme="dark"] .pagination__item:hover {
  background: #3b3b3b;
}
.link-underlined {
  position: relative;
  display: inline-block;
  line-height: normal;
  color: var(--link-underlined-color);
  border: none;
  cursor: pointer;
}
.link-underlined:before {
  content: "";
  position: absolute;
  bottom: -0.2em;
  left: 0;
  width: 100%;
  height: 2px;
  background-repeat: no-repeat;
  background-image: var(--link-underlined-before);
  background-size: 220% 100%;
  background-position: 100% 50%;
  transition: .3s ease-out;
}
.link-underlined:hover:before {
  background-position: 0% 50%;
}
.pagination__next {
  margin-left: 1em;
  white-space: nowrap;
}
.pagination .link-underlined {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 14px;
}
@media only screen and (max-width: 989px) {
  .list-jury-notes__item {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px 20px;
    font-size: 18px;
  }
  p{
    line-height: 2em;
  }
  .info2_1 text{
    font-size: 0.75em;
    line-height: 1.6em;
    flex: 1;
  }
  .icon_l {
    width: 15px;
    height: 15px;
  }
  .info2_1{
    margin: 0.3em 0;
  }
  .info2_2{
    margin: 0 0 0 22px;
    display: flex;
    flex-direction: column;
  }
  .info2_2 text{
    margin: 0.5em 0;
  }
  .info_all{
    display: flex;
    flex-direction: row;
  }
  .info2{
    flex: 1;
    font-weight: 300;
  }
  .info_right{
    width: 50px;
    display: flex;
    align-items: center;
  }
  .address_text{
    font-size: 0.75em;
    line-height: 1.6em;
  }
  .info2_2 text[data-v-35a39cc0]:last-child {
     margin-top: 0;
  }
}
</style>
<script setup>
import { getRankingListApi } from "../api/list";
import AdvantageIcon from "../components/AdvantageIcon.vue";
import {nextTick, onActivated, onBeforeUnmount, onDeactivated, onMounted, onUnmounted, ref} from "vue";

const isMobile = ref(window.matchMedia("(max-width: 990px)").matches);
console.log(isMobile.value);
const resizeListener = () => {
  isMobile.value = window.matchMedia("(max-width: 990px)").matches;
}
console.log(isMobile.value);

onMounted(() => {
  window.addEventListener("resize", resizeListener);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeListener);
});

const rankList = ref([
  { id: 0, company_name: '杭州木材有限公司', address: '杭州市西湖区文三路123号', score: Math.floor(Math.random() * 41 + 60) },
  { id: 1, company_name: '上海森林木材股份公司', address: '上海市浦东新区世纪大道456号', score: Math.floor(Math.random() * 41 + 60) },
  { id: 2, company_name: '北京林业大木有限责任公司', address: '北京市海淀区中关村大街789号', score: Math.floor(Math.random() * 41 + 60) },
  { id: 3, company_name: '广州绿色森林木业有限公司', address: '广州市天河区珠江新城321号', score: Math.floor(Math.random() * 41 + 60) },
  { id: 4, company_name: '深圳华润木材集团', address: '深圳市福田区福华三路654号', score: Math.floor(Math.random() * 41 + 60) },
  { id: 5, company_name: '南京松木有限公司', address: '南京市建邺区应天大街987号', score: Math.floor(Math.random() * 41 + 60) },
  { id: 6, company_name: '苏州环保木材有限公司', address: '苏州市工业园区星湖街135号', score: Math.floor(Math.random() * 41 + 60) },
  { id: 7, company_name: '武汉长江木材公司', address: '武汉市武昌区徐东大街246号', score: Math.floor(Math.random() * 41 + 60) },
  { id: 8, company_name: '西安古城木材有限公司', address: '西安市雁塔区大雁塔街753号', score: Math.floor(Math.random() * 41 + 60) },
  { id: 9, company_name: '成都大熊猫木材公司', address: '成都市武侯区天府大道864号', score: Math.floor(Math.random() * 41 + 60) }
])

/**
 * 按照 `from` `to` 的范围创建一个数组
 * @param {Number} from 起始数字
 * @param {Number} to 末尾数字
 * @return {Number[]} 指定的数字范围数组
 */
const range = (from, to) => {
  if (isNaN(Number(from)) || Math.abs(Number(from)) === Infinity) {
    return false
  }
  if (isNaN(Number(to)) || Math.abs(Number(to)) === Infinity) {
    return false
  }
  let arr = []
  if (from > to) {
    for (let i = from; i >= to; i--) {
      arr.push(i)
    }
  } else {
    for (let i = from; i <= to; i++) {
      arr.push(i)
    }
  }
  return arr
}

/**
 * 渲染分页
 * @param {Number} totalPage 总页数
 * @param {Number} currentPage 当前页
 */
const page = (totalPage, currentPage) => {
  totalPage = Number(totalPage)
  currentPage = Number(currentPage)
  if (isNaN(totalPage) || isNaN(currentPage)) {
    return false
  }

  /**
   * totalPage = 5
   * paginationSize = 5
   * 则 1 2 3 4 5
   */
  if (totalPage <= paginationSize.value) {
    pagination.value = range(1, totalPage)
    return false
  }

  /**
   * currentPage = 3
   * paginationSize = 5
   * totalPage = 7
   * 则 1 2 3 4 ... 7
   */
  if (currentPage <= paginationSize.value - 2 && totalPage >= paginationSize.value + 2) {
    pagination.value = range(1, paginationSize.value - 1).concat('...', totalPage)
    return false
  }

  /**
   * currentPage = 3
   * paginationSize = 5
   * totalPage = 6
   * 则 1 2 3 4 ... 6
   */
  if (currentPage <= paginationSize.value - 2 && totalPage < paginationSize.value + 2) {
    pagination.value = range(1, paginationSize.value - 1).concat('...', totalPage)
  }

  /**
   * currentPage = 8
   * totalPage = 10
   * paginationSize = 5
   * 则 1 ... 7 8 9 10
   */
  if (currentPage >= totalPage - paginationSize.value + 3) {
    pagination.value = [1, '...'].concat(range(totalPage - paginationSize.value + 2, totalPage))
    return false
  }

  /**
   * currentPage = 5
   * totalPage = 10
   * 则 1 ... 4 5 6 ... 10
   */
  pagination.value = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPage]
}

// 是否初始化完成
const isInited = ref(false)
// 是否加载中
const isLoading = ref(false)
// 总条数
const totalCount = ref(0)
// 总页数
const totalPage = ref(1)
// 当前页
const currentPage = ref(1)
// 每页大小
const pageSize = ref(20)
// 分页
const pagination = ref([1])
// 分页大小
const paginationSize = ref(5)
// 分页的当前页
const paginationCurrentPage = ref(1)

// 信用分排序
const scoreOrder = ref('desc')

const changeScoreOrder = () => {
  if (scoreOrder.value === 'desc') {
    scoreOrder.value = 'asc'
  } else {
    scoreOrder.value = 'desc' 
  }
  getRankList({
    page: 1,
    isAuto: false,
  })
}

// 列表第一项的排名
const firstItemRank = ref(((currentPage.value - 1) * pageSize.value) + 1)

/**
 * @param {number} index
 */
const calcRankIndex = (index) => {
  if (scoreOrder.value === 'desc') {
    return firstItemRank.value + index
  } else {
    return totalCount.value - (firstItemRank.value + index - 1)
  }
}

// 正在获取排行榜列表的任务
let requestTaskList = []

// 自动加载下一页定时的任务
let autoNextPageTimerList = []

/**
 * 终止所有请求任务
 */
const abortAllRequestTask = () => {
  requestTaskList.forEach(task => {
    // 中止请求任务
    task.abort()
  })
}

/**
 * 停止所有自动加载下一页定时任务
 */
const clearAllAutoNextPageTimer = () => {
  autoNextPageTimerList.forEach(timer => {
    clearTimeout(timer)
  })
  autoNextPageTimerList = []
}

/**
 * @param {object} params
 * @param {Number} params.page 当前页
 * @param {boolean} params.isAuto 是否为下拉自动加载的
 * @param {('score_desc'|'score_asc')} params.order 排序规则
 * @return {false | AbortController}
 */
const getRankList = (params) => {
  if (isInited.value && Number(params.page) > Number(totalPage.value) && Number(params.page) !== 1) {
    return false
  }

  if (!params || !params.hasOwnProperty('page_size')) {
    params.page_size = pageSize.value;
  }

  if (!params || !params.hasOwnProperty('order')) {
    params.order = scoreOrder.value === 'asc' ? 'score_asc' : 'score_desc'
  }

  // 中止其它请求任务
  abortAllRequestTask()
  // 定义当前请求任务的中止控制器
  let controller = new AbortController()
  // 加入到请求任务中
  requestTaskList.push(controller)

  // 停止所有正在进行的自动加载下一页定时任务
  clearAllAutoNextPageTimer()

  // 标识正在加载
  isLoading.value = true
  if (!params.isAuto) {
    // 如果是点击分页的页码，则高亮显示点击的页码
    paginationCurrentPage.value = Number(params.page)
  }
  if (Number(params.page) === 1 || !params.isAuto) {
    // 如果是首页，或者是点击分页的页码，则清空列表数据
    rankList.value = []
  }

  getRankingListApi(params, controller).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      // 如果服务器返回错误请求状态码为200或者非正常状态码，则让分页显示当前页
      paginationCurrentPage.value = currentPage.value
      // 渲染分页
      page(totalPage.value, currentPage.value)
      return false
    }

    if (!isInited.value) {
      // 标识为已初始化
      isInited.value = true
    }

    if (params.isAuto) {
      // 如果是下拉加载更多的，则合并列表数组
      rankList.value = rankList.value.concat(res.data.data.data)
    } else {
      // 如果是点击分页的页码的，则更新列表
      rankList.value = res.data.data.data
    }

    // 更新当前页
    currentPage.value = Number(res.data.data.current_page)
    paginationCurrentPage.value = Number(res.data.data.current_page)

    // 更新总条数
    totalCount.value = Number(res.data.data.total_count)

    // 更新总页数
    totalPage.value = Number(res.data.data.total_page)

    // 渲染分页
    page(res.data.data.total_page, res.data.data.current_page)

    if (!params.isAuto) {
      firstItemRank.value = ((Number(res.data.data.current_page) - 1) * pageSize.value) + 1
    }
  }).catch(() => {
    if (controller.signal.aborted) {
      // 如果是取消请求，则不需要重置分页
      return false
    }

    // 如果请求失败，则让分页显示当前页
    paginationCurrentPage.value = currentPage.value

    // 渲染分页
    page(totalPage.value, currentPage.value)
  }).finally(() => {
    // 加载完成
    requestTaskList.splice(requestTaskList.indexOf(controller), 1)
    isLoading.value = false
  })

  // 返回当前请求任务的中止控制器
  return controller
}

const gotoDetail = (id) => {
  window.location.assign(`/detail?company_info_id=${id}`)
}

// 定义监听器的回调函数
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // 元素不在视野范围内
      return false
    }

    if (!isInited.value || isLoading.value) {
      // 如果是正在加载中，则不做任何处理
      return false
    }

    // 1000毫秒内没有点击任何页码，自动加载下一页
    autoNextPageTimerList.push(setTimeout(() => {
      getRankList({
        page: Number(currentPage.value) + 1,
        isAuto: true,
      })
    }, 1000))
  })
}

// 定义页面监听器
const observer = new IntersectionObserver(callback, {
  rootMargin: '0px',
  threshold: 0.5,
})

getRankList({
  page: currentPage.value,
  isAuto: true,
})

onMounted(() => {
  nextTick(() => {
    // 页面加载完成后，监听分页是否在视野方位范围内
    observer.observe(document.querySelector('.pagination_container'))
  })
})

onBeforeUnmount(() => {
  // 页面卸载前取消监听器
  observer.disconnect()
})

onActivated(() => {
  // 切换回页面后，监听分页是否在视野范围内
  observer.observe(document.querySelector('.pagination_container'))
})

onDeactivated(() => {
  // 离开页面时，取消监听分页是否在视野范围内
  observer.unobserve(document.querySelector('.pagination_container'))
})
</script>
