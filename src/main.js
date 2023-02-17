import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//路由使用vue-router
import router from './router/index.js'
//写css代码的时候，我们需要预处理工具styluss或者sass
//网络请求后端数据的时候，我们需要Axios
//组件库开发中，我们使用element-plus作为组件库
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
