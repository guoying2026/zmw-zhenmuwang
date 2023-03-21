<template>
  <el-container direction="vertical" :gutter="24">
    <el-main>
      <el-row>
        <!-- 收货地址选择栏 start -->
        <el-col>
          <SelectAddress @onChangeId="addressIdChangeHandle" @onChange="addressChangeHandle" />
        </el-col>
        <!-- 收货地址选择栏 end -->
        <!-- 商品详情列表 start -->
        <el-col class="goods_list">
          <el-row>
            <template v-for="(item, index) in toPayOrderStore._sId" v-bind:key="item.s_id">
              <el-col v-if="Number(item.count) > 0">
                <el-row>
                  <el-col :span="7">
                    <el-image class="goods_list-item-goods_image" :src="item.s_img" />
                  </el-col>
                  <el-col :span="16" :push="1">
                    <el-row>
                      <el-col class="goods_list-item-goods_name">{{ toPayOrderStore._goodsName }}</el-col>
                      <el-col class="goods_list-item-sub_info">
                        <el-row>
                          <el-col class="goods_list-item-spec">{{ item.spec }}</el-col>
                          <el-col class="goods_list-item-count">数量×{{ item.select_count }}{{ formatUnit(toPayOrderStore._unit?toPayOrderStore._unit:item.count_unit) }}</el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </template>
          </el-row>
        </el-col>
        <!-- 商品详情列表 end -->
        <el-col>
          <el-row align="middle">
            <el-col :span="6" class="remarks-title">订单备注</el-col>
            <el-col :span="18" class="remarks-content">  <el-input v-model="toPayOrderStore._remarks" disabled placeholder="选填，给卖家留言" /></el-col>
          </el-row>
        </el-col>
        <!-- 支付方式选择 start -->
        <el-col class="pay_type">
          <el-row>
            <el-col class="pay_type-title">支付方式</el-col>
            <el-col class="pay_type-item">
              <el-row align="middle">
                <el-col :span="3">
                  <el-image class="pay_type-item-logo" src="https://jr1test.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_f7d47730-e0df-47be-b52d-fe2a28746502.png" style="width: 25px;height: 25px;" />
                </el-col>
                <el-col :span="18" class="pay_type-item-desc">微信支付<span>(推荐)</span></el-col>
                <el-col :span="3"><el-icon  class="pay_type-item-check_icon"><Select /></el-icon></el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <!-- 支付方式选择 end -->
        <!-- 电子合同 start -->
        <el-col class="elect_contract" v-if="toPayOrderStore._is_agree==1">
          <ElectronicContract
            :username="addressInfo.name"
            :address="addressInfo.address_detailed+addressInfo.house_number"
            :goodsName="toPayOrderStore._goodsName"
            :specifications="toPayOrderStore._sId.filter(item=>Number(item.select_count)>0).map(item=>item.specifications).join(',')"
            :goodsNumber="toPayOrderStore._sId.filter(item=>Number(item.select_count)>0).map(item=>item.select_count+formatUnit(toPayOrderStore._unit)).join(',')"
            :totalMoney="orderPrice+''"
          />
        </el-col>
        <!-- 电子合同 end -->
      </el-row>
    </el-main>
    <!-- 底部 start -->
    <el-affix class="hidden-sm-and-up" position="bottom">
      <el-row class="order_footer" align="middle">
        <el-col :span="14" :push="1" class="ft-color-danger">
          <span style="font-size: var(--el-font-size-small);">合计：</span>
          <template v-if="isGettingOrderPrice">
            <span style="font-size: var(--el-font-size-large);font-weight: bold;">正在计算中...</span>
          </template>
          <template v-else>
            <span style="font-size: var(--el-font-size-extra-small);">￥</span>
            <span style="font-size: var(--el-font-size-large);font-weight: bold;">{{ orderPrice }}</span>
          </template>
        </el-col>
        <el-col :span="10">
          <el-button class="order_footer-large_btn" type="danger" @click="submitMobileOrderHandle">提交订单</el-button>
        </el-col>
      </el-row>
    </el-affix>
    <!-- 底部 end -->
  </el-container>
  <el-dialog
  v-model="isShowPayResult"
    title="支付结果"
    width="80%"
    :align-center="true"
    @closed="payResultDialogCloseHandle"
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
import { ref } from 'vue'
import { useToPayOrderStore } from '../pinia/toPayOrder.js'
import { useUserStore } from '../pinia/user.js'
import { formatUnit } from '../utils/good.js'
import {
  getGoodsSpecsPriceApi,
  getCalcFreightApi,
  submitOrderApi,
  pollingWxOrderApi,
} from '../api/goods.js'
import { useRoute } from 'vue-router'
const userStore = useUserStore()
const addressInfo = ref({
  id: '',
  name: '',
  phone: '',
  address_detailed: '',
  is_default: 0,
})
const toPayOrderStore = useToPayOrderStore()
const isGettingOrderPrice = ref(true)
const freightTitle = ref('')
const orderPrice = ref(0)
const addressId = ref(0)
const outTradeNo = ref(useRoute().query.out_trade_no)
const isShowPayResult = ref(false)
const isPaySuccess = ref(false)

// 如果传进来订单号，则判断该订单是否已支付，显示支付结果
if (outTradeNo.value) {
  pollingWxOrderApi({
    user_id: userStore.userId,
    phone: userStore.phone,
    out_trade_no: outTradeNo.value,
  }).then(res => {
    console.log(res)
    if (res.status != 200 || res.data.status != 1000) {
      return false
    }
    if (['SUCCESS'].findIndex(item => item == res.data.data.state) > -1) {
      clearPayResultTimer()
      isShowPayResult.value = true
      isPaySuccess.value = true
    }
    if (['REFUND','CLOSED','REVOKED','PAYERROR'].findIndex(item => item == res.data.data.state) > -1) {
      clearPayResultTimer()
      isShowPayResult.value = true
      isPaySuccess.value = false
    }
  })
}

