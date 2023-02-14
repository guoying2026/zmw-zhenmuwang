import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App);//生成vue实例


app.use(router) // 引用路由实例

app.mount('#app')//挂载到#app
