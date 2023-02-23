<!--图形验证码组件开始-->
<template>
  <canvas :id="id" :width="contentWidth" :height="contentHeight" @click="refreshCode"></canvas>
</template>
<!--script setup里面不能直接返回组件的名字，所以需要一个单独的标签，使用options的语法设置组件的name属性-->
<script>
export default{
  name: 'GraphValidateCode'
}
</script>
<script setup>
import { onMounted, ref } from 'vue'
//1、setup 颠覆之前的options属性方式，我们可以将业务逻辑都写在setup中
//两种声明
//ref       声明简单的基础类型变量，如单个数字，boolean,字符串等等
//reactive  它用于对象引用类型的复杂变量
//这两种声明如果想在template中使用的话，必须在setup方法里面return，否则就无法调用
const graphValidateCode = ref('G857');
const alphabet = ref('');
//2、用来给父组件传递值自定义的函数
const emit = defineEmits(['toFatherLogin'])
//父组件给该组件传递的值，就定义在defineProps
const props = defineProps({
    // 字体最小值
    fontSizeMin: {
      type: Number,
      default: 28
    },
    // 字体最大值
    fontSizeMax: {
      type: Number,
      default: 34
    },
    // 背景颜色色值最小值，最小为0
    backgroundColorMin: {
      type: Number,
      default: 200
    },
    // 背景颜色色值最大值，最大为255
    backgroundColorMax: {
      type: Number,
      default: 240
    },
    // 字体颜色色值最小值，最小为0
    colorMin: {
      type: Number,
      default: 0
    },
    // 字体颜色色值最大值，最大为255
    colorMax: {
      type: Number,
      default: 180
    },
    // 干扰线颜色色值最小值，最小为0
    lineColorMin: {
      type: Number,
      default: 150
    },
    // 干扰线颜色色值最大值，最大为255
    lineColorMax: {
      type: Number,
      default: 200
    },
    // 干扰点颜色色值最小值，最小为0
    dotColorMin: {
      type: Number,
      default: 100
    },
    // 干扰点颜色色值最大值，最大为255
    dotColorMax: {
      type: Number,
      default: 250
    },
    // 画布宽度
    contentWidth: {
      type: Number,
      default: 100
    },
    // 画布高度
    contentHeight: {
      type: Number,
      default: 40
    },
    id: {
      type: String,
      default: 'canvas1',
    },
})
/**
 * 随机生成一个0~9之间的数
 */
const randomGraphValidateCode = () => {
  return Math.floor(Math.random() * 10)
}
/**
 * 随机生成一个字母
 * @param {boolean} isUpper 生成大写字母
 */
const randomAlphabet = ({ isUpper = false } = {}) => {
  // a的Unicode值为97,z的Unicode值为123
  alphabet.value = String.fromCharCode(Math.floor(Math.random() * 25) + 97)
  if (!isUpper) {
    return alphabet.value
  } else {
    return alphabet.value.toUpperCase()
  }
}
/**
 * 图片验证码随机排序
 * @param {string} str 图片验证码
 */
const shuffle = (str) => {
  graphValidateCode.value = [...str].sort(() => Math.random() - 0.5).join('')
  emit('toFatherLogin', { graphValidateCode })
  drawPic()
  console.log(graphValidateCode.value)
}

/**
 * 更换图片验证码
 */
const refreshCode = () => {
  makeGraphValidateCode({ randomTypeLen: true })
}
/**
 * 生成图片验证码
 * @param {number} length 图片验证码位数
 * @param {boolean} typeMix 数字和字母混合
 * @param {string} pureNumber 纯数字('number')或者字母('alphabet')
 * @param {boolean} randomTypeLen 随机生成类型个数组合
 * @param {boolean} capsLookMix 字母大小写混合
 * @param {number} numLength 混合类型下的数字个数
 * @param {number} upperLength 大写字母的个数
 */
