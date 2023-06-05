<template>
  <div class="inner">
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
          <div class="grid-score__item">信用分</div>
        </div>
        <ul id="user_votes" class="list-users-votes">
          <li class="js-hidden-list-element list-jury-notes__item" v-for="(item, index) in rankList" :key="index">
            <div class="list-jury-notes__info">
              <figure>
                <AdvantageIcon location="none" size="3">
                  <template #iconDetail>
                    <Strong class="rank_text">{{ index+1 }}</Strong>
                  </template>
                </AdvantageIcon>
              </figure>
              <div class="info">
                <div>
                  <strong class="strong_text link-underlined">{{item.company_name}}</strong>
                </div>
              </div>
              <div>
                <div class="address_text">
                  <svg viewBox="0 0 8.4666669 8.4666669" class="icon_l"  fill="var(--navbar-color)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs2"></defs> <g id="layer1" transform="translate(0,-288.53332)"> <path d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z" id="path929" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:var(--navbar-color);solid-opacity:1;vector-effect:none;fill:var(--navbar-color);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"></path> </g> </g></svg>
                  <text class="margin-10-left">{{item.address}}</text>
                </div>
                <div class="address_text">
                  <text class="detail_text">法定代表人：刘良子</text>
                  <text class="detail_text margin-20-left">社会信用代码：91371302MA3R5KGF37</text>
                </div>
              </div>
            </div>

            <div class="list-jury-notes__score">
              <div class="grid-score" style="--score-cols: 4">
                <div class="grid-score__item" data-dl-uid="78" data-dl-original="true" data-dl-translated="true">9</div>
                <div class="grid-score__item" data-dl-uid="79" data-dl-original="true" data-dl-translated="true">8</div>
                <div class="grid-score__item" data-dl-uid="80" data-dl-original="true" data-dl-translated="true">9</div>
                <div class="grid-score__item grid-score__item--total" data-dl-uid="82" data-dl-original="true" data-dl-translated="true"> <div class="grid-score__item" data-dl-uid="81" data-dl-original="true" data-dl-translated="true">{{item.score}}</div></div>
              </div>
            </div>

          </li>
        </ul>

      </div>
    </div>
  </div>
</template>
<style scoped>
.rank_text{
  color:var(--navbar-bg-color);
  font-size: 2em;
}
.address_text{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.8em 0 0 0;
  font-size: 0.8em;
}
.strong_text{
  font-size: 1.2em;
  margin: 0 0.5em 0 0;
}
.detail_text{
  font-size: 0.8em;
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
  font-weight: 500
}

.grid-score__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  text-align: center;
  line-height: normal
}

.grid-score__item--total {
  position: relative;
  top: -16px;
  height: calc(100% + 32px);
  font-weight: bold;
  background: #0deaf6;
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
  background: var(--list-jury-notes__item-odd);
}
.info{
  line-height: 2em;
  width: 400px;
}
.list-jury-notes__item--rejected:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(211,211,211,.8);
  cursor: pointer;
  z-index: 2
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

.list-jury-notes__more {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(var(--bg-primary-rgb), 0.9);
  z-index: 2
}
</style>
<script setup>
import AdvantageIcon from "../components/AdvantageIcon.vue";
import {ref} from "vue";
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
</script>
