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
          <div class="stat-value">
            <CountUp :end-value="getRandomNumber({type: 'int', length: 5})" />
          </div>
          <div class="stat-trend trend-up">
            <el-icon><Top /></el-icon>
            <span><CountUp :end-value="1.3" suffix="%" /> 较上月</span>
          </div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <el-icon><Money /></el-icon>
        </div>
        <div class="stat-content">
          <div class="stat-title">总收入</div>
          <div class="stat-value">
            <CountUp :end-value="getRandomNumber({type: 'float', length: 6})" prefix="¥" :decimals="2" />
          </div>
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
          <div class="stat-value">
            <CountUp :end-value="getRandomNumber({type: 'int', length: 4})" />
          </div>
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
          <div class="stat-value">
            <CountUp :end-value="getRandomNumber({type: 'float', length: 2, decimals: 2})" suffix="%" :decimals="2" />
          </div>
          <div class="stat-trend trend-up">
            <el-icon><Top /></el-icon>
            <span>4.7% 较上月</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Money, Tickets, Top, Bottom } from "@element-plus/icons-vue";
import CountUp from "@/components/countUp/CountUp.vue";

// 自定义图表图标
const TrendCharts = {
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3V19H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 15L14 10L10 13L6 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

/**
 * 生成随机数字
 * @param {Object} options 配置项
 * @param {'int'|'float'} [options.type='int']  类型：整数 or 小数
 * @param {number} [options.length=6]  整数长度（位数）
 * @param {number} [options.decimals=2] 小数位数（仅对float有效）
 * @returns {number}
 */
function getRandomNumber(options = {}) {
  const { type = "int", length = 6, decimals = 2 } = options;

  // 生成指定位数的整数部分
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  const intPart = Math.floor(Math.random() * (max - min + 1)) + min;

  if (type === "int") {
    return intPart;
  }

  if (type === "float") {
    // 生成小数部分 (0 ~ 1) 并保留decimals位
    const decimalPart = Math.random().toFixed(decimals).slice(2);
    return parseFloat(`${intPart}.${decimalPart}`);
  }

  throw new Error('type must be "int" or "float"');
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

  .el-icon,
  svg {
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
</style>
