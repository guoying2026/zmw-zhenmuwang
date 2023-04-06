<template>
  <el-row class="margin-60-top" v-if="searchResult.length>0">
    <el-col>
      <el-row class="list_container">
        <template v-for="(item, index) in searchResult" :key="index">
          <el-col v-if="item.type == 1 || item.type == 2">
            <el-row>
              <template v-for="(subitem, subindex) in item.data" :key="index-subindex">
                <el-col class="item-goods">
                  <el-row align="middle">
                    <el-col class="item-goods-image" :span="11" :xs="24">
                      <img
                        v-if="subitem.main_url"
                        :src="formatHttpsProtocol(subitem.main_url)+'?x-oss-process=image/format,webp'"
                        :alt="subitem.goods_title"
                        decoding="async"
                        loading="lazy"
                        :srcset="formatHttpsProtocol(subitem.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 150w, '+formatHttpsProtocol(subitem.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 300w, '+formatHttpsProtocol(subitem.main_url)+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 100w'"
                        sizes="(max-width: 150px) 100vw, 150px"
                        style="object-fit: cover;"
                        :onerror="'this.src=\''+goodsErrorImg+'\';this.srcset=\''+goodsErrorImg+' 150w, '+goodsErrorImg+' 300w, '+goodsErrorImg+' 100w\';'"
                      />
                      <img
                        v-else
                        :src="goodsErrorImg"
                        :alt="subitem.goods_title"
                        decoding="async"
                        loading="lazy"
                        :srcset="''+goodsErrorImg+' 150w, '+goodsErrorImg+' 300w, '+goodsErrorImg+' 100w'"
                        sizes="(max-width: 150px) 100vw, 150px"
                        style="object-fit: cover;"
                      />
                    </el-col>
                    <el-col :span="2" :xs="0"></el-col>
                    <el-col :span="11" :xs="24">
                      <el-row align="middle">
                        <el-col class="item-goods-title">{{ subitem.goods_title }}</el-col>
                        <el-col class="item-goods-description" v-if="subitem.goods_details&&subitem.goods_details.replace('\n','').replace('\r','').length>0">产品介绍：{{ subitem.goods_details }}</el-col>
                        <el-col class="item-goods-btns">
                          <el-row justify="center" align="middle">
                            <el-col class="item-goods-btns-detail" :span="5" :xs="24" :sm="9">
                              <router-link :to="'/goodsDetail?type=1&goods_id='+subitem.goods_id">详情<el-icon><Right /></el-icon></router-link>
                            </el-col>
                            <el-col class="item-goods-btns-buy_now" :span="6" :xs="24" :sm="10">
                              <router-link :to="'/goodsDetail?type=1&goods_id='+subitem.goods_id">立即购买<el-icon><ShoppingCart /></el-icon></router-link>
                            </el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </template>
            </el-row>
          </el-col>
          <el-col v-if="item.type == 0">
            <el-row>
              <template v-for="(subitem, subindex) in item.data" :key="index-subindex">
                <el-col class="item-business">
                  <el-row align="middle">
                    <el-col class="item-business-image" :span="4">
                      <img
                        v-if="subitem.miniapp_img"
                        :src="formatHttpsProtocol(subitem.miniapp_img)+'?x-oss-process=image/format,webp'"
                        :alt="subitem.goods_title"
                        decoding="async"
                        loading="lazy"
                        :srcset="formatHttpsProtocol(subitem.miniapp_img)+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 150w, '+formatHttpsProtocol(subitem.miniapp_img)+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 300w, '+formatHttpsProtocol(subitem.miniapp_img)+'?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp 100w'"
                        sizes="(max-width: 150px) 100vw, 150px"
                        style="object-fit: cover;"
                        :onerror="'this.src=\''+businessErrorImg+'\';this.srcset=\''+businessErrorImg+' 150w, '+businessErrorImg+' 300w, '+businessErrorImg+' 100w\';'"
                      />
                      <img
                        v-else
                        :src="businessErrorImg"
                        :alt="subitem.goods_title"
                        decoding="async"
                        loading="lazy"
                        :srcset="''+businessErrorImg+' 150w, '+businessErrorImg+' 300w, '+businessErrorImg+' 100w'"
                        sizes="(max-width: 150px) 100vw, 150px"
                        style="object-fit: cover;"
                      />
                    </el-col>
                    <el-col :span="2"></el-col>
                    <el-col :span="16">
                      <el-row>
                        <el-col class="item-business-title">
                          <router-link :to="'/detail?company_info_id='+subitem.id"><div><h2>{{ subitem.company_name }}</h2></div></router-link>
                        </el-col>
                        <el-col class="item-business-range" v-if="subitem.business_scope&&subitem.business_scope.replace('\n','').replace('\r','').length>0">
                          <span>主营：{{ subitem.business_scope }}</span>
                        </el-col>
                        <el-col class="item-business-credit_code" v-if="subitem.credit_code&&subitem.credit_code.replace('\n','').replace('\r','').length>0">
                          <span>社会统一信用代码：{{ subitem.credit_code }}</span>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </template>
            </el-row>
          </el-col>
        </template>
      </el-row>
    </el-col>
    <el-col v-if="!isMobile">
      <!-- 分页 -->
      <el-row justify="center" align="middle">
        <el-col>
          <el-pagination
            v-model:current-page="page"
            class="pages"
            background
            :layout="(page==1?'':'prev, ')+'pager'+(page==totalPage?'':', next')"
            v-model:page-count="totalPage"
            @current-change="loadmore"
          />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <template v-else>
    <template v-if="isLoading">
      <el-skeleton class="margin-60-top" animated>
        <template #template>
          <el-row class="list_container">
            <el-col>
              <el-row>
                <el-col class="item-goods" style="padding-top: 0px;padding-bottom: 0px;" v-for="i in 10">
                  <el-row align="middle">
                    <el-col class="item-goods-image" :span="11" :xs="24">
                      <el-skeleton-item variant="image" style="width: 100%;height: 210px;" />
                    </el-col>
                    <el-col :span="2" :xs="0"></el-col>
                    <el-col :span="11" :xs="24">
                      <el-row align="middle">
                        <el-col class="item-goods-title">
                          <el-skeleton-item variant="h1" />
                        </el-col>
                        <el-col class="item-goods-description">
                          <el-skeleton-item variant="text" v-for="j in 3" />
                        </el-col>
                        <el-col class="item-goods-btns">
                          <el-row justify="center" align="middle">
                            <el-col class="item-goods-btns-detail" :span="5" :xs="24" :sm="9">
                              <el-skeleton-item variant="text" />
                            </el-col>
                            <el-col class="item-goods-btns-detail" :span="5" :xs="24" :sm="9">
                              <el-skeleton-item variant="button" />
                            </el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </template>
      </el-skeleton>
    </template>
    <el-empty class="margin-60-top" v-else>
    <template #description>没有关于<strong>{{ name }}</strong>的搜索内容哦</template>
  </el-empty>
  </template>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getSearchResultApi } from '../api/search.js'
