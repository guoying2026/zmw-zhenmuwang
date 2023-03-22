import { createApp } from 'vue'
import './style.css'
import './assets/color.css'
import './assets/margin.css'
import './assets/fontSize.css'
import './mock/comment.js'
import './mock/question.js'
import './mock/goods.js'
import App from './App.vue'
//路由使用vue-router
import router from './router/index.js'
//全局状态使用pinia
import store from './pinia/index.js'
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
    ElLoading,
    ElEmpty,
    ElLink,
    ElSkeleton,
    ElCarousel,
    ElCarouselItem,
    ElTable,
    ElTableColumn,
    ElDescriptions,
    ElDescriptionsItem,
    ElInputNumber,
    ElTag,
    ElTabs,
    ElTabPane,
    ElDrawer,
    ElSelect,
    ElOption,
    ElDivider,
    ElCheckbox,
    ElCheckboxGroup,
    ElCheckboxButton,
    ElPopconfirm,
    ElDialog,
    ElResult,
    ElSwitch,
    ElMessage,
} from 'element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);//生成vue实例

app.use(router) // 引用路由实例
    .use(store) //引用pinia实例

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
    .use(ElLoading)
    .use(ElEmpty)
    .use(ElLink)
    .use(ElSkeleton)
    .use(ElCarousel)
    .use(ElCarouselItem)
    .use(ElTable)
    .use(ElTableColumn)
    .use(ElDescriptions)
    .use(ElDescriptionsItem)
    .use(ElInputNumber)
    .use(ElTag)
    .use(ElTabs)
    .use(ElTabPane)
    .use(ElDrawer)
    .use(ElSelect)
    .use(ElOption)
    .use(ElDivider)
    .use(ElCheckbox)
    .use(ElCheckboxGroup)
    .use(ElCheckboxButton)
    .use(ElPopconfirm)
    .use(ElDialog)
    .use(ElResult)
    .use(ElSwitch)
    .use(ElMessage)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')//挂载到#app

//参考国外程序员在 src/main.js 里加入下面这段代码,这样就可以在日志信息中直接复制报错内容中的链接，去 Stack Overflow 中寻找答案
window.onerror = function(e){
    console.log(['https://stackoverflow.com/search?q=[js]+'+e])
}

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
