<template>
  <div class="chartNum">
    <span v-if="prepend && prepend.length > 0">{{ prepend }}</span>
    <div class="box-item">
      <li :class="{ 'number-item': !isNaN(item), 'mark-item': isNaN(item) }" v-for="(item, index) in orderNum"
        :key="index">
        <span v-if="!isNaN(item)">
          <i ref="numberItem">0123456789</i>
        </span>
        <span class="comma" v-else>{{ item }}</span>
      </li>
    </div>
    <span v-if="append && append.length > 0">{{ append }}</span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number, // 具体数值
      default() {
        return 0;
      },
    },
    prepend: {
      type: String, // 数字前面的文字
      default() {
        return '';
      },
    },
    append: {
      type: String, // 数字后面的文字
      default() {
        return '';
      },
    },
    time: {
      type: Number, // 滚动要花的时间，单位秒
      default() {
        return 3;
      },
    },
  },
  data() {
    return {
      orderNum: ['0'],
    }
  },
  mounted() {
    this.toOrderNum(this.value) // 这里输入数字即可调用
    this.increaseNumber(this.time);
  },
  watch: {
    value(val) {
      this.toOrderNum(val) // 这里输入数字即可调用
      this.increaseNumber(this.time);
    },
  },
  methods: {
    // 定时增长数字
    increaseNumber(time) {
      let self = this
      this.timer = setInterval(() => {
        self.newNumber = self.newNumber + self.getRandomNumber(1, 100)
        self.setNumberTransform()
      }, time * 1000)
    },
    // 设置文字滚动
    setNumberTransform() {
      const numberItems = this.$refs.numberItem // 拿到数字的ref，计算元素数量
      const numberArr = this.orderNum.filter(item => !isNaN(item))
      // 结合CSS 对数字字符进行滚动,显示数字
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index]
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
      }
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    // 处理传过来的具体值value
    toOrderNum(num) {
      num = num.toString()
      // 把具体值value变成字符串
      this.orderNum = num.split('') // 将其便变成数据，渲染至滚动数组
    },
  }
}
// 参考地址1：https://juejin.cn/post/6844903901355835406
// 参考地址2：https://juejin.cn/post/7021417758520770596
</script>
<style scoped lang="scss">
.chartNum {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &>span {
    display: inline;
    white-space: break-spaces;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
}

.box-item {
  display: inline;
  position: relative;
  height: 55px;
  font-size: inherit;
  line-height: 41px;
  text-align: center;
  list-style: none;
  writing-mode: vertical-lr;
  text-orientation: upright;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

/* 默认逗号设置 */
.mark-item {
  width: 10px;
  height: 100px;
  margin-right: 5px;
  line-height: 10px;
  font-size: 48px;
  position: relative;

  &>span {
    position: absolute;
    width: 100%;
    bottom: 0;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}

/*滚动数字设置*/
.number-item {
  width: 30px;
  height: 55px;
  list-style: none;
  margin-right: 5px;
  border-radius: 4px;

  &>span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;

    &>i {
      font-style: normal;
      position: absolute;
      top: 11px;
      left: 50%;
      transform: translate(-50%, 0);
      transition: transform 1s ease-in-out;
      letter-spacing: 10px;
    }
  }
}

.number-item:last-child {
  margin-right: 0;
}

@media screen and (min-width: 1180px) {
  .box-item {
    height: 80px;
  }

  .number-item {
    width: 41px;
    height: 80px;
    margin-right: 25px;
  }
}
</style>