import { formatHttpsProtocol } from '../utils/httpReplace.js'
const isMobile = window.innerWidth <= 767
const name = ref('')
if (useRoute().query.name) {
  name.value = useRoute().query.name
}
const page = ref(1)
const totalPage = ref(1)
const isLoading = ref(false)
/**
 * ``` 
 * [
 *  {
 *    type: 0,
 *    list: [
 *      {}
 *    ]
 *  },{
 *    type: 1,
 *    list: [
 *      {}
 *    ]
 *  },{
 *    type: 2,
 *    list: [
 *      {}
 *    ]
 *  }
 * ]
 * ````
 */
const searchResult = ref([])
const type = ref([{
  data: [],
  current_page: 0,
  page_size: 0,
  total_page: 0,
  total_size: 0,
},{
  data: [],
  current_page: 0,
  page_size: 0,
  total_page: 0,
  total_size: 0,
},{
  data: [],
  current_page: 0,
  page_size: 0,
  total_page: 0,
  total_size: 0,
}])
const goodsErrorImg = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
const businessErrorImg = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
const loadmore = (current_page) => {
  if (isLoading.value) {
    return false
  }
  if (Number(current_page) > totalPage.value) {
    return false
  }
  isLoading.value = true
  page.value = Number(current_page)
  if (!isMobile) {
    searchResult.value = []
  }
  let promiseArr = []
  let tempTotalPgae = -Infinity
  type.value.forEach((item, index) => {
    promiseArr.push(getSearchResultApi({
      type: index,
      name: name.value,
      page: page.value,
    }).then(res => {
      if (res.status != 200 || res.data.status != 1000) {
        return false
      }
      if (Number(res.data.total_page) >= tempTotalPgae) {
        tempTotalPgae = Number(res.data.total_page)
      }
      type.value[index].data = res.data.data
      type.value[index].current_page = res.data.current_page
      type.value[index].page_size = res.data.page_size
      type.value[index].total_page = res.data.total_page
      type.value[index].total_size = res.data.total_size
      let item = {
        type: index,
        data: res.data.data,
      }
      if (Number(page.value) <= Number(res.data.total_page)) {
        searchResult.value.push(JSON.parse(JSON.stringify(item)))
      }
    }))
  })
  Promise.all(promiseArr).then(() => {
    console.log('total page is ', tempTotalPgae);
    totalPage.value = Number(tempTotalPgae)
    // totalPage.value = 3
  }).finally(() => {
    isLoading.value = false
    if (!isMobile) {
      window.scrollTo(0,0)
    }
  })
}
const threshold = 10
const pageScrollHandle = () => {
  if (!isMobile) {
    return false
  }
  if (isLoading.value) {
    return false
  }
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
  if (scrollTop + windowHeight + threshold >= scrollHeight) {
    console.log('到达底部')
    loadmore(page.value + 1)
  }
}
onMounted(() => {
  window.addEventListener('scroll', pageScrollHandle)
})
onUnmounted(() => {
  window.removeEventListener('scroll', pageScrollHandle)
})
loadmore(page.value)
</script>
<style scoped>
.el-main {
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
}
.list_container > .el-col {
  padding-left: 20px;
  padding-right: 20px;
}
.list_container > .el-col:nth-of-type(even) {
  background-color: #f0f2f7;
}
.item-goods {
  padding-top: 10vh;
  padding-bottom: 5vh;
}
.item-goods:nth-of-type(odd) > .el-row {
  flex-direction: row-reverse;
}
.item-goods-title {
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 900;
}
.item-goods-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  margin: 0 0 50px;
}
.item-goods-btns-detail,.item-goods-btns-buy_now {
  text-align: center;
}
.item-goods-btns-detail .el-link {
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 16px 24px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin-right: 10px;
}
.item-goods-btns-detail:hover .el-link {
  opacity: 0.7;
}
.item-goods-btns-detail .el-icon {
  margin-left: 6px;
  border: 1.5px solid #000;
  border-radius: 50%;
}
.item-goods-btns-buy_now a {
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 16px 14px;
  font-size: 18px;
  background: #4cd964;
  color: #fff;
}
.item-goods-btns-buy_now a:hover {
  background-color: #26b33e;
  color: #fff;
}
.item-goods-image img {
  width: 100%;
  height: 300px;
  border-radius: 32px;
  box-shadow: 0 15px 60px -15px rgb(0 0 0 / 50%);
}
@media screen and (max-width: 767px) {
  .item-goods-title {
    font-size: 22px;
  }
  .item-goods-description {
    margin-bottom: 0;
  }
  .item-goods-title,.item-goods-description {
    text-align: center;
  }
}
.item-business {
  padding-top: 5vh;
  padding-bottom: 5vh;
}
.item-business-image img {
  width: calc((100vw - 40px) * 0.166666666667);
  height: calc((100vw - 40px) * 0.166666666667);
  border-radius: 14px;
  box-shadow: 2px 4px 25px rgb(0 0 0 / 15%);
}
.item-business-title .el-link h2 {
  visibility: inherit;
  word-wrap: break-word;
  line-height: 1.6;
  letter-spacing: 1px;
  font-family: Outfit,sans-serif;
  font-weight: 900;
  font-size: 36px;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  transition: background-size .5s cubic-bezier(.16,1,.3,1);
  display: inline;
  text-decoration: none;
  padding-bottom: 5px;
  background-image: radial-gradient(circle farthest-corner at 10% 20%,#03ebff 0,#9846f2 100.2%);
  background-size: 0 4px;
  background-repeat: no-repeat;
  background-position: left 90%;
  color: #151515;
  border-radius: 999px;
}
.item-business-title h2:hover {
  -webkit-text-size-adjust: 100%;
  background-size: 100% 4px;
}
.item-business-range {
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
}
.item-business-range span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.item-business-credit_code {
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
}
@media screen and (max-width: 767px) {
  .item-business-title .el-link h2,.item-business-title .el-link h2:hover {
    font-size: 18px;
  }
}
</style>
<style>
.pages.is-background {
  justify-content: center;
}
.pages.is-background .el-pager .number {
  padding: 0.5rem 1rem;
}
.pages.is-background .el-pager .number
,.pages.is-background .el-pager .more.btn-quicknext
,.pages.is-background .el-pager .more.btn-quickprev
,.pages.is-background .btn-prev
,.pages.is-background .btn-next {
  outline: 0;
  text-decoration: none;
  transition: .3s;
  margin: 1rem 0.2rem;
  background-color: #151515;
  color: #fff;
  border-radius: 6px;
}
.pages.is-background .el-pager .number.is-active {
  background: none;
  color: #151515;
}
</style>