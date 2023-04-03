<template>
  <div class="app-container" :class="`margin-${margin}-top`">
  <div class="projects-section">
    <div class="projects-section-header">
      <p>评论区</p>
<!--      <p class="time">December, 12</p>-->
    </div>
    <div class="projects-section-line">
      <div class="projects-status">
        <div class="item-status">
          <span class="status-number">{{company_comment_count}}</span>
          <span class="status-type">评论总数</span>
        </div>
        <div class="item-status">
          <span class="status-number">{{company_comment_reply_count}}</span>
          <span class="status-type">回复总数</span>
        </div>
        <div class="item-status">
          <span class="status-number">{{all_like_count}}</span>
          <span class="status-type">点赞总数</span>
        </div>
      </div>
      <div class="view-actions">
        <AddComment
            :placeholder-text="placeholderText"
            :cancel-text="cancelText"
            :confirm-text="confirmText"
            :comment-id=0
            :comment-reply-id=0
            :reply-to-user-id=0
            :company-info-id="companyInfoId"
            @toFatherCommentList="receiveChildAddComment"
            :comment-index=0
            :comment-reply-index=0
            reply-to-name=""
            :reply-count=0
            add-type="comment"
            comment-type="comment"
            v-if="userStore.userId > 0"
        >
          <template #clickDrawer>
            <!-- AddComment 插槽的内容放这里开始-->
            <div class="icon_div">
              <span>我有话说</span>
              <el-icon class="margin-10-left font-48-size"><ChatRound /></el-icon>
            </div>
          </template>
        </AddComment>
        <router-link to="/login" v-else>
          <div class="icon_div">
            <span>我有话说</span>
            <el-icon class="margin-10-left font-48-size"><ChatRound /></el-icon>
          </div>
        </router-link>
      </div>
    </div>
    <div class="project-boxes jsGridView">
      <div class="project-box-wrapper">
        <div class="project-box">
          <div class="project-box-header">
            <span>对自己</span>
            <div class="more-wrapper">
              <button class="project-btn-more">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" /></svg>
              </button>
            </div>
          </div>
          <div class="project-box-content-header">
            <p class="box-content-header">木材质量价格等信息</p>
            <p class="box-content-subheader">拿到最符合心意的货</p>
          </div>
          <div class="box-progress-wrapper">
            <p class="box-progress-header"></p>
            <div class="box-progress-bar">
              <span class="box-progress" style="width: 100%; background-color: #096c86"></span>
            </div>
            <p class="box-progress-percentage"></p>
          </div>
          <div class="project-box-footer">
            <div class="participants">
              <img src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant">
              <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80" alt="participant">
            </div>
            <AddComment
                :placeholder-text="placeholderText"
                :cancel-text="cancelText"
                :confirm-text="confirmText"
                :comment-id=0
                :comment-reply-id=0
                :reply-to-user-id=0
                :company-info-id="companyInfoId"
                @toFatherCommentList="receiveChildAddComment"
                :comment-index=0
                :comment-reply-index=0
                reply-to-name=""
                :reply-count=0
                add-type="comment"
                comment-type="comment"
                v-if="userStore.userId > 0"
            >
              <template #clickDrawer>
              <div class="days-left" style="color: #096c86;">
                去说点儿什么
              </div>
              </template>
            </AddComment>
            <router-link to="/login" v-else>
              <div class="days-left" style="color: #096c86;">
                去说点儿什么
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="project-box-wrapper">
        <div class="project-box" style="background-color: #ffd3e2;">
          <div class="project-box-header">
            <span>对他人</span>
            <div class="more-wrapper">
              <button class="project-btn-more">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" /></svg>
              </button>
            </div>
          </div>
          <div class="project-box-content-header">
            <p class="box-content-header">了解到你的真实经验</p>
            <p class="box-content-subheader">远离不可靠的商家</p>
          </div>
          <div class="box-progress-wrapper">
            <p class="box-progress-header"></p>
            <div class="box-progress-bar">
              <span class="box-progress" style="width: 100%; background-color: #df3670"></span>
            </div>
            <p class="box-progress-percentage"></p>
          </div>
          <div class="project-box-footer">
            <div class="participants">
              <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant">
              <img src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant">
            </div>
            <AddComment
                :placeholder-text="placeholderText"
                :cancel-text="cancelText"
                :confirm-text="confirmText"
                :comment-id=0
                :comment-reply-id=0
                :reply-to-user-id=0
                :company-info-id="companyInfoId"
                @toFatherCommentList="receiveChildAddComment"
                :comment-index=0
                :comment-reply-index=0
                reply-to-name=""
                :reply-count=0
                add-type="comment"
                comment-type="comment"
                v-if="userStore.userId > 0"
            >
              <template #clickDrawer>
                <div class="days-left" style="color: #096c86;">
                  去说点儿什么
                </div>
              </template>
            </AddComment>
            <router-link to="/login" v-else>
              <div class="days-left" style="color: #096c86;">
                去说点儿什么
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="project-box-wrapper">
        <div class="project-box" style="background-color: #d5deff;">
          <div class="project-box-header">
            <span>对商家</span>
            <div class="more-wrapper">
              <button class="project-btn-more">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" /></svg>
              </button>
            </div>
          </div>
          <div class="project-box-content-header">
            <p class="box-content-header">获取到你的真实反馈</p>
            <p class="box-content-subheader">给你最满意的产品</p>
          </div>
          <div class="box-progress-wrapper">
            <p class="box-progress-header"></p>
            <div class="box-progress-bar">
              <span class="box-progress" style="width: 100%; background-color: #4067f9"></span>
            </div>
            <p class="box-progress-percentage"></p>
          </div>
          <div class="project-box-footer">
            <div class="participants">
              <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant">
              <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80" alt="participant">
            </div>
            <AddComment
                :placeholder-text="placeholderText"
                :cancel-text="cancelText"
                :confirm-text="confirmText"
                :comment-id=0
                :comment-reply-id=0
                :reply-to-user-id=0
                :company-info-id="companyInfoId"
                @toFatherCommentList="receiveChildAddComment"
                :comment-index=0
                :comment-reply-index=0
                reply-to-name=""
                :reply-count=0
                add-type="comment"
                comment-type="comment"
                v-if="userStore.userId > 0"
            >
              <template #clickDrawer>
                <div class="days-left" style="color: #096c86;">
                  去说点儿什么
                </div>
              </template>
            </AddComment>
            <router-link to="/login" v-else>
              <div class="days-left" style="color: #096c86;">
                去说点儿什么
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="comment_list" v-for="(item, index) in list.arr" :key="index">
    <div class="comment_list_item">
      <div class="comment_list_item_space">
        <!--            头像开始-->
        <el-avatar
            class="comment_list_1_left"
            :size="48"
            :src="image_arr[item.click_index]"
        />
        <!--            头像结束-->
        <div class="comment_list_1_right">
          <!--              主评论作者和内容开始-->
          <div class="comment_list_1_right_1">
            <text class="font-20-size">{{name_arr[item.click_index]}}</text>
            <text class="font-15-size grey_color">{{item.comment}}</text>
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
                    class="image_list"
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
            <text class="font-12-size">{{item.created_time}}</text>
            <div class="comment_list_1_right_2_right margin-15-top">
              <div class="comment_list_1_right_2_right" @click="liked_comment(index,item.id,item.is_liked,item.liked_id,item.like_count)">
                <ClickLike text='' v-if="item.is_liked > 0" :like-bool=true></ClickLike>
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
            :src="image_arr[itemReply.click_index]"
        />
        <!--            头像结束-->
        <div class="comment_list_1_right">
          <!--              主评论作者和内容开始-->
          <div class="comment_list_1_right_1">
            <text v-if="itemReply.company_comment_reply_id > 0" class="font-20-size">{{name_arr[itemReply.click_index]}} @ {{name_arr[itemReply.reply_click_index]}}</text>
            <text v-else class="font-20-size">{{name_arr[itemReply.click_index]}}</text>
            <text class="font-15-size grey_color">{{itemReply.comment}}</text>
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
                    class="image_list"
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
            <text class="font-12-size">{{itemReply.created_time}}</text>
            <div class="comment_list_1_right_2_right margin-15-top">
              <div class="comment_list_1_right_2_right" @click="liked_comment_reply(index,indexReply,item.id,itemReply.id,itemReply.is_liked,itemReply.liked_id,itemReply.like_count)">
                <ClickLike text='' v-if="itemReply.is_liked > 0" :like-bool=true></ClickLike>
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
</template>
<script>
export default{
  name: 'CommentList'
}
</script>
<script setup>
import { ref,reactive,onMounted } from 'vue'
import {
  likedCommentApi,
  dislikedCommentApi,
  likedCommentReplyApi,
  dislikedCommentReplyApi,
  commentListApi
} from "../api/comment.js";
import "../assets/comment.scss"
import "../assets/fonts.css"
import {image_arr, name_arr} from "../utils/user.js";
//引入用户信息开始
import { useUserStore } from "../pinia/user.js";
const userStore = useUserStore();

