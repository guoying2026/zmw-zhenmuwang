<template>
  <div class="comment_list" v-for="(item, index) in list" :key="index" v-if="list.length > 0">
    <div class="comment_list_item">
      <div class="comment_list_item_space">
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
            <el-row :gutter="8" class="margin-15-top">
              <el-col
                  v-for="(itemImage,indexImage) in item.image"
                  :key="indexImage"
                  :span="8"
                  :md="8"
              >
                <el-image
                    :hide-on-click-modal=true
                    :src="itemImage"
                    style="width:100%;height: 18vw;"
                    fit="fill"
                    :zoom-rate="1.2"
                    :preview-src-list="item.image"
                    :initial-index="indexImage"
                    lazy/>
              </el-col>
            </el-row>
          </div>
          <!--              主评论作者和内容结束-->
          <!--                    时间，点赞，回复开始-->
          <div class="comment_list_1_right_2 margin-15-top">
            <text>{{item.created_time}}</text>
            <div class="comment_list_1_right_2_right margin-15-top">
              <div class="comment_list_1_right_2_right" @click="liked_comment(index,item.id,item.is_liked,item.liked_id,item.like_count)">
                <ClickLike text='' v-if="item.is_liked === true" :like-bool=true></ClickLike>
                <ClickLike text="" v-else :like-bool=false></ClickLike>
                <text class="margin-10-left">{{item.like_count}}</text>
              </div>
              <!--        添加评论组件开始-->
              <div class="comment_list_1_right_2_right">
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
                    :reply-count="item.reply_count"
                    add-type="comment"
                    comment-type="reply"
                >
                  <template #clickDrawer>
                    <!-- AddComment 插槽的内容放这里开始-->
                    <el-icon class="margin-20-left icon-size"><ChatRound /></el-icon>
                  </template>
                </AddComment>
                <text class="margin-10-left">{{item.reply_count}}</text>
              </div>
              <!--        添加评论组件结束-->
            </div>
          </div>
          <!--                    时间，点赞，回复结束-->
        </div>
      </div>
    </div>
    <!--        该评论的回复列表开始-->
    <div class="reply_list margin-20-top" v-for="(itemReply, indexReply) in item['comment_reply']" :key="indexReply">
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
            <el-row :gutter="8" class="margin-15-top">
              <el-col
                  v-for="(itemReplyImage, indexReplyImage) in itemReply.image"
                  :key="indexReplyImage"
                  :span="8"
                  :md="8"
              >
                <el-image
                    :hide-on-click-modal=true
                    :src="itemReplyImage"
                    style="width:100%;height: 18vw;"
                    fit="fill"
                    :zoom-rate="1.2"
                    :preview-src-list="itemReply.image"
                    :initial-index="indexReplyImage"
                    lazy />
              </el-col>
            </el-row>
          </div>
          <!--              主评论作者和内容结束-->
          <!--                    时间，点赞，回复开始-->
          <div class="comment_list_1_right_2 margin-15-top">
            <text>{{itemReply.created_time}}</text>
            <div class="comment_list_1_right_2_right margin-15-top">
              <div class="comment_list_1_right_2_right" @click="liked_comment_reply(index,indexReply,item.id,itemReply.id,itemReply.is_liked,itemReply.liked_id,itemReply.like_count)">
                <ClickLike text='' v-if="itemReply.is_liked === true" :like-bool=true></ClickLike>
                <ClickLike text="" v-else :like-bool=false></ClickLike>
                <text class="margin-10-left">{{itemReply.like_count}}</text>
              </div>
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
                  :reply-count="item.reply_count"
                  add-type="comment"
                  comment-type="reply"
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
  <AddComment
      :placeholder-text="placeholderText"
      :cancel-text="cancelText"
      :confirm-text="confirmText"
      :comment-id="0"
      :comment-reply-id="0"
      :reply-to-user-id="0"
      :company-info-id="companyInfoId"
      @toFatherCommentList="receiveChildAddComment"
      :comment-index="0"
      :comment-reply-index="0"
      reply-to-name=""
      :reply-count="0"
      add-type="comment"
      comment-type="comment"
      v-else
  >
    <template #clickDrawer>
      <!-- AddComment 插槽的内容放这里开始-->
      <el-icon class="margin-20-left icon-size"><ChatRound /></el-icon>
    </template>
  </AddComment>
</template>
<script>
export default{
  name: 'CommentList'
}
</script>
<script setup>
import { ref,reactive,onMounted } from 'vue'
import { likedCommentApi, dislikedCommentApi, likedCommentReplyApi, dislikedCommentReplyApi } from "../api/comment.js";
//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();

