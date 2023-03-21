<template>
  <el-dialog
    v-model="dialogVisiable"
    title="温馨提示"
    width="250"
    center
    @closed="cancelLoginHandle"
  >
    <span>系统检测到您未登录。是否立即<el-link
      :underline="false"
      @click="gotoLoginHandle"
    >前往登录</el-link>？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="cancelLoginHandle"
        >取消</el-button>
        <el-button
          type="primary"
          @click="gotoLoginHandle"
        >前往登录</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  redirectUrl: {
    type: String, 
    required: false, 
    default () {
      return window.location.href
    }
  },
  onConfirm: {
    type: Function,
    required: false,
    default() {
      return () => {}
    }
  },
  onCancel: {
    type: Function,
    required: false,
    default() {
      return () => {}
    }
  },
})

const dialogVisiable = ref(true)
const redirectUrl = ref(props.redirectUrl)
const cancelLoginHandle = () => {
  props.onCancel()
  dialogVisiable.value = false
}
/**
 * 
 * @param {object} obj 
 * @returns {string}
 */
const objToHttpQuery = (obj) => {
  if (['string', 'boolean'].includes(typeof obj)) {
    return obj.toString()
  }else if (['number', 'bigint'].includes(typeof obj)) {
    return Number(obj).toString()
  } else if (obj instanceof Array) {
    return obj.join(',')
  } else {
    let str = ''
    for (let i in obj) {
      str += (str != '' ? '&' : '') + i + '=' + encodeURIComponent(obj[i])
    }
    return str
  }
}
const gotoLoginHandle = () => {
  props.onConfirm()
  dialogVisiable.value = false
  let params = {}
  if (redirectUrl.value && redirectUrl.value != '') {
    params.redirect_url = redirectUrl.value
  }
  let urlQueryStr = objToHttpQuery(params)
  window.location.href = '/login' + (urlQueryStr.length > 0 ? '?' + urlQueryStr : '')
}
</script>
<style scoped>
.dialog-footer button:not(:last-child) {
  margin-right: 10px;
}
</style>