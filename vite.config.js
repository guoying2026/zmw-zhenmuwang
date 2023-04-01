import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

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
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }/*  else if (id.includes('/src/views/')) {
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
