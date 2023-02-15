import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
//1、用一个引入一个。不要多余的
//如果你要用<el-container>,那么就需要import ElContainer
import {
    ElContainer,
    ElButton,
    ElMain,
    ElRow,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput,
    ElAffix,
} from 'element-plus'

const app = createApp(App);//生成vue实例

app.use(router) // 引用路由实例
//2、上面import,这里use
app.use(ElContainer)
    .use(ElButton)
    .use(ElMain)
    .use(ElRow)
    .use(ElCol)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElAffix)

app.mount('#app')//挂载到#app