const addressIdChangeHandle = (val) => {
  console.log(val)
  if (!val) {
    return false
  }
  addressId.value = val
  isGettingOrderPrice.value = true
  getGoodsSpecsPriceApi({
    type: toPayOrderStore._type,
    goods_id: toPayOrderStore._goodsId,
    s_id: toPayOrderStore._sId,
    unit: toPayOrderStore._unit,
    order_notes: toPayOrderStore._remarks,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      return false
    }
    getCalcFreightApi({
      user_id: userStore.userId,
      phone: userStore.phone,
      type: toPayOrderStore._type,
      goods_id: toPayOrderStore._goodsId,
      receive_id: val,
      openid: '',
      p_price: res.data.data.goods_total_price,
      s_id: toPayOrderStore._sId,
    }).then(res1 => {
      if (res1.status != 200 || res1.data.status != 1000) {
        return false
      }
      isGettingOrderPrice.value = false
      freightTitle.value = res1.data.data.title
      orderPrice.value = res1.data.data.payMoney
    })
  })
}

const addressChangeHandle = (info) => {
  addressInfo.value = info
}

const isWeChat = () => {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  var ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}

const submitMobileOrderHandle = () => {
  let sid = []
  let totalCount = 0
  isShowPayResult.value = false
  isPaySuccess.value = false
  toPayOrderStore._sId.forEach(item => {
    if (Number(item.select_count) === 0) {
      return false
    }
    if (item.is_add_manual == 1) {
      item.specifications = item.long+"cm*"+item.width+"cm*"+item.height+"cm"
    }
    sid.push({
      count: Number(item.select_count),
      count_unit: toPayOrderStore._unit,
      is_add_manual: item.s_id ? 0 : 1,
      s_id: item.s_id ? item.s_id : 0,
      s_img: '',
      spec: item.specifications,
    })
  })
  submitOrderApi({
    user_id: userStore.userId,
    phone: userStore.phone,
    sid: sid,
    num: totalCount,
    type: toPayOrderStore._type,
    goods_id: toPayOrderStore._goodsId,
    price: orderPrice.value,
    address_id: addressId.value,
    freight_title: freightTitle.value,
    order_notes: toPayOrderStore._remarks,
    is_new_pay: isWeChat() ? '1' : '4',
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      return false
    }
    console.log(res)
    if (isWeChat()) {
      // 在微信内，调用微信js支付
      let onBridgeReady = () => {
        WeixinJSBridge.invoke('getBrandWCPayRequest', res.data.data, function (res) {
          isShowPayResult.value = true
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // 支付成功
            isPaySuccess.value = true
          } else if (res.err_msg == "get_brand_wcpay_request:fail") {
            // 支付失败
            isPaySuccess.value = false
          } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
            // 用户取消支付
            isPaySuccess.value = false
          }
        })
      }
      if (typeof WeixinJSBridge == "undefined") {
        if( document.addEventListener ){
          document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
          document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
          document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
      } else {
        onBridgeReady()
      }
    } else {
      // 移动端非微信浏览器，h5支付。支付完回调地址为确认订单页，附带参数 out_trade_no 支付的订单号
      let redirectUrl = window.location.href + (window.location.search.trim() == "" ? '?' : '&') + 'out_trade_no=' + res.data.data.out_trade_no
      window.location.href = res.data.data.mweb_url + encodeURIComponent(redirectUrl)
    }
  })
}

const payResultDialogCloseHandle = () => {
  let redirectUrl = window.location.origin + '/goods/detail?type='+toPayOrderStore._type+'&goods_id='+toPayOrderStore._goodsId
  window.location.href = redirectUrl
}
</script>
<style scoped>
.goods_list {
  margin-top: 20px;
}
.goods_list-item-goods_image {
  width: calc((100vw - 40px) * 0.291666666667);
  height: calc((100vw - 40px) * 0.291666666667);
  border-radius: var(--el-border-radius-round);
}
.goods_list-item-goods_name {
  height: calc((100vw - 40px) * 0.291666666667 / 2);
  font-size: var(--el-font-size-base);
}
.goods_list-item-sub_info {
  height: calc((100vw - 40px) * 0.291666666667 / 2);
  color: var(--el-color-info-dark-2);
}
.goods_list-item-spec {
  font-size: var(--el-font-size-small);
}
.goods_list-item-count {
  font-size: var(--el-font-size-small);
}
.remarks-title {
  font-size: var(--el-font-size-base);
}
.pay_type, .elect_contract {
  margin-top: 20px;
}
.pay_type-title {
  font-size: var(--el-font-size-base);
}
.pay_type-item {
  margin-top: 5px;
}
.pay_type-item-logo {
  width: 30px;
  height: 30px;
}
.pay_type-item-desc {
  font-size: var(--el-font-size-base);
}
.pay_type-item-desc span {
  color: var(--el-color-warning);
}
.pay_type-item-check_icon {
  font-size: var(--el-font-size-base);
  background: var(--el-color-warning);
  color: #fff;
  padding: 3px;
  border-radius: 50%;
}
.order_footer {
  height: var(--navbar-height);
  /* line-height: var(--navbar-line-height); */
  background-color: var(--navbar-bg-color);
}
.order_footer-large_btn {
  width: 100%;
  height: var(--navbar-height);
  border-radius: 0;
}
.ft-color-danger {
  color: var(--el-color-danger);
}
</style>