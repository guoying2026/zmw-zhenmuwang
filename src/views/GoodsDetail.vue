<template>
  <div class="padding-10 margin-60-top" v-if="!isLoading&&isSuccess">
    <div class="top_1_tag">
      <template v-for="(item, index) in tags" v-bind:key="item">
        <Tag :tag="item" number="60" :color="tagsColorList[index%tagsColorList.length]"></Tag>
      </template>
    </div>
    <div class="top_2 margin-20-top">
      <div class="margin-10-top top_2_1">
        <div class="svg_hello">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#EF9645" d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625c-.793-1.129-.519-2.686.611-3.478z"/><path fill="#FFDC5D" d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"/><g fill="#5DADEC"><path d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"/><path d="M7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zM24 2c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"/><path d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"/></g></svg>
        </div>
      </div>
      <el-carousel class="margin-10-top" :autoplay="true" style="width: 60%;height: 100%;border-radius: var(--el-border-radius-base);">
        <template v-for="(item, index) in goodsMainImageList" v-bind:key="item">
          <el-carousel-item>
            <el-image
              :src="item"
              fit="cover"
              :hide-on-click-modal="true"
              :preview-src-list="goodsMainImageList"
              :initial-index="index"
              :close-on-press-escape="true"
              :preview-teleported="true"
              style="width: 100%;height: 100%;"
            />
          </el-carousel-item>
        </template>
      </el-carousel>
      <text class="margin-20-top emphasize">{{ goodsTitle }}</text>
      <text class="margin-20-top">{{ shopInfo ? shopInfo.name : '' }}</text>
    </div>
    <el-row :gutter="24">
      <el-col :span="24" class="top_1_parent">
        <div class="top margin-20-top">
          <div class="top_2">
            <text class="margin-20-top font-14-size">价格</text>
            <text class="margin-20-top font-12-size emphasize">￥{{ goodsPrice }}元起</text>
            <text class="margin-20-top font-14-size">起拍量</text>
            <text class="margin-20-top font-12-size emphasize">{{ specList[0] ? specList[0].start_quantity : 0 }}{{ formatUnit(specList[0] ? specList[0].count_unit : 0) }}起</text>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <el-container direction="vertical" :gutter="24" class="margin-60-top" v-if="!isLoading&&isSuccess">
    <el-row>
      <GoodsIntroduce
        :description="goodsDescription"
        :goodsFeatures="goodsFeatures"
        :factoryFeatures="factoryFeatures"
        :imageList="goodsDetailImageList"
      >
        <el-form
          ref="formRef"
          :inline-message="true"
          :hide-required-asterisk="true"
          label-position="top"
          :model="goodsForm"
          :rules="goodsFormRules"
          style="padding-left: 10px;padding-right: 10px;"
        >
          <el-form-item prop="specs" required>
            <template #label>
              <el-row justify="space-between" align="middle">
                <el-col :span="6">
                  <el-row justify="start" align="middle">
                    <el-col class="pc_spec" :span="12">规格</el-col>
                    <el-col v-if="isShowAddNewSpecification" class="pc_spec_add" :span="12">
                      <el-link type="danger" :underline="false" @click="addNewSpecification">新增</el-link>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="18">
                  <el-row justify="end" align="middle" style="text-align: right;">
                    <el-col :span="16">请选择单位</el-col>
                    <el-col :span="8">
                      <el-select
                        v-model="selectedUnitIndex"
                        placeholder="请选择单位"
                        size="small"
                        @change="selectedUnitIndexChangeHandle"
                        :validate-event="false"
                      >
                        <el-option
                          v-for="(item, index) in unitArr"
                          v-bind:key="item"
                          :label="item.unit"
                          :value="item.count_unit"
                        />
                      </el-select>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </template>
            <SelectSpecifications :type="type" :goodsId="goodsId" v-model="specList" @onChange="handleSpecListCountChange" />
          </el-form-item>
          <el-form-item prop="address_name" required>
            <template #label>收货人姓名</template>
            <el-input
              v-model="goodsForm.address_name"
              placeholder="请输入收货人姓名"
              :validate-event="false"
            />
          </el-form-item>
          <el-form-item prop="address_phone" required>
            <template #label>收货电话</template>
            <el-input
              type="tel"
              v-model="goodsForm.address_phone"
              placeholder="请输入收货人手机号码"
              :validate-event="false"
            />
          </el-form-item>
          <el-form-item prop="address_detailed" required>
            <template #label>收货地址</template>
            <el-input
              v-model="goodsForm.address_detailed"
              placeholder="请输入详细收货地址"
              :validate-event="false"
            />
          </el-form-item>
          <el-form-item>
            <template #label>推荐备注(选填)</template>
            <el-checkbox-group
              v-model="selectedRemarkListItems"
              size="small"
              @change="remarkListSelectedChangeHandle"
              :validate-event="false"
            >
              <el-checkbox-button
                v-for="(item, index) in remarkList"
                v-bind:key="item"
                :key="item.name"
                :label="item.name"
                :validate-event="false"
              >{{ item.name }}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <template #label>留言</template>
            <el-input
              type="textarea"
              :rows="2"
              resize="none"
              v-model="remarkContent"
              placeholder="请勿包含加工要求信息。如无，可不输入"
              @change="remarkContentChangeHandle"
              :validate-event="false"
            />
          </el-form-item>
          <el-form-item>
            <el-descriptions :column="3" direction="vertical" style="width: 100%;">
              <el-descriptions-item align="left" label="商品总价">{{ goodsTotalPrice > 0 ? goodsTotalPrice : '？' }}元</el-descriptions-item>
              <el-descriptions-item align="left" label="智能运费">
                <template v-if="freightPrice > 0">{{ freightPrice }}元</template>
                <template v-else>
                  <template v-if="isCalcingFreightPrice">正在计算中...</template>
                  <template v-else>
                    <el-link class="pc_form_item-content" :underline="false" @click="calcFreightPriceHandle">点击计算</el-link>
                  </template>
                </template>
              </el-descriptions-item>
              <el-descriptions-item align="left" label="订单总价">{{ orderTotalPrice > 0 ? orderTotalPrice : '？' }}元</el-descriptions-item>
            </el-descriptions>
            <el-descriptions :column="1" direction="horizontal" style="width: 100%;">
              <el-descriptions-item align="left" label="合计">￥{{ totalPrice > 0 ? totalPrice : '？' }}元</el-descriptions-item>
            </el-descriptions>
          </el-form-item>
        </el-form>
        <el-affix position="bottom" target=".el-tabs__content">
          <el-button type="danger" class="goods_footer-large_btn" @click="isMobile?submitOrderByMobileHandle():submitOrderByPcHandle()">提交订单</el-button>
        </el-affix>
        <PcPay
          :isShow="isShowPcPayQrcode"
          :outTradeNo="outTradeNo"
          :codeUrl="pcPayQrcodeValue"
          @onClose="pcPayCloseHandle"
          @onGetPayResult="getPayResultHandle"
        />
      </GoodsIntroduce>
      <GoodsRecommends :list="otherSee" :type="type" />
    </el-row>
  </el-container>
  <!-- 加载失败 start -->
  <el-main class="margin-60-top" v-if="!isLoading&&!isSuccess">
    <el-empty>
      <template #description>
        <span class="fail_tips_text">
          加载失败，请稍后<el-link :underline="false" @click="reloadHandle">重试</el-link>
        </span>
      </template>
    </el-empty>
  </el-main>
  <!-- 加载失败 end -->
  <GoodsDetailSkeleton v-if="isLoading" />
