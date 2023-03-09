<template>
  <div class="comment_list"  v-for="(item, index) in list.arr" :key="index">
    <div class="comment_list_1">
      <!--            头像开始-->
      <el-avatar
          class="comment_list_1_left"
          :size="48"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <!--            头像结束-->
      <div class="comment_list_1_right">
        <!--              主评论作者和内容开始-->
        <div class="comment_list_1_right_1">
          <text>{{item.name}}</text>
          <text>{{item.comment}}</text>
          <el-row :gutter="20" class="margin-15-top">
            <el-col
                v-for="(itemImage,indexImage) in item.image"
                :key="indexImage"
                :span="24"
                :md="8"
            >
              <el-image
                  :src="itemImage"
                  style="width:100%; height: 310px"
                  :zoom-rate="1.2"
                  :preview-src-list="item.image"
                  :initial-index="indexImage"
                  fit="cover"
                  lazy/>
            </el-col>
          </el-row>
        </div>
        <!--              主评论作者和内容结束-->
        <!--                    时间，点赞，回复开始-->
        <div class="comment_list_1_right_2 margin-15-top">
          <text>{{item.created_time}}</text>
          <div class="comment_list_1_right_2_right margin-15-top">
            <el-icon class="icon-size" :class="[item.is_liked === true ? 'icon-red':'icon-black']" @click="liked_comment(index,item.id,item.is_liked,item.liked_id)"><Pointer /></el-icon>
            <!--        添加评论组件开始-->
            <AddComment
                :placeholder-text="placeholderText"
                :cancel-text="cancelText"
                :confirm-text="confirmText"
                :comment-id="item.id"
                :comment-reply-id="0"
                :reply-to-user-id="item.user_id"
                :company-info-id="companyInfoId"
                @toFatherCommentList="receiveChildAddComment"
                :comment-index="index"
                :comment-reply-index="0"
                :reply-to-name="item.name"
            >
              <template #clickDrawer>
                <!-- AddComment 插槽的内容放这里开始-->
                <el-icon class="margin-20-left icon-size"><ChatRound /></el-icon>
              </template>
            </AddComment>
            <!--        添加评论组件结束-->
          </div>
        </div>
        <!--                    时间，点赞，回复结束-->
        <!--        该评论的回复列表开始-->
        <div class="comment_list" v-for="(itemReply, indexReply) in item['comment_reply']" :key="indexReply">
          <div class="comment_list_1">
            <!--            头像开始-->
            <el-avatar
                class="comment_list_1_left"
                :size="48"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <!--            头像结束-->
            <div class="comment_list_1_right">
              <!--              主评论作者和内容开始-->
              <div class="comment_list_1_right_1">
                <text>{{itemReply.name}} @ {{itemReply.reply_to_name}}</text>
                <text>{{itemReply.comment}}</text>
                <el-row :gutter="24" class="margin-15-top">
                  <el-col
                      v-for="(itemReplyImage, indexReplyImage) in itemReply.image"
                      :key="indexReplyImage"
                      :span="24"
                      :md="8"
                  >
                    <el-image
                        :src="itemReplyImage"
                        style="width:100%; height: 250px"
                        :zoom-rate="1.2"
                        :preview-src-list="itemReply.image"
                        :initial-index="indexReplyImage"
                        fit="cover"
                        lazy />
                  </el-col>
                </el-row>
              </div>
              <!--              主评论作者和内容结束-->
              <!--                    时间，点赞，回复开始-->
              <div class="comment_list_1_right_2 margin-15-top">
                <text>2023-03-01 12:34:23</text>
                <div class="comment_list_1_right_2_right margin-15-top">
                  <el-icon class="icon-size" :class="[itemReply.is_liked === true ? 'icon-red':'icon-black']" @click="liked_comment_reply(index,indexReply,item.id,itemReply.id,itemReply.is_liked,itemReply.liked_id)"><Pointer /></el-icon>
                  <!--        添加评论组件开始-->
                  <AddComment
                      :placeholder-text="placeholderText"
                      :cancel-text="cancelText"
                      :confirm-text="confirmText"
                      :comment-id="item.id"
                      :comment-reply-id="itemReply.id"
                      :reply-to-user-id="itemReply.user_id"
                      :company-info-id="companyInfoId"
                      @toFatherCommentList="receiveChildAddComment"
                      :comment-index="index"
                      :comment-reply-index="indexReply"
                      :reply-to-name="itemReply.name"
                  >
                    <template #clickDrawer>
                      <!-- AddComment 插槽的内容放这里开始-->
                      <el-icon class="margin-20-left icon-size"><ChatRound /></el-icon>
                    </template>
                  </AddComment>
                  <!--        添加评论组件结束-->
                </div>
              </div>
              <!--                    时间，点赞，回复结束-->
            </div>
          </div>
        </div>
        <!--        该评论的回复列表结束-->
      </div>
    </div>

  </div>
</template>
<script>
export default{
  name: 'CommentList'
}
</script>
<script setup>
import { ref,reactive } from 'vue'
import { onMounted } from 'vue'
import { commentListApi, likedCommentApi, dislikedCommentApi, likedCommentReplyApi, dislikedCommentReplyApi } from "../api/comment.js";
//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();

