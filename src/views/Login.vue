<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      status-icon
      label-width="0"
      class="demo-ruleForm login_el_form colorful"
  >
    <div class="all margin-60-top">
      <text class="first">选择你心仪的头像</text>
      <div class="second">
        <div class="margin-20-top" v-for="(item,index) in image_arr" :key="index" @click="clickImageArr(index)">
          <img :src="item" class="photo" :class="clickIndex == index?'click_photo':''"/>
        </div>
      </div>
      <div class="margin-20-top">
        <img :src="image_arr[clickIndex]" class="big_photo"/>
      </div>
      <text class="name">{{name_arr[clickIndex]}}</text>
    </div>
    <div>
      <!--手机号开始-->
      <el-form-item prop="phone" class="input_btn">
        <el-input size="large" maxlength="11" type="number" v-model.number.lazy="ruleForm.phone" placeholder='请输入手机号' />
      </el-form-item>
      <!--手机号结束-->
      <!--短信验证码开始-->
      <el-form-item class="mt-4 input_btn" prop="smsVerificationCode">
        <el-input size="large" maxlength="6" type="number" v-model="ruleForm.smsVerificationCode" placeholder="请输入短信验证码">
          <template #append>
            <el-button @click="sendSMSVerificationCode" :disabled="sendDisabled" :plain="sendPlain">{{sendText}}</el-button>
          </template>
        </el-input>
      </el-form-item>
      <!--短信验证码结束-->
      <!-- 图形验证码开始-->
<!--      这里暂时取消展示图形验证码，因为好影响美观，而且会影响用户登录欲望，实在没必要。可以在后台进行拦截-->
<!--      <el-form-item prop="graphValidateCode" class="margin_top_20">-->
<!--        <el-input size="large" type="text" v-model="ruleForm.graphValidateCode" placeholder='请输入下方图片中的4位值'/>-->
<!--      </el-form-item>-->
<!--      <GraphValidateCode-->
<!--          @toFatherLogin="receiveChildGraphValidateCode"-->
<!--          ref="someRef"-->
<!--          class="margin_top_10"-->
<!--          id="canvas"-->
<!--          :font-size-min="28"-->
<!--          :font-size-max="34"-->
<!--          :background-color-min="100"-->
<!--          :background-color-max="150"-->
<!--          :color-min="0"-->
<!--          :color-max="255"-->
<!--          :line-color-min="0"-->
<!--          :line-color-max="200"-->
<!--          :dot-color-min="0"-->
<!--          :dot-color-max="255"-->
<!--          :content-width="245"-->
<!--          :content-height="50"-->
<!--      >-->
<!--      </GraphValidateCode>-->
      <!--图形验证码结束-->
    </div>
    <!--登录开始-->
    <el-form-item>
      <el-button class="login_btn" size="large" @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form-item>
    <!--登录结束-->
    <div class="squared colorful">
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
      <div class="squared-item"></div>
    </div>
  </el-form>
</template>
<script setup>
import '../assets/blockAnimation.scss';
import { sendSMSVerificationCodeApi,loginApi } from "../api/user.js";
import {onMounted, reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import { image_arr, name_arr} from "../utils/user.js";
//把页面所有相关图形验证码注释掉
// import GraphValidateCode from '../components/GraphValidateCode.vue'
//登录成功后，需要把登录状态让多页面共享
import { useUserStore } from "../pinia/user.js";
import {ElNotification} from "element-plus";
const router = useRouter()
const userStore = useUserStore();
onMounted(()=>{
  console.log(userStore.userId);
  console.log(userStore.phone);
  console.log(userStore.photo);
  console.log(userStore.clickIndex)
})
const clickIndex = ref(userStore.clickIndex);
const clickImageArr = (index) => {
  clickIndex.value = index;
}


//storeToRefs,它将为任何响应式属性创建refs，当我们使用pinia的状态但不调用任何操作时很有用
// import { storeToRefs } from 'pinia'
// const { token, userId, token_expired_time, phone } = storeToRefs(userStore)

//访问state
//默认情况下，您可以通过store实例访问状态来直接读取和写入状态
//userStore.userId
//userStore.$reset()//返回初始值

const ruleFormRef = ref(null);
// const graphValidateCodeFromChild = ref('');
const timer = ref(null);
const sendDisabled = ref(true);
const sendPlain = ref(true);
const sendText = ref('获取');
const countDownTime = ref(60);
//监听子组件定义的函数
// const receiveChildGraphValidateCode = (param) => {
//   graphValidateCodeFromChild.value = param.graphValidateCode.value
// }
//检查手机号对不对
const checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('手机号不能为空'))
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
// const validateGraphValidateCode = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('请输入图片上面的4位值，不区分大小写'))
//   } else{
//     let value_lower = value.toLowerCase();
//     let graphValidateCode_lower = graphValidateCodeFromChild.value.toLowerCase();
//     if(value_lower !== graphValidateCode_lower) {
//       callback(new Error('请重新输入图形验证码'))
//     } else {
//       callback()
//     }
//   }
// }
//检查短信验证码位数
const validateSMSVerificationCode = (rule, value, callback) => {
  if(value === ''){
    callback(new Error('短信验证码不能为空'))
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
      if(res.data.status !== 1){
        ElNotification({
          title: 'Info',
          message: res.data.info,
          type: 'info',
        })
      }
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
  // graphValidateCode: '',//图形验证码
  smsVerificationCode: '',//短信验证码
  phone: '',//手机号
})

