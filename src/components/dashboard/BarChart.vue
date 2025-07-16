<!-- src/components/dashboard/BarChart.vue -->
<template>
  <div class="chart-container">
    <div class="chart">
      <div 
        v-for="(item, index) in chartData" 
        :key="index" 
        class="chart-bar" 
        :style="{ height: item.value + '%', backgroundColor: colors[index] }"
      >
        <div class="chart-value">{{ item.value }}%</div>
        <div class="chart-label">{{ item.day }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const chartData = ref([
  { day: '周一', value: 65 },
  { day: '周二', value: 78 },
  { day: '周三', value: 85 },
  { day: '周四', value: 72 },
  { day: '周五', value: 90 },
  { day: '周六', value: 88 },
  { day: '周日', value: 76 }
])

const colors = [
  '#4361ee', '#3a0ca3', '#4895ef', 
  '#4cc9f0', '#560bad', '#b5179e', '#f72585'
]

function updateChartData() {
  chartData.value.forEach(item => {
    // 小幅随机变化，模拟实时数据
    const change = Math.floor(Math.random() * 10) - 5;
    item.value = Math.min(100, Math.max(10, item.value + change));
  })
}

onMounted(() => {
  // 每10秒更新一次图表数据
  setInterval(updateChartData, 10000)
})
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 300px;
}

.chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
  gap: 15px;
}

.chart-bar {
  flex: 1;
  max-width: 60px;
  border-radius: 8px 8px 0 0;
  position: relative;
  transition: height 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.chart-value {
  position: absolute;
  top: -25px;
  font-size: 12px;
  font-weight: 600;
  color: #1f2d3d;
}

.chart-label {
  position: absolute;
  bottom: -25px;
  font-size: 12px;
  color: #5e6d82;
  white-space: nowrap;
}
</style>