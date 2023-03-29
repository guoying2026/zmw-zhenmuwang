<template>
  <el-col :span="16" :offset="1" :xs="{span:24,offset:0}">
    <el-tabs>
      <!-- 产品详情 start -->
      <el-tab-pane label="产品详情">
        <el-row>
          <!-- 产品介绍 start -->
          <el-col class="goods_introduce-item" v-if="description">
            <el-row>
              <el-col class="goods_introduce-item-title">产品介绍</el-col>
              <el-col class="font-size-base">{{ description }}</el-col>
            </el-row>
          </el-col>
          <!-- 产品介绍 end -->
          <!-- 产品优势 start -->
          <el-col class="goods_introduce-item" v-if="goodsFeatures&&goodsFeatures.length>0">
            <el-row>
              <el-col class="goods_introduce-item-title">产品优势</el-col>
              <template v-for="(item, index) in goodsFeatures" v-bind:key="item">
                <el-col class="goods_introduce-item-goods_features_item" :span="11">
                  <el-row>
                    <el-col class="goods_introduce-item-goods_features_item-title">{{ item.name }}</el-col>
                    <el-col class="goods_introduce-item-goods_features_item-desc">
                      <span class="goods_introduce-item-goods_features_item-desc_span">{{ item.wenan }}</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col class="goods_introduce-item-goods_features_item-center" :span="2" v-if="index % 2 === 0">
                  <el-divider class="goods_introduce-item-goods_features_item-divier" direction="vertical" />
                </el-col>
              </template>
            </el-row>
          </el-col>
          <!-- 产品优势 end -->
          <!-- 工厂优势 start -->
          <el-col class="goods_introduce-item" v-if="factoryFeatures&&factoryFeatures.length>0">
            <el-row>
              <el-col class="goods_introduce-item-title">工厂优势</el-col>
              <template v-for="(item, index) in factoryFeatures" v-bind:key="item">
                <el-col class="goods_introduce-item-factory_features_item">
                  <el-row justify="space-around" align="middle" class="goods_introduce-item-factory_features_item-row">
                    <el-col :span="11">
                      <el-row>
                        <el-col class="font-size-base font-weight-bold">{{ item.name }}</el-col>
                        <el-col class="font-size-small">{{ item.wenan }}</el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="11">
                      <el-image :src="item.image" />
                    </el-col>
                  </el-row>
                </el-col>
              </template>
            </el-row>
          </el-col>
          <!-- 工厂优势 end -->
          <!-- 产品详情图 start -->
          <el-col class="goods_introduce-item">
            <el-row>
              <template v-for="(item, index) in imageList" v-bind:key="item">
                <el-col class="text-align-center">
                  <!-- pc端产品详情图 start -->
                  <el-image
                    class="hidden-xs-only goods_detail-detail_image pc_goods_detail-detail_image"
                    :xs="0"
                    fit="cover"
                    :src="item"
                    :hide-on-click-modal="true"
                    :preview-src-list="imageList"
                    :initial-index="index"
                    :close-on-press-escape="true"
                    :preview-teleported="true"
                  />
                  <!-- pc端产品详情图 end -->
                  <!-- 移动端产品详情图 start -->
                  <el-image
                    class="hidden-sm-and-up goods_detail-detail_image"
                    :sm="0"
                    :md="0"
                    :lg="0"
                    :xl="0"
                    :src="item"
                    :hide-on-click-modal="true"
                    :preview-src-list="imageList"
                    :initial-index="index"
                    :close-on-press-escape="true"
                    :preview-teleported="true"
                  />
                  <!-- 移动端产品详情图 end -->
                </el-col>
              </template>
            </el-row>
          </el-col>
          <!-- 产品详情图 end -->
          <!-- 图片仅供参考 start -->
          <el-col class="goods_detail-for_reference_only_tips">图片仅供参考，请以实物为准</el-col>
          <!-- 图片仅供参考 end -->
        </el-row>
      </el-tab-pane>
      <!-- 产品详情 end -->
      <!-- 立即购买 start -->
      <el-tab-pane label="立即购买"><slot></slot></el-tab-pane>
      <!-- 立即购买 end -->
      <!-- 交易记录 start -->
      <el-tab-pane label="交易记录">
        <el-table :data="tradeLog" empty-text="您未在该商家下过单哦">
          <el-table-column label="联系地址" prop="user_address"/>
          <el-table-column label="联系电话" prop="user_phone" />
          <el-table-column label="购买数量">
            <template
              #default="scope"
            >{{ Number(scope.row.goods_sumnumber) }}{{ formatUnit(scope.row.unit) }}</template>
          </el-table-column>
          <el-table-column label="购买规格" prop="specs" />
          <el-table-column label="购买产品" prop="goods_title" />
        </el-table>
      </el-tab-pane>
      <!-- 交易记录 end -->
    </el-tabs>
  </el-col>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { formatUnit } from '../utils/good.js'
