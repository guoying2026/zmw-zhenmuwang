<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="/introduce" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="/about" target="_blank">go to about</a>
  </div>
  <router-view />
  <HelloWorld msg="Vite + Vue" />
</template>
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router'
</script>
