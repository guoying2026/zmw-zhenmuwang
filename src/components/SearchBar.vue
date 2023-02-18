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
import common from '../utils/common.js'
import { onMounted, ref } from 'vue'

const isShowSearchBar = ref(false)

const searchHistory = common.useStorage('search-history')

const changeSearchBarShow = () => {
  isShowSearchBar.value = !isShowSearchBar.value
}

const input = ref('')

const links = ref([])

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
  results = results.filter(item => !searchHistory.value.includes(item.value))
  searchHistory.value.forEach(item => {
    results.unshift({value: item, isHistory: true})
  })
  return results
}
const handleSelect = (item) => {
  input.value = item.value
}

const handleInput = (value) => {
  input.value = value
}

const handleClear = () => {
  input.value = ''
}

const handleClearSearchHistoryItem = (item) => {
  let itemIndex = searchHistory.value.findIndex(i => item == i.trim())
  if (itemIndex === -1) {
    return false
  }
  searchHistory.value.splice(itemIndex, 1)
  links.value = loadAll()
}

const handleSearch = () => {
  if (input.value.length === 0) {
    changeSearchBarShow()
    return false
  }
  let searchContentIndex = searchHistory.value.findIndex(item => input.value.trim() == item.trim())
  if (searchContentIndex > -1) {
    searchHistory.value.splice(searchContentIndex, 1)
  }
  searchHistory.value.push(input.value.trim())
  links.value = loadAll()
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
