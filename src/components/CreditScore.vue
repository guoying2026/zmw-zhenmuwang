<template>
  <div
      class="fluctuate margin-20-top"
      :style="`height: ${height}px;width:${width}`"
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
  }
}
@media not all and (min-resolution:.001dpcm) { @supports (-webkit-appearance:none) {
  .font-150-size { font-size: 80px !important; }
  .font-40-size{ font-size: 30px !important;}

}
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
