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
    <el-upload class="margin-20-top" action="#" list-type="picture-card" :auto-upload="false">
      <el-icon><Plus /></el-icon>

      <template #file="{ file }">
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
          <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in /></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
          >
            <el-icon><Download /></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
          >
            <el-icon><Delete /></el-icon>
          </span>
        </span>
        </div>
      </template>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <el-row>
      <el-col :span="12" class="center_button margin-20-top">
        <el-button type="" @click="drawer = true">
          {{cancelText}}
        </el-button>
      </el-col>
      <el-col :span="12" class="center_button margin-20-top">
        <el-button type="primary" @click="drawer = true">
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
import { ref } from 'vue'
//添加评论开始
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
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file) => {
  console.log(file)
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const handleDownload = (file) => {
  console.log(file)
}
//上传文件结束
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
