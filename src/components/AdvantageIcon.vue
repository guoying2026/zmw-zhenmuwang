<template>
  <figure class="advantage__icon" :class="`advantage__icon_${location}`">
    <slot name="iconDetail"></slot>
  </figure>
</template>
<script>
export default{
  name: 'AdvantageIcon'
}
</script>
<script setup>
const props = defineProps({
  location: {
    type: String,
    default: '',
  },
})
</script>
<style>
.advantage__icon {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 5.9375rem;
  height: 5.9375rem;
  background: conic-gradient(from 53deg at 50% 50%,#1f2123 0deg,#3a3d40 130deg,#1f2123 175deg,#3c4245 318deg,#1f2123 1turn);
  border-radius: 50%
}

.advantage__icon:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 103%;
  height: 103%;
  background: var(--advantage__icon-after-bg-color);
  border-radius: 50%;
  transform: translateX(-80%);
  -webkit-backdrop-filter: blur(1.5625rem);
  backdrop-filter: blur(1.5625rem)
}
.advantage__icon.advantage__icon_top:after{
  transform: translateY(-80%) !important;
}
.advantage__icon.advantage__icon_right:after{
  right: 0;
  left: auto;
  transform: translateX(80%) !important;
}
.advantage__icon.advantage__icon_none:after{
  display: none;
}
</style>
