import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

export default defineConfig({
  // ...
  "resolve.alias": {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
  },
  // base: path.resolve(__dirname, './dist/'),	// 新增
  base: './',
  plugins: [
    vue(),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.min.js',
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://cdn.jsdelivr.net/npm/vue-router@4.1.6/dist/vue-router.global.min.js',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://cdn.jsdelivr.net/npm/element-plus@2.2.29/dist/index.full.min.js',
          css: 'https://cdn.jsdelivr.net/npm/element-plus@2.2.29/dist/index.css'
        },
        {
          name: '@element-plus/icons-vue',
          var: 'ElementPlusIconsVue',
          path: 'https://cdn.jsdelivr.net/npm/@element-plus/icons-vue@2.0.6/dist/index.iife.min.js',
        },
        {
          name: 'vue-demi',
          var: 'VueDemi',
          // path: 'https://cdn.bootcdn.net/ajax/libs/vue-demi/0.13.1/index.iife.js'
          path: 'https://cdn.jsdelivr.net/npm/vue-demi@0.13.11/lib/index.iife.min.js',
        },
        {
          name: 'pinia',
          var: 'Pinia',
          // path: 'https://cdn.bootcdn.net/ajax/libs/pinia/2.0.30/pinia.iife.prod.min.js'
          path: 'https://cdn.jsdelivr.net/npm/pinia@2.0.30/dist/pinia.iife.min.js',
        },
        {
          name: 'axios',
          var: 'axios',
          path: 'https://cdn.jsdelivr.net/npm/axios@1.3.3/dist/axios.min.js'
        },
        /* {
          name: 'jsonwebtoken',
          var: 'Jsonwebtoken',
          path: 'https://cdn.jsdelivr.net/npm/jsonwebtoken@9.0.0/index.min.js',
        }, */
        {
          name: 'mockjs',
          var: 'Mock',
          path: 'https://cdn.jsdelivr.net/npm/mockjs@1.1.0/dist/mock-min.min.js',
        },
        /* {
          name: 'qrcode.vue',
          var: 'QrcodeVue',
          path: 'https://cdn.jsdelivr.net/npm/qrcode.vue@3.3.4/dist/qrcode.vue.browser.min.js',
        }, */
      ],
    }),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteCompression(),
  ],
  build: {
    // 压缩代码，包含删除空格、重命名变量、修改语法使语法更简练
    minify: true,
    // 关闭文件计算
    reportCompressedSize: false,
    // 关闭生成map文件，可以达到缩小打包体积
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks (id) {
          /* if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          } else if (id.includes('/src/views/')) {
            return id
              .toString()
              .split('/src/views/')[1]
              .split('.vue')[0]
              .toString();
          } else if (id.includes('/src/components/')) {
            return id
              .toString()
              .split('/src/components/')[1]
              .split('.vue')[0]
              .toString();
          } */
        },
      },
    },
  },
})
