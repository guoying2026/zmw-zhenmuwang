<template>
  <!-- 订单页显示当前收货地址 start -->
  <el-row align="middle" v-if="isShowCurrentAddressComponent">
    <el-col :span="2">
      <el-icon v-if="isHasNoDefaultAddress" class="icon-v_pos-middle icon-add"><Plus /></el-icon>
      <el-icon v-else class="icon-v_pos-middle icon-location"><LocationInformation /></el-icon>
    </el-col>
    <el-col :span="20" @click="showAddressListHandle">
      <el-row :align="isHasNoDefaultAddress?'middle':'top'">
        <el-col v-if="isHasNoDefaultAddress" class="address_info-add_address_tips">添加收货地址</el-col>
        <el-col v-else>
          <el-row align="bottom">
            <el-col class="address_info-name">{{ name }}</el-col>
            <el-col class="address_info-phone">{{ phone }}</el-col>
          </el-row>
        </el-col>
        <el-col class="address_info-address">{{ addressDetailed }}{{ houseNumber }}</el-col>
      </el-row>
    </el-col>
    <el-col :span="2" @click="showAddressListHandle">
      <el-icon class="icon-v_pos-middle icon-arrow_right"><ArrowRightBold /></el-icon>
    </el-col>
  </el-row>
  <!-- 订单页显示当前收货地址 end -->
  <!-- 点击订单页的收货地址后，显示的收货地址列表 start -->
  <el-drawer
    size="100%"
    title="收货地址"
    v-model="isShowAddressListSelectComponent"
  >
    <template #footer>
      <el-button
        class="list-bottom-btn"
        type="danger"
        round
        @click="editAddressHandle($event)"
      >新增收货地址</el-button>
    </template>
    <el-row>
      <el-col>
        <el-card
          v-for="(item, index) in list"
          v-bind:key="item.id"
          class="list-item"
          body-style="padding: calc(var(--el-card-padding) / 4);"
          shadow="never"
        >
          <el-row @click="setDefaultAddressHandle($event, item.id)">
            <el-col :span="20">
              <el-row>
                <el-col>
                  <el-row align="bottom">
                    <el-col class="address_info-name">{{ item.name }}</el-col>
                    <el-col class="address_info-phone">{{ item.phone }}</el-col>
                    <el-col
                      v-if="item.is_default==1"
                      class="address_info-default_address_tag"
                    >
                      <el-tag type="warning">
                        <strong>默认地址</strong>
                      </el-tag>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col class="address_info-address1">{{ item.address_detailed }}{{ item.house_number }}</el-col>
              </el-row>
            </el-col>
            <el-col :span="4">
              <el-row
                justify="center"
                align="middle"
                class="address_info-op"
              >
                <el-col>
                  <el-link
                    :underline="false"
                    type="warning"
                    @click.stop="editAddressHandle($event, item.id)"
                  >编辑</el-link>
                </el-col>
                <el-col>
                  <!-- <el-button
                    size="small"
                    type="danger"
                    @click.stop=""
                  >删除</el-button> -->
                  <el-popconfirm
                    title="您确定要删除这条收货地址信息吗？"
                    confirm-button-text="删除"
                    cancel-button-text="取消"
                    :data-item="item"
                    @confirm="deleteAddressHandle($event, item)"
                  >
                    <template #reference>
                      <el-button
                        size="small"
                        type="danger"
                        @click.stop=""
                      >删除</el-button>
                    </template>
                  </el-popconfirm>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </el-drawer>
  <!-- 点击订单页的收货地址后，显示的收货地址列表 end -->
  <!-- 编辑或添加收货地址时，显示的表单页面 start -->
  <el-drawer
    size="100%"
    :title="(isEditState?'编辑':'新建')+'收货地址'"
    v-model="isShowAddressEditComponent"
  >
    <el-form :model="addressForm">
      <el-form-item label="收货姓名">
        <el-input v-model="addressForm.name" placeholder="请填写收货人姓名"/>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="addressForm.phone" placeholder="请填写收货人联系电话"/>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="addressForm.address_detailed" placeholder="请填写收货详细地址"/>
      </el-form-item>
      <el-form-item label="默认地址">
        <el-switch v-model="addressForm.is_default" :active-value="1" :inactive-value="0" />
      </el-form-item>
      <el-form-item>
        <el-button
          class="list-bottom-btn"
          type="danger"
          round
          @click="saveAddressHandle"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
  <!-- 编辑或添加收货地址时，显示的表单页面 end -->
