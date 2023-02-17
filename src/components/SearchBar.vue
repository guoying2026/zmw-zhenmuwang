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
    <template #suffix>
      <el-button
        v-if="input.length > 0"
        class="clear_btn"
        :icon="CircleClose"
        size="small"
        circle
        @click="handleClear"
      />
      <el-button
        v-else
        class="clear_btn"
        :icon="CircleClose"
        size="small"
        circle
        disabled="true"
      />
    </template>
    <template #append>
      <el-button :icon="Search" size="large" @click="handleSearch" />
    </template>
  </el-autocomplete>
  <el-button
    v-else
    :icon="Search"
    class="search_hide"
    @click="changeSearchBarShow()"
  ></el-button>
</template>
<script setup>
import { Search, CircleClose } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'

// const Event = new Vue();

const isShowSearchBar = ref(false)

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
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const loadAll = () => {
  return [
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

const handleSearch = () => {
  if (input.value.length === 0) {
    changeSearchBarShow()
  }
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
.search_hide {
  color: var(--navbar-ft-color);
  background-color: var(--navbar-bg-color);
  border-color: var(--navbar-bg-color);
}
</style>
