<template>
  <el-dropdown size="large">
    <el-image class="header_image" fit="contain" src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_image6276006bed8cbbb8540c4973869e1c47.png" />
    <template #dropdown>
      <el-container>
        <template v-if="isHasLogin">
          <el-row :gutter="24">
            <el-col>
              <el-row :gutter="24" align="middle" class="top">
                <el-col :span="4">
                  <el-image :src="userHeadImg" />
                </el-col>
                <el-col :span="20">
                  <span class="username">{{ userName }}</span>
                </el-col>
              </el-row>
            </el-col>
            <template v-if="isVip"></template>
            <template v-else>
              <el-col class="not_vip">
                <el-row :gutter="24" align="middle">
                  <el-col :span="16">
                    <el-row>
                      <el-col>
                        <el-row :gutter="24">
                          <el-col :span="12" class="zmw_vip">真木网会员</el-col>
                          <el-col :span="7" class="zmw_vip_status">未开通</el-col>
                        </el-row>
                      </el-col>
                      <el-col class="open_vip_tips">开通真木网会员享诸多新鲜事</el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="8" :pull="1">
                    <el-link :underline="false" type="default" class="open_vip_member_a"><span class="open_vip_member_text">立即开通&nbsp;&gt;</span></el-link>
                  </el-col>
                </el-row>
              </el-col>
            </template>
            <el-col>
              <el-row :gutter="24" justify="space-around" class="bottom">
                <template v-for="item in loginBottomBtn" v-bind:key="item">
                    <el-col :span="7">
                      <el-link :underline="false" :href="item.link">
                        <el-row :gutter="24" justify="center">
                          <el-col>
                            <el-image :src="item.image" />
                          </el-col>
                          <el-col class="no_login_bottom_btn_text">
                            <span>{{ item.title }}</span>
                          </el-col>
                        </el-row>
                      </el-link>
                    </el-col>
                </template>
              </el-row>
            </el-col>
            <el-col class="logout">
              <el-link :underline="false" type="default">退出登录</el-link>
            </el-col>
          </el-row>
        </template>
        <template v-else>
          <el-row>
            <el-col>
              <el-row :gutter="24" align="middle" class="top">
                <el-col :span="4">
                  <el-image src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_image6276006bed8cbbb8540c4973869e1c47.png" />
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col><span class="no_login_tips1">你还没有登录</span></el-col>
                    <el-col><span class="no_login_tips2">登录后可以体验更多功能</span></el-col>
                  </el-row>
                </el-col>
                <el-col :span="7">
                  <el-button type="success">立即登录</el-button>
                </el-col>
              </el-row>
            </el-col>
            <el-col>
              <el-row :gutter="24" justify="space-around" class="bottom">
                <template v-for="item in noLoginBottomBtn" v-bind:key="item">
                    <el-col :span="7">
                      <el-link :underline="false" :href="item.link">
                        <el-row :gutter="24" justify="center">
                          <el-col>
                            <el-image :src="item.image" />
                          </el-col>
                          <el-col class="no_login_bottom_btn_text">
                            <span>{{ item.title }}</span>
                          </el-col>
                        </el-row>
                      </el-link>
                    </el-col>
                </template>
              </el-row>
            </el-col>
          </el-row>
        </template>
      </el-container>
    </template>
  </el-dropdown>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  userId: {
    type: String,
    required: false,
    default () {
      return ''
    }
  },
  userName: {
    type: String,
    required: false,
    default () {
      return '真木网用户'
    }
  },
  userHeadImg: {
    type: String,
    required: false,
    default () {
      return 'https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_image6276006bed8cbbb8540c4973869e1c47.png'
    }
  },
  isVip: {
    type: Boolean,
    required: false,
    default () {
      return false
    }
  },
});
const isHasLogin = ref(false);
if (props.userId && props.userName) {
  isHasLogin.value = true;
}
const noLoginBottomBtn = ref([
  {
    image: 'https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_image13b306cef26b8776aa863ea5f7360aad.png',
    title: '账户中心',
    link: '/',
  },{
    image: 'https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_image8d5a494887a9e5b460550835552e4953.png',
    title: 'VIP会员',
    link: '/',
  },{
    image: 'https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_imageadc8d77358baedef6141236ea8aea5b2.png',
    title: '注册',
    link: '/',
  }
]);
const loginBottomBtn = ref([
  {
    image: 'https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_image13b306cef26b8776aa863ea5f7360aad.png',
    title: '账户中心',
    link: '/',
  },{
    image: 'https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_image8d5a494887a9e5b460550835552e4953.png',
    title: '买家中心',
    link: '/',
  },{
    image: 'https://zhenmuwang.oss-cn-beijing.aliyuncs.com/zmw_group_imageadc8d77358baedef6141236ea8aea5b2.png',
    title: '卖家中心',
    link: '/',
  }
]);
</script>
<style scoped>
.el-link:hover {
  background-color: transparent;
}
.el-dropdown {
  align-items: center;
}
.el-container {
  width: 330px;
}
.header_image {
  height: calc(var(--navbar-height) / 5 * 3);
}
.username {
  font-weight: bold;
  font-size: var(--el-font-size-large);
  letter-spacing: 4px;
}
.top {
  background-color: #f2ffe8;
  padding: 10px;
}
.not_vip {
  margin: 10px 10px 0;
  padding: 10px;
  background: linear-gradient(to bottom, #fde9d3, #fef7f0);
}
.zmw_vip {
  font-weight: bold;
  font-size: var(--el-font-size-large);
}
.zmw_vip_status {
  height: 19px;
  background: #9aa2b2;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
  border-top-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.zmw_vip_status::before {
  content: ' ';
  position: absolute;
  right: 55px;
  top: 0px;
  display: inline-block;
  width: 10px;
  height: 19px;
  background: #9aa2b2;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  transform: skewX(350deg) translateX(-6px);
  z-index: 0;
}
.zmw_vip_status::after {
  content: ' ';
  position: absolute;
  right: -11px;
  display: inline-block;
  width: 10px;
  height: 19px;
  background: #9aa2b2;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  transform: skewX(-10deg) translateX(-3px);
  z-index: 0;
}
.open_vip_member_a:hover {
  color: #f94d36;
}
.open_vip_member_text {
  font-weight: 600;
  font-size: var(--el-font-size-normal);
  color: #f94d36;
  letter-spacing: 2px;
}
.open_vip_tips {
  color: #9aa2b2;
  letter-spacing: 2px;
}
.logout {
  text-align: center;
  margin: 0 0 10px;
}
.bottom {
  padding: 10px;
}
.no_login_tips1 {
  font-weight: bold;
  font-size: var(--el-font-size-large);
  letter-spacing: 4px;
}
.no_login_tips2 {
  color: #98A196;
  letter-spacing: 1px;
}
.no_login_bottom_btn_text {
  text-align: center;
  color: #98A196;
  letter-spacing: 2px;
}
</style>