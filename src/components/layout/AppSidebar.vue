<!-- src/components/layout/AppSidebar.vue -->
<template>
  <el-aside class="app-aside" :width="isCollapsed ? '64px' : '200px'">
    <el-menu
      :default-active="activeMenu"
      background-color="#001529"
      text-color="#bfcbd9"
      active-text-color="#1890ff"
      :collapse="isCollapsed"
      :collapse-transition="false"
      router
    >
      <el-menu-item index="/">
        <el-icon><HomeFilled /></el-icon>
        <template #title>控制面板</template>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon><User /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/users">用户列表</el-menu-item>
        <el-menu-item index="/roles">角色管理</el-menu-item>
        <el-menu-item index="/permissions">权限管理</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          <el-icon><Goods /></el-icon>
          <span>产品管理</span>
        </template>
        <el-menu-item index="/products">产品列表</el-menu-item>
        <el-menu-item index="/categories">分类管理</el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/orders">
        <el-icon><List /></el-icon>
        <template #title>订单管理</template>
      </el-menu-item>

      <el-menu-item index="/analytics">
        <el-icon><DataAnalysis /></el-icon>
        <!-- <span>数据分析</span> -->
        <template #title>数据分析</template>
      </el-menu-item>

      <el-menu-item index="/settings">
        <el-icon><Setting /></el-icon>
        <template #title>系统设置</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLayoutStore } from "@/store/layout";
import {
  HomeFilled,
  User,
  Goods,
  List,
  DataAnalysis,
  Setting,
} from "@element-plus/icons-vue";

const layoutStore = useLayoutStore();
const route = useRoute();
const isCollapsed = computed(() => layoutStore.isCollapsed);
const activeMenu = computed(() => route.path);
</script>

<style scoped>
:deep(.el-menu) {
  border-right: none !important;
}

:deep(.el-menu-item) {
  height: 48px;
  line-height: 48px;
  margin: 4px 0;

  &:hover {
    background-color: rgba(24, 144, 255, 0.15) !important;
  }
}

:deep(.el-menu-item.is-active) {
  background-color: rgba(24, 144, 255, 0.2) !important;
  color: #1890ff !important;
  font-weight: 600;
}

/* 折叠状态下的样式 */
:deep(.el-menu-item) > span,
:deep(.el-sub-menu__title) > span {
  transition: opacity 0.3s;
}

.collapsed :deep(.el-menu-item) > span,
.collapsed :deep(.el-sub-menu__title) > span {
  opacity: 0;
  width: 0;
  display: inline-block;
  overflow: hidden;
}

.collapsed :deep(.el-sub-menu__icon-arrow) {
  display: none;
}

.collapsed .logo-text {
  display: none;
}

.collapsed :deep(.el-menu-item) {
  display: flex;
  justify-content: center;
}

.el-icon svg {
  font-size: 20px;
}
</style>