console.log(image_arr[0]);
console.log(name_arr[0]);
//父组件给该组件CommentList传递的值，就定义在defineProps,开始
const props = defineProps({
  companyInfoId:{
    type: [Number,String],
    default: 0
  },
  margin:{
    type: [Number,String],
    default: 0
  },
})
//list
const list = reactive({
  arr: []
});

//评论
const company_comment_count = ref(0)
const company_comment_reply_count = ref(0)
const all_like_count = ref(0)

onMounted(() => {
  commentListApi({company_info_id: props.companyInfoId,user_id: userStore.userId}).then(async(res) => {
    console.log('comment');
    console.log(res);
    list.arr = res.data.data;
    company_comment_count.value = res.data.company_comment_count;
    company_comment_reply_count.value = res.data.company_comment_reply_count;
    all_like_count.value = res.data.all_like_count;
  })
})
//父组件给该组件CommentList传递的值，就定义在defineProps,结束
//发布评论之后将评论内容放到评论列表
const receiveChildAddComment = (param) => {
  console.log(param);
  const reply = param.commentReply;
  console.log('commentReplyId');
  console.log(param.commentReplyId);
  if(param.comment_type === 'comment'){//主评论
    company_comment_count.value = company_comment_count.value * 1 + 1;
     list.arr.unshift({
      id: reply.id,
      user_id: userStore.userId,
       click_index: reply.click_index,
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
  } else if(param.comment_type === 'reply' && param.commentReplyId === 0){//回复主评论
    console.log('走到unshift');
    company_comment_reply_count.value = company_comment_reply_count.value * 1 + 1;
     list.arr[param.commentIndex].reply_count = param.reply_count * 1 + 1;
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
       click_index: reply.click_index,
      image: reply.image,
    })
  } else if(param.comment_type === 'reply' && param.commentReplyId > 0){//回复-》回复
    console.log('走到splice');
    company_comment_reply_count.value = company_comment_reply_count.value * 1 + 1;
    list.arr[param.commentIndex].reply_count = param.reply_count * 1 + 1;
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
       click_index: reply.click_index,
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
  console.log(index);
  console.log(comment_id);
  console.log(is_liked);
  console.log(liked_id);
  console.log(like_count);
  if(is_liked === 1){
    dislikedCommentApi({'comment_id':comment_id,'company_info_id': props.companyInfoId,'user_id':userStore.userId}).then(async(res) => {
      console.log(res);
      //连接后端api再取消注释
      if(res.status === 200){
        all_like_count.value = all_like_count.value * 1 - 1;
         list.arr[index].is_liked = 0;
        if(like_count * 1 > 1){
           list.arr[index].like_count = like_count * 1 - 1;
        } else {
           list.arr[index].like_count = 0;
        }
      }
    })
  } else {
    likedCommentApi({'company_info_id':props.companyInfoId,'company_comment_id':comment_id,'user_id':userStore.userId}).then(async(res) => {
      console.log(res);
      if(res.status === 200){
        all_like_count.value = all_like_count.value * 1 + 1;
        list.arr[index].is_liked = 1;
         list.arr[index].like_count = like_count * 1 + 1;
      }
    })
  }
}
//给回复点赞开始
const liked_comment_reply = (index,indexReply,comment_id,comment_reply_id,is_liked,liked_id,like_count) => {
  console.log(index);
  console.log(indexReply);
  console.log(comment_id);
  console.log(comment_reply_id);
  console.log(is_liked);
  console.log(liked_id);
  console.log(like_count);
  if(is_liked === 1){
    dislikedCommentReplyApi({'company_info_id':props.companyInfoId,'company_comment_id':comment_id,'company_comment_reply_id':comment_reply_id,'user_id':userStore.userId}).then(async(res) => {
      console.log(res);
      if(res.status === 200){
        all_like_count.value = all_like_count.value * 1 - 1;
        list.arr[index].comment_reply[indexReply].is_liked = 0;
        if(like_count * 1 > 1){
           list.arr[index].comment_reply[indexReply].like_count = like_count * 1 - 1;
        } else {
           list.arr[index].comment_reply[indexReply].like_count = 0;
        }
      }
    })
  } else {
    likedCommentReplyApi({'company_info_id':props.companyInfoId,'company_comment_id':comment_id,'company_comment_reply_id':comment_reply_id,'user_id':userStore.userId}).then(async(res) => {
      console.log(res);
      //连接后端api再取消注释
      if(res.status === 200){
        all_like_count.value = all_like_count.value * 1 + 1;
        list.arr[index].comment_reply[indexReply].is_liked = 1;
         list.arr[index].comment_reply[indexReply].like_count = like_count *1 + 1;
      }
    })
  }
}
//点赞结束
//评论结束
</script>
<style scoped>
@media screen and (max-width: 520px){
  .image_list{
    width:100%;
    height: 50px;
  }
}
@media screen and (max-width: 1200px){
  .image_list{
    width: 100%;
    height: auto;
  }
}
.grey_color{
  color: #4A4A4A;
}
.icon_div{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  color: #000;
}
.icon-size{
  font-size: 24px;
}
.comment_list_item{
  display: flex;
  max-width: 800px;
  width: 100%;
  /*box-shadow: 0 2.8px 2.2px rgba(0,0,0,.034), 0 6.7px 5.3px rgba(0,0,0,.048), 0 12.5px 10px rgba(0,0,0,.06), 0 22.3px 17.9px rgba(0,0,0,.072), 0 41.8px 33.4px rgba(0,0,0,.086), 0 100px 80px rgba(0,0,0,.12);*/
  /*border-radius: 10px;*/
  background: #fff;
}
.comment_list_item .comment_list_item_space{
  /*padding: 0 20px 20px 0px;*/
  padding: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
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
  margin-left: 20px;
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
