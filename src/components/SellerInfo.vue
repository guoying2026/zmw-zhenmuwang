<style scoped>
@media (min-width: 576px) {
  .item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .item_right{
    flex: 1;
    word-wrap: break-word;
    word-break: break-all;
    text-align: end;
  }
}
.info{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.item_middle{
  width: 170px;
}
@media (max-width: 576px) {
  .item{
    display: flex;
    flex-direction: row;
  }
  .item_right{
    flex: 1;
    word-wrap: break-word;
    word-break: break-all;
  }
}
.icon{
  width: 25px;
  height: 25px;
}
.icon_i{
  width: 25px;
  height: 22px;
}
</style>
<template>
  <div class="info">
    <div class="item margin-10-top">
      <svg t="1679556787380" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8178" width="200" height="200"><path d="M198.4 780.8 198.4 230.4l70.4 0 0 550.4L198.4 780.8z" p-id="8179" fill="var(--svg-fill-color)"></path><path d="M403.2 780.8 403.2 230.4l192 0c44.8 0 76.8 0 96 6.4 32 6.4 57.6 19.2 83.2 38.4 32 25.6 51.2 57.6 64 96s19.2 83.2 19.2 128c0 44.8-6.4 76.8-12.8 108.8s-19.2 57.6-38.4 83.2-32 38.4-51.2 51.2-38.4 19.2-64 25.6-57.6 6.4-89.6 6.4L403.2 774.4zM473.6 716.8l115.2 0c38.4 0 64-6.4 83.2-12.8s38.4-19.2 51.2-25.6c19.2-19.2 32-38.4 38.4-70.4s12.8-64 12.8-108.8c0-57.6-6.4-102.4-25.6-134.4s-44.8-51.2-70.4-64c-19.2-6.4-51.2-12.8-96-12.8L473.6 288 473.6 716.8z" p-id="8180" fill="var(--svg-fill-color)"></path></svg>
      <text class="margin-20-left item_middle" :style="`width: ${itemMiddleWidth};font-size: ${itemMiddleFontSize};`">社会统一信用代码：</text>
      <text class="font-60-weight item_right" :style="`font-size: ${itemRightFontSize};`">{{ item.credit_code }}</text>
    </div>
    <div class="item margin-10-top">
      <svg t="1683341533016" class="icon_i" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24461" width="200" height="200"><path d="M511.903244 0.000096a511.903244 511.903244 0 0 1 335.957502 898.350359l-9.598786 8.638907A511.999232 511.999232 0 1 1 511.903244 0.000096z m0 742.274102A281.436398 281.436398 0 0 0 272.605515 875.409357a433.289189 433.289189 0 0 0 225.283502 71.510954h14.014227a433.097213 433.097213 0 0 0 239.393717-71.510954 281.628374 281.628374 0 0 0-239.393717-133.135159z m0-665.483816a435.112958 435.112958 0 0 0-299.674091 750.625046 358.322672 358.322672 0 0 1 599.44417 0A435.112958 435.112958 0 0 0 511.903244 76.790382z m0 127.951814A204.838088 204.838088 0 1 1 307.161144 409.484296a204.7421 204.7421 0 0 1 204.7421-204.7421z m0 76.790286a128.047802 128.047802 0 0 0 0 255.999616 128.047802 128.047802 0 0 0 0-255.999616z" p-id="24462" fill="var(--svg-fill-color)"></path></svg>
      <text class="margin-20-left item_middle" :style="`width: ${itemMiddleWidth};font-size: ${itemMiddleFontSize};`">法定代表人：</text>
      <text class="font-60-weight item_right" :style="`font-size: ${itemRightFontSize};`">{{ item.corporation }}</text>
    </div>
    <div class="item margin-10-top">
      <svg t="1679555790076" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17287" width="200" height="200"><path d="M511.8 960.6c-60.36 0-118.93-11.83-174.09-35.16-53.26-22.53-101.08-54.77-142.15-95.83-41.06-41.06-73.3-88.89-95.83-142.15-23.33-55.15-35.16-113.72-35.16-174.08 0-60.36 11.83-118.93 35.16-174.09 22.53-53.26 54.77-101.08 95.83-142.15 41.06-41.06 88.89-73.3 142.15-95.83 55.16-23.33 113.73-35.16 174.09-35.16s118.93 11.83 174.09 35.16c53.26 22.53 101.08 54.77 142.15 95.83 41.06 41.06 73.3 88.89 95.83 142.15 23.33 55.16 35.16 113.73 35.16 174.09s-11.83 118.93-35.16 174.09c-22.53 53.26-54.77 101.08-95.83 142.15-41.06 41.06-88.89 73.3-142.15 95.83-55.16 23.33-113.73 35.15-174.09 35.15z m0-830.45c-211.31 0-383.23 171.91-383.23 383.23S300.48 896.6 511.8 896.6s383.23-171.91 383.23-383.23S723.11 130.15 511.8 130.15z" fill="var(--svg-fill-color)" p-id="17288"></path><path d="M703.44 470.13V427.4c0-5.88-4.76-10.64-10.64-10.64h-80.73l80.24-80.24c4.15-4.15 4.15-10.89 0-15.04l-30.21-30.21c-4.15-4.15-10.89-4.15-15.04 0L521.57 416.76h-18.99L377.6 291.78c-4.15-4.15-10.89-4.15-15.04 0l-30.21 30.21c-4.15 4.15-4.15 10.89 0 15.04l79.73 79.73h-81.46c-5.88 0-10.64 4.76-10.64 10.64v42.72c0 5.88 4.76 10.64 10.64 10.64h149.5v95.52h-149.6c-5.88 0-10.64 4.76-10.64 10.64v42.72c0 5.88 4.76 10.64 10.64 10.64h149.6v117.13c0 5.88 4.76 10.64 10.64 10.64h42.72c5.88 0 10.64-4.76 10.64-10.64V640.29H692.7c5.88 0 10.64-4.76 10.64-10.64v-42.72c0-5.88-4.76-10.64-10.64-10.64H544.11v-95.52H692.8c5.88-0.01 10.64-4.77 10.64-10.64z" fill="var(--svg-fill-color)" p-id="17289"></path></svg>
      <text class="margin-20-left item_middle" :style="`width: ${itemMiddleWidth};font-size: ${itemMiddleFontSize};`">注册资金：</text>
      <text class="font-60-weight item_right" :style="`font-size: ${itemRightFontSize};`">{{ item.registered_capital }}</text>
    </div>
    <div class="item margin-10-top">
      <svg t="1679557047879" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10153" width="200" height="200"><path d="M512 85.33C276.36 85.33 85.33 276.36 85.33 512S276.36 938.67 512 938.67 938.67 747.64 938.67 512 747.64 85.33 512 85.33z m0 768c-188.21 0-341.33-153.12-341.33-341.33S323.79 170.67 512 170.67 853.33 323.79 853.33 512 700.21 853.33 512 853.33z" fill="var(--svg-fill-color)" p-id="10154"></path><path d="M512 256h-85.33v341.33h298.66V512H512z" fill="var(--svg-fill-color)" p-id="10155"></path></svg>
      <text class="margin-20-left item_middle" :style="`width: ${itemMiddleWidth};font-size: ${itemMiddleFontSize};`">成立时间：</text>
      <text class="font-60-weight item_right" :style="`font-size: ${itemRightFontSize};`">{{ item.foundation_date }}</text>
    </div>
    <div class="item margin-10-top">
      <svg t="1679469730863" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11714" data-spm-anchor-id="a313x.7781069.0.i20" width="200" height="200"><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z m211.7-261.5c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" fill="var(--svg-fill-color)" p-id="11715" data-spm-anchor-id="a313x.7781069.0.i17" class=""></path></svg>
      <text class="margin-20-left item_middle" :style="`width: ${itemMiddleWidth};font-size: ${itemMiddleFontSize};`">联系电话：</text>
      <text class="font-60-weight item_right" :style="`font-size: ${itemRightFontSize};`">{{ item.contact_phone }}</text>
    </div>
    <div class="item margin-10-top">
      <svg t="1679471610724" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15127" width="200" height="200"><path d="M877.216 491.808M895.904 448c0-212.064-171.936-384-384-384-212.064 0-384 171.936-384 384 0 104.672 42.016 199.456 109.92 268.736L237.664 716.736l1.568 1.568c0.768 0.768 1.536 1.568 2.336 2.336l217.12 217.12c29.376 29.376 76.992 29.376 106.368 0l217.12-217.12c0.768-0.768 1.568-1.536 2.336-2.336l1.568-1.568-0.16 0C853.888 647.456 895.904 552.672 895.904 448zM565.088 847.36c-53.12 53.12-53.152 53.248-106.368 0L285.76 673.472C228 615.648 191.904 536.224 191.904 448c0-176.736 143.264-320 320-320 176.736 0 320 143.264 320 320 0 88.224-36.096 167.648-93.856 225.472L565.088 847.36zM512 256c-106.048 0-192 85.952-192 192s85.952 192 192 192 192-85.952 192-192S618.048 256 512 256zM512 576c-70.688 0-128-57.312-128-128s57.312-128 128-128 128 57.312 128 128S582.688 576 512 576z" fill="var(--svg-fill-color)" p-id="15128"></path></svg>
      <text class="margin-20-left item_middle" :style="`width: ${itemMiddleWidth};font-size: ${itemMiddleFontSize};`">注册地址：</text>
      <text class="font-60-weight item_right" :style="`font-size: ${itemRightFontSize};`">{{ item.address }}</text>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SellerInfo'
}
</script>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
  itemMiddleWidth: {
    type: [String,Number],
    default: '170px',
  },
  itemMiddleFontSize: {
    type: [String,Number],
    default: '16px',
  },
  itemRightFontSize: {
    type: [String,Number],
    default: '16px',
  },
})
</script>
