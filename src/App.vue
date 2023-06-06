<template>
  <div class="nav_header">
    <div class="nav">
      <router-link to="/" class="width-160">
        <span class="font-60-weight font-10-size">ZMW</span>
      </router-link>
      <el-link class="width-160 nav-search_icon_link" type="info" :underline="false" @click="searchSlideDown"><el-icon class="font-20-size"><search></search></el-icon></el-link>
      <div class="right">
        <div class="right_1" v-show="themeStore.mode*1 === 0" @click="toggleTheme(1)">
          <svg t="1683777382357" class="icon_svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="37484" width="200" height="200"><path d="M466.2784 386.048c-41.9328-115.2-35.0208-236.288 10.0864-340.5312A462.4896 462.4896 0 0 0 397.6704 66.56C158.5152 153.6 35.2256 418.048 122.2656 657.2032s351.488 362.4448 590.592 275.4048c123.9552-45.1072 216.7296-137.8816 265.3184-250.0608-215.8592 37.7856-434.3296-83.3536-511.8976-296.4992z" fill="#000000" p-id="37485"></path></svg>
          <text class="font-10-size margin-10-left">切换到夜晚</text>
        </div>
        <div class="right_2" v-show="themeStore.mode*1 === 1" @click="toggleTheme(0)">
          <svg t="1683777324617" class="icon_svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="36277" width="200" height="200"><path d="M990.90682 588.428377l-92.55547 92.679451-0.073989 110.582641c-0.049992 58.843763-47.798496 106.593267-106.643259 106.642259l-110.232695 0.074988-92.978404 93.12838c-42.313358 42.387346-110.956582 42.387346-153.294935 0l-92.704447-92.854423-110.257692 0.074988c-58.843763 0.049992-106.518279-47.623524-106.468286-106.468286l0.074988-110.582641-93.103384-93.277357c-42.338354-42.388346-42.338354-111.155551 0-153.543896l93.377341-93.527318 0.074988-108.536962c0.049992-58.844762 47.798496-106.593267 106.643259-106.643259l108.188016-0.074988 94.175217-94.325192c42.338354-42.387346 110.981578-42.387346 153.294935 0l93.901259 94.051235 109.908746-0.074988c58.843763-0.049992 106.518279 47.624524 106.468287 106.468286l-0.074989 110.232696 92.280514 92.43049c42.313358 42.388346 42.313358 111.155551 0 153.543896zM512.199969 225.339376c-158.356141 0-286.740987 128.384846-286.740987 286.740986 0 158.355141 128.384846 286.740987 286.740987 286.740987 158.355141 0 286.739987-128.384846 286.739986-286.740987 0-158.355141-128.384846-286.740987-286.739986-286.740986z m0 498.679716c-117.040627 0-211.939729-94.899103-211.93973-211.93873S395.159342 300.141633 512.199969 300.141633c117.039627 0 211.938729 94.899103 211.938729 211.938729S629.239595 724.019092 512.199969 724.019092z" p-id="36278" fill="#ffffff"></path></svg>
          <text class="font-10-size margin-10-left">切换到白天</text>
        </div>
        <UserLogin/>
      </div>
    </div>
  </div>
  <!-- 搜索框遮罩层 -->
  <div @click="searchSlideUp" :style="(isSearchSlideDown?'':'display: none;')+'position: fixed;top: 0;left: 0;width: 100vw;height: 100vh;z-index: 9999;'"></div>
  <!-- 搜索框主体 -->
  <div :class="'mini-live-search-cont '+(isSearchSlideDown?'miniSlideDown':'')">
    <label class="cf-one" for="mini-ls-input">搜索你需要的🥳</label>
    <input type="text" id="mini-ls-input" name="live-posts-search" v-model.trim="searchContent" placeholder="请输入企业名、商品、社会统一信用代码等关键词查询">
    <div :class="'mini-ls-loader'+(isSearching?' to-show':'')" role="status">
      <span></span>
    </div>
    <div class="mini-ls-results">
      <div class="mini-ls-scroller" v-if="searchResult.length>0">
        <template v-for="(item, index) in searchResult" :key="index">
          <router-link
            class="mini-ls-item cf-one"
            :to="item.type==0?('/detail?company_info_id='+item.id):('/goodsDetail?type=1&goods_id='+item.goods_id)"
            :title="item.type==0?item.company_name:item.goods_title"
            @click="searchSlideUp"
          >
            <img
              width="150"
              height="150"
              :src="(item.type==0?item.miniapp_img:item.main_url)"
              class="mini-ls-thumb wp-post-image"
              :alt="item.type==0?item.company_name:item.goods_title"
              decoding="async"
              loading="lazy"
              :srcset="(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300 150w, '+(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300 300w, '+(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300 100w'"
              sizes="(max-width: 150px) 100vw, 150px"
              :onerror="'this.src=\''+(item.type==0?businessErrorImg:goodsErrorImg)+'\';this.srcset=\''+(item.type==0?businessErrorImg:goodsErrorImg)+' 150w, '+(item.type==0?businessErrorImg:goodsErrorImg)+' 300w, '+(item.type==0?businessErrorImg:goodsErrorImg)+'100w\';'"
            >
            <div class="mini-ls-title">{{ item.type==0?item.company_name:item.goods_title }}</div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
