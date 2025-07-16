<template>
  <span ref="elRef"></span>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { CountUp } from 'countup.js'

const props = defineProps({
  endValue: { type: Number, required: true },  // 目标值
  startValue: { type: Number, default: 0 },    // 起始值
  duration: { type: Number, default: 1 },      // 动画时长(秒)
  decimals: { type: Number, default: 0 },      // 保留小数位
  separator: { type: String, default: ',' },   // 千分位分隔符
  decimal: { type: String, default: '.' },     // 小数点符号
  prefix: { type: String, default: '' },       // 前缀
  suffix: { type: String, default: '' },       // 后缀
  easingFn: { type: Function },                // 自定义缓动函数
  formattingFn: { type: Function }             // 自定义格式化回调
})

const elRef = ref(null)
let countUpInstance = null

const createInstance = () => {
  const options = {
    startVal: props.startValue,
    duration: props.duration,
    decimalPlaces: parseInt(props.decimals),
    separator: props.separator,
    decimal: props.decimal,
    prefix: props.prefix,
    suffix: props.suffix,
    easingFn: props.easingFn,         // 缓动函数 (可选)
    formattingFn: props.formattingFn // 格式化回调 (可选)
  }
  countUpInstance = new CountUp(elRef.value, props.endValue, options)

  if (!countUpInstance.error) {
    countUpInstance.start()
  } else {
    console.error(countUpInstance.error)
  }
}

onMounted(() => {
  createInstance()
})

// 监听 endValue 变化 → 从当前值更新到新值
watch(
  () => props.endValue,
  (newVal) => {
    if (countUpInstance) {
      countUpInstance.update(newVal)
    }
  }
)

onBeforeUnmount(() => {
  countUpInstance = null
})
</script>
