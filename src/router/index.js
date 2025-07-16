// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import UserManagement from "@/views/UserManagement.vue";
import OrderManagement from "@/views/OrderManagement.vue";
import Settings from "@/views/Settings.vue";
import Analytics from "@/views/Analytics.vue";
import NotFound from "@/components/notFound/NotFound.vue";

const routes = [
  {
    path: '/admin-vue3',
    redirect: '/dashboard',
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: MainLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          title: "仪表盘",
        },
      },
      {
        path: "/users",
        name: "UserManagement",
        component: UserManagement,
        meta: {
          title: "用户管理",
        },
      },
      {
        path: "/orders",
        name: "OrderManagement",
        component: OrderManagement,
        meta: {
          title: "订单管理",
        },
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
        meta: {
          title: "设置",
        },
      },
      {
        path: "/analytics",
        name: "Analytics",
        component: Analytics,
        meta: {
          title: "数据分析",
        },
      },
      {
        // handle all unmatched routes
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
        meta: {
          title: "404",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + " - 后台管理系统";
  } else {
    document.title = "后台管理系统";
  }
  next();
});

export default router;
