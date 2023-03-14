<template>
  <el-container direction="vertical" :gutter="24">
    <el-main v-if="!isLoading&&isSuccess">
      <el-row>
        <!-- 产品图轮播 start -->
        <!-- pc端产品图轮播 start -->
        <el-col class="hidden-xs-only" :span="5">
          <el-carousel :autoplay="false" height="calc((100vw - (var(--el-main-padding) * 2)) * 0.208333333333)">
            <template v-for="(item, index) in goodsMainImageList" v-bind:key="item">
              <el-carousel-item>
                <el-image class="goods_banner_image" :src="item" fit="cover" />
              </el-carousel-item>
            </template>
          </el-carousel>
        </el-col>
        <!-- pc端产品图轮播 end -->
        <!-- 移动端产品图轮播 start -->
        <el-col class="hidden-sm-and-up">
          <el-carousel>
            <template v-for="(item, index) in goodsMainImageList" v-bind:key="item">
              <el-carousel-item>
                <el-image
                  class="goods_banner_image"
                  :src="item"
                  fit="cover"
                  :hide-on-click-modal="true"
                  :preview-src-list="goodsMainImageList"
                  :initial-index="index"
                  :close-on-press-escape="true"
                  :preview-teleported="true"
                />
              </el-carousel-item>
            </template>
          </el-carousel>
        </el-col>
        <!-- 移动端产品图轮播 start -->
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
              <template #label>更新时间</template>
              {{ updateTime }}
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
                  <el-col class="pc_spec_add" :span="2" :sm="2" :md="1" :lg="1" :xl="1">
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
                          size="small"
                          placeholder="长"
                        />×
                        <el-input
                          class="pc_spec-input"
                          v-model="scope.row.width"
                          type="number"
                          size="small"
                          placeholder="宽"
                        />×
                        <el-input
                          class="pc_spec-input"
                          v-model="scope.row.height"
                          type="number"
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
                      :max="Number(scope.row.count)"
                      @change="handleSpecListCountChange"
                    />
                  </template>
                </el-table-column>
              </el-table>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>收货人</template>
              <el-input placeholder="请输入收货人姓名" />
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>收货电话</template>
              <el-input placeholder="请输入收货人手机号码" />
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>详细地址</template>
              <el-input placeholder="请输入详细收货地址" />
            </el-descriptions-item>
            <el-descriptions-item>
              <el-row>
                <el-col :span="12">
                  <el-input type="textarea" :rows="4" resize="none" placeholder="请输入订单备注" />
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col>
                      <el-row>
                        <el-col class="pc_form_item-title" :span="14">商品总价：</el-col>
                        <el-col class="pc_form_item-content" :span="10">？元</el-col>
                      </el-row>
                    </el-col>
                    <el-col>
                      <el-row>
                        <el-col class="pc_form_item-title" :span="14">智能运费：</el-col>
                        <el-col class="pc_form_item-content" :span="10">点击计算</el-col>
                      </el-row>
                    </el-col>
                    <el-col>
                      <el-row>
                        <el-col class="pc_form_item-title" :span="14">订单总价：</el-col>
                        <el-col class="pc_form_item-content" :span="10">？元</el-col>
                      </el-row>
                    </el-col>
                    <el-col>
                      <el-row>
                        <el-col class="pc_form_item-title" :span="14">合计：</el-col>
                        <el-col class="pc_form_item-content" :span="10">？元</el-col>
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
          <el-button size="large">扫码支付</el-button>
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
        <el-col :span="15" :offset="0" :xs="{span:24,offset:0}">
          <el-tabs>
            <!-- 产品详情 start -->
            <el-tab-pane label="产品详情">
              <el-row>
                <!-- 产品介绍 start -->
                <el-col class="goods_introduce-item">
                  <el-row>
                    <el-col class="goods_introduce-item-title">产品介绍</el-col>
                    <el-col class="font-size-base">{{ goodsDescription }}</el-col>
                  </el-row>
                </el-col>
                <!-- 产品介绍 end -->
                <!-- 产品优势 start -->
                <el-col class="goods_introduce-item">
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
                <el-col class="goods_introduce-item">
                  <el-row>
                    <el-col class="goods_introduce-item-title">工厂优势</el-col>
                    <template v-for="(item, index) in factoryFeatures" v-bind:key="item">
                      <el-col class="goods_introduce-item-factory_features_item">
                        <el-row align="middle" class="goods_introduce-item-factory_features_item-row">
                          <el-col :span="11" :offset="index % 2 == 0 ? 0 : 2">
                            <el-row>
                              <el-col class="font-size-base font-weight-bold">{{ item.name }}</el-col>
                              <el-col class="font-size-small">{{ item.wenan }}</el-col>
                            </el-row>
                          </el-col>
                          <el-col :span="11" :offset="index % 2 == 0 ? 2 : 0">
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
                    <template v-for="(item, index) in goodsDetailImageList" v-bind:key="item">
                      <el-col class="text-align-center">
                        <!-- pc端产品详情图 start -->
                        <el-image
                          class="hidden-xs-only goods_detail-detail_image pc_goods_detail-detail_image"
                          fit="cover"
                          :src="item"
                          :hide-on-click-modal="true"
                          :preview-src-list="goodsDetailImageList"
                          :initial-index="index"
                          :close-on-press-escape="true"
                          :preview-teleported="true"
                        />
                        <!-- pc端产品详情图 end -->
                        <!-- 移动端产品详情图 start -->
                        <el-image
                          class="hidden-sm-and-up goods_detail-detail_image"
                          :src="item"
                          :hide-on-click-modal="true"
                          :preview-src-list="goodsDetailImageList"
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
            <!-- 交易记录 start -->
            <el-tab-pane label="交易记录">
              <el-table :data="tradeLog" empty-text="您未在该商家下过单哦～">
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
        <!-- 产品详情和交易记录 end -->
        <!-- 产品信息 end -->
        <!-- 为你推荐 start -->
        <el-col class="hidden-xs-only" :span="8" :offset="1">
          <el-card shadow="hover">
            <el-row>
              <el-col>为你推荐</el-col>
              <template v-for="(item, index) in otherSee" v-bind:key="item">
                <el-col class="recommend_goods-item">
                  <el-row justify="center">
                    <el-col class="recommend_goods-item-image_frame">
                      <el-image class="recommend_goods-item-image" :src="item.image" fit="cover" />
                    </el-col>
                    <el-col class="recommend_goods-item-info">
                      <el-row justify="center">
                        <el-col class="recommend_goods-item-info-title">{{ item.goods_name }}</el-col>
                        <el-col class="recommend_goods-item-info-price">
                          <span class="font-size-extra-small">￥</span>{{ item.spell_price }}&nbsp;/&nbsp;{{ item.unit }}
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </template>
            </el-row>
          </el-card>
        </el-col>
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
    <template v-if="isLoading">
      <!-- PC端骨架屏 start -->
      <el-main class="hidden-xs-only pc_loading_main">
        <el-skeleton :animated="true" :loading="isLoading">
          <template #template>
            <el-row justify="start" align="middle">
              <el-col>
                <el-row>
                  <el-col class="pc_loading_main-side_image_frame" :span="8" :push="0">
                    <el-skeleton-item class="pc_loading_main-side_image" variant="image" />
                  </el-col>
                  <el-col class="pc_loading_main-center_image_frame" :span="8">
                    <el-skeleton-item class="pc_loading_main-center_image" variant="image" />
                  </el-col>
                  <el-col class="pc_loading_main-side_image_frame" :span="8" :pull="0">
                    <el-skeleton-item class="pc_loading_main-side_image" variant="image" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="pc_loading_main-title">
                <el-row>
                  <el-col :span="6">
                    <el-skeleton-item variant="h1" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="19" :offset="1">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="4">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="19" :offset="1">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="4">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="19" :offset="1">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col class="pc_loading_main-title" :span="16">
                <el-skeleton-item variant="h3" />
              </el-col>
              <el-col class="pc_loading_main-title">
                <el-skeleton-item variant="h3" />
              </el-col>
              <el-col class="pc_loading_main-title">
                <el-skeleton-item variant="h3" />
              </el-col>
              <el-col class="pc_loading_main-title">
                <el-skeleton-item variant="h3" />
              </el-col>
              <el-col class="pc_loading_main-title" :span="20">
                <el-skeleton-item variant="h3" />
              </el-col>
            </el-row>
          </template>
        </el-skeleton>
      </el-main>
      <!-- PC端骨架屏 end -->
      <!-- 移动端骨架屏 start -->
      <el-main class="hidden-sm-and-up mobile_loading_main">
        <el-skeleton :animated="true" :loading="isLoading">
          <template #template>
            <el-row align="middle">
              <el-col>
                <el-skeleton-item class="mobile_loading_main-image" variant="image" />
              </el-col>
              <el-col class="mobile_loading_main-title">
                <el-skeleton-item variant="h1" />
              </el-col>
              <el-col :span="4">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="19" :offset="1">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="4">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="19" :offset="1">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="4">
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="19" :offset="1">
                <el-row>
                  <el-col :span="19" :offset="1">
                    <el-skeleton-item variant="text" />
                  </el-col>
                  <el-col :span="4">
                    <el-skeleton-item variant="text" />
                  </el-col>
                  <el-col :span="19" :offset="1">
                    <el-row>
                      <el-col :span="4">
                        <el-skeleton-item variant="text" />
                      </el-col>
                      <el-col :span="19" :offset="1">
                        <el-skeleton-item variant="text" />
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="4">
                    <el-skeleton-item variant="text" />
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-skeleton-item class="mobile_loading_main-header" variant="image" />
              </el-col>
              <el-col :span="12" :offset="1">
                <el-skeleton-item variant="text" />
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col :span="6" :offset="1">
                <el-skeleton-item variant="button" />
              </el-col>
              <el-col>
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col>
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col>
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col>
                <el-skeleton-item variant="text" />
              </el-col>
              <el-col>
                <el-skeleton-item variant="text" />
              </el-col>
            </el-row>
          </template>
        </el-skeleton>
      </el-main>
      <!-- 移动端骨架屏 end -->
    </template>
    <!-- 移动端购买弹窗 start -->
    <el-drawer
      v-model="isDrawerShow"
      direction="btt"
      size="90%"
    >
      <!-- 弹窗头部 start -->
      <template #header>
        <el-row>
          <el-col :span="8">
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
                <span class="font-size-extra-small">￥</span>{{ goodsPrice }}
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
        <el-button class="mobile_buy_drawer-footer-btn" type="danger" round>
          <template v-if="isBuyNow">立即购买</template>
          <template v-else-if="isAddShopCart">加入购物车</template>
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
            <el-col class="font-size-base" :span="6">请选择规格</el-col>
            <el-col
              class="font-size-base mobile_buy_drawer-main-add_spec"
              :span="3"
              @click="addNewSpecification"
            >新增</el-col>
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
                      size="small"
                      placeholder="长"
                      class="mobile_buy_drawer-main-spec_input"
                    />×
                    <el-input
                      v-model="scope.row.width"
                      type="number"
                      size="small"
                      placeholder="宽"
                      class="mobile_buy_drawer-main-spec_input"
                    />×
                    <el-input
                      v-model="scope.row.height"
                      type="number"
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
                  :max="Number(scope.row.count)"
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
              <template v-for="(item, index) in remarkList" v-bind:key="item">
                <el-button
                  :type="item.is_selected==1?'primary':'default'"
                  :plain="item.is_selected==1?false:true"
                  size="small"
                  @click="item.is_selected = item.is_selected == 0 ? 1 : 0"
                >{{ item.name }}</el-button>
              </template>
            </el-col>
            <!-- 推荐备注 end -->
            <!-- 留言 start -->
            <el-col class="font-size-base">
              <el-row align="middle">
                <el-col :span="4">留言：</el-col>
                <el-col :span="20">
                  <el-input size="small" v-model="remarkContent" placeholder="请勿包含加工要求信息。如无，可不输入" />
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
        <el-col :span="4" class="goods_footer-small_btn">
          <el-icon class="goods_footer-small_btn-icon" @click="toContactService"><Service /></el-icon>
          <br @click="toContactService" />
          <span class="goods_footer-small_btn-text" @click="toContactService">客服</span>
        </el-col>
        <!-- 联系客服 end -->
        <!-- 收藏 start -->
        <el-col :span="4" class="goods_footer-small_btn">
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
        <!-- 购物车 start -->
        <el-col :span="4" class="goods_footer-small_btn">
          <el-badge :value="shopCartGoodsNum" :max="99" :hidden="shopCartGoodsNum<=0" @click="gotoShopCart">
            <el-icon class="goods_footer-small_btn-icon" @click="gotoShopCart">
              <ShoppingCart v-if="shopCartGoodsNum <= 0" />
              <ShoppingCartFull v-else />
            </el-icon>
            <br @click="gotoShopCart" />
            <span class="goods_footer-small_btn-text" @click="gotoShopCart">购物车</span>
          </el-badge>
        </el-col>
        <!-- 购物车 end -->
        <!-- 加入购物车 start -->
        <el-col :span="6">
          <el-button type="warning" class="goods_footer-large_btn" @click="showAddShopCart">加入购物车</el-button>
        </el-col>
        <!-- 加入购物车 end -->
        <!-- 立即购买 start -->
        <el-col :span="6">
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
import { getGoodsDetailApi, addCollectApi, cancelCollectApi } from '../api/goods.js'
import { formatHttpsProtocol } from '../utils/httpReplace.js'
import { formatUnit } from '../utils/good.js'
// 引入用户信息
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();
// 定义并获取url地址传进来的goods_id参数
const goodsId = ref(useRoute().query.goods_id)
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
// 更新时间
const updateTime = ref('')
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
// 修改规格的购买数量时
const handleSpecListCountChange = (value) => {
  console.log(specList.value)
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
// 商品的可选备注
const remarkList = ref([])
// 商品的三维图示
const threeDImage = ref('')
// 用户下单时手动输入的备注内容
const remarkContent = ref('')
// 是否展示移动端的购买弹窗
const isDrawerShow = ref(false)
// 是否已经收藏了该商品
const isCollected = ref(false)
// 购物车的商品数量
const shopCartGoodsNum = ref(0)
// 是否展示移动端的购买弹窗的立即购买按钮，即判断是否为立即购买
const isBuyNow = ref(true)
// 是否展示移动端的购买弹窗的加入购物车按钮，即判断是否为加入购物车
const isAddShopCart = ref(false)
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
// 展示或隐藏移动端的购买弹窗
const changeDrawerShow = () => {
  if ((isLoading.value || !isSuccess.value) && !isDrawerShow.value) {
    return false;
  }
  isDrawerShow.value =!isDrawerShow.value
}
const showAddShopCart = () => {
  if (isLoading.value || !isSuccess.value) {
    return false;
  }
  isBuyNow.value = false
  isAddShopCart.value = true
  changeDrawerShow()
}
const showBuyNow = () => {
  if (isLoading.value || !isSuccess.value) {
    return false;
  }
  isBuyNow.value = true
  isAddShopCart.value = false
  changeDrawerShow()
}
// 新增自定义规格
const addNewSpecification = (isFromGetGoodsDetail = false) => {
  if (isFromGetGoodsDetail || isLoading.value || !isSuccess.value) {
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
      _token: userStore._token,
      type: 1,
      goods_id: goodsId.value,
    }).then(res => {
      isCollected.value = false
    })
  } else {
    addCollectApi({
      user_id: userStore.userId,
      _token: userStore._token,
      type: 1,
      goods_id: goodsId.value,
    }).then(res => {
      isCollected.value = true
    })
  }
}
// 前往购物车列表页
const gotoShopCart = () => {
  if (isLoading.value || !isSuccess.value) {
    return false;
  }
  console.log('前往购物车页面')
}
const getGoodsDetail = () => {
  // 获取商品详细信息
  getGoodsDetailApi({
    goods_id: goodsId.value,
    user_id: '24494872',
    type: 1,
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
    res.data.data.main = res.data.data.main.map(item => formatHttpsProtocol(item))
    goodsMainImageList.value = res.data.data.main
    // 获取商品详情图
    res.data.data.details = res.data.data.details.map(item => formatHttpsProtocol(item))
    goodsDetailImageList.value = res.data.data.details
    // 获取商品标题
    goodsTitle.value = res.data.data.goods_title
    // 获取商品价格
    goodsPrice.value = res.data.data.goods_price
    // 获取商品更新时间
    updateTime.value = new Date(Number(res.data.data.goods_utime.toString()+'000')).toLocaleString()
    // 获取商品发货地
    sendArea.value = res.data.data.sendland_name
    // 商品规格添加购买数量、是否手动添加等字段
    res.data.data.specifications = res.data.data.specifications.map(item => {
      item.s_img = formatHttpsProtocol(item.s_img)
      item.count = Number(item.count)
      item.select_count = 0
      item.is_add_manual = 0
      return item
    })
    // 获取商品规格列表
    specList.value = res.data.data.specifications
    console.log(specList.value);
    // 添加一行新的自定义规格
    nextTick(() => {
      addNewSpecification(true)
    })
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
    // 获取购物车商品数量
    shopCartGoodsNum.value = Number(res.data.data.cart_goods_count)
    // 获取是否已经收藏该商品
    isCollected.value = Number(res.data.data.is_collect) == 1
    // 获取交易记录
    tradeLog.value = res.data.data.trade_log
    otherSee.value = res.data.data.other_see
  }).catch(() => {
    isFailed.value = true
    isSuccess.value = false
  }).finally(() => {
    isLoading.value = false
  })
}
const reloadHandle = () => {
  isLoading.value = true
  isSuccess.value = false
  getGoodsDetail()
}
getGoodsDetail()
</script>
<style scoped>
.goods_banner_image {
  width: 100%;
  height: calc((100vw - (var(--el-main-padding) * 2)) * 0.208333333333);
}
@media screen and (max-width: 768px) {
  .goods_banner_image {
  height: calc(100vw - (var(--el-main-padding) * 2));
}
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
.pc_loading_main {
  height: calc(100vh - var(--navbar-height));
  overflow: hidden;
}
.pc_loading_main-side_image_frame {
  position:relative;
  top: 2.5vw;
  z-index: 0;
}
.pc_loading_main-side_image {
  width: calc((100vw - (var(--el-main-padding) * 2)) / 3);height: 20vw;
}
.pc_loading_main-center_image_frame {
  z-index: 1;
}
.pc_loading_main-center_image {
  width: calc((100vw - (var(--el-main-padding) * 2)) / 2);
  height: 25vw;
  position: relative;
  right: calc((((100vw - (var(--el-main-padding) * 2)) / 2) - ((100vw - (var(--el-main-padding) * 2)) / 3)) / 2);
}
.pc_loading_main-title {
  padding-top: 14px;
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
.mobile_loading_main {
  height: calc(100vh - (var(--navbar-height) * 2));
  overflow: hidden;
}
.mobile_loading_main-image {
  width: 90vw;
  height: 90vw;
}
.mobile_loading_main-title {
  padding-top: 14px;
}
.mobile_loading_main-header {
  width: calc((100vw - (var(--el-main-padding) * 2)) * 0.166666666667);
  height: calc((100vw - (var(--el-main-padding) * 2)) * 0.166666666667);
}
.mobile_buy_drawer-header-image {
  height: 100%;
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
.goods_detail-detail_image {
  width: 100%;
  border-radius: var(--el-border-radius-small);
}
.goods_detail-for_reference_only_tips {
  text-align: center;
  color: #aaa;
  font-size: var(--el-font-size-extra-small);
}
.recommend_goods-item {
  margin-top: 20px;
}
.recommend_goods-item-image_frame {
  text-align: center;
  z-index: 0;
}
.recommend_goods-item-image {
  width: calc((100vw - (var(--el-main-padding) * 2)) * 0.2);
  height: calc((100vw - (var(--el-main-padding) * 2)) * 0.2);
}
.recommend_goods-item-info {
  margin-top: -25px;
  background-color: rgba(255,255,255, 0.7);
  z-index: 1;
}
.recommend_goods-item-info-title {
  text-align: center;
  font-size: var(--el-font-size-base);
}
.recommend_goods-item-info-price {
  text-align: center;
  font-size: var(--el-font-size-base);
  color: #FE4342;
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
