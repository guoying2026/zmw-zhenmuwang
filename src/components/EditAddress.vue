<template>
  <el-select
    v-model="selectedId"
    no-match-text="请选择或添加收货地址信息"
    no-data-text="请选择或添加收货地址信息"
    :fit-input-width="true"
    style="width: 100%;"
    @change="changeDefaultAddressHandle"
  >
    <el-option
      v-for="(item, index) in receiveAddressList"
      v-bind:key="item"
      :value="item.id"
      :label="item.name+'&nbsp;&nbsp;&nbsp;'+item.phone+'&nbsp;&nbsp;&nbsp;'+item.address_detailed"
    >
      <span>{{ item.name }}</span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <span>{{ item.phone }}</span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <span>{{ item.address_detailed }}{{ item.house_number ? item.house_number : '' }}</span>
      <div style="float: right;">
        <el-link :underline="false" @click.stop="editAddressHandle($event, item)"><el-icon><Edit /></el-icon></el-link>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <el-popconfirm title="您确定要删除这条收货地址信息吗？" confirm-button-text="删除" cancel-button-text="取消" :data-item="item" @confirm="deleteAddressHandle($event, item)">
          <template #reference>
            <el-link :underline="false" @click.stop=""><el-icon><Delete /></el-icon></el-link>
          </template>
        </el-popconfirm>
      </div>
    </el-option>
    <el-option :disabled="true" value="" label="点击新增收货地址" style="text-align:center;">
      <el-link :underline="false" @click="addNewAddressHandle"><el-icon><Plus /></el-icon>新增收货地址</el-link>
    </el-option>
  </el-select>
  <el-dialog v-model="isShowDialog" title="收货地址">
    <el-form :model="formData" label-width="68px" label-position="right">
      <el-form-item label="收货人">
        <el-input v-model="formData.name" autocomplete="off" placeholder="请填写收货人姓名" />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input type="tel" v-model="formData.phone" autocomplete="off" placeholder="请填写收货人联系电话" />
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="formData.address_detailed" autocomplete="off" placeholder="请填写收货人详细地址" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="hideDialog">取消</el-button>
        <el-button type="primary" @click="confirmHandle">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { setDefaultAddressApi, addAddressApi, editAddressApi, delAddressApi } from '../api/address.js'
import { useUserStore } from '../pinia/user.js'
const userStore = useUserStore()
const props = defineProps({
  id: {
    type: String, 
    required: true, 
    default () {
      return ''
    }
  },
  list: {
    type: Array,
    required: true,
    default () {
      return []
    }
  },
})
const emits = defineEmits(['changeId', 'changeList'])
/**
 * 已选中的收货地址id
 */
const selectedId = ref(props.id)
/**
 * 用户收货地址列表
 */
const receiveAddressList = ref(props.list)
/**
 * 是否展示编辑收货地址信息的弹窗
 */
const isShowDialog = ref(false)
/**
 * 收货地址信息的弹窗表单的字段信息
 */
const formData = reactive({
  id: '',
  name: '',
  phone: '',
  address_detailed: '',
})
/**
 * 消息提示
 * @param {string} msg 
 * @param {('success'|'info'|'warn'|'error')} type 
 */
const MessageTips = (msg, type = 'success') => {
  switch (type) {
    case 'success':
      console.log(msg)
      break
    case 'info':
      console.info(msg)
      break
    case 'warn':
      console.warn(msg)
      break
    case 'error':
      console.error(msg)
      break
  }
}
/**
 * 清除表单的字段信息
 */
const clearFormData = () => {
  for (let i in formData) {
    formData[i] = ''
  }
}
/**
 * 更新收货地址列表
 * @param {Object} formData 
 * @param {string} formData.id
 * @param {string} formData.name
 * @param {string} formData.phone
 * @param {string} formData.address_detailed
 * @param {string?} [formData.house_number]
 * @param {('0'|'1')} formData.is_default
 */
const updateReceiveAddressList = (formData) => {
  if (formData.id) {
    return false
  }
  if (!formData.house_number) {
    formData.house_number = ''
  }
  let index = receiveAddressList.value.findIndex(item => {
    if (Number(item.id) == NaN || Number(formData.id) == NaN || Number(item.id) != Number(formData.id)) {
      return false
    }
    return true
  })
  // 根据id判断是否存在
  if (index > -1) {
    // 已存在则直接更新
    receiveAddressList.value[index] = formData
  } else {
    // 不存在则添加
    receiveAddressList.value.push(formData)
  }
  emits('changeList', receiveAddressList.value)
}
/**
 * 移除收货地址信息项
 * @param {string|number} id 
 */
 const removeReceiveAddressListItem = (id) => {
  let index = receiveAddressList.value.findIndex(item => {
    if (Number(id) == NaN || Number(item.id) == NaN || Number(id) != Number(item.id)) {
      return false
    }
    return true
  })
  if (index === -1) {
    return false
  }
  receiveAddressList.value.splice(index, 1)
  emits('changeList', receiveAddressList.value)
}
/**
 * 隐藏编辑收货地址的弹窗
 */
