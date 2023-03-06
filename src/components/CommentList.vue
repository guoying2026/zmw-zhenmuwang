<template>
  <div class="comment_list">
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
          <text>海贼王</text>
          <text>稳定性好，木质细腻，密度比较高，硬度比较高，气味芳香</text>
        </div>
        <!--              主评论作者和内容结束-->
        <!--                    时间，点赞，回复开始-->
        <div class="comment_list_1_right_2">
          <text>2023-03-01 12:34:23</text>
          <div class="comment_list_1_right_2_right">
            <el-icon><Pointer /></el-icon>
            <el-icon class="left-10"><ChatRound /></el-icon>
          </div>
        </div>
        <!--                    时间，点赞，回复结束-->
        <!--        该评论的回复列表开始-->
        <div class="comment_list">
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
                <text>海贼王1 @ 海贼王</text>
                <text>稳定性好，木质细腻，密度比较高，硬度比较高，气味芳香</text>
              </div>
              <!--              主评论作者和内容结束-->
              <!--                    时间，点赞，回复开始-->
              <div class="comment_list_1_right_2">
                <text>2023-03-01 12:34:23</text>
                <div class="comment_list_1_right_2_right">
                  <el-icon><Pointer /></el-icon>
                  <el-icon class="left-10"><ChatRound /></el-icon>
                </div>
              </div>
              <!--                    时间，点赞，回复结束-->
            </div>
          </div>
        </div>
        <div class="comment_list">
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
                <text>海贼王</text>
                <text>稳定性好，木质细腻，密度比较高，硬度比较高，气味芳香</text>
              </div>
              <!--              主评论作者和内容结束-->
              <!--                    时间，点赞，回复开始-->
              <div class="comment_list_1_right_2">
                <text>2023-03-01 12:34:23</text>
                <div class="comment_list_1_right_2_right">
                  <el-icon><Pointer /></el-icon>
                  <!--        添加评论组件开始-->
                  <AddComment
                      :placeholder-text="placeholderText"
                      :cancel-text="cancelText"
                      :confirm-text="confirmText"
                  >
                    <template #clickDrawer>
                      <!-- AddComment 插槽的内容放这里开始-->
                      <el-icon class="left-10"><ChatRound /></el-icon>
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
//引入评论api
import { commentListApi } from "../api/comment.js";
onMounted(() => {
  commentListApi({}).then(async(res) => {
    console.log(res);
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
.left-10{
  margin-left: 10px;
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
  flex-direction: row;
  justify-content: space-between;
}
.comment_list .comment_list_1 .comment_list_1_right .comment_list_1_right_2 .comment_list_1_right_2_right{
  display: flex;
}
</style>
