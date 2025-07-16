<!-- src/App.vue -->
<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useLayoutStore } from '@/store/layout'

const layoutStore = useLayoutStore()

onMounted(() => {
  // 检查设备类型
  layoutStore.checkMobile()
  
  // 响应窗口大小变化
  window.addEventListener('resize', layoutStore.checkMobile)
})
</script>