const hideDialog = () => {
  isShowDialog.value = false
  clearFormData()
}
/**
 * 显示编辑收货地址的弹窗
 */
const showDialog = () => {
  isShowDialog.value = true
}
/**
 * 
 * @param {string|number} id 
 */
const changeSelectedId = (id) => {
  selectedId.value = id
  emits('changeId', selectedId.value)
}
/**
 * 修改默认收货地址
 */
const changeDefaultAddressHandle = (aId) => {
  setDefaultAddressApi({
    user_id: userStore.userId,
    phone: userStore.phone,
    a_id: aId,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      return false
    }
    changeSelectedId(aId)
  }).catch(() => {
  }).finally(() => {
  })
}
/**
 * 编辑收货地址
 * @param {PointerEvent} e 
 * @param {Object} item 
 * @param {string} item.address_detailed 
 * @param {string?} [item.house_number]
 * @param {string} item.id
 * @param {('0'|'1')} item.is_default
 * @param {string} item.name
 * @param {string} item.phone
 */
const editAddressHandle = (e, item) => {
  console.log(e, item);
  formData.id = item.id
  formData.name = item.name
  formData.phone = item.phone
  formData.address_detailed = item.address_detailed
  showDialog()
}
/**
 * 删除收货地址
 * @param {PointerEvent} e 
 * @param {Object} item 
 * @param {strin|number} item.id
 */
const deleteAddressHandle = (e, item) => {
  console.log(e)
  console.log(item)
  if (!item.id) {
    return false
  }
  delAddressApi({
    user_id: userStore.userId,
    phone: userStore.phone,
    a_id: item.id,
  }).then(res => {
    if (res.status != 200 || res.data.status != 1000) {
      return false
    }
    removeReceiveAddressListItem(item.id)
    // 查找第一条收货地址信息记录，设置为默认收货地址
    if (receiveAddressList.value.length > 0) {
      changeDefaultAddressHandle(receiveAddressList.value[0].id)
    } else {
      changeSelectedId('')
    }
  }).catch(() => {    
  }).finally(() =>{
  })
}
/**
 * 添加收货地址
 */
const addNewAddressHandle = () => {
  showDialog()
}
/**
 * 添加收货地址信息项
 * @param {Object} item 
 * @param {string|number} item.id
 * @param {string} item.name
 * @param {string} item.phone
 * @param {string} item.address_detailed
 * @param {string?} item.house_number
 * @param {('0'|'1')} item.is_default
 */
const addReceiveAddressListItem = (item) => {
  receiveAddressList.value.push(item)
  emits('changeList', receiveAddressList.value)
  if (Number(item.is_default) === 1) {
    changeSelectedId(item.id)
  }
  clearFormData()
}
/**
 * 确认收货地址
 */
const confirmHandle = () => {
  let isFinishForm = true
  // 检测用户是否已经填写完整收货信息
  for (let i in formData) {
    if (formData[i].trim().length > 0 || i === 'id') {
      continue
    }
    isFinishForm = false
    switch (i) {
      case 'name':
        MessageTips('收货人不能为空', 'error')
        break
      case 'phone':
        MessageTips('联系电话不能为空', 'error')
        break
      case 'address_detailed':
        MessageTips('详细地址不能为空', 'error')
        break
    }
  }
  if (!isFinishForm) {
    // 未填写完整，弹出提示
    return false
  }
  let isDefault = '1'
  // 填写完整，保存信息，关闭弹窗
  if (Number(formData.id) === 0 || Number(formData.id) === NaN) {
    // 没有id，新增收货地址信息
    addAddressApi({
      user_id: userStore.userId,
      phone: userStore.phone,
      name: formData.name,
      mobile_phone: formData.phone,
      address_detailed: formData.address_detailed,
      is_default: isDefault,
    }).then(res => {
      if (res.status != 200 || res.data.status != 1000) {
        return false
      }
      // 添加新的收货地址之后，要在地址列表同步添加收货地址信息
      addReceiveAddressListItem({
        id: res.data.data,
        name: formData.name,
        phone: formData.phone,
        address_detailed: formData.address_detailed,
        is_default: isDefault,
      })
      hideDialog()
    }).catch(() => {
    }).finally(() => {
    })
  } else {
    // 更新收货地址信息
    editAddressApi({
      user_id: userStore.userId,
      phone: userStore.phone,
      a_id: formData.id,
      name: formData.name,
      mobile_phone: formData.phone,
      address_detailed: formData.address_detailed,
      is_default: isDefault,
    }).then(res => {
      if (res.status != 200 || res.data.status != 1000) {
        return false
      }
      updateReceiveAddressList({
        id: formData.id,
        name: formData.name,
        phone: formData.phone,
        address_detailed: formData.address_detailed,
        is_default: isDefault,
      })
      if (Number(isDefault) === 1) {
        changeSelectedId(formData.id)
      }
      hideDialog()
    }).catch(() => {
    }).finally(() => {
    })
  }
}
</script>
<style scoped></style>