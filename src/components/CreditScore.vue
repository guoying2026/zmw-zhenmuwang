<template>
  <div
      class="fluctuate"
      :style="`width:${height};height:${height}`"
  >
    <span :class="`font-${fontSize}-size`">{{creditScore}}</span>
    <span :class="`font-${fontSize1}-size`">{{creditScoreText}} </span>
  </div>
</template>
<style>
.fluctuate{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--navbar-bg-color);
  line-height: 1.5em;
  font-weight: 600;
  letter-spacing: 3px;
}
</style>
<script>
export default{
  name: 'CreditScore'
}
</script>
<script setup>
const props = defineProps({
  fontSize: {
    type: [String,Number],
    default: 150,
  },
  fontSize1: {
    type: [String,Number],
    default: 15,
  },
  creditScore: {
    type: [String,Number],
    default: 100,
  },
  height: {
    type: [Number,String],
    default: '180px',
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
