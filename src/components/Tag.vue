<template>
  <text class="custom_tag" :class="`font-${number}-weight ${color}_btn`">{{tag}}</text>
</template>
<script setup>
import '../assets/tag.css'
const props = defineProps({
  tag:{
    type: String,
    default: ''
  },
  number:{
    type: [Number,String],
    default: 60
  },
  color:{
    type: String,
    default: ''
  }
})
</script>
