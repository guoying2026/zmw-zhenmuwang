<template>
<!--  由父组件提供插槽内容开始-->
<!--  由父组件提供插槽内容结束-->
  <div class="deep_parent">
    <div @click="drawerShow">
      <slot name="clickDrawer"></slot>
    </div>
  <el-drawer v-model="drawer" direction="btt" size="60%" title="I am the title" :with-header="false">
    <!--          抽屉里的添加评论开始-->
    <el-input
        v-model="textarea"
        maxlength="200"
        :placeholder="placeholderText"
        show-word-limit
        type="textarea"
        :rows="5"
        resize="none"
    />
    <el-upload
        class="margin-20-top"
        action="#"
        list-type="picture-card"
        v-model:file-list="fileList"
        :auto-upload="false"
        :on-change="handleChange"
        :on-success="handleSuccess"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <el-row>
      <el-col :span="12" class="center_button margin-20-top">
        <text class="select_btn btn_item" @click="drawer = false">{{cancelText}}</text>
<!--        <el-button type="" @click="drawer = false">-->
<!--          {{cancelText}}-->
<!--        </el-button>-->
      </el-col>
      <el-col :span="12" class="center_button margin-20-top">
        <text class="blue_btn btn_item" v-if="addType === 'question'" @click="publishQuestion">{{confirmText}}</text>
        <text class="blue_btn btn_item" v-else-if="addType === 'complaint'" @click="publishComplaint">{{confirmText}}</text>
        <text class="blue_btn btn_item" v-else @click="publishComment">{{confirmText}}</text>
        <!--        <el-button type="primary" >{{confirmText}}</el-button>-->
<!--        <el-button type="primary" v-else @click="publishComment">-->
<!--          {{confirmText}}-->
<!--        </el-button>-->
      </el-col>
    </el-row>

    <!--          弹出层的评论结束-->
  </el-drawer>
  </div>
</template>
<script>
export default{
  name: 'AddComment'
}
</script>
<script setup>
import {ref} from 'vue'
import { getAnswerOssSignatureApi,pushAnswerOssApi } from "../api/ossUploadFile.js";
import { handeSrcHttpsUtil,guidUtil } from "../utils/httpReplace.js";
import { publishCommentApi,publishCommentReplyApi } from "../api/comment.js";
import { publishQuestionApi,publishAnswerApi } from "../api/question.js";
import { publishBrokenRecordApi } from "../api/brokenRecord.js";
import { ElNotification } from 'element-plus'
import {useRouter} from 'vue-router'
const router = useRouter()

//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();
//添加评论开始
//用来给父组件传递值自定义的函数
const emit = defineEmits(['toFatherCommentList','toFatherQuestionList'])
//父组件给该组件AddComment传递的值，就定义在defineProps,开始
const props = defineProps({
  placeholderText:{
    type: String,
    default: '添加评论'
  },
  cancelText:{
    type: String,
    default: '取消评论'
  },
  confirmText:{
    type: String,
    default: '发布评论'
  },
  //评论回复需要的prop
  commentId:{
    type: [String,Number],
    default: 0,
  },
  commentReplyId:{
    type: [String,Number],
    default: 0,
  },
  replyToUserId:{
    type: [String, Number],
  },
  companyInfoId:{
    type: [String,Number],
    default: 0,
  },
  commentIndex:{
    type: [String,Number],
    default: 0,
  },
  commentReplyIndex:{
    type: [String,Number],
    default: 0,
  },
  replyToName:{
    type: [String, Number],
  },
  replyCount:{
    type: [String,Number],
    default: 0,
  },
  //提出问题需要prop
  questionId:{
    type: [Number,String],
    default: 0,
  },
  questionIndex:{
    type: Number,
    default: 0,
  },
  //类型
  addType:{
    type: String,
    default: ''
  },
  questionType:{
    type: String,
    default: ''
  },
  commentType:{
    type: String,
    default: ''
  }
})
const drawerShow = () => {
  if(userStore.userId * 1 > 0){
    drawer.value = true;
  } else {
    ElNotification({
      title: 'Info',
      message: '登录后才可以'+ props.confirmText +'!',
      type: 'info',
    })
  }
}
//父组件给该组件AddComment传递的值，就定义在defineProps,结束
//抽屉开始
const drawer = ref(false)
//抽屉结束

