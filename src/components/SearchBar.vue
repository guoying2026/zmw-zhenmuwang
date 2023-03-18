<template>
  <el-autocomplete
    v-if="isShowSearchBar"
    v-model="input"
    :fetch-suggestions="querySearch"
    trigger-on-focus="true"
    type="text"
    size="large"
    placeholder="搜索"
    :prefix-icon="Search"
    :fit-input-width="true"
    @input="handleInput"
    @select="handleSelect"
  >
    <template #prefix>
      <el-icon>
        <search></search>
      </el-icon>
    </template>
    <template #suffix>
      <el-button
        v-if="input.length > 0"
        class="clear_btn"
        size="small"
        circle
        @click="handleClear"
      >
        <el-icon>
          <circle-close></circle-close>
        </el-icon>
      </el-button>
      <el-button
        v-else
        class="clear_btn"
        size="small"
        circle
        disabled="true"
      >
        <el-icon>
          <circle-close></circle-close>
        </el-icon>
      </el-button>
    </template>
    <template #append>
      <el-button size="large" @click="handleSearch" >
        <el-icon>
          <search></search>
        </el-icon>
      </el-button>
    </template>
    <template #default="{ item }">
      <el-row :gutter="24">
        <el-col class="value" :span="item.isHistory?20:24">
          <span>{{ item.value }}</span>
        </el-col>
        <el-col v-if="item.isHistory" :span="2">
          <el-button class="clear_btn1" size="small" circle @click.stop="handleClearSearchHistoryItem(item.value)">
            <el-icon>
              <close></close>
            </el-icon>
          </el-button>
        </el-col>
      </el-row>
    </template>
  </el-autocomplete>
  <el-button v-else class="search_hide" @click="changeSearchBarShow()">
    <el-icon>
      <search></search>
    </el-icon>
  </el-button>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useSearchStore } from '../pinia/search.js'
import { useSearchHistoryStore } from '../pinia/searchHistory.js'

const searchStore = useSearchStore()

const searchHistory = useSearchHistoryStore()

const isShowSearchBar = ref(false)

const changeSearchBarShow = () => {
  isShowSearchBar.value = !isShowSearchBar.value
}

const input = ref('')

const links = ref([])

const page = ref(1)

const pageSize = ref(10)

/**
 * 获取搜索建议内容
 * @param {string} queryString
 * @param {Function} cb
 */
const querySearch = (queryString, cb) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value
  // call callback function to return suggestion objects
  cb(results)
}

const createFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1
    )
  }
}

const loadAll = () => {
  let results = [
    { value: '人造板' },
    { value: '脚墩' },
    { value: '长条' },
    { value: '托盘' },
    { value: '木箱' },
    { value: '木料' },
    { value: '木皮' },
    { value: '木方' },
    { value: '指接板建筑模板' },
    { value: '实木拼板地板料托盘料' },
    { value: '实木拼板实木多层板' }
  ]
  results = results.map(item => {
    item.isHistory = false
    return item
  })
  results = results.filter(item => !searchHistory._list.includes(item.value))
  searchHistory._list.forEach(item => {
    results.unshift({value: item, isHistory: true})
  })
  return results
}

/**
 * 选中搜索建议选项
 * @param {*} item
 */
const handleSelect = (item) => {
  input.value = item.value
}

/**
 * 输入搜索内容时
 * @param {*} value
 */
const handleInput = (value) => {
  input.value = value
}

/**
 * 清除搜索内容
 */
const handleClear = () => {
  input.value = ''
}

/**
 * 删除历史记录项
 * @param {*} item
 */
const handleClearSearchHistoryItem = (item) => {
  let itemIndex = searchHistory._list.findIndex(i => item == i.trim())
  if (itemIndex === -1) {
    return false
  }
  searchHistory._list.splice(itemIndex, 1)
  links.value = loadAll()
}

/**
 * 点击搜索
 */
const handleSearch = () => {
  // 如果搜索框没有内容，则隐藏
  if (input.value.length === 0) {
    changeSearchBarShow()
    return false
  }
  // 加入搜索历史记录
  let searchContentIndex = searchHistory._list.findIndex(item => input.value.trim() == item.trim())
  if (searchContentIndex > -1) {
    searchHistory._list.splice(searchContentIndex, 1)
  }
  searchHistory._list.push(input.value.trim())
  links.value = loadAll()

  searchStore._currentPage = 1
  page.value = 1

  // 获取搜索结果
  searchStore.search({
    page: page.value,
    size: pageSize.value,
    name: input.value,
  })
}

onMounted(() => {
  links.value = loadAll()
})
</script>
<style scoped>
.clear_btn,
.clear_btn:hover {
  background-color: var(--el-input-bg-color);
  border-color: var(--el-input-bg-color);
}
.clear_btn1 {
  background-color: var(--el-input-bg-color);
  border-color: transparent;
}
.search_hide {
  color: var(--navbar-ft-color);
  background-color: var(--navbar-bg-color);
  border-color: var(--navbar-bg-color);
}
</style>
