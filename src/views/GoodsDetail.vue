<template>
  <el-container direction="vertical" :gutter="24">
    <el-main v-if="!isLoading&&isSuccess">
      <el-row>
        <!-- 产品图轮播 start -->
        <GoodsCarousel :list="goodsMainImageList" />
        <!-- 产品图轮播 end -->
        <!-- 产品信息 start -->
        <!-- pc端产品信息 start -->
        <el-col class="hidden-xs-only" :span="18" :offset="1">
          <el-descriptions :title="goodsTitle" :column="1">
            <el-descriptions-item>
              <template #label>价格</template>
              ￥{{ goodsPrice }}元起
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>发货地</template>
              {{ sendArea }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>发货物流</template>
              <el-popover
                placement="top-start"
                :width="200"
                trigger="hover"
                content="智能运费是指真木网大数据算法智能计算出的运费，系统将根据您购买的木材体积、重量、配送距离等向您收取一定的运费。"
              >
                <template #reference>智能运费</template>
              </el-popover>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <el-row align="middle">
                  <el-col class="pc_spec" :span="2" :sm="2" :md="1" :lg="1" :xl="1">规格</el-col>
                  <el-col v-if="isShowAddNewSpecification" class="pc_spec_add" :span="2" :sm="2" :md="1" :lg="1" :xl="1">
                    <el-link type="danger" :underline="false" @click="addNewSpecification">新增</el-link>
                  </el-col>
                </el-row>
              </template>
              <el-table :data="specList" :show-header="false">
                <el-table-column min-width="100">
                  <template #default="scope">
                    <!-- 常规规格 start -->
                    <template
                      v-if="scope.row.is_add_manual == 0 || scope.row.is_add_manual == false"
                    >{{ scope.row.specifications }}</template>
                    <!-- 常规规格 end -->
                    <!-- 自定义规格 start -->
                    <el-row v-else>
                      <el-col>
                        <el-input
                          class="pc_spec-input"
                          v-model="scope.row.long"
                          type="number"
                          step="0.01"
                          size="small"
                          placeholder="长"
                        />×
                        <el-input
                          class="pc_spec-input"
                          v-model="scope.row.width"
                          type="number"
                          step="0.01"
                          size="small"
                          placeholder="宽"
                        />×
                        <el-input
                          class="pc_spec-input"
                          v-model="scope.row.height"
                          type="number"
                          step="0.01"
                          size="small"
                          placeholder="高"
                        />
                      </el-col>
                    </el-row>
                    <!-- 自定义规格 end -->
                  </template>
                </el-table-column>
                <el-table-column min-width="40">
                  <template #default="scope">
                    <template
                      v-if="scope.row.is_add_manual == 0 || scope.row.is_add_manual == false"
                    >{{ scope.row.goods_price }}元</template>
                  </template>
                </el-table-column>
                <el-table-column min-width="50">
                  <template #default="scope">
                    <template
                      v-if="scope.row.is_add_manual == 0 || scope.row.is_add_manual == false"
                    >{{ scope.row.count }}{{ formatUnit(scope.row.count_unit) }}可售</template>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template #default="scope">
                    <el-input-number
                      size="small"
                      v-model="scope.row.select_count"
                      :min="0"
                      :max="scope.row.is_add_manual == 0 || scope.row.is_add_manual == false ? Number(scope.row.count) : Infinity"
                      @change="handleSpecListCountChange"
                    />
                  </template>
                </el-table-column>
              </el-table>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>收货信息</template>
              <EditAddress :id="selectedReceiveAddressId" :list="receiveAddressList" @changeId="recvAddIdChangeHandle" @changeList="recvAddListChangeHandle" />
            </el-descriptions-item>
            <el-descriptions-item>
              <el-row>
                <el-col :span="12">
                  <el-input type="textarea" :rows="4" resize="none" v-model="remarkContent" placeholder="请输入订单备注" @change="remarkContentChangeHandle" />
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col>
                      <el-row>
                        <el-col class="pc_form_item-title" :span="14">商品总价：</el-col>
                        <el-col class="pc_form_item-content" :span="10">{{ goodsTotalPrice > 0 ? goodsTotalPrice : '？' }}元</el-col>
                      </el-row>
                    </el-col>
                    <el-col>
                      <el-row>
                        <el-col class="pc_form_item-title" :span="14">智能运费：</el-col>
                        <el-col class="pc_form_item-content" :span="10">
                          <template v-if="freightPrice > 0">{{ freightPrice }}元</template>
                          <template v-else><el-link class="pc_form_item-content" :underline="false" @click="calcFreightPriceHandle">点击计算</el-link></template>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col>
                      <el-row>
                        <el-col class="pc_form_item-title" :span="14">订单总价：</el-col>
                        <el-col class="pc_form_item-content" :span="10">{{ orderTotalPrice > 0 ? orderTotalPrice : '？' }}元</el-col>
                      </el-row>
                    </el-col>
                    <el-col>
                      <el-row>
                        <el-col class="pc_form_item-title" :span="14">合计：</el-col>
                        <el-col class="pc_form_item-content" :span="10">{{ totalPrice > 0 ? totalPrice : '？' }}元</el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-descriptions-item>
          </el-descriptions>
        </el-col>
        <!-- pc端产品信息 end -->
        <!-- 移动端产品信息 start -->
        <el-col class="hidden-sm-and-up">
          <el-descriptions :title="goodsTitle" :column="1">
            <el-descriptions-item>
              <template #label>价格</template>
              ￥{{ goodsPrice }}元起
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>起拍量</template>
              {{ specList[0] ? specList[0].start_quantity : 0 }}{{ formatUnit(specList[0] ? specList[0].count_unit : 0) }}起
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>选择</template>
              <el-row class="mobile_select_spec" @click="changeDrawerShow">
                <el-col>
                  <el-row>
                    <el-col :span="22">尺寸分类：</el-col>
                    <el-col :span="2" class="mobile_select_spec-arrow_right">
                      <el-icon><arrow-right /></el-icon>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col>
                  <el-row align="middle">
                    <!-- span计算：获取总常规规格数量，如果规格数量大于3，则定义为3个，每个规格占用的span为3 -->
                    <el-col
                      :span="(specList.filter(item => item.is_add_manual == 0 || item.is_add_manual == false).length > 3 ? 3 : specList.filter(item => item.is_add_manual == 0 || item.is_add_manual == false).length) * 3"
                    >
                      <template v-for="(item, index) in specList" v-bind:key="item">
                        <el-image
                          v-if="(item.is_add_manual == 0 || item.is_add_manual == false) && index < 3"
                          class="mobile_select_spec-thumb_icon"
                          :src="item.s_img"
                          fit="cover"
                        />
                      </template>
                    </el-col>
                    <!-- span计算：获取总常规规格数量，如果规格数量大于3,则设定规格数量为3，3减去规格数量，得出上面的规格数量没有占用的span个数乘以每个规格占用的span为3 -->
                    <el-col
                      class="font-size-small"
                      :span="10 + ((3 - (specList.filter(item => item.is_add_manual == 0 || item.is_add_manual == false).length > 3 ? 3 : specList.filter(item => item.is_add_manual == 0 || item.is_add_manual == false).length)) * 3)"
                    >
                      共{{ specList.filter(item => item.is_add_manual == 0 || item.is_add_manual == false).length }}种尺寸规格
                    </el-col>
                    <el-col class="text-align-right" :span="5">
                      <el-tag type="info" size="small">更多</el-tag>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-descriptions-item>
            <el-descriptions-item>
              <el-row align="middle">
                <el-col :span="4" :xs="3">
                  <el-image :src="businessInfo ? businessInfo.user_img : ''" />
                </el-col>
                <el-col :span="16" :xs="14">
                  <el-row>
                    <el-col class="mobile_shop_info-title">{{ shopInfo ? shopInfo.name : '' }}</el-col>
                    <el-col class="mobile_shop_info-view_cnt">浏览数：{{ viewCount }}</el-col>
                  </el-row>
                </el-col>
                <el-col class="text-align-center" :span="4" :xs="7">
                  <el-button size="small" type="danger">进店逛逛</el-button>
                </el-col>
              </el-row>
            </el-descriptions-item>
          </el-descriptions>
        </el-col>
        <!-- 移动端产品信息 end -->
        <!-- pc端购买操作区域 start -->
        <el-col class="hidden-xs-only" :span="18" :offset="6">
          <el-button size="large">咨询客服</el-button>
          <el-button size="large" @click="submitOrderByPcHandle">扫码支付</el-button>
          <PcPay
            :isShow="isShowPcPayQrcode"
            :outTradeNo="outTradeNo"
            :codeUrl="pcPayQrcodeValue"
            @onClose="pcPayCloseHandle"
            @onGetPayResult="getPayResultHandle"
          />
        </el-col>
        <!-- pc端购买操作区域 end -->
        <!-- pc端产品额外信息 start -->
        <el-col class="hidden-xs-only" :span="18" :offset="6">
          <el-descriptions :column="1">
            <!-- 买家服务 start -->
            <el-descriptions-item>
              <template #label><br />买家服务</template>
              <template v-for="(item, index) in buyerServices" v-bind:key="item">
                <el-image class="pc_buyer_service-icon" :src="item.icon" fit="contain" />
                {{ item.name }}
                &nbsp;&nbsp;&nbsp;
              </template>
            </el-descriptions-item>
            <!-- 买家服务 end -->
            <!-- 支付方式 start -->
            <el-descriptions-item>
              <template #label><br />支付方式</template>
              <template v-for="(item, index) in payTypes" v-bind:key="item">
                {{ item }}
                &nbsp;&nbsp;&nbsp;
              </template>
            </el-descriptions-item>
            <!-- 支付方式 end -->
            <!-- 商品标签 start -->
            <el-descriptions-item>
              <template #label><br /></template>
              <template v-for="(item, index) in tags" v-bind:key="item">
                <el-tag class="pc_goods-tags-tag_item" type="info">{{ item }}</el-tag>
                &nbsp;&nbsp;&nbsp;
              </template>
            </el-descriptions-item>
            <!-- 商品标签 end -->
          </el-descriptions>
        </el-col>
        <!-- pc端产品额外信息 end -->
        <!-- 产品详情和交易记录 start -->
        <GoodsIntroduce
          :description="goodsDescription"
          :goodsFeatures="goodsFeatures"
          :factoryFeatures="factoryFeatures"
          :imageList="goodsDetailImageList"
          :tradeLog="tradeLog"
        />
        <!-- 产品详情和交易记录 end -->
        <!-- 产品信息 end -->
        <!-- 为你推荐 start -->
        <GoodsRecommends :list="otherSee" />
        <!-- 为你推荐 end -->
      </el-row>
    </el-main>
    <!-- 加载失败 start -->
    <el-main v-if="!isLoading&&!isSuccess">
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
    <!-- 移动端购买弹窗 start -->
    <el-drawer
      v-model="isDrawerShow"
      direction="btt"
      size="90%"
    >
      <!-- 弹窗头部 start -->
      <template #header>
        <el-row align="middle">
          <el-col :span="8" class="mobile_buy_drawer-header-image_container">
            <el-image
              class="mobile_buy_drawer-header-image"
              :src="goodsMainImageList[0] ? goodsMainImageList[0] : ''"
              fit="cover"
            />
          </el-col>
          <el-col :span="16" :push="1">
            <el-row>
              <el-col class="font-size-extra-large font-weight-bold">{{ goodsTitle }}</el-col>
              <el-col class="font-size-large mobile_buy_drawer-header-price">
                <span class="font-size-extra-small">￥</span>{{ goodsTotalPrice > 0 && totalPrice > 0 ? totalPrice : goodsPrice }}
              </el-col>
              <el-col class="font-size-base">
                库存{{ goodsStock }}{{ formatUnit(specList[0] ? specList[0].count_unit : 0) }}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </template>
      <!-- 弹窗头部 end -->
      <!-- 弹窗底部 start -->
      <template #footer>
        <el-button class="mobile_buy_drawer-footer-btn" type="danger" round @click="submitOrderByMobileHandle">
          <template v-if="isBuyNow">立即购买</template>
        </el-button>
      </template>
      <!-- 弹窗底部 end -->
      <!-- 弹窗主体 start -->
      <el-row>
        <!-- 三维示意图 start -->
        <el-col>
          <el-image :src="threeDImage" fit="contain" />
        </el-col>
        <!-- 三维示意图 end -->
        <!-- 规格 start -->
        <!-- 规格提示区域 start -->
        <el-col>
          <el-row align="middle">
            <el-col class="font-size-base" :span="isShowAddNewSpecification?6:9">请选择规格</el-col>
            <el-col
              v-if="isShowAddNewSpecification"
              class="font-size-base mobile_buy_drawer-main-add_spec"
              :span="3"
            >
              <el-link type="danger" :underline="false" @click="addNewSpecification">新增</el-link>
            </el-col>
            <el-col :span="15">
              <el-row align="middle">
                <el-col class="font-size-base text-align-right" :span="16">请选择单位</el-col>
                <el-col :span="8">
                  <el-select v-model="selectedUnitIndex" placeholder="请选择单位" size="small">
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
        </el-col>
        <!-- 规格提示区域 end -->
        <!-- 规格详情 start -->
        <el-col>
          <el-table :data="specList" :show-header="false">
            <el-table-column>
              <template #default="scope">
                <!-- 常规规格 start -->
                <el-row v-if="scope.row.is_add_manual==0||scope.row.is_add_manual==false">
                  <el-col class="font-size-base">{{ scope.row.specifications }}</el-col>
                  <el-col class="font-size-small">
                    <span class="font-size-extra-small">￥</span>{{ scope.row.goods_price }}
                  </el-col>
                </el-row>
                <!-- 常规规格 end -->
                <!-- 自定义规格 start -->
                <el-row v-else>
                  <el-col class="font-size-base">
                    <el-input
                      v-model="scope.row.long"
                      type="number"
                      step="0.01"
                      size="small"
                      placeholder="长"
                      class="mobile_buy_drawer-main-spec_input"
                    />×
                    <el-input
                      v-model="scope.row.width"
                      type="number"
                      step="0.01"
                      size="small"
                      placeholder="宽"
                      class="mobile_buy_drawer-main-spec_input"
                    />×
                    <el-input
                      v-model="scope.row.height"
                      type="number"
                      step="0.01"
                      size="small"
                      placeholder="高"
                      class="mobile_buy_drawer-main-spec_input"
                    />
                  </el-col>
                  <el-col class="font-size-small">特殊规格请手动输入</el-col>
                </el-row>
                <!-- 自定义规格 end -->
              </template>
            </el-table-column>
            <el-table-column align="right">
              <template #default="scope">
                <el-input-number
                  v-model="scope.row.select_count"
                  :min="0"
                  :max="scope.row.is_add_manual == 0 || scope.row.is_add_manual == false ? Number(scope.row.count) : Infinity"
                  @change="handleSpecListCountChange"
                  size="small"
                />
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <!-- 规格详情 end -->
        <!-- 规格 end -->
        <!-- 备注 start -->
        <el-col>
          <el-row>
            <!-- 推荐备注 start -->
            <el-col class="font-size-base">推荐备注(选填)</el-col>
            <el-col>
              <el-checkbox-group v-model="selectedRemarkListItems" size="small" @change="remarkListSelectedChangeHandle">
                <el-checkbox-button
                  v-for="(item, index) in remarkList"
                  v-bind:key="item"
                  :key="item.name"
                  :label="item.name"
                >{{ item.name }}</el-checkbox-button>
              </el-checkbox-group>
            </el-col>
            <!-- 推荐备注 end -->
            <!-- 留言 start -->
            <el-col class="font-size-base">
              <el-row align="middle">
                <el-col :span="4">留言：</el-col>
                <el-col :span="20">
                  <el-input size="small" v-model="remarkContent" placeholder="请勿包含加工要求信息。如无，可不输入" @change="remarkContentChangeHandle" />
                </el-col>
              </el-row>
            </el-col>
            <!-- 留言 end -->
          </el-row>
        </el-col>
        <!-- 备注 end -->
      </el-row>
      <!-- 弹窗主体 end -->
    </el-drawer>
    <!-- 移动端购买弹窗 end -->
    <!-- 移动端底部栏 start -->
    <el-affix class="hidden-sm-and-up" position="bottom">
      <el-row class="goods_footer" align="middle">
        <!-- 联系客服 start -->
        <el-col :span="7" class="goods_footer-small_btn">
          <el-icon class="goods_footer-small_btn-icon" @click="toContactService"><Service /></el-icon>
          <br @click="toContactService" />
          <span class="goods_footer-small_btn-text" @click="toContactService">客服</span>
        </el-col>
        <!-- 联系客服 end -->
        <!-- 收藏 start -->
        <el-col :span="7" class="goods_footer-small_btn">
          <el-icon class="goods_footer-small_btn-icon" @click="changeCollectGoods">
            <StarFilled v-if="isCollected" />
            <Star v-else />
          </el-icon>
          <br @click="changeCollectGoods" />
          <span class="goods_footer-small_btn-text" @click="changeCollectGoods">
            <template v-if="isCollected">取消</template>收藏
          </span>
        </el-col>
        <!-- 收藏 end -->
        <!-- 立即购买 start -->
        <el-col :span="10">
          <el-button type="danger" class="goods_footer-large_btn" @click="showBuyNow">立即购买</el-button>
        </el-col>
        <!-- 立即购买 end -->
      </el-row>
    </el-affix>
    <!-- 移动端底部栏 end -->
  </el-container>
</template>
<script setup>
import { nextTick, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  getGoodsDetailApi,
  addCollectApi,
  cancelCollectApi,
  getGoodsSpecsPriceApi,
  getCalcFreightApi,
  submitOrderApi,
} from '../api/goods.js'
import { formatHttpsProtocol } from '../utils/httpReplace.js'
import { formatUnit } from '../utils/good.js'
import { useToPayOrderStore } from '../pinia/toPayOrder'
// 引入用户信息
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();
const toPayOrderStore = useToPayOrderStore()
// 定义并获取url地址传进来的goods_id参数
const goodsId = ref(useRoute().query.goods_id)
const type = ref(useRoute().query.type)
// 是否为移动端(屏幕宽度在768px以下)
const isMobile = window.outerWidth < 768 ? true : false
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
// 商品购买单位
const unit = ref(-1)
// 选中的购买单位下标
const selectedUnitIndex = ref(-1)
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
const handleSpecListCountChange = (value) => {
  console.log(value);
  console.log(specList.value)
  getGoodsSpecsPriceApi({
    type: type.value,
    goods_id: goodsId.value,
    unit: selectedUnitIndex.value,
    s_id: specList.value,
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
    if (isMobile) {
      freightPrice.value = res.data.data.freight_price
      orderTotalPrice.value = res.data.data.order_total_price
      totalPrice.value = res.data.data.total_price
    }
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
// 浏览数
const viewCount = ref(0)
// pc端的买家服务
const buyerServices = ref([
  {
    icon: 'https://www.zhenmuwang.com/Tpl/Home/egou2.0/upimages/jinkou/fahuo.png',
    name: '快速发货',
  },
  {
    icon: 'https://www.zhenmuwang.com/Tpl/Home/egou2.0/upimages/jinkou/tuikuan.png',
    name: '急速退款',
  },
  {
    icon: 'https://www.zhenmuwang.com/Tpl/Home/egou2.0/upimages/jinkou/peichang.png',
    name: '少货必赔',
  },
  {
    icon: 'https://www.zhenmuwang.com/Tpl/Home/egou2.0/upimages/jinkou/anquan.png',
    name: '买家保障',
  },
])
// pc端的支付方式
const payTypes = ref([
  '微信',
  '网上银行',
  '大额支付',
])
// pc端的商品标签
const tags = ref([])
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
// 是否展示移动端的购买弹窗
const isDrawerShow = ref(false)
// 是否已经收藏了该商品
const isCollected = ref(false)
// 是否展示移动端的购买弹窗的立即购买按钮，即判断是否为立即购买
const isBuyNow = ref(true)
// 交易记录
const tradeLog = ref([])
// 为你推荐
const otherSee = ref([])
// 是否正在加载中
const isLoading = ref(true)
// 是否加载成功
const isSuccess = ref(false)
// 是否加载出错了
const isFailed = ref(false)
// 收货地址列表
const receiveAddressList = ref([])
// 选中的收货地址下标
const selectedReceiveAddressId = ref('')
// 商品总价
const goodsTotalPrice = ref(0)
// 运费
const freightPrice = ref(0)
// 订单总价
const orderTotalPrice = ref(0)
// 合计
const totalPrice = ref(0)
const freightTitle = ref('')
// 是否显示新增规格按钮和自定义规格输入框
const isShowAddNewSpecification = ref(false)
// 监听收货地址id变化
const recvAddIdChangeHandle = (id) => {
  console.log(id)
  selectedReceiveAddressId.value = id
  if (freightPrice.value > 0) {
    calcFreightPriceHandle()
  }
}
// 监听收货地址列表变化
const recvAddListChangeHandle = (list) => {
  console.log(list)
  receiveAddressList.value = list
}
// 监听订单备注变化
const orderNotesChangeHandle = () => {
  getGoodsSpecsPriceApi({
    type: type.value,
    goods_id: goodsId.value,
    unit: selectedUnitIndex.value,
    s_id: specList.value,
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
    if (isMobile) {
      freightPrice.value = res.data.data.freight_price
      orderTotalPrice.value = res.data.data.order_total_price
      totalPrice.value = res.data.data.total_price
    }
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
  orderNotesChangeHandle()
}
// 展示或隐藏移动端的购买弹窗
const changeDrawerShow = () => {
  if ((isLoading.value || !isSuccess.value) && !isDrawerShow.value) {
    return false;
  }
  isDrawerShow.value =!isDrawerShow.value
}
const showBuyNow = () => {
  if (isLoading.value || !isSuccess.value) {
    return false;
  }
  isBuyNow.value = true
  changeDrawerShow()
}
// 新增自定义规格
const addNewSpecification = (isFromGetGoodsDetail = false) => {
  if (
    (typeof isFromGetGoodsDetail === 'boolean' && isFromGetGoodsDetail !== true)
    || (!isFromGetGoodsDetail && !isLoading.value && isSuccess.value)
  ) {
    return false;
  }
  specList.value.push({
    count: 0,
    select_count: 0,
    is_add_manual: 1,
    count_unit: specList.value[0].count_unit,
    goods_id: specList.value[0].goods_id,
    s_img: specList.value[0].s_img,
    specifications: '',
    long: '',
    width: '',
    height: '',
    start_quantity: specList.value[0].start_quantity,
    user_id: specList.value[0].user_id,
  })
  console.log(specList.value);
}
// 联系客服
const toContactService = () => {
  if (isLoading.value || !isSuccess.value) {
    return false;
  }
  console.log('联系客服')
}
// 收藏或取消收藏操作
const changeCollectGoods = () => {
  if (isLoading.value || !isSuccess.value) {
    return false;
  }
  console.log(isCollected.value ? '取消收藏商品' : '收藏商品')
  if (isCollected.value) {
    cancelCollectApi({
      user_id: userStore.userId,
      phone: userStore.phone,
      type: type.value,
      goods_id: goodsId.value,
    }).then(res => {
      isCollected.value = false
    })
  } else {
    addCollectApi({
      user_id: userStore.userId,
      phone: userStore.phone,
      type: type.value,
      goods_id: goodsId.value,
    }).then(res => {
      isCollected.value = true
    })
  }
}
// 获取商品详情信息
const getGoodsDetail = () => {
  // 获取商品详细信息
  getGoodsDetailApi({
    type: type.value,
    goods_id: goodsId.value,
    user_id: userStore.userId,
    phone: userStore.phone,
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
    specList.value = res.data.data.specifications
    console.log(specList.value);
    if (res.data.data.hasOwnProperty('is_agree') && res.data.data.is_agree == '2') {
      isShowAddNewSpecification.value = true
      // 添加一行新的自定义规格
      console.log(nextTick(() => {
        console.log('goto addNewSpecification');
        addNewSpecification(true)
      }))
    }
    // 获取浏览数
    viewCount.value = res.data.data.view_count
    // 获取商品标签
    tags.value = res.data.data.tags
    // 获取商品的产品介绍
    goodsDescription.value = res.data.data.productDescription.cpjs
    // 获取产品优势
    goodsFeatures.value = res.data.data.productDescription.cpys
    // 获取工厂优势
    res.data.data.productDescription.gcys = res.data.data.productDescription.gcys.map((item,index) => {
      item.image = formatHttpsProtocol(res.data.data.productDescription.cpimg[index].data)
      return item
    })
    factoryFeatures.value = res.data.data.productDescription.gcys
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
    // 可选备注列表添加是否选中等字段
    res.data.data.remark_list = res.data.data.remark_list.map(item => {
      item.is_selected = 0
      return item
    })
    // 获取备注列表
    remarkList.value = res.data.data.remark_list
    // 获取三维图示
    threeDImage.value = formatHttpsProtocol(res.data.data.three_d_image)
    // 获取是否已经收藏该商品
    isCollected.value = Number(res.data.data.is_collect) == 1
    // 获取交易记录
    tradeLog.value = res.data.data.trade_log
    otherSee.value = res.data.data.other_see
    // 获取收货地址
    if (typeof res.data.data.receive_addresses === 'object' && res.data.data.receive_addresses instanceof Array) {
      receiveAddressList.value = res.data.data.receive_addresses
      let selectedIndex = res.data.data.receive_addresses.findIndex(item => item.is_default==1)
      if (selectedIndex > -1) {
        selectedReceiveAddressId.value = res.data.data.receive_addresses[selectedIndex].id
      }
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
const calcFreightPriceHandle = () => {
  if (selectedReceiveAddressId.value == '' || selectedReceiveAddressId.value == -1 || selectedReceiveAddressId.value == 0) {
    return false
  }
  freightPrice.value = 0
  orderTotalPrice.value = 0
  totalPrice.value = 0
  getCalcFreightApi({
    user_id: userStore.userId,
    phone: userStore.phone,
    type: type.value,
    goods_id: goodsId.value,
    receive_id: selectedReceiveAddressId.value,
    openid: '',
    p_price: goodsTotalPrice.value,
    s_id: specList.value,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      return false
    }
    freightPrice.value = res.data.data.freight
    orderTotalPrice.value = res.data.data.payMoney
    totalPrice.value = res.data.data.payMoney
    freightTitle.value = res.data.data.title
  }).catch(() => {
  }).finally(() => {
  })
}
// 移动端生成订单
const submitOrderByMobileHandle = () => {
  toPayOrderStore._type = type.value
  toPayOrderStore._goodsId = goodsId.value
  toPayOrderStore._goodsName = goodsTitle.value
  toPayOrderStore._sId = specList.value
  toPayOrderStore._unit = selectedUnitIndex.value
  toPayOrderStore._remarks = orderNotes.value
  toPayOrderStore._is_agree = Number(type.value) == 1 && isShowAddNewSpecification.value == true ? 1 : 0
  nextTick(() => {
    window.location.assign('/goods/to-pay-order')
  })
}
// Pc端提交订单
const submitOrderByPcHandle = () => {
  let sid = []
  let totalCount = 0
  specList.value.forEach(item => {
    if (Number(item.select_count) === 0) {
      return false
    }
    if (item.is_add_manual == 1) {
      item.specifications = item.long+"cm*"+item.width+"cm*"+item.height+"cm"
    }
    sid.push({
      count: Number(item.select_count),
      count_unit: selectedUnitIndex.value,
      is_add_manual: item.s_id ? 0 : 1,
      s_id: item.s_id ? item.s_id : 0,
      s_img: '',
      spec: item.specifications,
    })
    totalCount += Number(item.count)
  })
  submitOrderApi({
    user_id: userStore.userId,
    phone: userStore.phone,
    sid: sid,
    num: totalCount,
    type: type.value,
    goods_id: goodsId.value,
    price: goodsTotalPrice.value,
    address_id: selectedReceiveAddressId.value,
    freight_title: freightTitle.value,
    order_notes: orderNotes.value,
    is_new_pay: '3',
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      return false
    }
    if (!res.data.data) {
      return false
    }
    pcPayQrcodeValue.value = res.data.data.code_url
    outTradeNo.value = res.data.data.out_trade_no
    isShowPcPayQrcode.value = true
  }).catch(() => {
  }).finally(() => {
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
</script>
<style scoped>
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
  border-radius: 0;
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