const rules = reactive({
  // graphValidateCode: [{ validator: validateGraphValidateCode, trigger: 'blur' }],
  smsVerificationCode: [{validator: validateSMSVerificationCode, trigger: 'blur'}],
  phone: [{ validator: checkPhone, trigger: 'blur' }],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log(ruleForm);
      loginApi({
        username: ruleForm.phone,
        is_sms: 1,
        usercode: ruleForm.smsVerificationCode,
        distinct_id: 0,
        cap_id: 9,
        openid: '',
        province: '',
        is_driver: 0,
        weixin_login: 0,//不计算weixin登录
        click_index: clickIndex.value,
      }).then(async(res) => {
        console.log(res);
        if(res.data.status*1 === 1001){//验证码过期
          ElNotification({
            title: 'Info',
            message: '验证码过期',
            type: 'info',
          })
        } else if(res.data.status*1 === 1000){
          console.log('登录成功');
          //result.user_id
          //result._token
          //result.token_expired_time
          //不存_token就是不想让用户过期需要重新登录。但把_token列出来,怕之后请求某个接口需要判断token。所以为了以防万一，先列出来，但不存
          userStore.userId = res.data.data.user_id
          userStore.phone = ruleForm.phone
          userStore.photo = image_arr[clickIndex.value]
          userStore.clickIndex = clickIndex.value
          userStore.userName = name_arr[clickIndex.value],
          console.log(userStore);
          await router.push({path: '/'})
        } else {//登录失败请重试
          ElNotification({
            title: 'Error',
            message: '登录失败',
            type: 'error',
          })
        }
      })
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
<style scoped>
.name{
  color: #fff;
}
.big_photo{
  width: 100px;
  height: 100px;
}
.click_photo{
  border: clamp(5px, 0.4vw, 5px) solid white;
  border-radius: 100%;
  flex-shrink: 0;
  height: 100%;
}
.all{
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.second{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.photo{
  width: 50px;
  height: 50px;
  margin: 10px;
}
/* .input_btn>>>input::placeholder{ */
.input_btn:deep(input::placeholder) {
  letter-spacing: 2px;
}
/* .input_btn>>>.el-input__wrapper{ */
.input_btn:deep(.el-input__wrapper) {
  box-shadow: none !important;
  z-index: 100;
}
/* .input_btn>>>.el-input-group__append{ */
.input_btn:deep(.el-input-group__append) {
  box-shadow: none !important;
  z-index: 100;
  /*background-image: linear-gradient(109.6deg, rgb(218 213 237) 11.2%, rgb(208 210 237) 91.1%);*/
  color: #000000;
  opacity: 0.8;
}
/* .input_btn>>>span{ */
.input_btn:deep(span) {
  letter-spacing: 2px;
  font-size: 13px;
}
/* .input_btn>>>.el-form-item__error{ */
.input_btn:deep(.el-form-item__error) {
  letter-spacing: 2px;
  font-size: 14px;
}
.first{
  letter-spacing: 2px;
  color: #000;
  z-index: 100;
}
.login_el_form{
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.login_btn{
  letter-spacing: 10px;
  padding: 10px 95px;
  z-index: 100;
  border: none;
  /*background-image: linear-gradient(109.6deg, rgb(176 163 224) 11.2%, rgb(208 210 237) 91.1%);*/
  /*color: #7f20c2;*/
  color: #000000;
  opacity: 0.8;
}
</style>