</template>
<script setup>
import SelectSpecifications from '../components/SelectSpecifications.vue'
import GoodsDetailSkeleton from '../components/GoodsDetailSkeleton.vue'
import GoodsIntroduce from '../components/GoodsIntroduce.vue'
import PcPay from '../components/PcPay.vue'
import GoodsRecommends from '../components/GoodsRecommends.vue'
import Tag from "../components/Tag.vue"
import { nextTick, ref, reactive, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import {
  getGoodsDetailApi,
  getGoodsSpecsPriceApi,
  getCalcFreightApi,
  submitOrderApi,
} from '../api/goods.js'
import { formatHttpsProtocol } from '../utils/httpReplace.js'
import { formatUnit } from '../utils/good.js'
import { useAddressStore } from '../pinia/address.js'
import { useSelectedGoodsSpecsStore } from '../pinia/selectedGoodsSpecs.js'
const addressStore = useAddressStore()
const selectedGoodsSpecsStore = useSelectedGoodsSpecsStore()
// 定义并获取url地址传进来的goods_id参数
const goodsId = ref(useRoute().query.goods_id)
const type = ref(useRoute().query.type)
// 是否为移动端(屏幕宽度在768px以下)
const isMobile = ref(window.outerWidth < 768 ? true : false)
window.onresize = function () {
  isMobile.value = window.outerWidth < 768 ? true : false
}
// 商家信息
const businessInfo = ref(null)
// 店铺信息
const shopInfo = ref(null)
// 商品主图
const goodsMainImageList = ref([])
// 商品详情图
const goodsDetailImageList = ref([])
// 商品名称
const goodsTitle = ref('')
// 商品价格
const goodsPrice = ref(0)
// 发货地
const sendArea = ref('')
// 选中的购买单位下标
const selectedUnitIndex = ref(-1)
const selectedGoodsStore = selectedGoodsSpecsStore.getGoodsByGoodsId(type.value, goodsId.value)
const selectedUnitIndexChangeHandle = (val) => {
  selectedGoodsSpecsStore.setUnit(type.value, goodsId.value, val)
}
// 选中的购买单位名称
const selectedUnitName = ref('')
// 商品可选的购买单位
const unitArr = ref([])
// 规格列表
const specList = ref([])
// 是否显示支付二维码(用于pc端)
const isShowPcPayQrcode = ref(false)
const pcPayQrcodeValue = ref('')
const outTradeNo = ref('')
// 修改规格的购买数量时
const handleSpecListCountChange = () => {
  goodsForm.specs = specList.value.filter(item => {
    if (item.is_add_manual == 0 || item.is_add_manual == false || !item.is_add_manual) {
      return Number(item.select_count) > 0
    } else {
      return Number(item.select_count) > 0 && Number(item.long) > 0 && Number(item.width) > 0 && Number(item.height) > 0
    }
  })
  let s_id = JSON.parse(JSON.stringify(specList.value))
  s_id = s_id.filter(item => {
    return Number(item.select_count)>0
  })
  if (selectedUnitIndex.value > -1) {
    s_id = s_id.map(item => {
      item.unit = selectedUnitIndex.value
      item.count_unit = selectedUnitIndex.value
      return item
    })
  }
  getGoodsSpecsPriceApi({
    type: type.value,
    goods_id: goodsId.value,
    unit: selectedUnitIndex.value,
    s_id: s_id,
    order_notes: orderNotes.value,
  }).then(res => {
    console.log(res);
    if (res.status != 200 || res.data.status != 1000) {
      goodsTotalPrice.value = 0
      freightPrice.value = 0
      orderTotalPrice.value = 0
      totalPrice.value = 0
      return false
    }
    goodsTotalPrice.value = res.data.data.goods_total_price
    if (goodsForm.address_name.length>0&&goodsForm.address_phone.length>0&&goodsForm.address_detailed.length>0&&freightPrice.value > 0) {
      calcFreightPriceHandle()
    }
  }).catch(() => {
    goodsTotalPrice.value = 0
    freightPrice.value = 0
    orderTotalPrice.value = 0
    totalPrice.value = 0
  }).finally(() => {
  })
}
// 浏览数
const viewCount = ref(0)
// pc端的商品标签
const tags = ref([])
const tagsColorList = ref(['orange', 'yellow', 'purple', 'blue', 'green'])
// 商品的产品介绍
const goodsDescription = ref('')
// 产品优势
const goodsFeatures = ref([])
// 工厂优势
const factoryFeatures = ref([])
// 商品库存
const goodsStock = ref(0)
// 订单备注内容(由 selectedRemarkListItems 和 remarkContent 组成)
const orderNotes = ref('')
// 商品的可选备注
const remarkList = ref([])
// 已选中的备注
const selectedRemarkListItems = ref([])
// 商品的三维图示
const threeDImage = ref('')
// 用户下单时手动输入的备注内容
const remarkContent = ref('')
// 为你推荐
const otherSee = ref([])
// 是否正在加载中
const isLoading = ref(true)
// 是否加载成功
const isSuccess = ref(false)
// 是否加载出错了
const isFailed = ref(false)
const formRef = ref(null)
const goodsForm = reactive({
  specs: [],
  address_name: addressStore.name || '',
  address_phone: addressStore.phone || '',
  address_detailed: addressStore.address_detailed || '',
  order_notes: '',
})
const goodsFormRules = {
  specs: [
    {
      required: true,
      message: '请选择规格',
      validator (rule, value, callback) {
        if (JSON.parse(JSON.stringify(value)).length === 0) {
          return callback(new Error('请选择规格'))
        }
        return callback()
      },
    }
  ],
  address_name: [
    {
      required: true,
      message: '收货人姓名不能为空',
    }
  ],
  address_phone: [
    {
      required: true,
      message: '收货人手机号码不能为空'
    },
    {
      validator (rule, value, callback) {
        const regMobilePhone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (!regMobilePhone.test(value)) {
          return callback(new Error('请输入正确的手机号码'))
        }
        return callback()
      },
    },
  ],
  address_detailed: [
    {
      required: true,
      message: '收货地址不能为空',
    }
  ],
}
// 商品总价
const goodsTotalPrice = ref(0)
// 运费
const freightPrice = ref(0)
const isCalcingFreightPrice = ref(false)
// 订单总价
const orderTotalPrice = ref(0)
// 合计
const totalPrice = ref(0)
const freightTitle = ref('')
// 是否显示新增规格按钮和自定义规格输入框
const isShowAddNewSpecification = ref(false)
// 监听订单备注变化
const orderNotesChangeHandle = () => {
  let s_id = JSON.parse(JSON.stringify(specList.value))
  s_id = s_id.filter(item => {
    return Number(item.select_count)>0
  })
  if (selectedUnitIndex.value > -1) {
    s_id = s_id.map(item => {
      item.unit = selectedUnitIndex.value
      item.count_unit = selectedUnitIndex.value
      return item
    })
  }
  getGoodsSpecsPriceApi({
    type: type.value,
    goods_id: goodsId.value,
    unit: selectedUnitIndex.value,
    s_id: s_id,
    order_notes: orderNotes.value,
  }).then(res => {
    console.log(res);
    if (res.status != 200 || res.data.status != 1000) {
      goodsTotalPrice.value = 0
      freightPrice.value = 0
      orderTotalPrice.value = 0
      totalPrice.value = 0
      return false
    }
    goodsTotalPrice.value = res.data.data.goods_total_price
    if (freightPrice.value > 0) {
      calcFreightPriceHandle()
    }
  }).catch(() => {
    goodsTotalPrice.value = 0
    freightPrice.value = 0
    orderTotalPrice.value = 0
    totalPrice.value = 0
  }).finally(() => {
  })
}
// 监听备选备注的选中变化
const remarkListSelectedChangeHandle = (value) => {
  console.log(value)
  orderNotes.value = value.join(',') + (value.length > 0 && remarkContent.value.length > 0 ? ',' : '') + remarkContent.value
  orderNotesChangeHandle()
}
// 监听留言信息的变化
const remarkContentChangeHandle = (value) => {
  console.log(value)
  orderNotes.value = selectedRemarkListItems.value.join(',') + (selectedRemarkListItems.value.length > 0 && value.length > 0 ? ',' : '') + value
  selectedGoodsSpecsStore.setOrderNotes(type.value, goodsId.value, orderNotes.value)
  orderNotesChangeHandle()
}
// 新增自定义规格
const addNewSpecification = (isFromGetGoodsDetail = false, long = '', width = '', height = '', select_count = 0) => {
  if (
    (typeof isFromGetGoodsDetail === 'boolean' && isFromGetGoodsDetail !== true)
    || (!isFromGetGoodsDetail && !isLoading.value && isSuccess.value)
  ) {
    return false;
  }
  let specification = ''
  if (Number(long) > 0 && Number(width) > 0 && Number(height) > 0) {
    specification = long + 'cm*' + width + 'cm*' + height + 'cm'
  }
  specList.value.push({
    count: 0,
    select_count: select_count,
    is_add_manual: 1,
    count_unit: specList.value[0].count_unit,
    goods_id: specList.value[0].goods_id,
    s_img: specList.value[0].s_img,
    specifications: specification,
    long: Number(long),
    width: Number(width),
    height: Number(height),
    start_quantity: specList.value[0].start_quantity,
    user_id: specList.value[0].user_id,
  })
  console.log(specList.value);
}
// 获取商品详情信息
const getGoodsDetail = () => {
  // 获取商品详细信息
  getGoodsDetailApi({
    phone: goodsForm.address_phone,
    type: type.value,
    goods_id: goodsId.value,
  }).then(res => {
    console.log(res)
    if (res.status != 200 || res.data.status != 1000) {
      isFailed.value = true
      return false
    }
    isFailed.value = false
    isSuccess.value = true
    // 获取商家信息
    businessInfo.value = res.data.data.business_info
    // 获取店铺信息
    shopInfo.value = res.data.data.shop_info
    // 获取商品主图
    goodsMainImageList.value = res.data.data.main
    if (goodsMainImageList.value.length === 0 && res.data.data.hasOwnProperty('image')) {
      goodsMainImageList.value = [res.data.data.image]
    }
    goodsMainImageList.value = goodsMainImageList.value.map(item => formatHttpsProtocol(item))
    // 获取商品详情图
    goodsDetailImageList.value = res.data.data.details
    if (goodsDetailImageList.value.length === 0 && res.data.data.hasOwnProperty('image')) {
      goodsDetailImageList.value = [res.data.data.image]
    }
    goodsDetailImageList.value = goodsDetailImageList.value.map(item => formatHttpsProtocol(item))
    // 获取商品标题
    goodsTitle.value = res.data.data.goods_title
    if (!goodsTitle.value) {
      goodsTitle.value = res.data.data.goods_name
    }
    // 获取商品价格
    goodsPrice.value = res.data.data.goods_price
    if (res.data.data.price) {
      goodsPrice.value = res.data.data.price
    }
    // 获取商品发货地
    sendArea.value = res.data.data.sendland_name
    // 商品规格添加购买数量、是否手动添加等字段
    res.data.data.specifications = res.data.data.specifications.map(item => {
      if (item.hasOwnProperty('spec_id')) {
        item.s_id = item.spec_id
      }
      if (item.hasOwnProperty('spec_title')){
        item.specifications = item.spec_title
      }
      if (item.hasOwnProperty('price')){
        item.goods_price = item.price
      }
      item.s_img = goodsMainImageList.value[0]
      item.s_img = formatHttpsProtocol(item.s_img)
      item.count = Number(item.count)
      item.select_count = 0
      item.is_add_manual = 0
      return item
    })
    // 获取商品规格列表
    let isAutoCalcSpecsPrice = false
    specList.value = res.data.data.specifications
    specList.value.map(item => {
      let selectedSpec = selectedGoodsSpecsStore.getSpecBySpec(type.value, goodsId.value, item.s_id, item.specifications)
      if (Number(selectedSpec.select_count) > 0) {
        item.select_count = selectedSpec.select_count
        isAutoCalcSpecsPrice = true
      }
      return item
    })
    console.log(specList.value);
    if (res.data.data.hasOwnProperty('is_agree') && res.data.data.is_agree == '2') {
      isShowAddNewSpecification.value = true
      if (selectedGoodsStore && selectedGoodsStore.specs) {
        selectedGoodsStore.specs.filter(item=>Number(item.is_add_manual)===1).forEach(item => {
          let specArr = JSON.parse(JSON.stringify(item.specification.split('*'))).map(item=>item.replace('cm',''))
          if (specArr.length !== 3) {
            return false
          }
          addNewSpecification(true, specArr[0], specArr[1], specArr[2], item.select_count)
          isAutoCalcSpecsPrice = true
        })
      }
      // 添加一行新的自定义规格
      console.log(nextTick(() => {
        console.log('goto addNewSpecification');
        addNewSpecification(true)
      }))
    }
    if (selectedGoodsStore && selectedGoodsStore.order_notes) {
      goodsForm.order_notes = selectedGoodsStore.order_notes
    }
    // 获取浏览数
    viewCount.value = res.data.data.view_count
    // 获取商品标签
    tags.value = res.data.data.tags
    tags.value.sort((a,b)=>a.length-b.length)
    if (res.data.data.productDescription) {
      // 获取商品的产品介绍
      if (res.data.data.productDescription.cpjs) {
        goodsDescription.value = res.data.data.productDescription.cpjs
      }
      // 获取产品优势
      if (res.data.data.productDescription.cpys) {
        goodsFeatures.value = res.data.data.productDescription.cpys
      }
      // 获取工厂优势
      if (res.data.data.productDescription.gcys) {
        res.data.data.productDescription.gcys = res.data.data.productDescription.gcys.map((item,index) => {
          item.image = formatHttpsProtocol(res.data.data.productDescription.cpimg[index].data)
          return item
        })
      }
      if (res.data.data.productDescription.gcys) {
        factoryFeatures.value = res.data.data.productDescription.gcys
      }
    }
    // 获取商品的库存
    goodsStock.value = res.data.data.goods_stock
    if (res.data.data.store_count) {
      goodsStock.value = res.data.data.store_count
    }
    // 获取商品的可选购买单位
    unitArr.value = res.data.data.units
    // 获取默认的购买单位下标
    selectedUnitIndex.value = res.data.data.units[0].count_unit
    // 获取默认的购买单位名称
    selectedUnitName.value = res.data.data.units[0].unit
    if (selectedGoodsStore && Number(selectedGoodsStore.unit) > -1 && unitArr.value.filter(item => Number(item.count_unit) === Number(selectedGoodsStore.unit)) > -1) {
      selectedUnitIndex.value = Number(selectedGoodsStore.unit)
      selectedUnitName.value = formatUnit(Number(selectedGoodsStore.unit))
    }
    // 可选备注列表添加是否选中等字段
    res.data.data.remark_list = res.data.data.remark_list.map(item => {
      item.is_selected = 0
      return item
    })
    // 获取备注列表
    remarkList.value = res.data.data.remark_list
    remarkContent.value = selectedGoodsStore.order_notes.split(/,/g).filter(item => {
      let isInclude = remarkList.value.map(item1=>item1.name).includes(item)
      if (isInclude) {
        selectedRemarkListItems.value.push(item)
        return false
      }
      return true
    }).join(',')
    orderNotes.value = selectedGoodsStore.order_notes
    // 获取三维图示
    threeDImage.value = formatHttpsProtocol(res.data.data.three_d_image)
    otherSee.value = res.data.data.other_see
    if (isAutoCalcSpecsPrice) {
      handleSpecListCountChange()
    }
  }).catch((reason) => {
    console.log(reason)
    isFailed.value = true
    isSuccess.value = false
  }).finally(() => {
    isLoading.value = false
  })
}
// 计算运费
const calcFreightPriceHandle = async () => {
  const isValid = (await validateForm()).status
  if (!isValid) {
    return false
  }
  freightPrice.value = 0
  orderTotalPrice.value = 0
  totalPrice.value = 0
  return await new Promise((resolve, reject) => {
    isCalcingFreightPrice.value = true
    getCalcFreightApi({
      phone: goodsForm.address_phone,
      type: type.value,
      goods_id: goodsId.value,
      openid: '',
      p_price: goodsTotalPrice.value,
      s_id: specList.value,
      address_name: goodsForm.address_name,
      address_phone: goodsForm.address_phone,
      address_detailed: goodsForm.address_detailed,
    }).then(res => {
      if (res.status != 200 || res.data.status != 1000) {
        resolve(false)
        return false
      }
      freightPrice.value = res.data.data.freight
      orderTotalPrice.value = res.data.data.payMoney
      totalPrice.value = res.data.data.payMoney
      freightTitle.value = res.data.data.title
      resolve(res.data.data.title)
    }).catch(() => {
      resolve(false)
    }).finally(() => {
      isCalcingFreightPrice.value = false
    })
  })
}
const validateForm = async () => {
  return await new Promise((resolve, reject) => {
    if (!formRef.value) {
      resolve({status: false})
    }
    formRef.value.validate((isValid, invalidFields) => {
      if (isValid) {
        resolve({status: true})
      } else {
        resolve({status: false, ...invalidFields})
      }
    })
  })
}
const submitOrderApiHandle = async (is_new_pay = '1', callback = function (res) {}) => {
  const isValid = (await validateForm()).status
  if (!isValid) {
    return false
  }
  if (!freightTitle.value || freightTitle.value == '') {
    await calcFreightPriceHandle()
  }
  let sid = []
  let totalCount = 0
  goodsForm.specs.forEach(item => {
    sid.push({
      count: Number(item.select_count),
      count_unit: selectedUnitIndex.value,
      is_add_manual: item.s_id ? 0 : 1,
      sid: item.s_id ? item.s_id : 0,
      s_id: item.s_id ? item.s_id : 0,
      s_img: '',
      spec: item.specifications,
    })
    totalCount += Number(item.count)
  })
  submitOrderApi({
    phone: goodsForm.address_phone,
    sid: sid,
    num: totalCount,
    type: type.value,
    goods_id: goodsId.value,
    price: goodsTotalPrice.value,
    address_name: goodsForm.address_name,
    address_phone: goodsForm.address_phone,
    address_detailed: goodsForm.address_detailed,
    freight_title: freightTitle.value,
    order_notes: orderNotes.value,
    is_new_pay: is_new_pay,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      return false
    }
    !!callback&&callback(res)
  }).catch(() => {
  }).finally(() => {
  })
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
// 移动端生成订单
const submitOrderByMobileHandle = async () => {
  await submitOrderApiHandle(isWeChat() ? '1' : '4', (res) => {
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
// Pc端提交订单
const submitOrderByPcHandle = async () => {
  await submitOrderApiHandle('3', (res) => {
    if (!res.data.data) {
      return false
    }
    pcPayQrcodeValue.value = res.data.data.code_url
    outTradeNo.value = res.data.data.out_trade_no
    isShowPcPayQrcode.value = true
  })
}
const pcPayCloseHandle = () => {
  console.log('pcPayCloseHandle')
  isShowPcPayQrcode.value = false
}
const getPayResultHandle = (value) => {
  console.log('getPayResultHandle')
  console.log(value)
}
// 重新加载
const reloadHandle = () => {
  isLoading.value = true
  isSuccess.value = false
  getGoodsDetail()
}
getGoodsDetail()
watchEffect(() => {
  addressStore.name = goodsForm.address_name
  addressStore.phone = goodsForm.address_phone
  addressStore.address_detailed = goodsForm.address_detailed
})
</script>
<style scoped>
.top_1_tag{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.fifth{
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 2px;
  padding: 0 20px 20px 20px;
}
.fifth_item{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}
.el-col{
  margin-bottom: 10px;
}
.icon{
  width: 30px;
  height: 30px;
}
.top_1_parent{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.adv_1{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(109.6deg, rgb(53 53 53) 11.2%, rgb(98 83 133) 91.1%);
}
.top_1_2{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #000;
}
.top_1_2 .top_1_2_left{
  padding: 20px;
  background-color: #000;
  color: #fff;
}
.top_1_2 .top_1_2_right{
  display: flex;
  flex-direction: column;
  background-color: #645386;
  color: #fff;
  padding: 20px;
  letter-spacing: 2px;
  align-items: flex-start;
}
.top_1_2:hover{
  transform: scale(1.1);
  transition-duration: 80ms;
}
/* .el-container>>>.el-tabs__header{ */
.el-container:deep(.el-tabs__header) {
  position: -webkit-sticky;
  position: sticky;
  background: #fff;
  top: 50px;
  z-index: 1000;
  opacity: 0.8;
}
/* .el-container>>>.el-tabs__nav-wrap{ */
.el-container:deep(.el-tabs__nav-wrap) {
  padding: 0 20px;
  letter-spacing: 2px;
}
/* .el-container>>>.el-tabs__nav-scroll{ */
.el-container:deep(.el-tabs__nav-scroll) {
  overflow-x: auto;
}
.el-descriptions{
  padding:0 10px;
}
/* .el-container>>>.el-tabs__nav-scroll::-webkit-scrollbar{ */
.el-container:deep(.el-tabs__nav-scroll::-webkit-scrollbar) {
  display: none;
}
/* .el-container>>>.el-tabs__nav-wrap::after{ */
  .el-container:deep(.el-tabs__nav-wrap::after) {
  background-color: unset !important;
}
/* .el-container>>>.el-tabs__item.is-active { */
.el-container:deep(.el-tabs__item.is-active) {
  color: #000;
}
/* .el-container>>>.el-tabs__active-bar{ */
.el-container:deep(.el-tabs__active-bar) {
  background-color: #000;
}
/* .el-container>>>.el-tabs__item:hover{ */
.el-container:deep(.el-tabs__item:hover) {
  color:#000;
}
/* .el-container>>>.el-descriptions__header{ */
.el-container:deep(.el-descriptions__header) {
  margin-bottom: 0;
  padding: 10px 0px;
}
.top_tip_2{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.top_tip_2_2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.svg_happy{
  width: 50px;
  height: 50px;
}
.top_tip{
  width: 90%;
  padding: 15px;
  color: #11269a;
  background-image: linear-gradient(109.6deg, rgb(156, 252, 248) 11.2%, rgb(110, 123, 251) 91.1%);
  /*border-radius: 62% 47% 82% 35%/45% 45% 80% 66%;*/
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
.top_2_1{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.light_emphasize{
  font-weight: 600;
  text-align: center;
}
.emphasize{
  font-weight: 900;
  font-size: 24px;
  text-align: center;
}
.top{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /*background-color: #151515;*/
  /*color: #fff;*/
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 2.8px 2.2px rgba(0,0,0,.034), 0 6.7px 5.3px rgba(0,0,0,.048), 0 12.5px 10px rgba(0,0,0,.06), 0 22.3px 17.9px rgba(0,0,0,.072), 0 41.8px 33.4px rgba(0,0,0,.086), 0 100px 80px rgba(0,0,0,.12);
  letter-spacing: 2px;
  padding: 20px;
  width: 90%;
  box-sizing: unset;
}
.top_2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.svg_hello{
  height: 2em !important;
  width: 2em !important;
}

.padding-10{
  padding: 0 10px 20px 10px;
  letter-spacing: 2px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.form_field_empty_tips {
  color: var(--el-color-danger);
}
.goods_footer {
  height: var(--navbar-height);
  /* line-height: var(--navbar-line-height); */
  background-color: var(--navbar-bg-color);
}
.goods_footer-small_btn {
  line-height: 0.8em;
  text-align: center;
}
.goods_footer-small_btn-icon {
  font-size: 25px;
}
.goods_footer-small_btn-text {
  font-size: var(--el-font-size-extra-small);
}
.goods_footer-large_btn {
  width: 100%;
  height: var(--navbar-height);
  border-radius: var(--el-border-radius-base);
}
.el-affix,
.el-affix--fixed {
  background-color: var(--navbar-bg-color);
  color: var(--navbar-ft-color);
}
.fail_tips_text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: var(--el-font-size-base);
}
.pc_spec {
  height: 23px;
  line-height: 23px;
}
.pc_spec_add {
  height: 23px;
  line-height: 20px;
}
.pc_spec-input {
  width: 45px;
}
.pc_form_item-title {
  text-align: right;
}
.pc_form_item-content {
  text-align: left;
  font-weight: bold;
  color: #d90b0b;
}
.pc_buyer_service-icon {
  line-height: var(--el-font-size-base);
}
.pc_goods-tags-tag_item {
  margin-bottom: 5px;
}
.pc_goods_detail-detail_image {
  width: 100%;
}
.mobile_select_spec {
  display: inline-flex;
  width: calc(100% - 4em);
}
.mobile_select_spec-arrow_right {
  text-align: right;
}
.mobile_select_spec-thumb_icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.mobile_shop_info-title {
  font-size: var(--el-font-size-base);
  font-weight: 500;
}
.mobile_shop_info-view_cnt {
  font-size: var(--el-font-size-small);
  color: #999999;
}
.mobile_buy_drawer-header-image_container {
  flex: unset;
}
.mobile_buy_drawer-header-image {
  width: 78px;
  height: 78px;
  border-radius: var(--el-border-radius-base);
}
.mobile_buy_drawer-header-price {
  color: #d90b0b;
}
.mobile_buy_drawer-footer-btn {
  width: 100%;
}
.mobile_buy_drawer-main-add_spec {
  color: #d90b0b;
}
.mobile_buy_drawer-main-spec_input {
  width: 35px;
}
.font-size-extra-small {
  font-size: var(--el-font-size-extra-small);
}
.font-size-small {
  font-size: var(--el-font-size-small);
}
.font-size-base {
  font-size: var(--el-font-size-base);
}
.font-size-large {
  font-size: var(--el-font-size-large);
}
.font-size-extra-large {
  font-size: var(--el-font-size-extra-large);
}
.font-weight-bold {
  font-weight: bold;
}
.text-align-left {
  text-align: left;
}
.text-align-center {
  text-align: center;
}
.text-align-right {
  text-align: right;
}
</style>
<style>
.hidden-xs-only .el-descriptions .el-descriptions__table .el-descriptions__label {
  display: inline-block;
  width: 84px;
  text-align: right;
}
</style>
