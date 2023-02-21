<template>
  <text class="first">真木网验证码登录</text>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      status-icon
      label-width="120px"
      class="demo-ruleForm"
  >
    <!--手机号开始-->
    <el-form-item label="Phone" prop="phone">
      <el-input v-model.number="ruleForm.phone" />
    </el-form-item>
    <!--手机号结束-->
    <!-- 图形验证码开始-->
    <GraphValidateCode :model="GraphValidateCode"></GraphValidateCode>
<!--    <el-form-item class='mb-6 -ml-20' prop='captchaCode'>-->
<!--      <el-input v-model='form.captchaCode' placeholder='请输入验证码' prefix-icon='el-icon-lock' style='width:260px' />-->
<!--      <el-image class='captchaCodeImg' style='width: 130px; height: 50px;margin-left:10px;border-radius:5px;' :src='captchaCodeImg' @click='getCaptchaCodeImg' />-->
<!--    </el-form-item>-->
    <!--图形验证码结束-->
    <!--登录开始-->
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
    <!--登录结束-->
  </el-form>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import GraphValidateCode from '../components/GraphValidateCode.vue'


const checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入手机号'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字'))
    } else {
      if (/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[1,7]))\d{8}$/.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确手机号'))
      }
    }
  }, 1000)
}

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  phone: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  phone: [{ validator: checkPhone, trigger: 'blur' }],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style scoped>
</style>
