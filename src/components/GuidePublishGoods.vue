<template>
  <div class="goods_show" :class="flag === 1?'goods_show_1':''">
    <div v-if="flag === 1"></div>
    <div id="background" v-else>
      <div id="circle">
        <div id="circle-glow"></div>
        <div id="circle-inner"></div>
      </div>
    </div>
    <div id="app1" :class="flag === 1? '':'padding-50'">
      <div id="profiles">
        <div class="profile none_background">
          <div class="profile-content">
            <div class="profile-pic">
              <img class="profile-pic-image" src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_eb3f9a85-bbb5-43da-b5f0-dac7d315f327.png?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp" />
            </div>
          </div>
        </div>
        <div class="profile" :class="flag === 1?'':'white_color'">
          <div class="text_profile">
            <text class="profile-name font-60-weight font-28-size flex-end">ZMW</text>
            <div class="font8-size font-column">
              <div class="font-item flex-end">
                <text>微信扫扫</text>
                <text class="font15-size font-60-weight">左</text>
                <text>边的</text>
              </div>
              <div class="font-item flex-end">
                <text>真木网</text>
                <text class="font15-size font-60-weight">商家版</text>
                <text>小程序</text>
              </div>
              <div class="font-item flex-end">
                <text class="font15-size font-60-weight">上传商品</text>
                <text>后会同步显示在当前页面以及买木头小程序</text>
              </div>
            </div>
            <div class="text_profile_3" v-if="flag === 0">
              <svg t="1680599843213" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4405" width="200" height="200"><path d="M497.664 971.434667A456.704 456.704 0 1 1 955.733333 514.730667a457.045333 457.045333 0 0 1-458.069333 456.704z m0-845.141334A388.437333 388.437333 0 1 0 887.466667 514.730667 388.778667 388.778667 0 0 0 497.664 126.293333z" fill="#ffffff" p-id="4406"></path><path d="M571.392 716.8a34.133333 34.133333 0 0 1-23.893333-9.898667l-167.253334-166.912a34.133333 34.133333 0 0 1-9.898666-24.234666 34.133333 34.133333 0 0 1 9.898666-24.234667L546.133333 323.584a34.133333 34.133333 0 0 1 48.128 48.128l-143.018666 143.018667 143.018666 143.018666a34.133333 34.133333 0 0 1 0 48.128 34.133333 34.133333 0 0 1-22.869333 10.922667z" fill="#ffffff" p-id="4407"></path></svg>
            </div>
          </div>
        </div>
        <div class="profile white_color" v-if="flag === 0">
          <div class="text_profile">
            <text class="profile-name font-60-weight font-28-size">ZMW</text>
            <div class="font8-size font-column">
              <div class="font-item">
                <text>微信扫扫</text>
                <text class="font15-size font-60-weight">右</text>
                <text>边的</text>
              </div>
              <div class="font-item">
                <text>真木网</text>
                <text class="font15-size font-60-weight">买家版</text>
                <text>小程序</text>
              </div>
              <div class="font-item">
                <text class="font15-size font-60-weight">购买商品</text>
                <text>计算详细运费，保障支付安全，和售后服务</text>
              </div>
            </div>
            <div class="text_profile_3 flex-end">
              <svg t="1680601198716" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1117" width="200" height="200"><path d="M518.144 971.434667a456.704 456.704 0 1 1 456.704-456.704 457.045333 457.045333 0 0 1-456.704 456.704z m0-845.141334a388.437333 388.437333 0 1 0 388.437333 388.437334A388.778667 388.778667 0 0 0 518.144 126.293333z" fill="#ffffff" p-id="1118"></path><path d="M443.733333 716.8a34.133333 34.133333 0 0 1-24.234666-9.898667 34.133333 34.133333 0 0 1 0-48.128l143.018666-143.018666-143.018666-143.018667a34.133333 34.133333 0 0 1 0-48.128 34.133333 34.133333 0 0 1 48.469333 0l166.912 166.912a34.133333 34.133333 0 0 1 9.898667 24.234667 34.133333 34.133333 0 0 1-9.898667 24.234666l-166.912 166.912A34.133333 34.133333 0 0 1 443.733333 716.8z" fill="#ffffff" p-id="1119"></path></svg>
            </div>
          </div>
        </div>
        <div class="profile none_background" v-if="flag === 0">
          <div class="profile-content">
            <div class="profile-pic">
              <img class="profile-pic-image" src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_49245cea-3db4-483a-be40-709faff7c2f9.png?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp" />
            </div>
            <!--                  <h4 class="profile-name">购买商品</h4>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.goods_show_1{
  display: flex;
  background: #f3f6fd !important;
}
.padding-50{
  padding: 50px 0;
}
</style>
<script>
export default{
  name: 'GuidePublishGoods'
}
</script>
<script setup>
import "../assets/showMiniApp.scss"
const props = defineProps({
  flag: {
    type: Number,
    default: 0
  }
})
</script>
