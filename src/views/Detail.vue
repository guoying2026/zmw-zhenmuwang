<style scoped>
.emphasize{
  font-weight: 900;
  font-size: 24px;
  text-align: center;
}
.mobile .emphasize{
  font-weight: 900;
  font-size: 18px;
  text-align: center;
}
.top_2{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.top_right_title{
  align-self: center;
}
.padding-10{
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.pc_background_1{
  background-image: url("../assets/04.png"), url("../assets/03.png");
  background-repeat: no-repeat, no-repeat;
  background-position: -18%, 118%;
  background-size: 30% auto,30% auto;
  height: 500px;
}
.pc_background_2{
  background-image: url("../assets/06.png"), url("../assets/05.png");
  background-repeat: no-repeat, no-repeat;
  background-position: -18%, 118%;
  background-size: 30% auto,30% auto;
  height: 800px;
}
.pc_background_3{
  background-image: url(/src/assets/09.png);
  background-repeat: no-repeat;
  background-position: 30%;
  background-size: 25% auto;
  height: 200px;
  position: relative;
  z-index: 999;
}
.top_3{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.top_left_item{
  padding: 50px;
  font-weight: 600;
}
.icon{
  width: 30px;
  height: 30px;
}
.link-underlined:hover:before {
  background-position: 0% 50%;
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
  flex: 1;
}
.left_1 .left_1_2 .left_1_2_bottom{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 1em;
}
.left_1 .left_1_2 .left_1_2_bottom .left_1_2_bottom_right{
  line-height: 1.3em;
}
.left{
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
}
.nearby_2{
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
.nearby_2_comment{
  margin: 1.2em 0;
  font-weight: 500;
}
.nearby_2 p{
  text-indent: 36px;
  margin-left: 20px;
}
.nearby_2 .time{
  margin-left: 20px;
}
.roadmap {
  width: 80%;
  box-sizing: inherit;
  background-image: var(--dotted-color);
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
}
.roadmap_2{
  width: 100% !important;
}
.roadmap_mobile{
  width: 100%;
  box-sizing: inherit;
}
.roadmap__row {
  position: relative;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 100px;
  background-image: var(--dotted-color);
  background-position: top;
  background-size: 8px 1px;
  background-repeat: repeat-x;
}
.roadmap__col {
  display: flex;
  align-items: center;
  background-image: var(--col-dotted-color);
  background-position: right top;
  background-repeat: repeat-y;
  background-size: 1px 8px;
}
.roadmap__col:first-child {
  width: 120px;
  letter-spacing: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background: #0deaf6;*/
}
.roadmap__timeline.special{
  background: var(--roadmap__timeline-special-bg-color);
}
.roadmap__timeline.none{
  background: none;
}
.roadmap__timeline {
  grid-column: var(--roadmap-start)/var(--roadmap-end);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  position: absolute;
  top: 50%;
  left: 1em;
  right: 1em;
  min-height: auto;
  padding: 16px 20px;
  background: var(--roadmap__timeline-bg-color);
  color: var(--navbar-color);
  line-height: normal;
  border-radius: 5px;
  transform: translateY(-50%);
  opacity: 0.8;
}
.roadmap__row_mobile{
  position: relative;
  display: grid;
  background-image: var(--dotted-color),var(--dotted-color);
  background-position: top,bottom;
  background-size: 8px 1px, 8px 1px;
  background-repeat: repeat-x,repeat-x;
  padding: 10px 15px;
}
.roadmap__row_mobile p{
  margin: 0.2em;
  line-height: 1.8em;
  font-size: 0.9em;
  display: flex;
  flex-direction: row;
  font-weight: 300;
}
.row_left{
  width: 125px;
}
.row_right{
  flex:1;
  font-weight: normal;
}
.top_right{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 150px;
  margin: 0;
  color: var(--main-color);
  background-image: var(--dotted-color);
  background-position: top;
  background-size: 8px 1px;  /* 改变这里的第一个值可以改变点的大小 */
  background-repeat: repeat-x;
}
/* 包含导航链接的容器 */
.navbar {
  display: flex;
  white-space: nowrap;  /* 防止链接折行 */
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
}

/* 单个导航链接 */
.nav-link {
  flex-shrink: 0;  /* 防止链接在小屏幕上被压缩 */
  padding: 10px;  /* 可根据需要调整 */
  font-size: 15px;
}
.nav-link.active{
  position: relative;
  color: var(--link-underlined-color);
  cursor: pointer;
}
.nav-link.active:before{
  content: "";
  position: absolute;
  bottom: -0.2em;
  left: 0;
  width: 100%;
  height: 2px;
  background-repeat: repeat-x;
  background-image: var(--link-underlined-before);
  background-size: 220% 100%;
  background-position: 0% 50%;
  /*transition: .3s ease-out;*/
}
.top_2_1{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
/*.cross-point{*/
/*  position: absolute;*/
/*  top: -200px;*/
/*  left: -60px;*/
/*  width: 250px;*/
/*  height: 200px;*/
/*  background: url(/src/assets/10.png);*/
/*  background-size: cover;*/
/*  z-index: 1;*/
/*}*/
@media only screen and (max-width: 989px) {
  .top{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    letter-spacing: 2px;
    box-sizing: unset;
    width: 100%;
    z-index: 99;
  }
  .top_right{
    width: 100%;
  }
  .nearby_2{
    padding-bottom: 0;
  }
  .nearby_2_comment{
    margin: 1em 1.2em;
    line-height: 1.8em;
    font-size: 0.9em;
    font-weight: 300;
  }
  .nearby_2 p{
    font-size: 0.9em;
  }
  .left_1 .icon_l{
    width: 20px;
    height: 20px;
  }
}
@media only screen and (min-width: 990px){
  .top_left{
    width: 25%;
    position: sticky;
    top: 150px;
    z-index: 1000;
    height: calc(100vh - 150px);
    overflow-y: auto;
  }
  .top_right{
    width: 25%;
  }
  .top{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    letter-spacing: 2px;
    width: 50%;
    box-sizing: unset;
    z-index: 99;
  }
}
.el-carousel--vertical{
  width: 80%;
}
.padding-10:deep(.el-carousel__item h3){
  opacity: 0.75;
  line-height: 100px;
  margin: 0;
  text-align: center;
  font-weight: bolder;
  letter-spacing: 5px;
}
.padding-10:deep(.el-carousel__item:nth-child(2n+1)){
  background: var(--advantage__icon-bg-color);
  color: var(--navbar-bg-color);
}

.padding-10:deep(.el-carousel__item:nth-child(2n)){
  background: var(--advantage__icon-2-bg-color);
  color: var(--navbar-color);
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  /*background-color: #f3f8ff;*/
  background-image: var(--dotted-color);
  background-position: top;
  background-size: 8px 1px;
  background-repeat: repeat-x;
}

.custom-table td {
  padding: 10px;
  text-align: left;
  height: 50px;
  border: none;
}

.cell {
  position: relative;
}
.cell.cross{
  background-image: var(--col-dotted-color);
  background-position: right;
  background-size: 1px 8px;
  background-repeat: repeat-y;
}
.cell.cross .inner::after {
  /*content: "☠️";*/
  content: "💀";
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 100%);
  font-size: 100px;
  z-index: 99;
}
</style>
<template>
  <div v-if="isMobile" class="padding-10 margin-40-top mobile">
    <div class="top_2">
      <text class="margin-40-top emphasize">临沂市兰山区亿宇木制品厂</text>
      <div class="roadmap_mobile margin-20-top">
        <div class="roadmap__row_mobile">
          <p>
            <span class="row_left">法定代表人：</span>
            <span class="row_right">刘贵宾</span></p>
          <p>
            <span class="row_left">手机号码：</span>
            <span class="row_right">13625393317</span>
          </p>
          <p>
            <span class="row_left">详细地址：</span>
            <span class="row_right">山东省临沂市兰山区义堂镇大芝房村</span>
          </p>
          <p>
            <span class="row_left">注册资本：</span>
            <span class="row_right">100万</span>
          </p>
          <p>
            <span class="row_left">成立日期：</span>
            <span class="row_right">2019-12-06</span>
          </p>
          <p>
            <span class="row_left">登记机关：</span>
            <span class="row_right">临沂市兰山区市场监督管理局</span>
          </p>
          <p>
            <span class="row_left">人员规模：</span>
            <span class="row_right">50人</span>
          </p>
          <p>
            <span class="row_left">经营状态：</span>
            <span class="row_right">开业</span>
          </p>
          <p>
            <span class="row_left">登记状态：</span>
            <span class="row_right">注销企业</span>
          </p>
          <p>
            <span class="row_left">社会信用代码：</span>
            <span class="row_right">91371302MA3R5KGF37</span>
          </p>
          <p>
            <span class="row_left">纳税人识别号：</span>
            <span class="row_right">91371302MA3R5KGF37</span>
          </p>
          <p>
            <span class="row_left">组织机构代码：</span>
            <span class="row_right">MA3R5KGF-3</span>
          </p>
          <p>
            <span class="row_left">经营范围：</span>
            <span class="row_right">加工销售：木制线条、木方、木制品、刨花木墩、单板、木皮、胶合板、多层板、建筑模版、装饰板</span>
          </p>
        </div>
      </div>
    </div>
    <div class="navbar">
      <text  class="nav-link" :class="tabDetailStore.current*1 !== 0?'':'active'" @click="handleItemClick(0)">评论</text>
      <text  class="nav-link" :class="tabDetailStore.current*1 !== 3?'':'active'" @click="handleItemClick(3)">问答</text>
      <text  class="nav-link" :class="tabDetailStore.current*1 !== 4?'':'active'" @click="handleItemClick(4)">投诉</text>
      <text  class="nav-link" :class="tabDetailStore.current*1 !== 5?'':'active'" @click="handleItemClick(5)">附近</text>
    </div>
    <div class="top3">
      <div class="top" v-show="tabDetailStore.current*1 === 0">
        <CommentListNew></CommentListNew>
      </div>
      <div class="top" v-show="tabDetailStore.current*1 === 3">
        <QuestionListNew></QuestionListNew>
      </div>
      <div class="top" v-show="tabDetailStore.current*1 === 4">
        <ComplaintNew></ComplaintNew>
      </div>
      <div class="top_right" v-show="tabDetailStore.current*1 === 5">
        <div class="left margin-10-top" v-for="(item, index) in nearbyList" :key="index">
            <div class="nearby">
              <div class="left_1">
                <AdvantageIcon size="3">
                  <template #iconDetail>
                    <CreditScore :credit-score="item.score" credit-score-text="信用分" :font-size="18" :font-size1="5" height="70px"></CreditScore>
                  </template>
                </AdvantageIcon>
                <div class="left_1_2">
                  <figcaption class="avatar-name__name">
                    <p class="text-bold ">{{item.company_name}}</p>
                  </figcaption>
                  <div class="left_1_2_bottom">
                    <svg viewBox="0 0 8.4666669 8.4666669" class="icon_l"  fill="var(--navbar-color)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs2"></defs> <g id="layer1" transform="translate(0,-288.53332)"> <path d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z" id="path929" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:var(--navbar-color);solid-opacity:1;vector-effect:none;fill:var(--navbar-color);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"></path> </g> </g></svg>
                    <text class="left_1_2_bottom_right margin-5-left">{{ item.address }}</text>
                  </div>
                </div>
              </div>
              <div class="nearby_2">
                <h4 class="nearby_2_comment">评论预览：</h4>
                <text class="time">2023-09-03 11:10:30</text>
                <p>商品质量契合需求，发货也及时，没有发霉，购物体验很好。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>质量很好，尺寸也符合需求，下回有需要还是会在这家买。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>质量很好，尺寸也符合需求，下回有需要还是会在这家买。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p class="margin-20-left">质量很好，尺寸也符合需求，下回有需要还是会在这家买。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>质量很好，尺寸也符合需求，下回有需要还是会在这家买。</p>
              </div>
              <div class="nearby_2">
                <h4 class="nearby_2_comment">问答预览：</h4>
                <text class="time">2023-09-03 11:10:30</text>
                <p>问：能做特殊规格吗？</p>
                <text class=" margin-40-left time">2023-09-03 11:10:20</text>
                <p class=" margin-40-left ">答：能</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>问：这家木材的杨木胶合板，甲醛释放量等级有什么？</p>
                <text class=" margin-40-left time">2023-09-03 11:10:20</text>
                <p class=" margin-40-left ">答：E0。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>问：这家木材的杨木胶合板，支持定制吗？</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>问：这家木材的泡花脚墩，支持定制吗？</p>
              </div>
              <div class="nearby_2">
                <el-descriptions title="" :column="1" border class="margin-10-top">
                  <el-descriptions-item label="投诉总记录"  width="120px" label-align="center" align="center">
                    6条
                  </el-descriptions-item>
                  <el-descriptions-item label="待审查记录"  width="120px" label-align="center" align="center">
                    1条
                  </el-descriptions-item>
                  <el-descriptions-item label="真木网核实"  width="120px" label-align="center" align="center">
                    5条
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="padding-10 pc_background_2 margin-40-top" v-else>
    <div class="top_2 margin-40-top">
      <table class="custom-table">
        <tr>
          <td class="cell cross"><div class="inner">️</div></td>
          <td>️</td>
          <td class="cell cross"><div class="inner">️</div></td>
          <td></td>
        </tr>
        <!-- Add more rows as necessary -->
      </table>
      <text class="emphasize">临沂市兰山区亿宇木制品厂</text>
      <text class="margin-40-top emphasize">24分</text>
      <el-carousel height="100px" direction="vertical" :autoplay="true" class="margin-40-top">
        <el-carousel-item v-for="(item,index) in activities" :key="index">
          <div v-for="(item1,index1) in item.content" :key="index1">
            <h3 text="2xl" justify="center">{{item.timestamp}} {{ item1.key }}{{item1.value}}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="roadmap" style="--roadmap-cols: 11;">
        <div class="roadmap__row">
          <div class="roadmap__col ">联系企业</div>
          <div class="roadmap__col">
            <div class="cross-point"></div>
          </div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__timeline special" style="--roadmap-start: 2; --roadmap-end: 5;">
            <div><strong>法定代表人：刘贵斌</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 5; --roadmap-end: 8;">
            <div><strong>手机号码：13625393317</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 8; --roadmap-end:12;">
            <div><strong>山东省临沂市兰山区义堂镇大芝房村</strong></div>
          </div>
        </div>
        <div class="roadmap__row">
          <div class="roadmap__col ">登记信息</div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__timeline special" style="--roadmap-start: 2; --roadmap-end: 5;">
            <div><strong>注册资本：100万</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 5; --roadmap-end: 8;">
            <div><strong>成立日期：2019-12-06</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 8; --roadmap-end: 12;">
            <div><strong>登记机关：临沂市兰山区市场监督管理局</strong></div>
          </div>
        </div>
        <div class="roadmap__row">
          <div class="roadmap__col ">规模状态</div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__timeline special" style="--roadmap-start: 2; --roadmap-end: 5;">
            <div><strong>人员规模：50人</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 5; --roadmap-end: 8;">
            <div><strong>经营状态：开业</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 8; --roadmap-end: 12;">
            <div><strong>登记状态：注销企业</strong></div>
          </div>
        </div>
        <div class="roadmap__row">
          <div class="roadmap__col">唯一标识</div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__timeline special" style="--roadmap-start: 2; --roadmap-end: 8;">
            <div><strong>社会信用代码 / 纳税人识别号：91371302MA3R5KGF37</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 8; --roadmap-end: 12;">
            <div><strong>组织机构代码：MA3R5KGF-3</strong></div>
          </div>
        </div>
        <div class="roadmap__row">
          <div class="roadmap__col">经营范围</div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__timeline special" style="--roadmap-start: 2; --roadmap-end: 12;">
            <div><strong>加工销售：木制线条、木方、木制品、刨花木墩、单板、木皮、胶合板、多层板、建筑模版、装饰板</strong></div>
          </div>
        </div>
        <div class="roadmap__row">
          <div class="roadmap__col">投诉记录</div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__timeline special" style="--roadmap-start: 2; --roadmap-end: 5;">
            <div><strong>投诉总记录： 6条</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 5; --roadmap-end: 8;">
            <div><strong>待审查记录： 1条</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 8; --roadmap-end: 11;">
            <div><strong>真木网核实： 5条</strong></div>
          </div>
          <div class="roadmap__timeline none" style="--roadmap-start: 11;--roadmap-end: 12" @click="handleItemClick(4)">
            <svg fill="var(--navbar-color)" height="200px" width="200px" class="icon" viewBox="0 0 490 490" xml:space="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M245,0C109.7,0,0,109.7,0,245s109.7,245,245,245s245-109.7,245-245S380.3,0,245,0z M308.2,335.5l-42.7,42.7L175,287.7 L132.3,245l42.7-42.7l90.5-90.5l42.7,42.7L217.8,245L308.2,335.5z"></path> </g> </g></svg>
          </div>
        </div>
        <div class="roadmap__row">
          <div class="roadmap__col">群众评论</div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__timeline special" style="--roadmap-start: 2; --roadmap-end: 5;">
            <div><strong>评论总数量： 6条</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 5; --roadmap-end: 8;">
            <div><strong>回复总数量： 1条</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 8; --roadmap-end: 11;">
            <div><strong>点赞总数量： 5条</strong></div>
          </div>
          <div class="roadmap__timeline none" style="--roadmap-start: 11;--roadmap-end: 12" @click="handleItemClick(0)">
            <svg fill="var(--navbar-color)" height="200px" width="200px" class="icon" viewBox="0 0 490 490" xml:space="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M245,0C109.7,0,0,109.7,0,245s109.7,245,245,245s245-109.7,245-245S380.3,0,245,0z M308.2,335.5l-42.7,42.7L175,287.7 L132.3,245l42.7-42.7l90.5-90.5l42.7,42.7L217.8,245L308.2,335.5z"></path> </g> </g></svg>
          </div>
        </div>
        <div class="roadmap__row">
          <div class="roadmap__col">群众问答</div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__col"></div>
          <div class="roadmap__timeline special" style="--roadmap-start: 2; --roadmap-end: 5;">
            <div><strong>问题总数量： 6条</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 5; --roadmap-end: 8;">
            <div><strong>回答总数量： 1条</strong></div>
          </div>
          <div class="roadmap__timeline special" style="--roadmap-start: 8; --roadmap-end: 11;">
            <div><strong>有用总数量： 5条</strong></div>
          </div>
          <div class="roadmap__timeline none" style="--roadmap-start: 11;--roadmap-end: 12" @click="handleItemClick(3)">
            <svg fill="var(--navbar-color)" height="200px" width="200px" class="icon" viewBox="0 0 490 490" xml:space="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M245,0C109.7,0,0,109.7,0,245s109.7,245,245,245s245-109.7,245-245S380.3,0,245,0z M308.2,335.5l-42.7,42.7L175,287.7 L132.3,245l42.7-42.7l90.5-90.5l42.7,42.7L217.8,245L308.2,335.5z"></path> </g> </g></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="top_3">
      <div class="top_left">
        <div class="top_left_item linear_grey_btn" v-show="tabDetailStore.current != 0" @click="handleItemClick(0)">
          <div>
            <svg t="1683685276764" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25505" width="200" height="200"><path d="M869.084233 187.133028l-0.822738 472.610898-171.140799-0.297782c-11.939937-0.021489-23.394826 2.27481-34.3309 6.904247-10.936073 4.630461-20.73423 11.253298-29.396517 19.84907l-121.602545 121.17992L389.615137 685.774789c-3.971451-4.656043-8.450463-8.643867-13.402241-11.963473-4.969175-3.317559-10.103102-5.968945-15.399735-7.986905-5.315052-1.998517-10.93812-3.672646-16.906042-4.985548-5.948479-1.331321-11.935843-2.010797-17.925255-2.038426l-171.123402-0.298805 0.822738-472.610898 713.366194 1.24127L869.084233 187.133028zM889.121592 97.607038 135.973346 96.296183c-19.22997-0.033769-35.667338 6.567579-49.295729 19.813255-13.627369 13.246699-20.458961 29.481452-20.491707 48.711422L65.290517 679.186743c-0.033769 19.232017 6.740518 35.505655 20.321838 48.79124s29.996175 19.952424 49.227168 19.986193l191.023638 0.330528 172.844603 174.410262c3.287883 3.316535 7.609305 4.988618 12.910031 4.998851 1.338485 0.002047 2.659573-0.321318 3.980661-0.970094l7.966439-3.984754 173.435051-173.808558 191.022615 0.332575c19.232017 0.032746 35.669384-6.576789 49.298799-19.813255 13.626345-13.238512 20.456914-29.488615 20.48966-48.720631l0.896416-514.364861c0.032746-19.22997-6.741541-35.489282-20.320814-48.783053-13.58132-13.292748-29.997198-19.952424-49.228191-19.98517L889.121592 97.606015zM245.818103 421.330978c0.028653-16.255219 5.860475-30.18344 17.496489-41.769312 11.615549-11.594059 25.41074-17.377786 41.331337-17.350157 6.621814 0.01228 12.93459 1.026376 18.900465 3.02694 5.948479 2.00875 11.425214 4.840238 16.411785 8.495488 4.968152 3.663436 9.284457 7.975649 12.912078 12.948917 3.609201 4.972245 6.421246 10.458189 8.438183 16.45067 1.997494 5.982248 2.980891 12.298094 2.952238 18.918885-0.042979 24.530696-11.343349 42.086537-33.939997 52.65729-7.966439 3.975545-16.600073 5.959735-25.898857 5.944386-15.902178-0.027629-29.677926-5.859451-41.252543-17.485233C251.573177 451.534883 245.789451 437.586197 245.818103 421.330978L245.818103 421.330978zM452.760293 422.206928c0.020466-11.271718 2.697435-21.388123 8.03193-30.334889 5.297656-8.945743 12.456706-16.070001 21.420869-21.355377 8.964162-5.294586 18.917862-7.927553 29.881564-7.90811 10.945283 0.01842 20.891819 2.686179 29.836539 8.011464 8.964162 5.325285 16.080234 12.465916 21.364587 21.430078 5.285377 8.965186 7.927553 19.080567 7.90811 30.361495-0.027629 15.920598-5.859451 29.667693-17.493419 41.261753-11.634991 11.585873-25.575492 17.368576-41.821501 17.339924-16.264429-0.027629-30.18344-5.859451-41.776476-17.485233C458.515367 451.895087 452.733687 438.117292 452.760293 422.206928L452.760293 422.206928zM661.715325 422.054455c0.027629-16.254196 5.859451-30.18344 17.494443-41.769312 11.632945-11.594059 25.41074-17.376763 41.331337-17.349133 11.252275 0.019443 21.379936 2.696412 30.325679 8.021697 8.946766 5.316076 16.060791 12.464893 21.347191 21.430078 5.302773 8.964162 7.92653 19.080567 7.907087 30.352285-0.027629 15.920598-5.860475 29.668717-17.476023 41.262776-11.633968 11.584849-25.574469 17.368576-41.838897 17.339924-16.264429-0.019443-30.184463-5.851265-41.778522-17.486256-11.593036-11.634991-17.359366-25.574469-17.330714-41.829687L661.715325 422.054455zM661.715325 422.054455" fill="var(--navbar-color)" p-id="25506"></path></svg>
          </div>
          <text style="color:var(--navbar-color)">评论区</text>
        </div>
        <div class="top_left_item dark_black_reinforce_btn" v-show="tabDetailStore.current == 0">
          <div>
            <svg t="1683685276764" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25505" width="200" height="200"><path d="M869.084233 187.133028l-0.822738 472.610898-171.140799-0.297782c-11.939937-0.021489-23.394826 2.27481-34.3309 6.904247-10.936073 4.630461-20.73423 11.253298-29.396517 19.84907l-121.602545 121.17992L389.615137 685.774789c-3.971451-4.656043-8.450463-8.643867-13.402241-11.963473-4.969175-3.317559-10.103102-5.968945-15.399735-7.986905-5.315052-1.998517-10.93812-3.672646-16.906042-4.985548-5.948479-1.331321-11.935843-2.010797-17.925255-2.038426l-171.123402-0.298805 0.822738-472.610898 713.366194 1.24127L869.084233 187.133028zM889.121592 97.607038 135.973346 96.296183c-19.22997-0.033769-35.667338 6.567579-49.295729 19.813255-13.627369 13.246699-20.458961 29.481452-20.491707 48.711422L65.290517 679.186743c-0.033769 19.232017 6.740518 35.505655 20.321838 48.79124s29.996175 19.952424 49.227168 19.986193l191.023638 0.330528 172.844603 174.410262c3.287883 3.316535 7.609305 4.988618 12.910031 4.998851 1.338485 0.002047 2.659573-0.321318 3.980661-0.970094l7.966439-3.984754 173.435051-173.808558 191.022615 0.332575c19.232017 0.032746 35.669384-6.576789 49.298799-19.813255 13.626345-13.238512 20.456914-29.488615 20.48966-48.720631l0.896416-514.364861c0.032746-19.22997-6.741541-35.489282-20.320814-48.783053-13.58132-13.292748-29.997198-19.952424-49.228191-19.98517L889.121592 97.606015zM245.818103 421.330978c0.028653-16.255219 5.860475-30.18344 17.496489-41.769312 11.615549-11.594059 25.41074-17.377786 41.331337-17.350157 6.621814 0.01228 12.93459 1.026376 18.900465 3.02694 5.948479 2.00875 11.425214 4.840238 16.411785 8.495488 4.968152 3.663436 9.284457 7.975649 12.912078 12.948917 3.609201 4.972245 6.421246 10.458189 8.438183 16.45067 1.997494 5.982248 2.980891 12.298094 2.952238 18.918885-0.042979 24.530696-11.343349 42.086537-33.939997 52.65729-7.966439 3.975545-16.600073 5.959735-25.898857 5.944386-15.902178-0.027629-29.677926-5.859451-41.252543-17.485233C251.573177 451.534883 245.789451 437.586197 245.818103 421.330978L245.818103 421.330978zM452.760293 422.206928c0.020466-11.271718 2.697435-21.388123 8.03193-30.334889 5.297656-8.945743 12.456706-16.070001 21.420869-21.355377 8.964162-5.294586 18.917862-7.927553 29.881564-7.90811 10.945283 0.01842 20.891819 2.686179 29.836539 8.011464 8.964162 5.325285 16.080234 12.465916 21.364587 21.430078 5.285377 8.965186 7.927553 19.080567 7.90811 30.361495-0.027629 15.920598-5.859451 29.667693-17.493419 41.261753-11.634991 11.585873-25.575492 17.368576-41.821501 17.339924-16.264429-0.027629-30.18344-5.859451-41.776476-17.485233C458.515367 451.895087 452.733687 438.117292 452.760293 422.206928L452.760293 422.206928zM661.715325 422.054455c0.027629-16.254196 5.859451-30.18344 17.494443-41.769312 11.632945-11.594059 25.41074-17.376763 41.331337-17.349133 11.252275 0.019443 21.379936 2.696412 30.325679 8.021697 8.946766 5.316076 16.060791 12.464893 21.347191 21.430078 5.302773 8.964162 7.92653 19.080567 7.907087 30.352285-0.027629 15.920598-5.860475 29.668717-17.476023 41.262776-11.633968 11.584849-25.574469 17.368576-41.838897 17.339924-16.264429-0.019443-30.184463-5.851265-41.778522-17.486256-11.593036-11.634991-17.359366-25.574469-17.330714-41.829687L661.715325 422.054455zM661.715325 422.054455" fill="var(--navbar-bg-color)" p-id="25506"></path></svg>
          </div>
          <text style="color:var(--navbar-bg-color)">评论区</text>
        </div>
        <div class="top_left_item linear_grey_btn margin-20-top" v-show="tabDetailStore.current != 3" @click="handleItemClick(3)">
          <div>
            <svg t="1683703804762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27600" width="200" height="200"><path d="M768 90.666667H256A186.666667 186.666667 0 0 0 69.333333 277.333333v383.936l0.085334 5.504A186.666667 186.666667 0 0 0 256 847.936l37.632-0.021333 8.149333 40.725333 0.810667 3.242667 0.533333 1.834666 1.109334 3.2a48 48 0 0 0 54.037333 29.376l3.008-0.746666 1.706667-0.490667 2.944-0.981333 3.669333-1.578667a48 48 0 0 0 3.541333-1.856l123.925334-72.725333 270.933333 0.021333a186.666667 186.666667 0 0 0 186.666667-186.666667V277.333333A186.666667 186.666667 0 0 0 768 90.666667z m-512 74.666666h512c61.866667 0 112 50.133333 112 112v383.936c0 61.866667-50.133333 112-112 112H486.912l-3.968 0.213334a37.333333 37.333333 0 0 0-14.933333 4.906666l-100.352 58.88-6.784-33.984a37.333333 37.333333 0 0 0-36.608-30.016H256a112 112 0 0 1-112-112V277.333333c0-61.866667 50.133333-112 112-112z" fill="var(--navbar-color)" p-id="27601"></path><path d="M510.933333 580.266667a40.533333 40.533333 0 1 0 0 81.066666 40.533333 40.533333 0 0 0 0-81.066666zM510.976 256c-31.872 0-61.994667 12.586667-84.821333 35.370667a126.122667 126.122667 0 0 0-36.821334 89.834666v6.378667l0.128 2.026667c1.450667 14.933333 13.44 26.24 27.797334 26.24 13.781333 0 25.322667-10.389333 27.52-24.149334l0.362666-2.986666 0.042667-7.466667 0.106667-3.456c1.813333-32.725333 30.656-58.88 65.685333-58.88 36.309333 0 65.770667 28.053333 65.770667 62.293333 0 22.912-13.525333 44.096-34.88 54.933334l-7.722667 3.669333a90.133333 90.133333 0 0 0-35.925333 34.026667c-9.962667 16.512-15.253333 36.416-15.253334 56.810666v14.058667l0.128 1.770667c1.002667 5.632 5.184 9.6 10.24 9.6h35.114667l1.685333-0.170667a11.242667 11.242667 0 0 0 8.682667-11.2v-15.061333l0.128-3.114667c0.981333-13.376 8.768-25.28 19.754667-30.08 44.864-19.754667 73.834667-64.981333 73.834666-115.242667a125.76 125.76 0 0 0-36.736-89.813333A119.061333 119.061333 0 0 0 510.976 256z" fill="var(--navbar-color)" p-id="27602"></path></svg>
          </div>
          <text style="color:var(--navbar-color)" class="margin-20-top">问答区</text>
        </div>
        <div class="top_left_item dark_black_reinforce_btn margin-20-top" v-show="tabDetailStore.current == 3">
          <div>
            <svg t="1683703804762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27600" width="200" height="200"><path d="M768 90.666667H256A186.666667 186.666667 0 0 0 69.333333 277.333333v383.936l0.085334 5.504A186.666667 186.666667 0 0 0 256 847.936l37.632-0.021333 8.149333 40.725333 0.810667 3.242667 0.533333 1.834666 1.109334 3.2a48 48 0 0 0 54.037333 29.376l3.008-0.746666 1.706667-0.490667 2.944-0.981333 3.669333-1.578667a48 48 0 0 0 3.541333-1.856l123.925334-72.725333 270.933333 0.021333a186.666667 186.666667 0 0 0 186.666667-186.666667V277.333333A186.666667 186.666667 0 0 0 768 90.666667z m-512 74.666666h512c61.866667 0 112 50.133333 112 112v383.936c0 61.866667-50.133333 112-112 112H486.912l-3.968 0.213334a37.333333 37.333333 0 0 0-14.933333 4.906666l-100.352 58.88-6.784-33.984a37.333333 37.333333 0 0 0-36.608-30.016H256a112 112 0 0 1-112-112V277.333333c0-61.866667 50.133333-112 112-112z" fill="var(--navbar-bg-color)" p-id="27601"></path><path d="M510.933333 580.266667a40.533333 40.533333 0 1 0 0 81.066666 40.533333 40.533333 0 0 0 0-81.066666zM510.976 256c-31.872 0-61.994667 12.586667-84.821333 35.370667a126.122667 126.122667 0 0 0-36.821334 89.834666v6.378667l0.128 2.026667c1.450667 14.933333 13.44 26.24 27.797334 26.24 13.781333 0 25.322667-10.389333 27.52-24.149334l0.362666-2.986666 0.042667-7.466667 0.106667-3.456c1.813333-32.725333 30.656-58.88 65.685333-58.88 36.309333 0 65.770667 28.053333 65.770667 62.293333 0 22.912-13.525333 44.096-34.88 54.933334l-7.722667 3.669333a90.133333 90.133333 0 0 0-35.925333 34.026667c-9.962667 16.512-15.253333 36.416-15.253334 56.810666v14.058667l0.128 1.770667c1.002667 5.632 5.184 9.6 10.24 9.6h35.114667l1.685333-0.170667a11.242667 11.242667 0 0 0 8.682667-11.2v-15.061333l0.128-3.114667c0.981333-13.376 8.768-25.28 19.754667-30.08 44.864-19.754667 73.834667-64.981333 73.834666-115.242667a125.76 125.76 0 0 0-36.736-89.813333A119.061333 119.061333 0 0 0 510.976 256z" fill="var(--navbar-bg-color)" p-id="27602"></path></svg>
          </div>
          <text class="margin-20-top" style="color:var(--navbar-bg-color)">问答区</text>
        </div>
        <div class="top_left_item linear_grey_btn margin-20-top" v-show="tabDetailStore.current != 4" @click="handleItemClick(4)">
          <div>
            <svg t="1684216661677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11205" width="200" height="200"><path d="M960 96v768H624L512 1013.312 400 864H64v-768h896z m-64 64H128v640h304L512 906.688 592 800H896v-640z m-384 448a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM576 256l-32 320h-64L448 256h128z" fill="var(--navbar-color)" p-id="11206"></path></svg>
          </div>
          <text style="color:var(--navbar-color)" class="margin-20-top">投诉区</text>
        </div>
        <div class="top_left_item dark_black_reinforce_btn margin-20-top" v-show="tabDetailStore.current == 4">
          <div>
            <svg t="1684216661677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11205" width="200" height="200"><path d="M960 96v768H624L512 1013.312 400 864H64v-768h896z m-64 64H128v640h304L512 906.688 592 800H896v-640z m-384 448a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM576 256l-32 320h-64L448 256h128z" fill="var(--navbar-bg-color)" p-id="11206"></path></svg>
          </div>
          <text style="color:var(--navbar-bg-color)" class="margin-20-top">投诉区</text>
        </div>
      </div>
      <div class="top" v-show="tabDetailStore.current*1 === 0">
        <CommentListNew></CommentListNew>
      </div>
      <div class="top" v-show="tabDetailStore.current*1 === 3">
        <QuestionListNew></QuestionListNew>
      </div>
      <div class="top" v-show="tabDetailStore.current*1 === 4">
        <ComplaintNew></ComplaintNew>
      </div>
      <div class="top_right" v-show="tabDetailStore.current*1 === 0 || tabDetailStore.current*1 === 3 || tabDetailStore.current*1 === 4">
        <text class="top_right_title margin-20-top">附近商家</text>
        <div class="left margin-10-top" v-for="(item, index) in nearbyList" :key="index">
            <div class="nearby">
              <div class="left_1">
                <AdvantageIcon>
                  <template #iconDetail>
                    <CreditScore :credit-score="item.score" credit-score-text="信用分" :font-size="18" :font-size1="5" height="70px"></CreditScore>
                  </template>
                </AdvantageIcon>
                <div class="left_1_2">
                  <figcaption class="avatar-name__name">
                    <p class="text-bold ">{{item.company_name}}</p>
                  </figcaption>
                  <div class="left_1_2_bottom">
                    <svg viewBox="0 0 8.4666669 8.4666669" class="icon_l"  fill="var(--navbar-color)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs2"></defs> <g id="layer1" transform="translate(0,-288.53332)"> <path d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z" id="path929" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:var(--navbar-color);solid-opacity:1;vector-effect:none;fill:var(--navbar-color);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"></path> </g> </g></svg>
                    <text class="left_1_2_bottom_right margin-5-left">{{ item.address }}</text>
                  </div>
                </div>
              </div>
              <div class="nearby_2" v-show="tabDetailStore.current*1 === 0">
                <h4 class="nearby_2_comment">评论预览：</h4>
                <text class="time">2023-09-03 11:10:30</text>
                <p>商品质量契合需求，发货也及时，没有发霉，购物体验很好。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>质量很好，尺寸也符合需求，下回有需要还是会在这家买。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>质量很好，尺寸也符合需求，下回有需要还是会在这家买。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p class="margin-20-left">质量很好，尺寸也符合需求，下回有需要还是会在这家买。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>质量很好，尺寸也符合需求，下回有需要还是会在这家买。</p>
              </div>
              <div class="nearby_2" v-show="tabDetailStore.current*1 === 3">
                <h4 class="nearby_2_comment">问答预览：</h4>
                <text class="time">2023-09-03 11:10:30</text>
                <p>问：能做特殊规格吗？</p>
                <text class=" margin-40-left time">2023-09-03 11:10:20</text>
                <p class=" margin-40-left ">答：能</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>问：这家木材的杨木胶合板，甲醛释放量等级有什么？</p>
                <text class=" margin-40-left time">2023-09-03 11:10:20</text>
                <p class=" margin-40-left ">答：E0。</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>问：这家木材的杨木胶合板，支持定制吗？</p>
                <text class="time">2023-09-03 11:10:20</text>
                <p>问：这家木材的泡花脚墩，支持定制吗？</p>
              </div>
              <div class="nearby_2" v-show="tabDetailStore.current*1 === 4">
                <el-descriptions title="" :column="1" border class="margin-10-top">
                  <el-descriptions-item label="投诉总记录"  width="120px" label-align="center" align="center">
                    6条
                  </el-descriptions-item>
                  <el-descriptions-item label="待审查记录"  width="120px" label-align="center" align="center">
                    1条
                  </el-descriptions-item>
                  <el-descriptions-item label="真木网核实"  width="120px" label-align="center" align="center">
                    5条
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref,onMounted,reactive,computed,watchEffect,onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import "../assets/tag.css"
import CreditScore from "../components/CreditScore.vue";
import {shopDetailApi} from "../api/shopDetail.js";
import { useUserStore } from "../pinia/user.js";
import { useTabDetailStore } from "../pinia/tabDetail.js"
import {getIndexDataApi} from "../api/list.js";
import AdvantageIcon from "../components/AdvantageIcon.vue";
import CommentListNew from "../components/CommentListNew.vue";
import QuestionListNew from "../components/QuestionListNew.vue";
import ComplaintNew from "../components/ComplaintNew.vue";

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

// 数据列表
const nearbyList = ref([
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
const userStore = useUserStore();
const tabDetailStore = useTabDetailStore();
//
const text = ref('')
const company_info_id_text = ref(null);
// company_info_id_text.value = useRoute().query.company_info_id;
company_info_id_text.value = 18;
const company_info_id = ref(null);
company_info_id.value = 2644899;
// company_info_id.value = useRoute().query.company_info_id
const starValue = ref(5)
const activities = [
  {
    content: [{
      key: '经营状态变更：',
      value: '从在业变更为注销',
    }],
    timestamp: '2022-06-30',
  },
  {
    content: [{
      key: '新增行政许可：',
      value: '允许备案'
    }],
    timestamp: '2018-04-13',
  },
]
//导航栏切换开始
const handleItemClick = (index) => {
  tabDetailStore.current = index;
}
//导航栏切换结束
</script>