</template>
<script setup>
import { reactive, ref, watchEffect } from 'vue'
import {
  getDefaultAddressApi,
  getAddressListApi,
  setDefaultAddressApi,
  getSingleAddressApi,
  editAddressApi,
  addAddressApi,
  delAddressApi,
} from '../api/address.js'
import { useUserStore } from '../pinia/user'
import showGoToLoginTipsDialog from './GoToLoginTipsDialog';
const emits = defineEmits(['onChangeId','onChange'])
const userStore = useUserStore()
const isShowCurrentAddressComponent = ref(true)
const addressDetailed = ref('')
const houseNumber = ref('')
const id = ref('')
const isDefault = ref('')
const name = ref('')
const phone = ref('')

const isHasNoDefaultAddress = ref(true)

const isShowAddressListSelectComponent = ref(false)
const list = ref([])

const isShowAddressEditComponent =ref(false)
const isEditState = ref(false)
const addressForm = reactive({
  id: '',
  name: '',
  phone: '',
  address_detailed: '',
  is_default: 0,
})

watchEffect(() => {
  // emits('onChangeId', id.value)
  emits('onChange', {
    id: id.value,
    name: name.value,
    phone: phone.value,
    address_detailed: addressDetailed.value,
    house_number: houseNumber.value,
    is_default: isDefault.value,
  })
})

/**
 * 用户未登录时统一处理函数
 */
const unloginHandle = () => {
  showGoToLoginTipsDialog({
  }).then(() => {
    console.log('确认前往登录')
  }).catch(() => {
    console.log('用户不想登录')
  })
}

const showAddressListHandle = () => {
  if (userStore.userId == '' || userStore.phone == '') {
    // 用户未登录
    unloginHandle()
    return false
  }
  isShowAddressListSelectComponent.value = true
  getAddressListApi({
    user_id: userStore.userId,
    phone: userStore.phone,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      if ([1002,1100].includes(Number(res.data.status))) {
        // 用户未登录
        unloginHandle()
      }
      return false
    }
    list.value = res.data.data
  })
}

const editAddressHandle = (e, _id = 0) => {
  for (let i in addressForm) {
    addressForm[i] = ''
  }
  if (userStore.userId == '' || userStore.phone == '') {
    // 用户未登录
    unloginHandle()
    return false
  }
  isShowAddressEditComponent.value = true
  isEditState.value = Number(_id) !== 0 && Number(_id) !== NaN
  if (Number(_id) !== 0 && Number(_id) !== NaN) {
    getSingleAddressApi({
      user_id: userStore.userId,
      phone: userStore.phone,
      a_id: _id,
    }).then(res => {
      if (res.status != 200 || res.data.status != 1000) {
        if ([1002,1100].includes(Number(res.data.status))) {
        // 用户未登录
        unloginHandle()
      }
        return false
      }
      console.log(res)
      addressForm.id = res.data.data.id
      addressForm.name = res.data.data.name
      addressForm.phone = res.data.data.phone
      addressForm.address_detailed = res.data.data.address_detailed
      addressForm.is_default = Number(res.data.data.is_default)
    })
  }
}

const saveAddressHandle = () => {
  if (userStore.userId == '' || userStore.phone == '') {
    // 用户未登录
    unloginHandle()
    return false
  }
  let request = null
  if (Number(addressForm.id) !== 0 && Number(addressForm.id) !== NaN) {
    // 更新收货地址信息
    request = editAddressApi({
      user_id: userStore.userId,
      phone: userStore.phone,
      a_id: addressForm.id,
      name: addressForm.name,
      mobile_phone: addressForm.phone,
      address_detailed: addressForm.address_detailed,
      is_default: addressForm.is_default,
    })
  } else {
    // 新增收货地址信息
    request = addAddressApi({
      user_id: userStore.userId,
      phone: userStore.phone,
      name: addressForm.name,
      mobile_phone: addressForm.phone,
      address_detailed: addressForm.address_detailed,
      is_default: addressForm.is_default,
    })
  }
  request.then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      if ([1002,1100].includes(Number(res.data.status))) {
        // 用户未登录
        unloginHandle()
      }
      return false
    }
    if (Number(addressForm.is_default) === 1) {
      if (Number(addressForm.id) !== 0 && Number(addressForm.id) !== NaN) {
        id.value = addressForm.id
      } else {
        id.value = res.data.data
      }
      emits('onChangeId', id.value)
      isDefault.value = '1'
      name.value = addressForm.name
      phone.value = addressForm.phone
      addressDetailed.value = addressForm.address_detailed
      houseNumber.value = ''
      showAddressListHandle()
      isShowAddressEditComponent.value = false
    }
  }).catch(() => {
  }).finally(() => {
  })
}

