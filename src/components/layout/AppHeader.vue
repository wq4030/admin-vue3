<!-- src/components/layout/AppHeader.vue -->
<template>
  <header class="app-header">
    <div class="header-left">
      <div class="logo">
        <el-icon class="logo-icon"><Platform /></el-icon>
        <span class="logo-text" v-if="!isCollapsed">AdminPro</span>
      </div>
      <div class="toggle-btn" @click="toggleCollapse">
        <el-icon :size="20">
          <Fold v-if="!isCollapsed" />
          <Expand v-else />
        </el-icon>
      </div>
    </div>
    
    <div class="header-right">
      <el-dropdown trigger="click">
        <div class="user-menu">
          <div class="avatar">JS</div>
          <span>John Smith</span>
          <el-icon><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><User /></el-icon>个人资料
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Setting /></el-icon>账户设置
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Bell /></el-icon>通知
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><SwitchButton /></el-icon>退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '@/store/layout'
import {
  Platform, Fold, Expand, ArrowDown,
  User, Setting, Bell, SwitchButton
} from '@element-plus/icons-vue'

const layoutStore = useLayoutStore()
const isCollapsed = computed(() => layoutStore.isCollapsed)

const toggleCollapse = () => {
  layoutStore.toggleCollapse()
}
</script>

<style scoped>
.app-header {
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  .logo-icon {
    font-size: 24px;
    color: #4361ee;
    margin-right: 8px;
  }
  
  .logo-text {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
}

.toggle-btn {
  font-size: 18px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  
  &:hover {
    background-color: #f5f7fa;
    color: #4361ee;
  }
}

.header-right {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.user-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 20px;
  transition: all 0.3s;
  
  &:hover {
    background-color: #f5f7fa;
  }
  
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #4361ee;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 8px;
  }
}
</style>