//父组件给该组件CommentList传递的值，就定义在defineProps,开始
const props = defineProps({
  companyInfoId:{
    type: Number,
    default: 0
  },
})
//父组件给该组件CommentList传递的值，就定义在defineProps,结束
//评论开始
// 数据列表
const list = reactive({
  arr:[]
});
//发布评论之后将评论内容放到评论列表
const receiveChildAddComment = (param) => {
  console.log(param);
  const reply = param.commentReply;
  console.log('commentReplyId');
  console.log(param.commentReplyId);
  if(param.commentReplyId === 0){
    list.arr[param.commentIndex].comment_reply.unshift({
      id: reply.id,
      user_id: reply.user_id,
      name: reply.name,
      comment: reply.comment,
      created_time: reply.created_time,
      like_count: 0,
      reply_to_user_id: reply.reply_to_user_id,
      reply_to_name: reply.reply_to_name,
      liked_id: 0,
      is_liked: 0,
      image: reply.image,
    })
  } else {
    list.arr[param.commentIndex].comment_reply.splice(param.commentReplyIndex+1,0,{
      id: reply.id,
      user_id: reply.user_id,
      name: reply.name,
      comment: reply.comment,
      created_time: reply.created_time,
      like_count: 0,
      reply_to_user_id: reply.reply_to_user_id,
      reply_to_name: reply.reply_to_name,
      liked_id: 0,
      is_liked: 0,
      image: reply.image,
    })
  }
}
//引入评论api
onMounted(() => {
  commentListApi({}).then(async(res) => {
    console.log(res);
    console.log(res.data.data);
    list.arr = res.data.data;
  })
})
//引入点击评论组件
import AddComment from "../components/AddComment.vue";
//给添加评论组件传值开始
const placeholderText = ref('请输入评论');
const cancelText = ref('取消评论');
const confirmText = ref('发布评论');
//给添加评论组件传值结束
//给评论点赞开始
const liked_comment = (index,comment_id,is_liked,liked_id) => {
  console.log(userStore.userId);
  if(is_liked === false){
    list.arr[index].is_liked = true;
    likedCommentApi({'comment_id':comment_id,'liked_id':liked_id,'user_id':userStore.userId}).then(async(res) => {
      console.log(res);
      //连接后端api再取消注释
      // let result = res.data;
      // if(result.is_liked === false){
      //   list.arr[index].is_liked = false;
      // }
    })
  } else if(is_liked === true){
    list.arr[index].is_liked = false;
    dislikedCommentApi({'comment_id':comment_id,'liked_id':liked_id,'user_id':userStore.userId}).then(async(res) => {
      console.log(res);
      //连接后端api再取消注释
      // let result = res.data;
      // if(result.is_liked === true){
      //   list.arr[index].is_liked = true;
      // }
    })
  }
}
//给回复点赞开始
const liked_comment_reply = (index,indexReply,comment_id,comment_reply_id,is_liked,liked_id) => {
  if(is_liked === false){
    list.arr[index].comment_reply[indexReply].is_liked = true;
    likedCommentReplyApi({'comment_id':comment_id,'comment_reply_id':comment_reply_id,'is_liked':is_liked,'liked_id':liked_id,'user_id':userStore.userId}).then(async(res) => {
      console.log(res);
      //连接后端api再取消注释
      // let result = res.data;
      // if(result.is_liked === false){
      //   list.arr[index].comment_reply[indexReply].is_liked = false;
      // }
    })
  } else if(is_liked === true){
    list.arr[index].comment_reply[indexReply].is_liked = false;
    dislikedCommentReplyApi({'comment_id':comment_id,'comment_reply_id':comment_reply_id,'liked_id':liked_id,'user_id':userStore.userId}).then(async(res) => {
      console.log(res);
      //连接后端api再取消注释
      // let result = res.data;
      // if(result.is_liked === true){
      //   list.arr[index].comment_reply[indexReply].is_liked = true;
      // }
    })
  }
}
//点赞结束
//评论结束
</script>
<style scoped>
.icon-red{
  color: #800202;
}
.icon-black{
  color: black;
}
.icon-white{
  color: white;
}
.icon-size{
  font-size: 30px;
}
.margin-15-top{
  margin-top: 15px;
}
.margin-20-top{
  margin-top: 20px;
}
.margin-20-left{
  margin-left: 20px;
}
.comment_list{
  display: flex;
  flex-direction: column;
}
.comment_list .comment_list_1{
  display: flex;
  flex-direction: row;
}
.comment_list .comment_list_1 .comment_list_1_left{
  width: 48px;
  height: 48px;
}
.comment_list .comment_list_1 .comment_list_1_right{
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.comment_list .comment_list_1 .comment_list_1_right .comment_list_1_right_1{
  display: flex;
  flex-direction: column;
}
.comment_list .comment_list_1 .comment_list_1_right .comment_list_1_right_2{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.comment_list .comment_list_1 .comment_list_1_right .comment_list_1_right_2 .comment_list_1_right_2_right{
  display: flex;
}
</style>