const deleteAddressHandle = (e, item) => {
  if (!item.id) {
    return false
  }
  if (userStore.userId == '' || userStore.phone == '') {
    // 用户未登录
    unloginHandle()
    return false
  }
  delAddressApi({
    user_id: userStore.userId,
    phone: userStore.phone,
    a_id: item.id,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      if ([1002,1100].includes(Number(res.data.status))) {
        // 用户未登录
        unloginHandle()
      }
      return false
    }
    showAddressListHandle()
  }).catch(() => {
  }).finally(() => {
  })
}

const setDefaultAddressHandle = (e, _id) => {
  if (userStore.userId == '' || userStore.phone == '') {
    // 用户未登录
    unloginHandle()
    return false
  }
  list.value.map(item => {
    item.is_default = Number(_id) === Number(item.id)
    return item
  })
  setDefaultAddressApi({
    user_id: userStore.userId,
    phone: userStore.phone,
    a_id: _id,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      if ([1002,1100].includes(Number(res.data.status))) {
        // 用户未登录
        unloginHandle()
      }
      return false
    }
    list.value.forEach(item => {
      if (Number(_id) !== Number(item.id)) {
        return false
      }
      addressDetailed.value = item.address_detailed
      houseNumber.value = item.house_number
      id.value = item._id
      name.value = item.name
      phone.value = item.phone
      emits('onChangeId', id.value)
    })
    isShowAddressListSelectComponent.value = false
  }).catch(() => {
  }).finally(() => {
  })
}

const getDefaultAddressHandle = () => {
  if (userStore.userId == '' || userStore.phone == '') {
    // 用户未登录
    unloginHandle()
    return false
  }
  getDefaultAddressApi({
    user_id: userStore.userId,
    phone: userStore.phone,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      if ([1002,1100].includes(Number(res.data.status))) {
        // 用户未登录
        unloginHandle()
      }
      isHasNoDefaultAddress.value = res.data.message.includes('未设置默认收货地址')
      return false
    }
    isHasNoDefaultAddress.value = false
    addressDetailed.value = res.data.data.address_detailed
    houseNumber.value = res.data.data.house_number
    id.value = res.data.data.id
    isDefault.value = res.data.data.is_default
    name.value = res.data.data.name
    phone.value = res.data.data.phone
    emits('onChangeId', id.value)
    console.log(res)
  }).catch(() => {
  }).finally(() => {
  })
}

getDefaultAddressHandle()
</script>
<style scoped>
.icon-v_pos-middle {
  display: flex;
  align-items: center;
  align-content: center;
}
.icon-add {
  font-size: var(--el-font-size-extra-large);
  color: #fff;
  background: var(--el-color-danger);
  border-radius: var(--el-border-radius-base);
}
.icon-location {
  font-size: var(--el-font-size-extra-large);
  color: var(--el-color-warning);
}
.address_info-add_address_tips {
  display: flex;
  align-items: center;
  align-content: center;
  font-size: var(--el-font-size-base);
}
.address_info-name {
  flex: unset;
  margin-right: 10px;
  font-size: var(--el-font-size-large);
}
.address_info-phone {
  flex: unset;
  font-size: var(--el-font-size-base);
  color: var(--el-color-info-dark-2);
}
.address_info-default_address_tag {
  flex: unset;
  margin-left: 10px;
  font-size: var(--el-font-size-base);
  font-weight: bold;
}
.address_info-address {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: var(--el-font-size-base);
  color: var(--el-color-info-dark-2);
}
.address_info-address1 {
  font-size: var(--el-font-size-base);
}
.address_info-op {
  height: 100%;
  text-align: center;
  font-size: var(--el-font-size-base);
}
.icon-arrow_right {
  font-size: var(--el-font-size-extra-large);
  color: var(--el-color-info);
}
.list-container {
  height: calc(100vh - var(--navbar-height));
}
.list-main {
  padding: 0;
}
.list-item {
  border-radius: var(--el-border-radius-base);
}
.list-item:not(:first-of-type) {
  margin-top: 10px;
}
.list-bottom-btn {
  width: 100%;
}
</style>