//父组件给该组件CommentList传递的值，就定义在defineProps,开始
const props = defineProps({
  companyInfoId:{
    type: Number,
    default: 0
  },
  list:{
    type: Array,
    default:[]
  }
})
//父组件给该组件CommentList传递的值，就定义在defineProps,结束
//发布评论之后将评论内容放到评论列表
const receiveChildAddComment = (param) => {
  console.log(param);
  const reply = param.commentReply;
  console.log('commentReplyId');
  console.log(param.commentReplyId);
  props.list[param.commentIndex].reply_count = param.reply_count * 1 + 1;
  if(param.commentId === 0){//主评论
    props.list.unshift({
      id: reply.id,
      user_id: userStore.userId,
      name: reply.name,
      comment: reply.comment,
      created_time: reply.created_time,
      is_show: 1,
      like_count: 0,
      reply_count: 0,
      liked_id: 0,
      is_liked: 0,
      image: reply.image,
      comment_reply: [],
    });
  } else if(param.commentId > 0 && param.commentReplyId === 0){//回复主评论
    props.list[param.commentIndex].comment_reply.unshift({
      id: reply.id,
      user_id: reply.user_id,
      name: reply.name,
      comment: reply.comment,
      created_time: reply.created_time,
      like_count: 0,
      reply_to_user_id: reply.reply_to_user_id,
      reply_to_name: reply.reply_to_name,
      liked_id: 0,
      is_liked: false,
      image: reply.image,
    })
  } else if(param.commentId > 0 && param.commentReplyId > 0){//回复-》回复
    props.list[param.commentIndex].comment_reply.splice(param.commentReplyIndex+1,0,{
      id: reply.id,
      user_id: reply.user_id,
      name: reply.name,
      comment: reply.comment,
      created_time: reply.created_time,
      like_count: 0,
      reply_to_user_id: reply.reply_to_user_id,
      reply_to_name: reply.reply_to_name,
      liked_id: 0,
      is_liked: false,
      image: reply.image,
    })
  }
}
//引入点击评论组件
import AddComment from "../components/AddComment.vue";
import ClickLike from "./ClickLike.vue";
//给添加评论组件传值开始
const placeholderText = ref('请输入评论');
const cancelText = ref('取消评论');
const confirmText = ref('发布评论');
//给添加评论组件传值结束
//给评论点赞开始
const liked_comment = (index,comment_id,is_liked,liked_id,like_count) => {
  console.log(userStore.userId);
  if(is_liked === false){
    props.list[index].is_liked = true;
    props.list[index].like_count = like_count * 1 + 1;
    // likedCommentApi({'company_info_id':prop.companyInfoId,'company_comment_id':comment_id,'liked_id':liked_id,'user_id':userStore.userId}).then(async(res) => {
    //   console.log(res);
    //   //连接后端api再取消注释
    //   let result = res.data;
    //   if(result.is_liked === false){
    //     props.list[index].is_liked = false;
    //   }
    // })
  } else if(is_liked === true){
    props.list[index].is_liked = false;
    if(like_count * 1 > 1){
      props.list[index].like_count = like_count * 1 - 1;
    } else {
      props.list[index].like_count = 0;
    }
    // dislikedCommentApi({'comment_id':comment_id,'liked_id':liked_id,'user_id':userStore.userId}).then(async(res) => {
    //   console.log(res);
    //   //连接后端api再取消注释
    //   let result = res.data;
    //   if(result.is_liked === true){
    //     props.list[index].is_liked = true;
    //   }
    // })
  }
}
//给回复点赞开始
const liked_comment_reply = (index,indexReply,comment_id,comment_reply_id,is_liked,liked_id,like_count) => {
  if(is_liked === false){
    props.list[index].comment_reply[indexReply].is_liked = true;
    props.list[index].comment_reply[indexReply].like_count = like_count *1 + 1;
    // likedCommentReplyApi({'comment_id':comment_id,'comment_reply_id':comment_reply_id,'is_liked':is_liked,'liked_id':liked_id,'user_id':userStore.userId}).then(async(res) => {
    //   console.log(res);
    //   //连接后端api再取消注释
    //   let result = res.data;
    //   if(result.is_liked === false){
    //     props.list[index].comment_reply[indexReply].is_liked = false;
    //   }
    // })
  } else if(is_liked === true){
    props.list[index].comment_reply[indexReply].is_liked = false;
    if(like_count * 1 > 1){
      props.list[index].comment_reply[indexReply].like_count = like_count * 1 - 1;
    } else {
      props.list[index].comment_reply[indexReply].like_count = 0;
    }
    // dislikedCommentReplyApi({'comment_id':comment_id,'comment_reply_id':comment_reply_id,'liked_id':liked_id,'user_id':userStore.userId}).then(async(res) => {
    //   console.log(res);
    //   //连接后端api再取消注释
    //   let result = res.data;
    //   if(result.is_liked === true){
    //     props.list[index].comment_reply[indexReply].is_liked = true;
    //   }
    // })
  }
}
//点赞结束
//评论结束
</script>
<style scoped>
.icon-size{
  font-size: 24px;
}
.comment_list_item{
  display: flex;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 2.8px 2.2px rgba(0,0,0,.034), 0 6.7px 5.3px rgba(0,0,0,.048), 0 12.5px 10px rgba(0,0,0,.06), 0 22.3px 17.9px rgba(0,0,0,.072), 0 41.8px 33.4px rgba(0,0,0,.086), 0 100px 80px rgba(0,0,0,.12);
  border-radius: 10px;
}
.comment_list_item .comment_list_item_space{
  padding: 0 20px 20px 0px;
  display: flex;
  flex-direction: row;
}
.reply_list{
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
}
.comment_list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:20px;
}
 .comment_list_1{
  display: flex;
  flex-direction: row;
}
.comment_list_1_left{
  width: 48px;
  height: 48px;
}
.comment_list_1_right{
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.comment_list_1_right .comment_list_1_right_1{
  display: flex;
  flex-direction: column;
}
.comment_list_1_right .comment_list_1_right_2{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.comment_list_1_right_2_right{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>
