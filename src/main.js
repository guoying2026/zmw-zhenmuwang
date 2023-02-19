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

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

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

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import common from './utils/common.js'
app.config.globalProperties.$env = common.getEnv()
app.config.globalProperties.$urlBase = common.getApiBase()
app.config.globalProperties.$userInfoName = common.getEnv() + '_users'
app.config.globalProperties.$common = common

app.mount('#app')//挂载到#app

router.beforeEach((to, from, next) => { // 根据router的meta配置，更改页面的title、keywords、description
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.keywords) {
    if (document.querySelector('meta[name="keywords"]')) {
      document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.keywords);
    } else {
      let keywordsEl = document.createElement('meta');
      keywordsEl.setAttribute('name', 'keywords');
      keywordsEl.setAttribute('content', to.meta.keywords);
      document.head.appendChild(keywordsEl);
    }
  }
  if (to.meta.description) {
    if (document.querySelector('meta[name="description"]')) {
      document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description);
    } else {
      let descriptionEl = document.createElement('meta');
      descriptionEl.setAttribute('name', 'description');
      descriptionEl.setAttribute('content', to.meta.description);
      document.head.appendChild(descriptionEl);
    }
  }
  next();
});
