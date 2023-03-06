<template>
  <div class="comment_list"  v-for="(item, index) in list" :key="index">
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
            <el-icon><Pointer /></el-icon>
            <!--        添加评论组件开始-->
            <AddComment
                :placeholder-text="placeholderText"
                :cancel-text="cancelText"
                :confirm-text="confirmText"
            >
              <template #clickDrawer>
                <!-- AddComment 插槽的内容放这里开始-->
                <el-icon class="margin-20-left"><ChatRound /></el-icon>
              </template>
            </AddComment>
            <!--        添加评论组件结束-->
          </div>
        </div>
        <!--                    时间，点赞，回复结束-->
        <!--        该评论的回复列表开始-->
        <div class="comment_list" v-for="(itemReply, indexReply) in item.comment_reply" :key="indexReply">
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
                        style="width:100%; height: 310px"
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
                  <el-icon><Pointer /></el-icon>
                  <!--        添加评论组件开始-->
                  <AddComment
                      :placeholder-text="placeholderText"
                      :cancel-text="cancelText"
                      :confirm-text="confirmText"
                  >
                    <template #clickDrawer>
                      <!-- AddComment 插槽的内容放这里开始-->
                      <el-icon class="margin-20-left"><ChatRound /></el-icon>
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
import { ref } from 'vue'
import { onMounted } from 'vue'
//评论开始
// 数据列表
const list = ref([])
//引入评论api
import { commentListApi } from "../api/comment.js";
onMounted(() => {
  commentListApi({}).then(async(res) => {
    console.log(res);
    console.log(res.data.data);
    list.value = res.data.data;
  })
})
//引入点击评论组件
import AddComment from "../components/AddComment.vue";
//给添加评论组件传值开始
const placeholderText = ref('请输入评论');
const cancelText = ref('取消评论');
const confirmText = ref('发布评论');
//给添加评论组件传值结束
//评论结束
</script>
<style scoped>
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
