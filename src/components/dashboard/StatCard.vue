<!-- src/components/dashboard/StatCard.vue -->
<template>
  <div class="stat-card">
    <div class="stat-title">{{ title }}</div>
    <div class="stat-value">{{ value }}</div>
    <div class="stat-trend" :class="`trend-${trend}`">
      <el-icon>
        <Top v-if="trend === 'up'" />
        <Bottom v-else />
      </el-icon>
      <span>{{ change }}</span>
    </div>
  </div>
</template>

<script setup>
import { Top, Bottom } from '@element-plus/icons-vue'

defineProps({
  title: String,
  value: String,
  trend: {
    type: String,
    validator: (value) => ['up', 'down'].includes(value)
  },
  change: String
})
</script>