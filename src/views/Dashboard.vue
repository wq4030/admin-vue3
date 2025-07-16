<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard-container">
    <div class="page-header">
      <h1 class="page-title">控制面板</h1>
      <p class="page-description">欢迎选择，这里您的系统概览和说明分析</p>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <el-icon><User /></el-icon>
        </div>
        <div class="stat-content">
          <div class="stat-title">总用户数</div>
          <div class="stat-value">12,458</div>
          <div class="stat-trend trend-up">
            <el-icon><Top /></el-icon>
            <span>1.3% 较上月</span>
          </div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <el-icon><Money /></el-icon>
        </div>
        <div class="stat-content">
          <div class="stat-title">总收入</div>
          <div class="stat-value">¥245,880</div>
          <div class="stat-trend trend-up">
            <el-icon><Top /></el-icon>
            <span>8.9% 较上月</span>
          </div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <el-icon><Tickets /></el-icon>
        </div>
        <div class="stat-content">
          <div class="stat-title">订单数</div>
          <div class="stat-value">3,248</div>
          <div class="stat-trend trend-down">
            <el-icon><Bottom /></el-icon>
            <span>3.5% 较上月</span>
          </div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <el-icon><TrendCharts /></el-icon>
        </div>
        <div class="stat-content">
          <div class="stat-title">转化率</div>
          <div class="stat-value">24.8%</div>
          <div class="stat-trend trend-up">
            <el-icon><Top /></el-icon>
            <span>4.7% 较上月</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="chart-card">
      <div class="chart-header">
        <h3 class="chart-title">月度访问量统计</h3>
        <div class="chart-note">注：数据为客户访问量统计</div>
      </div>
      <BarChart />
    </div>
  </div>
</template>

<script setup>
import {
  User, Money, Tickets, Top, Bottom
} from '@element-plus/icons-vue'
import BarChart from '@/components/dashboard/BarChart.vue'

// 自定义图表图标
const TrendCharts = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3V19H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 15L14 10L10 13L6 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}
</script>

<style scoped>
.dashboard-container {
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 20px;
  width: 100%;
}

.page-header {
  margin-bottom: 30px;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #1f2d3d;
  margin-bottom: 8px;
}

.page-description {
  color: #5e6d82;
  font-size: 14px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }
}

.stat-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: #f0f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  
  .el-icon, svg {
    font-size: 24px;
    color: #4361ee;
  }
}

.stat-content {
  flex: 1;
}

.stat-title {
  color: #5e6d82;
  font-size: 14px;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #1f2d3d;
}

.stat-trend {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  
  .el-icon {
    margin-right: 4px;
  }
}

.trend-up {
  color: #52c41a;
}

.trend-down {
  color: #f56c6c;
}

.chart-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 1200px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.chart-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2d3d;
}

.chart-note {
  font-size: 13px;
  color: #a8b1bd;
}
</style>