<template>
  <div class="nav_header">
    <div class="nav">
      <router-link to="/">
        <span class="font-60-weight font-10-size black">ZMW</span>
      </router-link>
      <el-link type="info" :underline="false" @click="searchSlideDown"><el-icon class="font-20-size"><search></search></el-icon></el-link>
      <UserLogin/>
    </div>
  </div>
  <!-- 搜索框遮罩层 -->
  <div @click="searchSlideUp" :style="(isSearchSlideDown?'':'display: none;')+'position: fixed;top: 0;left: 0;width: 100vw;height: 100vh;z-index: 9999;'"></div>
  <!-- 搜索框主体 -->
  <div :class="'mini-live-search-cont '+(isSearchSlideDown?'miniSlideDown':'')">
    <label class="cf-one" for="mini-ls-input">请输入企业名、人名等关键词查询</label>
    <input type="text" id="mini-ls-input" name="live-posts-search" v-model.trim="searchContent" @keyup.enter="searchKeyUpEnter" placeholder="请输入企业名、人名等关键词查询">
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
          >
            <img
              width="150"
              height="150"
              :src="(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/format,webp'"
              class="mini-ls-thumb wp-post-image"
              :alt="item.type==0?item.company_name:item.goods_title"
              decoding="async"
              loading="lazy"
              :srcset="(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 150w, '+(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 300w, '+(item.type==0?item.miniapp_img:item.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 100w'"
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
<style scoped>
.nav_header {
  position: fixed;
  top: 0;
  width: 100%;
  color:var(--navbar-color);
  background-color: var(--navbar-bg-color);
  opacity:0.8;
  z-index: 100;
}
.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 10px 20px;
}
.black{
  color: #000;
}
.el-link {
  color: inherit;
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
    searchKeyUpEnter () {
      this.isSearchSlideDown = false
      this.$router.push('/search?name='+this.searchContent)
    },
  },
}
</script>
