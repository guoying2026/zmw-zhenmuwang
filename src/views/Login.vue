<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      status-icon
      label-width="0"
      class="demo-ruleForm login_el_form"
  >
    <text class="first">真木网验证码登录</text>
    <div>
      <!--手机号开始-->
      <el-form-item prop="phone">
        <el-input size="large" maxlength="11" type="number" v-model.number="ruleForm.phone" placeholder='请输入手机号' />
      </el-form-item>
      <!--手机号结束-->
      <!--短信验证码开始-->
      <div class="mt-4">
        <el-input size="large" v-model="ruleForm.smsVerificationCode" placeholder="请输入短信验证码">
          <template #append @click="sendSMSVerificationCode">发送</template>
        </el-input>
      </div>
      <!--短信验证码结束-->
      <!-- 图形验证码开始-->
      <el-form-item prop="graphValidateCode" class="margin_top_20">
        <el-input size="large" type="text" v-model="ruleForm.graphValidateCode" placeholder='请输入下方图片中的4位值'/>
      </el-form-item>
      <GraphValidateCode
          @toFatherLogin="receiveChildGraphValidateCode"
          ref="someRef"
          class="margin_top_10"
          id="canvas"
          :font-size-min="28"
          :font-size-max="34"
          :background-color-min="100"
          :background-color-max="150"
          :color-min="0"
          :color-max="255"
          :line-color-min="0"
          :line-color-max="200"
          :dot-color-min="0"
          :dot-color-max="255"
          :content-width="245"
          :content-height="50"
      >
      </GraphValidateCode>
    </div>
    <!--图形验证码结束-->
    <!--登录开始-->
    <el-form-item>
      <el-button @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form-item>
    <!--登录结束-->
  </el-form>
</template>
<script setup>
import {reactive,ref} from 'vue'
import GraphValidateCode from '../components/GraphValidateCode.vue'

const graphValidateCodeFromChild = ref('');
//监听子组件定义的函数
const receiveChildGraphValidateCode = (param) => {
  graphValidateCodeFromChild.value = param.graphValidateCode
  console.log(param.graphValidateCode)
}
//检查手机号对不对
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
//检查图形验证码对不对
const validateGraphValidateCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入图片上面的4位值，不区分大小写'))
  } else {
    if(value )
    if (value !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const sendSMSVerificationCode = () => {

}
//检查短信验证码对不对
const validateSMSVerificationCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  graphValidateCode: '',//图形验证码
  smsVerificationCode: '',//短信验证码
  phone: '',//手机号
})

const rules = reactive({
  graphValidateCode: [{ validator: validateGraphValidateCode, trigger: 'blur' }],
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
</script>
<style scoped>
.login_el_form{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.margin_top_10{
  margin-top: 10px;
}
.margin_top_20{
  margin-top: 20px;
}
</style>
