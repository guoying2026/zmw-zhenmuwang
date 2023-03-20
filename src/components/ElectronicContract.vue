<template>
  <el-row align="middle">
    <el-col class="read_and_agree">
      <el-icon :class="'icon-check'+(isAgree?' checked':' unchecked')" @click="changeIsAgreeHandle"><Select /></el-icon>阅读并同意<el-link :underline="false" type="default" @click="showDrawerHandle">《电子合同》</el-link>
    </el-col>
  </el-row>
  <el-drawer
    v-model="isShowDrawer"
    direction="btt"
    size="80%"
    :lock-scroll="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
  >
    <template #header>
      <el-row justify="center">
        <el-col class="drawer-header">《电子合同》</el-col>
      </el-row>
    </template>
    <template #footer>
      <el-button class="agree_btn" type="warning" size="large" @click="agreeHandle">我已阅读并同意该合同</el-button>
    </template>
    <p>甲方（买方）：{{ username }}</p>
    <p>地址：{{ address }}</p>
    <p>乙方（卖方）：供应商</p>
    <p>地址：广东省汕头市龙湖区</p>
    <p>根据《中华人民共和国合同法》及其他有关法律、法规的规定，买卖双方在平等、公平、诚实信用的基础上就木材买卖事宜达成协议如下：</p>
    <p>第一条 甲方向乙方购买产品名称、规格、数量及总货款（含运费）：</p>
    <p>产品名称：{{ goodsName }}</p>
    <p>规格：{{ specifications }}</p>
    <p>数量：{{ goodsNumber }}</p>
    <p>总货款（含运费）（元）：￥{{ totalMoney }}</p>
    <p>*买方下单（即完成支付）前确认好产品品类，收货地址，数量以及特定要求备注，一旦下单不可更改订单信息，下单成功后，如遇不可抗力因素（疫情、水灾、地震）等导致到厂价格变高</p>
    <p>（1）若乙方已加工或者是加工完成，甲方须自行承担差价方可发货，若超过24小时没有补差价，即自动进入少发部分货物，由货款补充运费流程，若甲方选择退款，应当补偿卖家部分损失；</p>
    <p>（2）若乙方还未开始加工或者是现货，甲方则可以选择退款，但是必须付违约金；</p>
    <p>（3）本产品采购属于商业贸易行为</p>
    <p>第二条 交货</p>
    <p>交货方式为（甲方承担运费），但是因（疫情，天气等不可抗因素）导致物流费上涨，甲方需要补差价</p>
    <p>交货地点：{{ address }}</p>
    <p>第三条 验收</p>
    <p>产品的规格、数量等与约定不符或有其他表面瑕疵的，甲方提出异义期限为卖方交货后<u>&nbsp;7&nbsp;</u>日内，并开启陪审团，超过7天，一律不负责售后。</p>
    <p>第四条 违约责任</p>
    <p>甲方违约责任：</p>
    <p>1） 乙方已确认订单，开始加工，甲方如总货款10%违约金</p>
    <p>2） 乙方订单加工完成，甲方如单方面解除合同，必须赔付总货款40%违约金</p>
    <p>第五条 争议解决方式：本合同项下发生的争议，可协调解决，协调不成的，应向人民法院提起诉讼，或按照另行达成的仲裁条款或仲裁协议申请仲裁。</p>
    <p>甲方：{{ username }}</p>
    <p>签订日期：{{ signDate }}</p>
    <p>乙方：供应商</p>
    <p>签订日期：{{ signDate }}</p>
  </el-drawer>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  username: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  address: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  goodsName: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  specifications: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  goodsNumber: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  totalMoney: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
})
const emits = defineEmits(['onChange'])
const isAgree = ref(true)
const isShowDrawer = ref(false)
const signDate = ref(new Date().toLocaleDateString())
const changeIsAgreeHandle = () => {
  isAgree.value = !isAgree.value
  emits('onChange', isAgree.value)
}
const showDrawerHandle = () => {
  isShowDrawer.value = true
}
const agreeHandle = () => {
  isAgree.value = true
  isShowDrawer.value = false
  emits('onChange', isAgree.value)
}
</script>
<style scoped>
.read_and_agree {
  font-size: var(--el-font-size-base);
}
.icon-check {
  font-size: var(--el-font-size-base);
  color: #fff;
  padding: 3px;
  margin-right: 10px;
  border-radius: 50%;
}
.icon-check.checked {
  background: var(--el-color-danger);
}
.icon-check.unchecked {
  background: var(--el-color-danger-light-8);
}
.drawer-header {
  text-align: center;
}
.agree_btn {
  width: 100%;
}
p {
  font-size: var(--el-font-size-base);
}
</style>