<template>
  <el-table
    :data="modelValue"
    :show-header="false"
  >
    <el-table-column width="200">
      <template #default="scope">
        <!-- 常规规格 start -->
        <template
          v-if="scope.row.is_add_manual == 0 || scope.row.is_add_manual == false"
        >{{ scope.row.specifications }}</template>
        <!-- 常规规格 end -->
        <!-- 自定义规格 start -->
        <!-- <el-row v-else> -->
          <!-- <el-col> -->
        <template v-else>
            <el-input-number
              class="pc_spec-input"
              v-model="scope.row.long"
              :step="0.01"
              size="small"
              placeholder="长"
              @change="onChange"
              :controls="false"
              :validate-event="false"
              :style="isMobile?'width: 50px;':'width: 53px;'"
            />×
            <el-input-number
              class="pc_spec-input"
              v-model="scope.row.width"
              :step="0.01"
              size="small"
              placeholder="宽"
              @change="onChange"
              :controls="false"
              :validate-event="false"
              :style="isMobile?'width: 50px;':'width: 53px;'"
            />×
            <el-input-number
              class="pc_spec-input"
              v-model="scope.row.height"
              :step="0.01"
              size="small"
              placeholder="高"
              @change="onChange"
              :controls="false"
              :validate-event="false"
              :style="isMobile?'width: 47px;':'width: 53px;'"
            />
        </template>
          <!-- </el-col> -->
        <!-- </el-row> -->
        <!-- 自定义规格 end -->
      </template>
    </el-table-column>
    <el-table-column v-if="!isMobile">
      <template #default="scope">
        <template
          v-if="scope.row.is_add_manual == 0 || scope.row.is_add_manual == false"
        >{{ scope.row.goods_price }}元</template>
      </template>
    </el-table-column>
    <el-table-column v-if="!isMobile">
      <template #default="scope">
        <template
          v-if="scope.row.is_add_manual == 0 || scope.row.is_add_manual == false"
        >{{ scope.row.count }}{{ formatUnit(scope.row.count_unit) }}可售</template>
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template #default="scope">
        <el-input-number
          size="small"
          v-model="scope.row.select_count"
          :min="0"
          :max="scope.row.is_add_manual == 0 || scope.row.is_add_manual == false ? Number(scope.row.count) : Infinity"
          controls-position="right"
          @change="onChange"
          :validate-event="false"
          style="width: 82px;"
        />
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup>
import { formatUnit } from '../utils/good.js'
import { useSelectedGoodsSpecsStore } from '../pinia/selectedGoodsSpecs.js'
import { ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
  },
  goodsId: {
    type: String,
  },
})
const emits = defineEmits(['update:modelValue','onChange'])
const isMobile = ref(window.innerWidth<768)
const selectedGoodsSpecsStore = useSelectedGoodsSpecsStore()
const onChange = () => {
  props.modelValue.filter(item => {
    if (Number(item.is_add_manual) === 1 && (Number(item.long) <= 0 || Number(item.width) <= 0 || Number(item.height) <= 0)) {
      return false
    }
    return true
  }).forEach(item => {
    let specification = ''
    if (Number(item.is_add_manual) === 1) {
      specification = item.long + 'cm*' + item.width + 'cm*' + item.height + 'cm'
    } else {
      specification = item.specifications
    }
    selectedGoodsSpecsStore.setSpecs(props.type, props.goodsId, item.s_id, specification, item.select_count)
  })
  emits('onChange', props.modelValue)
}
</script>
<style scoped>
.pc_spec-input {
  width: 42px;
}
</style>