<template>
  <span>{{ formattedValue }}</span>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

// 默认缓动函数 ease-out cubic
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

const props = defineProps({
  endValue: { type: Number, required: true },  // 目标值
  duration: { type: Number, default: 1000 },   // 动画时长 ms
  startValue: { type: Number, default: 0 },    // 起始值
  decimals: { type: Number, default: 0 },      // 保留几位小数
  useGrouping: { type: Boolean, default: true }, // 是否千分位分隔
  locale: { type: String, default: 'en-US' },  // 本地化格式
  prefix: { type: String, default: '' },       // 前缀
  suffix: { type: String, default: '' },       // 后缀
  formatter: { type: Function }                // 自定义格式化回调 (value:number)=>string
})

const rawValue = ref(props.startValue) // 未格式化的值

// 默认数字格式化
function defaultFormat(value) {
  const num = Number(value)
  if (props.useGrouping) {
    return `${props.prefix}${new Intl.NumberFormat(props.locale, {
      minimumFractionDigits: props.decimals,
      maximumFractionDigits: props.decimals
    }).format(num)}${props.suffix}`
  } else {
    return `${props.prefix}${num.toFixed(props.decimals)}${props.suffix}`
  }
}

// 计算最终显示值
const formattedValue = computed(() => {
  return props.formatter 
    ? props.formatter(rawValue.value)  // 如果有自定义 formatter，优先使用
    : defaultFormat(rawValue.value)   // 否则用默认格式
})

let startTime = null
let animationFrame = null
let fromValue = props.startValue
let toValue = props.endValue

// 核心动画逻辑
const animateCount = (timestamp) => {
  if (!startTime) startTime = timestamp
  const elapsed = timestamp - startTime
  const progress = Math.min(elapsed / props.duration, 1)
  const eased = easeOutCubic(progress)
  const currentValue = fromValue + (toValue - fromValue) * eased
  rawValue.value = currentValue

  if (progress < 1) {
    animationFrame = requestAnimationFrame(animateCount)
  }
}

// 启动动画
const startAnimation = (newStart, newEnd) => {
  cancelAnimationFrame(animationFrame)
  startTime = null
  fromValue = newStart
  toValue = newEnd
  animationFrame = requestAnimationFrame(animateCount)
}

// 监听 endValue 改变时，重新从当前值到新值
watch(
  () => props.endValue,
  (newValue) => {
    startAnimation(rawValue.value, newValue)
  }
)

onMounted(() => {
  startAnimation(props.startValue, props.endValue)
})
</script>
