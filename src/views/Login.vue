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
      <el-form-item class="mt-4" prop="smsVerificationCode">
        <el-input size="large" maxlength="6" type="number" v-model="ruleForm.smsVerificationCode" placeholder="请输入短信验证码">
          <template #append>
            <el-button @click="sendSMSVerificationCode" :disabled="sendDisabled" :plain="sendPlain">{{sendText}}</el-button>
          </template>
        </el-input>
      </el-form-item>
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
      <el-button size="large" @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form-item>
    <!--登录结束-->
  </el-form>
</template>
<script setup>
import { sendSMSVerificationCodeApi } from "../api/user.js";
import { reactive, ref} from 'vue'
import GraphValidateCode from '../components/GraphValidateCode.vue'

const ruleFormRef = ref(null);
const graphValidateCodeFromChild = ref('');
const timer = ref(null);
const sendDisabled = ref(true);
const sendPlain = ref(true);
const sendText = ref('获取');
const countDownTime = ref(60);
//监听子组件定义的函数
const receiveChildGraphValidateCode = (param) => {
  graphValidateCodeFromChild.value = param.graphValidateCode.value
}
//检查手机号对不对
const checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入手机号'))
  }
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字'))
    } else {
      if (/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[1,7]))\d{8}$/.test(value)) {
        if(countDownTime.value === 60){
          sendDisabled.value = false;
          sendPlain.value = false;
        }
        callback()
      } else {
        callback(new Error('请输入正确手机号'))
      }
    }
}
//检查图形验证码对不对
const validateGraphValidateCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入图片上面的4位值，不区分大小写'))
  } else{
    let value_lower = value.toLowerCase();
    let graphValidateCode_lower = graphValidateCodeFromChild.value.toLowerCase();
    if(value_lower !== graphValidateCode_lower) {
      callback(new Error('请重新输入图形验证码'))
    } else {
      callback()
    }
  }
}
//检查短信验证码位数
const validateSMSVerificationCode = (rule, value, callback) => {
  if(value === ''){
    callback(new Error('请输入短信验证码'))
  } else if(value.length !== 6){
    callback(new Error('请输入6位'))
  } else {
    callback()
  }
}
//发送短信验证码
const sendSMSVerificationCode = () => {
  if (/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[1,7]))\d{8}$/.test(ruleForm.phone)) {
    console.log(ruleForm.phone);
    sendSMSVerificationCodeApi({
      mobile_phone: ruleForm.phone,
      sms_login: 1,
      is_mobile: 1,
    }).then(async(res) => {
      console.log(res);
    })
  } else {
    console.log('不要发送了哦');
    return false;
  }
  sendDisabled.value = true;
  sendPlain.value = true;
  sendText.value = '60s';
  if(!timer.value){
    timer.value = setInterval(() => {
      if(countDownTime.value <= 0) {
        sendDisabled.value = false;
        sendPlain.value = false;
        sendText.value = '获取';
        countDownTime.value = 60;
        clearInterval(timer.value);
        timer.value = null
        return false
      }
      --countDownTime.value
      if(countDownTime.value >= 0){
        sendText.value = countDownTime.value + 's';
      }
    },1000)
  }
}

const ruleForm = reactive({
  graphValidateCode: '',//图形验证码
  smsVerificationCode: '',//短信验证码
  phone: '',//手机号
})

const rules = reactive({
  graphValidateCode: [{ validator: validateGraphValidateCode, trigger: 'blur' }],
  smsVerificationCode: [{validator: validateSMSVerificationCode, trigger: 'blur'}],
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