const makeGraphValidateCode = ({ length = 4, typeMix = true, pureNumber = 'alphabet', randomTypeLen = false, capsLookMix = false, numLength = 2, upperLength = 1 } = {}) => {
  let makeCode = '';
  // 数字和字母混合
  if (typeMix) {
    // 随机生成类型个数组合
    if (randomTypeLen) {
      // 字母大小写混合
      if (capsLookMix) {
        const numLength = Math.floor(Math.random() * length) + 1
        const upperLength = numLength === length ? 0 : Math.floor(Math.random() * (length - numLength)) + 1
        for (let i = 0; i < numLength; i++) {
          makeCode += randomGraphValidateCode()
        }
        for (let i = 0; i < upperLength; i++) {
          makeCode += randomAlphabet({ isUpper: true })
        }
        if (numLength + upperLength < length) {
          for (let i = 0; i < length - numLength - upperLength; i++) {
            makeCode += randomAlphabet()
          }
        }
      } else {
        const numLength = Math.floor(Math.random() * length) + 1
        for (let i = 0; i < numLength; i++) {
          makeCode += randomGraphValidateCode()
        }
        if (numLength < length) {
          for (let i = 0; i < length - numLength; i++) {
            makeCode += randomAlphabet()
          }
        }
      }
    } else {
      // 字母大小写混合
      if (capsLookMix) {
        const tempNumLength = numLength < 0 ? 2 : numLength > length ? 2 : numLength
        const tempUpperLength = upperLength < 0 ? 1 : upperLength > length - tempNumLength ? 1 : upperLength
        for (let i = 0; i < tempNumLength; i++) {
          makeCode += randomGraphValidateCode()
        }
        for (let i = 0; i < tempUpperLength; i++) {
          makeCode += randomAlphabet({isUpper: true})
        }
        if (tempNumLength + tempUpperLength < length) {
          for (let i = 0; i < length - tempNumLength - tempUpperLength; i++) {
            makeCode += randomAlphabet()
          }
        }
      } else {
        const tempNumLength = numLength < 0 ? 2 : numLength > length ? 2 : numLength
        for (let i = 0; i < tempNumLength; i++) {
          makeCode += randomGraphValidateCode()
        }
        if (tempNumLength < length) {
          for (let i = 0; i < length - tempNumLength; i++) {
            makeCode += randomAlphabet()
          }
        }
      }
    }
  } else {
    // 纯数字('number')
    if (pureNumber === 'number') {
      for (let i = 0; i < length; i++) {
        makeCode += randomGraphValidateCode()
      }
    }
    // 纯字母('alphabet')
    if (pureNumber === 'alphabet') {
      // 字母大小写混合
      if (capsLookMix) {
        const tempUpperLength = upperLength < 0 ? 1 : upperLength > length ? 1 : upperLength
        for (let i = 0; i < tempUpperLength; i++) {
          makeCode += randomAlphabet({ isUpper: true })
        }
        if (tempUpperLength < length) {
          for (let i = 0; i < length - tempUpperLength; i++) {
            makeCode += randomAlphabet()
          }
        }
      } else {
        for (let i = 0; i < length; i++) {
          makeCode += randomAlphabet()
        }
      }
    }
  }
  shuffle(makeCode)
}
  /**
   * 为了绘制图形生成一个随机数
   * @param {number} min 随机数最小值
   * @param {number} max 随机数最大值
   */
  const randomNum = (min, max)  => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  /**
   * 为了绘制图形生成一个随机的颜色
   * @param {number} min 随机数最小值
   * @param {number} max 随机数最大值
   */
  const randomColor = (min, max) => {
    const r = randomNum(min, max)
    const g = randomNum(min, max)
    const b = randomNum(min, max)
    return 'rgb(' + r + ',' + g + ',' + b + ')'
  }

  /**
   * 绘制图片验证码
   */
  const drawPic = () => {
    const id = props.id;
    console.log(id);
    const canvas = document.getElementById(id)
    console.log(canvas);
    const ctx = canvas.getContext('2d')
    console.log(ctx);
    ctx.textBaseline = 'bottom'
    // 绘制背景
    ctx.fillStyle = randomColor(props.backgroundColorMin, props.backgroundColorMax)
    ctx.fillRect(0, 0, props.contentWidth, props.contentHeight)
    // 绘制干扰点
    drawDot(ctx)

    // 绘制验证码
    for (let i = 0; i < graphValidateCode.value.length; i++) {
      drawText(ctx, graphValidateCode.value[i], i)
    }
    // 绘制干扰线
    drawLine(ctx)
  }
  /**
  * 绘制文本单个验证码
  * @param {object} ctx canvas上下文对象
  * @param {string} txt 单个验证码
  * @param {number} i 单个验证码序号
  */
  const drawText = (ctx, txt, i) => {
    ctx.fillStyle = randomColor(props.colorMin, props.colorMax)
    ctx.font = randomNum(props.fontSizeMin, props.fontSizeMax) + 'px SimHei'
    let x = (i + 1) * (props.contentWidth / (graphValidateCode.value.length + 1))
    let y = randomNum(props.fontSizeMax, props.contentHeight - 5)
    let deg = randomNum(-45, 45)
    // 修改坐标原点和旋转角度
    ctx.translate(x, y)
    ctx.rotate(deg * Math.PI / 180)
    ctx.fillText(txt, 0, 0)
    // 恢复坐标原点和旋转角度
    ctx.rotate(-deg * Math.PI / 180)
    ctx.translate(-x, -y)
  }
  /**
  * 绘制干扰线
  * @param {object} ctx canvas上下文对象
  */
  const drawLine = (ctx) => {
    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = randomColor(props.lineColorMin, props.lineColorMax)
      ctx.beginPath()
      ctx.moveTo(randomNum(0, props.contentWidth), randomNum(0, props.contentHeight))
      ctx.lineTo(randomNum(0, props.contentWidth), randomNum(0, props.contentHeight))
      ctx.stroke()
    }
  }
  /**
  * 绘制干扰点
  * @param {object} ctx canvas上下文对象
  */
  const drawDot = (ctx) => {
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = randomColor(0, 255)
      ctx.beginPath()
      ctx.arc(randomNum(0, props.contentWidth), randomNum(0, props.contentHeight), 1, 0, 2 * Math.PI)
      ctx.fill()
    }
  }
  onMounted(() => {
    refreshCode();
  })
</script>
<!--图形验证码组件结束-->
