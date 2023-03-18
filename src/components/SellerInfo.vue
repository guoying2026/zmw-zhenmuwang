<template>
  <el-card>
    <el-row>
      <el-col :span="24">
        <el-row class="seller_info" :gutter="24" justify="start" align="middle">
          <!-- 信用分 -->
          <el-col :span="6" :xs="6" :sm="3" :md="isShowGoods ? 2 : 4" :lg="isShowGoods ? 3 : 6" :xl="isShowGoods ? 1 : 2">
            <el-row class="seller_info-score" justify="center">
              <el-col>{{ creditScore }}</el-col>
              <el-col>信用分</el-col>
            </el-row>
          </el-col>
          <!-- 商家名称、地区、联系电话 -->
          <el-col :span="18">
            <el-row :gutter="24">
              <el-col>
                <el-row>
                  <el-col class="seller_info-name">{{ name }}</el-col>
                </el-row>
              </el-col>
              <el-col>
                <el-row>
                  <el-col v-if="!isBlacklist&&isFranchisee" :span="9" :xs="8" :sm="3" :md="isShowGoods ? 2 : 9" :lg="isShowGoods ? 2 : 4" :xl="isShowGoods ? 1 : 2"><div class="seller_info-franchisee orange_btn">加盟商家</div></el-col>
                  <el-col :span="14" :xs="15" :sm="20" :md="isShowGoods ? 21 : 14" :lg="isShowGoods ? 21 : 19" :xl="isShowGoods ? 22 : 21" :offset="!isBlacklist&&isFranchisee ? 1 : 0">{{ province }}</el-col>
                </el-row>
              </el-col>
              <el-col>
                <el-row>
                  <el-col><span class="seller_info-title">联系电话：</span>{{ phone }}</el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col>
        <el-row :gutter="24">
          <!-- 商家信息 start -->
          <el-col class="seller_details" :span="span" :md="mdSpan">
            <el-row class="seller_details-line">
              <el-col><span class="seller_info-title">社会统一信用代码：</span>{{ unifiedSocialCreditCode }}</el-col>
            </el-row>
            <el-row class="seller_details-line">
              <el-col><span class="seller_info-title">法定代表人：</span>{{ legalRepresentative }}</el-col>
            </el-row>
            <el-row class="seller_details-line">
              <el-col><span class="seller_info-title">成立时间：</span>{{ timeOfEstablishment }}</el-col>
            </el-row>
            <el-row class="seller_details-line">
              <el-col><span class="seller_info-title">注册资本：</span>{{ registeredCapital }}</el-col>
            </el-row>
            <el-row class="seller_details-line">
              <el-col><span class="seller_info-title">注册地址：</span>{{ address }}</el-col>
            </el-row>
            <el-row class="seller_details-line">
              <el-col><span class="seller_info-title">经营范围：</span>{{ range }}</el-col>
            </el-row>
          </el-col>
          <!-- 商家信息 end -->
          <!-- 商家商品 start -->
          <el-col v-if="isShowGoods" :span="span" :md="mdSpan">
            <el-row :gutter="24" justify="start">
              <template v-for="(item, index) in goods" v-bind:key="item">
                <el-col v-if="index < 3" :span="8" class="hidden-xs-only">
                  <GoodsInfo
                    :goods-title="item.goods_title"
                    :goods-price="item.goods_price"
                    :goods-image="item.mainurl"
                    :type="1"
                  />
                </el-col>
                <el-col v-if="index < 2" :span="12" class="hidden-sm-and-up">
                  <GoodsInfo
                    :goods-title="item.goods_title"
                    :goods-price="item.goods_price"
                    :goods-image="item.mainurl"
                    :type="1"
                  />
                </el-col>
              </template>
            </el-row>
          </el-col>
          <!-- 商家商品 end -->
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
import GoodsInfo from './GoodsInfo.vue'

const props = defineProps({
  province: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  name: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  isFranchisee: {
    type: Boolean,
    required: true,
    default () {
      return false
    }
  },
  isBlacklist: {
    type: Boolean,
    required: true,
    default () {
      return false
    }
  },
  creditScore: {
    type: Number,
    required: true,
    default () {
      return 0
    }
  },
  unifiedSocialCreditCode: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  legalRepresentative: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  timeOfEstablishment: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  registeredCapital: {
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
  range: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  phone: {
    type: String,
    required: true,
    default () {
      return ''
    }
  },
  isShowGoods: {
    type: Boolean,
    required: true,
    default () {
      return false
    }
  },
  goods: {
    type: Array,
    required: false,
    default () {
      return []
    }
  }
})

const span = ref(24)
const mdSpan = ref(12)
if (!props.isShowGoods) {
  mdSpan.value = 24
}
</script>
<style scoped>
.ft-bold {
  font-weight: bold;
}
.el-card {
  height: 100%;
}
.seller_details-line {
  line-height: 2.3;
  word-break: break-all;
  word-wrap: break-word;
}
.seller_info {
  margin-bottom: 15px;
}
.seller_info-area {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: 500;
}
.seller_info-type {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
}
.seller_info-name {
  font-weight: bold;
  font-size: var(--el-font-size-large);
}
.orange_btn{
  background-color: #fff1e2;
  color: #ff6060;
}
.seller_info-franchisee {
  text-align: center;
  font-size: var(--el-font-size-small);
  border-radius: var(--el-border-radius-base);
  font-weight: 700;
  letter-spacing: 1px;
}
.seller_info-title {
  color: rgb(154,154,154);
  font-weight: normal;
}
.seller_info-score {
  text-align: center;
  background: linear-gradient(to bottom right, rgb(134,78,40),rgb(116,26,14));
  border-radius: var(--el-border-radius-base);
}
.seller_info-score .el-col {
  color: #fff;
}
.seller_info-score .el-col:nth-of-type(1) {
  font-weight: bold;
  font-size: var(--el-font-size-extra-large);
}
.seller_info-score .el-col:nth-of-type(2) {
  font-size: var(--el-font-size-extra-small);
}
.seller_details {
  background: rgb(249,249,249);
}
</style>
