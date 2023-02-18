/* jshint esversion: 8 */
/* jshint proto: true */
/* jshint asi: true */
import { ref, watchEffect } from 'vue'

/**
 * @param {String} name 
 * @param {any?=[]} value 
 * @returns {ref}
 */
const useStorage = (name, value=[]) => {
  let data = ref(JSON.parse(localStorage.getItem(name)) || value)
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value))
  },{
    flush: 'sync', // 选项参数 flush 指定回调函数的执行时机
    immediate: true, // 选项参数 immediate 指定回调是否需要立即执行
    deep: true, // 选项参数 deep 指定是否递归读取响应式数据
    isMultiSource: true, // 选项参数 isMultiSource 指定是否使用多个源
  })
  return data
}

export default {
  useStorage
}