const props = defineProps({
  description: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  goodsFeatures: {
    type: Array,
    required: true,
    default () {
      return []
    }
  },
  factoryFeatures: {
    type: Array,
    required: true,
    default () {
      return []
    }
  },
  imageList: {
    type: Array,
    required: true,
    default () {
      return []
    }
  },
  tradeLog: {
    type: Array,
    required: true,
    default () {
      return []
    }
  },
})
const isMobile = ref(window.innerWidth<768)
const scrollHandle = () => {
  if (document.querySelector('.el-tabs').parentNode.getBoundingClientRect().top < 30) {
    // console.log('到达顶部')
    document.querySelector('.el-tabs .el-tabs__header').style.position = "fixed"
    document.querySelector('.el-tabs .el-tabs__header').style.top = document.querySelector('.nav_header').getBoundingClientRect().height + "px"
    document.querySelector('.el-tabs .el-tabs__header').style.width = document.querySelector('.el-tabs').getBoundingClientRect().width + "px"
    document.querySelector('.el-tabs .el-tabs__content').style.marginTop = document.querySelector('.el-tabs .el-tabs__header').getBoundingClientRect().height + "px"
  } else {
    document.querySelector('.el-tabs .el-tabs__header').style.position = "sticky"
    document.querySelector('.el-tabs .el-tabs__header').style.top = "50px"
    document.querySelector('.el-tabs .el-tabs__header').style.width = ''
    document.querySelector('.el-tabs .el-tabs__content').style.marginTop = ''
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollHandle)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollHandle)
})
</script>
<style scoped>
.goods_introduce-item {
  padding: 5px 10px;
}
.goods_introduce-item:first-of-type {
  background: url(https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_1475fc45-ef45-499e-ba08-fab90a76f3d6.png);
  background-size: 100% 100%;
  border-top-left-radius: var(--el-border-radius-base);
  border-top-right-radius: var(--el-border-radius-base);
}
.goods_introduce-item-title {
  text-align: center;
  font-size: var(--el-font-size-extra-large);
  font-weight: bold;
}
.goods_introduce-item-goods_features_item {
  margin-top: 10px;
}
.goods_introduce-item-goods_features_item-title {
  text-align: center;
  font-size: var(--el-font-size-large);
  font-weight: bold;
}
.goods_introduce-item-goods_features_item-desc {
  text-align: center;
  word-break: break-all;
  font-size: var(--el-font-size-small);
  color: #999999;
}
.goods_introduce-item-goods_features_item-desc_span {
  display: inline-block;
  text-align: left;
}
.goods_introduce-item-goods_features_item-center {
  text-align: center;
  margin-top: 10px;
}
.goods_introduce-item-goods_features_item-divier {
  height: 100%;
}
.goods_introduce-item-factory_features_item:nth-of-type(odd) .goods_introduce-item-factory_features_item-row {
  flex-direction: row-reverse;
}
.goods_introduce-item-factory_features_item:nth-of-type(even) .goods_introduce-item-factory_features_item-row {
  flex-direction: row;
}
.goods_introduce-item-factory_features_item .goods_introduce-item-factory_features_item-row > .el-col {
  display: flex;
  justify-content: center;
  max-width: 288px;
}
.goods_detail-detail_image {
  width: 100%;
  border-radius: var(--el-border-radius-small);
}
.goods_detail-for_reference_only_tips {
  text-align: center;
  color: #aaa;
  font-size: var(--el-font-size-extra-small);
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