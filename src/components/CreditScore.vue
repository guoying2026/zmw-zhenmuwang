<template>
  <div
      class="fluctuate margin-20-top"
      :style="`height: ${height}px;width:${width}`"
      :class="height === '200'?'height_important':''"
  >
    <span class="font-15-size">{{creditScoreText}} </span>
    <span :class="`font-${fontSize}-size`">{{creditScore}}</span>
  </div>
</template>
<style scoped>
@media not all and (min-resolution:.001dpcm) {
  @supports (-webkit-appearance:none) and (display:flow-root) {
    .font-150-size { font-size: 80px !important; }
    .font-40-size{ font-size: 30px !important;}
    .height_important{ height: 150px !important;}
  }
}
@media not all and (min-resolution:.001dpcm) {
  @supports (-webkit-appearance:none) and (stroke-color:transparent) {
    .font-150-size { font-size: 80px !important; }
    .font-40-size{ font-size: 30px !important;}
    .height_important{ height: 150px !important;}

  }
}
@media not all and (min-resolution:.001dpcm) {
  @supports (-webkit-appearance:none) {
    .font-150-size { font-size: 80px !important; }
    .font-40-size{ font-size: 30px !important;}
    .height_important{ height: 150px !important;}

  }
}
@media not all and (min-resolution:.001dpcm) {
  @media {
    .font-150-size { font-size: 80px !important; }
    .font-40-size{ font-size: 30px !important;}
    .height_important{ height: 150px !important;}

  }
}
@media not all and (min-resolution:.001dpcm) {
  @supports (-webkit-appearance:none) and (not (stroke-color:transparent)) {
  .font-150-size { font-size: 80px !important; }
  .font-40-size{ font-size: 30px !important;}
    .height_important{ height: 150px !important;}

  }
}
@supports (-webkit-hyphens:none) {
  .font-150-size { font-size: 80px !important; }
  .font-40-size{ font-size: 30px !important;}
  .height_important{ height: 150px !important;}

}
@supports (-webkit-marquee-repetition:infinite) and (object-fit:fill) {
  .font-150-size { font-size: 80px !important; }
  .font-40-size{ font-size: 30px !important;}
  .height_important{ height: 150px !important;}

}
@supports (overflow:-webkit-marquee) and (justify-content:inherit) {
  .font-150-size { font-size: 80px !important; }
  .font-40-size{ font-size: 30px !important;}
  .height_important{ height: 150px !important;}

}
@media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0) {
  @media {
    .font-150-size { font-size: 80px !important; }
    .font-40-size{ font-size: 30px !important;}
    .height_important{ height: 150px !important;}

  } }
@media only screen and (-webkit-min-device-pixel-ratio:1) { ::i-block-chrome, .font-150-size { font-size: 80px !important; }
  .font-40-size{ font-size: 30px !important;}
  .height_important{ height: 150px !important;}

}
.fluctuate span {
  display: inline-block;
  width: 100%;
}
</style>
<script>
export default{
  name: 'CreditScore'
}
</script>
<script setup>
import "../assets/fluctuate.css"
const props = defineProps({
  fontSize: {
    type: [String,Number],
    default: 150,
  },
  creditScore: {
    type: [String,Number],
    default: 100,
  },
  height: {
    type: [Number,String],
    default: 180,
  },
  width:{
    type: String,
    default: '100%'
  },
  creditScoreText: {
    type: String,
    default: ''
  }
})
</script>
