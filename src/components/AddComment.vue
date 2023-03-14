<template>
<!--  由父组件提供插槽内容开始-->
  <div @click="drawer = true">
    <slot name="clickDrawer"></slot>
  </div>
<!--  由父组件提供插槽内容结束-->

  <el-drawer v-model="drawer" direction="btt" size="50%" title="I am the title" :with-header="false">
    <!--          抽屉里的添加评论开始-->
    <el-input
        v-model="textarea"
        maxlength="200"
        :placeholder="placeholderText"
        show-word-limit
        type="textarea"
        :rows="5"
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
        <el-button type="" @click="drawer = false">
          {{cancelText}}
        </el-button>
      </el-col>
      <el-col :span="12" class="center_button margin-20-top">
        <el-button type="primary" @click="publishComment">
          {{confirmText}}
        </el-button>
      </el-col>
    </el-row>

    <!--          弹出层的评论结束-->
  </el-drawer>
</template>
<script>
export default{
  name: 'AddComment'
}
</script>
<script setup>
import { ref,reactive } from 'vue'
import { publishCommentApi,getAnswerOssSignatureApi,pushAnswerOssApi } from "../api/comment.js";
import { handeSrcHttpsUtil,guidUtil } from "../utils/httpReplace.js";
//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();
//添加评论开始
//用来给父组件传递值自定义的函数
const emit = defineEmits(['toFatherCommentList'])
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
  commentId:{
    type: Number,
    default: 0,
  },
  commentReplyId:{
    type: Number,
    default: 0,
  },
  replyToUserId:{
    type: [String, Number],
  },
  companyInfoId:{
    type: Number,
    default: 0,
  },
  commentIndex:{
    type: Number,
    default: 0,
  },
  commentReplyIndex:{
    type: Number,
    default: 0,
  },
  replyToName:{
    type: [String, Number],
  }
})
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
//发布评论开始
const publishComment = () => {
  console.log(props.companyInfoId);
  console.log(props.commentId);
  console.log(textarea);
  console.log(submitFileList.value);
  console.log(props.replyToUserId);
  publishCommentApi({
    'company_info_id': props.companyInfoId,//某个公司下的评论
    'comment_id':props.commentId,
    'comment_reply_id': props.commentReplyId,
    'comment': textarea,
    'image': submitFileList.value,
    'user_id': userStore.userId,
    'reply_to_user_id': props.replyToUserId,//如果是回复别人记得传回复人的id
  }).then(async(res) => {
    console.log(res);
    console.log(res.data.status);
    if(res.data.status === true){
      console.log('public success');
      drawer.value = false;
      textarea.value = '';
      fileList.value = [];
      const toFatherImage = [];
      for(const item of submitFileList.value){
        console.log(Object.values(item)[0]);
        toFatherImage.push(Object.values(item)[0]);
      }
      //把评论内容传给父组件进行展示
      emit('toFatherCommentList',{
        commentIndex: props.commentIndex,
        commentReplyIndex: props.commentReplyIndex,
        commentId: props.commentId,
        commentReplyId: props.commentReplyId,
        commentReply: {
          id: res.data.id,
          user_id: userStore.userId,
          name: userStore.phone,
          comment: textarea,
          created_time: res.data.created_time,
          reply_to_user_id: props.replyToUserId,
          reply_to_name: props.replyToName,
          image: toFatherImage,
        }
      })
    }
  })
}
//发布评论结束
//添加评论结束
</script>
<style scoped>
.center_button{
  text-align: center;
}
.margin-20-top{
  margin-top: 20px;
}
</style>