<!--  router-view和router-link是由vue-router注册的全局组件，
router-link负责跳转不同的页面，相当于vue世界中的超链接a标签
router-view负责渲染路由匹配的组件，可以通过把router-view放在不同的地方，实现复杂项目的页面布局-->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.fullPath" />
    </keep-alive>
  </router-view>
</template>
<script setup>
import { useThemeStore } from "./pinia/theme.js";
import {onMounted} from "vue";
const themeStore = useThemeStore();
const toggleTheme = (mode) => {
  if(mode*1 === 0){
    themeStore.mode = 0;
    document.documentElement.removeAttribute("data-theme");
  } else {
    themeStore.mode = 1;
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
onMounted(()=>{
  toggleTheme(themeStore.mode);
})
</script>
<style scoped>
.width-160{
  width: 160px;
}
.right{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.right_2{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
}
.right_1{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  border: 1px solid #000;
  padding: 5px;
  border-radius: 5px;
}
.right_1,
.right_2 {
  cursor: pointer;
}
.icon_svg{
  width: 20px;
  height: 20px;
}
.nav_header {
  position: fixed;
  top: 0;
  width: 100%;
  color:var(--navbar-color);
  background-color: var(--navbar-bg-color);
  opacity:0.8;
  z-index: 1501;
}
.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.el-link,a {
  color: inherit;
}
@media screen and (max-width: 425px) {
  .nav-search_icon_link {
    width: 80px;
  }
  .right_1 text,
  .right_2 text {
    margin-left: 5px;
    white-space: nowrap;
  }
}
@media screen and (max-width: 375px) {
  .nav-search_icon_link {
    width: 60px;
  }
  .right_1,
  .right_2 {
    position: relative;
    left: 10px;
  }
  .right_1 text,
  .right_2 text {
    margin: 0;
    white-space: nowrap;
  }
}
@media screen and (max-width: 320px) {
  .nav-search_icon_link {
    width: 20px;
  }
}
</style>
<script>
import "./assets/liveSearch.scss"
import UserLogin from "./components/UserLogin.vue";
import { getSearchResultApi } from "./api/search.js";
import { formatHttpsProtocol } from "./utils/httpReplace.js";
const delay = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()
export default {
  components: {UserLogin},
  data () {
    return {
      isSearchSlideDown: false,
      isSearching: false,
      searchContent: '',
      searchResult: [],
      goodsErrorImg: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
      businessErrorImg: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    }
  },
  watch: {
    searchContent () {
      delay(() => {
        let promiseArr = []
        this.searchResult = []
        if (this.searchContent.length === 0) {
          return false
        }
        this.isSearching = true
        for (let i = 0; i < 3; i++) {
          promiseArr.push(getSearchResultApi({
            type: i,
            name: this.searchContent,
            page: 1,
          }).then(res => {
            if (res.status != 200 || res.data.status != 1000) {
              return false
            }
            res.data.data.forEach(item => {
              item.type = i
              if (item.type == 0) {
                if (item.miniapp_img) {
                  item.miniapp_img = formatHttpsProtocol(item.miniapp_img)
                } else {
                  item.miniapp_img = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
                }
              } else {
                if (item.main_url) {
                  item.main_url = formatHttpsProtocol(item.main_url)
                } else {
                  item.main_url = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
                }
              }
              this.searchResult.push(item)
            })
          }))
        }
        Promise.all(promiseArr).finally(() => {
          this.isSearching = false
        })
      }, 500)
    },
  },
  methods: {
    searchSlideDown () {
      this.isSearchSlideDown = true
    },
    searchSlideUp () {
      this.isSearchSlideDown = false
      this.isSearching = false
      this.searchContent = ''
      this.searchResult = []
    },
  },
}
</script>