//输入评论开始
const textarea = ref('')
//输入评论结束

//上传文件开始
//用来将数据赋值 传到confirm确认按钮 -- 形参
const fileList = ref([]);
const submitFileList = ref([]);
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)


const handleSuccess = () => {
  console.log('在执行handleSuccess');
}
const handleChange = (uploadFile, uploadFiles) => {
  console.log('在执行handleChange');
  //这个变量uploadFileList用来给确认按钮当形参
  console.log(uploadFile);
  console.log(uploadFiles);
  //进行阿里云直传oss
  getAnswerOssSignatureApi({type: 'sell_img'}).then(async(res) => {
    if (res.data.status === 1000) {
      const post = res.data.data;
      console.log(res);
      post.host = handeSrcHttpsUtil(post.host);
      const fileKey = post.dir + '_pc_image_' + guidUtil() + '.png';
      //这就是上传文件成功后的访问路径
      console.log(post.host + '/' + fileKey);
      const fileUrl = post.host + '/' + fileKey;
      const fileRawUid = uploadFile.raw.uid;
      const formData = new FormData();
      formData.append('OSSAccessKeyId', post.accessid)
      formData.append('name', 'file')
      formData.append('key', fileKey)
      formData.append('policy', post.policy)
      formData.append('success_action_status', '200')
      formData.append('signature', post.signature)
      formData.append('file', uploadFile.raw)
      pushAnswerOssApi(post.host, formData).then(async(result) => {
        console.log(result);
        if(result.status === 200){
          //[fileRawUid]，使用变量作为key
          submitFileList.value.push({ [fileRawUid] : fileUrl})
          console.log(submitFileList.value);
        }
      })
    }
  })
}
//删除上传的图片
const handleRemove = (file, fileList) => {
  console.log('在执行handleRemove');
  console.log(submitFileList.value);
  console.log(file.raw.uid);
  console.log(fileList.value)
  submitFileList.value = submitFileList.value.filter(item => !item[file.raw.uid])
  console.log(submitFileList.value);
}
//放大预览上传的图片
const handlePictureCardPreview = (file) => {
  console.log('在执行handlePictureCardPreview');
  console.log(file)
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}
//上传文件结束
const publishComplaint = () => {
  const toFatherImage = [];
  for(const item of submitFileList.value){
    console.log(Object.values(item)[0]);
    toFatherImage.push(Object.values(item)[0]);
  }
  let data = {
    'company_info_id': props.companyInfoId,//某个公司下的投诉记录
    'complaint': textarea.value,
    'image': toFatherImage,
    'user_id': userStore.userId,
  };
  publishBrokenRecordApi(data).then(async(res) => {
    if(res.status === 200){
      drawer.value = false;
      textarea.value = '';
      fileList.value = [];
      ElNotification({
        title: 'Success',
        message: '投诉成功，等待平台审核',
        type: 'success',
      })
    } else {
      ElNotification({
        title: 'Error',
        message: '可能网络服务差，刷新后再试一下',
        type: 'error',
      })
    }
  })
}
//发布评论开始
const publishComment = () => {
  console.log(props.companyInfoId);
  console.log(props.commentId);
  console.log(submitFileList.value);
  console.log(props.replyToUserId);
  const toFatherImage = [];
  for(const item of submitFileList.value){
    console.log(Object.values(item)[0]);
    toFatherImage.push(Object.values(item)[0]);
  }
  if(props.commentType === 'comment'){
    let data = {
      'company_info_id': props.companyInfoId,//某个公司下的评论
      'comment': textarea.value,
      'image': toFatherImage,
      'user_id': userStore.userId,
    };
    publishCommentApi(data).then(async(res) => {
      if(res.status === 200){
        drawer.value = false;
        textarea.value = '';
        fileList.value = [];
        //把评论内容传给父组件进行展示
        emit('toFatherCommentList',{
          commentIndex: 0,
          commentReplyIndex: 0,
          commentId: res.data.id,
          commentReplyId: 0,
          reply_count: 0,
          comment_type: props.commentType,
          commentReply: {
            click_index: userStore.clickIndex,
            id: res.data.id,
            user_id: userStore.userId,
            name: userStore.phone,
            comment: data.comment,
            created_time: res.data.created_time,
            reply_to_user_id: 0,
            reply_to_name: '',
            image: toFatherImage,
          }
        })
      }
    })
  } else {
    let data = {
      'company_info_id': props.companyInfoId,//某个公司下的评论
      'company_comment_id': props.commentId,
      'company_comment_reply_id': props.commentReplyId,
      'comment': textarea.value,
      'image': toFatherImage,
      'user_id': userStore.userId,
    };
    publishCommentReplyApi(data).then(async(res) => {
      if(res.status === 200){
        drawer.value = false;
        textarea.value = '';
        fileList.value = [];
        //把评论内容传给父组件进行展示
        emit('toFatherCommentList',{
          commentIndex: props.commentIndex,
          commentReplyIndex: props.commentReplyIndex,
          commentId: props.commentId,
          commentReplyId: props.commentReplyId,
          reply_count: props.replyCount,
          comment_type: props.commentType,
          commentReply: {
            click_index: userStore.clickIndex,
            id: res.data.id,
            user_id: userStore.userId,
            name: userStore.phone,
            comment: data.comment,
            created_time: res.data.created_time,
            reply_to_user_id: props.replyToUserId,
            reply_to_name: props.replyToName,
            image: toFatherImage,
          }
        })
      }
    })
  }
}
//发布评论结束
//添加评论结束
//发布问答开始
const publishQuestion = () => {
  console.log(props.companyInfoId);
  console.log(submitFileList.value);
  const toFatherImage = [];
  for(const item of submitFileList.value){
    console.log(Object.values(item)[0]);
    toFatherImage.push(Object.values(item)[0]);
  }
  if(props.questionType === 'question'){
    let data = {
      'company_info_id': props.companyInfoId,//某个公司下的问答
      'question': textarea.value,
      'image': toFatherImage,
      'user_id': userStore.userId,
    };
    //提出一个问题
    publishQuestionApi(data).then(async(res) => {
      console.log(res);
      if(res.status === 200){
        console.log('public success');
        drawer.value = false;
        textarea.value = '';
        fileList.value = [];
        //把问答内容传给父组件进行展示
        emit('toFatherQuestionList',{
          questionIndex: props.questionIndex,
          questionType: props.questionType,
          question: {
            id: res.data.id,
            user_id: userStore.userId,
            name: userStore.phone,
            question: data.question,
            click_index: userStore.clickIndex,
            created_time: res.data.created_time,
            image: toFatherImage,
          }
        })
      }
    })
  } else {//回答问题
    let data = {
      'company_info_id': props.companyInfoId,//某个公司下的问答
      'answer_question_id': props.questionId,
      'answer': textarea.value,
      'image': toFatherImage,
      'user_id': userStore.userId,
    };
    //提出一个问题
    publishAnswerApi(data).then(async(res) => {
      console.log(res);
      if(res.status === 200){
        console.log('public success');
        drawer.value = false;
        textarea.value = '';
        fileList.value = [];
        //把问答内容传给父组件进行展示
        emit('toFatherQuestionList',{
          questionIndex: props.questionIndex,
          questionType: props.questionType,
          question: {
            id: res.data.id,
            user_id: userStore.userId,
            click_index: userStore.clickIndex,
            name: userStore.phone,
            question: data.question,
            created_time: res.data.created_time,
            image: toFatherImage,
          }
        })
      }
    })
  }
}
//发布问答结束
</script>
<style scoped>
.btn_item{
  padding: 10px 20px;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 15px;
}
.center_button{
  text-align: center;
}
.margin-20-top{
  margin-top: 20px;
}
.deep_parent:deep(.el-drawer){
   max-width: 500px;
   margin: 0 auto;
  border-radius: 32px;
 }
.deep_parent:deep(.el-overlay){
  background-color: transparent;
}
.deep_parent:deep(.el-drawer__body){
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.15);
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
}
.deep_parent:deep(.el-textarea__inner) {
  box-shadow: 0 0 0 0;
}
.deep_parent:deep(.el-textarea__inner:hover) {
  box-shadow: 0 0 0 0;
}
.deep_parent:deep(.el-textarea__inner:focus) {
  box-shadow: 0 0 0 0;
}
</style>
