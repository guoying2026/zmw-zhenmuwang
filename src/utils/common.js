import { ref, watchEffect } from "vue";

/**
 * 转换https协议
 * @param {string} url
 * @returns {string}
 */
export const formatHttpsProtocol = (url) => {
  if (!url || url.trim().length === 0) {
    return '';
  }
  let str = url.split('//')
  if (str.length === 1) {
    return 'https://' + str[0]
  }
  return 'https://' + str[1]
}

/**
 * 转换http协议
 * @param {string} url
 * @returns {string}
 */
export const formatHttpProtocol = (url) => {
  if (!url || url.trim().length === 0) {
    return '';
  }
  let str = url.split('//')
  if (str.length === 1) {
    return 'http://' + str[0]
  }
  return 'http://' + str[1]
}

/**
 * 格式化库存单位
 * @param {Number} unit
 * @returns {string}
 */
export const formatUnit = (unit) => {
  // 0吨，1立方，2根，3张，4块，5平方，6米，7条，8件
  const unitArr = ['吨','立方','根','张','块','平方','米','条','件','个']
  let unitName = unitArr[unit]
  if (!unitName) {
    unitName = unitArr[0]
  }
  return unitName
}

/**
 * 获取/存储localStorage
 * @param {string} name 
 * @param {any} value 
 * @returns {any}
 */
export const useStorage = (name, value = []) => {
  let data = ref(JSON.parse(localStorage.getItem(name)) || value)
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value))
  }, {
    flush: 'async',
    immediate: true,
    deep: true,
    isMultiSource: true,
  })
  return data
}