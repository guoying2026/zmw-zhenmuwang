<template v-if="isShow">
  <el-dialog
    v-model="isShowPayQrcode"
    title="微信扫码支付"
    width="30%"
    :close-on-click-modal="false"
    :align-center="true"
    @opened="payQrcodeDialogOpenhandle"
    @closed="payQrcodeDialogClosehandle"
  >
    <el-row justify="center">
      <el-col style="text-align: center;">
        <QrcodeVue
          :value="codeUrl"
          :size="pcPayQrcodeSize"
          level="H"
        />
      </el-col>
    </el-row>
  </el-dialog>
  <el-dialog
    v-model="isShowPayResult"
    title="支付结果"
    width="30%"
    :align-center="true"
    @opened="payResultDialogOpenhandle"
    @closed="payResultDialogClosehandle"
  >
    <el-row>
      <el-col>
        <el-result
          :icon="isPaySuccess?'success':'error'"
          :title="isPaySuccess?'支付成功':'支付失败'"
        >
          <template #sub-title v-if="isPaySuccess">您可以在<strong>好货值得买</strong>/<strong>买木头</strong>小程序查看交易记录</template>
        </el-result>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script setup>
import { nextTick, onUnmounted, ref, watchEffect } from 'vue'
import { pollingWxOrderApi } from '../api/goods.js'
/**
 * 一款 Vue.js 二维码组件.
 * [qrcode.vue](https://github.com/scopewu/qrcode.vue/blob/HEAD/README-zh_cn.md)
 */
import QrcodeVue from 'qrcode.vue'
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();
const props = defineProps({
  isShow: {
    type: Boolean,
    required: true,
    default () {
      return false
    }
  },
  outTradeNo: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  codeUrl: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
})
const emits = defineEmits(['onClose','onGetPayResult'])
const isShowPayQrcode = ref(false)
const outTradeNo = ref('')
const codeUrl = ref('')
const isShowPayResult = ref(false)
const isPaySuccess = ref(false)
const pcPayQrcodeSize = ref((window.innerWidth * 0.3) - 40)
const payResultTimer = ref(null)
const clearPayResultTimer = () => {
  clearInterval(payResultTimer.value)
  payResultTimer.value = null
}
const payQrcodeDialogOpenhandle = () => {
  console.log('payQrcodeDialogOpenhandle');
  payResultTimer.value = setInterval(function () {
    pollingWxOrderApi({
      user_id: userStore.userId,
      phone: userStore.phone,
      out_trade_no: props.outTradeNo,
    }).then(res => {
      console.log(res)
      if (res.status != 200 || res.data.status != 1000) {
        return false
      }
      if (['SUCCESS'].findIndex(item => item == res.data.data.state) > -1) {
        isShowPayResult.value = true
        isPaySuccess.value = true
        nextTick(() => {
          isShowPayQrcode.value = false
        })
      }
      if (['REFUND','CLOSED','REVOKED','PAYERROR'].findIndex(item => item == res.data.data.state) > -1) {
        isShowPayResult.value = true
        isPaySuccess.value = false
        nextTick(() => {
          isShowPayQrcode.value = false
        })
      }
    }).catch(() => {
    }).finally(() => {
    })
  }, 2000)
}
const payQrcodeDialogClosehandle = () => {
  console.log('payQrcodeDialogClosehandle')
  clearInterval(payResultTimer.value)
  if (!isShowPayQrcode.value && !isShowPayResult.value) {
    emits('onClose')
  }
}
const payResultDialogOpenhandle = () => {
  console.log('payResultDialogOpenhandle')
  emits('onGetPayResult', isPaySuccess.value ? 'success' : 'fail')
}
const payResultDialogClosehandle = () => {
  console.log('payResultDialogClosehandle')
  if (!isShowPayQrcode.value && !isShowPayResult.value) {
    emits('onClose')
  }
}
watchEffect(() => {
  if (props.isShow) {
    isShowPayQrcode.value = true
    isShowPayResult.value = false
  }
  if (!props.isShow) {
    isShowPayQrcode.value = false
    isShowPayResult.value = false
  }
  if (props.outTradeNo) {
    outTradeNo.value = props.outTradeNo
  }
  if (props.codeUrl) {
    codeUrl.value = props.codeUrl
  }
})
onUnmounted(() => {
  clearPayResultTimer()
})
</script>
<style scoped></style>