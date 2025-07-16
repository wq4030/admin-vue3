# Project: Admin Vue3

## 项目概述

本项目是一个基于 Vue 3 的后台管理系统的前端实现。项目使用了 Vite 作为构建工具，Element Plus 作为 UI 库，并结合 Vue Router 进行路由管理，Pinia 作为状态管理工具。项目的主要功能包括仪表盘、用户管理、订单管理、设置、数据分析等模块。

## 项目结构

```
admin-vue3
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── 404.html
│   └── vite.svg
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── scss
│   │   └── vue.svg
│   ├── components
│   │   ├── CountUp.vue
│   │   ├── countUp
│   │   ├── dashboard
│   │   ├── layout
│   │   └── notFound
│   ├── layouts
│   │   └── MainLayout.vue
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── layout.js
│   └── views
│       ├── Analytics.vue
│       ├── Dashboard.vue
│       ├── OrderManagement.vue
│       ├── Settings.vue
│       └── UserManagement.vue
├── tree.md
└── vite.config.js
```

## 主要依赖

`package.json` 文件中列出了项目的主要依赖和开发依赖，具体如下：

- **依赖（dependencies）**:
    - `@element-plus/icons-vue`: Element Plus 的图标库。
    - `countup.js`: 用于数字滚动效果的库。
    - `element-plus`: Vue 3 的 UI 库。
    - `pinia`: Vue 3 的状态管理库。
    - `vue`: Vue 3 核心库。
    - `vue-router`: Vue 3 的路由管理库。

- **开发依赖（devDependencies）**:
    - `@vitejs/plugin-vue`: Vite 的 Vue 插件。
    - `sass` 和 `sass-loader`: 用于预处理 Sass 样式文件。
    - `vite`: Vite 构建工具。
    - `vite-plugin-cdn-import`: 用于从 CDN 引入库。
    - `vite-plugin-compression`: 用于压缩构建输出。

## 路由配置

`src\router\index.js` 文件中定义了项目的路由配置，主要包含以下几个部分：

- **路由模式**: 使用 `createWebHashHistory` 作为路由模式，这意味着路由以 `#` 开头，适合静态站点部署。
- **路由结构**:
    - 根路由 `/` 重定向到 `/dashboard`。
    - 使用 `MainLayout.vue` 作为父布局，包含子路由如 `Dashboard.vue`, `UserManagement.vue`, `OrderManagement.vue`, `Settings.vue`, `Analytics.vue`。
    - 每个子路由都设置了 `meta` 字段，用于保存页面的标题信息。
    - 最后定义了一个通配符路由 `/:pathMatch(.*)*`，用于处理所有未匹配的路由，展示 404 页面。

## 导航守卫

在路由配置文件中，使用了 `router.beforeEach` 进行导航守卫的设置，具体功能是：

- 在每次路由跳转前，检查目标路由的 `meta` 字段中是否有 `title` 属性。
- 如果有，则将页面标题设置为 `meta.title + " - 后台管理系统"`。
- 如果没有，则将页面标题设置为默认的 "后台管理系统"。

## 自动化部署

`.github\workflows\deploy.yml` 文件定义了基于 GitHub Actions 的自动化部署流程，主要用于将构建后的项目部署到 GitHub Pages。具体步骤如下：

- **触发条件**: 当 `master` 分支发生 `push` 事件时触发部署。
- **运行环境**: 使用 `ubuntu-latest` 作为运行环境。
- **权限设置**: 允许写入仓库内容、Pages 以及 OIDC 权限。
- **部署流程**:
    - 使用 `actions/checkout@v4` 检出代码。
    - 使用 `actions/setup-node@v4` 设置 Node.js 环境，版本为 `20`。
    - 安装项目依赖 `npm install`。
    - 构建项目 `npm run build`。
    - 使用 `actions/upload-pages-artifact@v3` 上传构建结果到 GitHub Pages 的 artifact。
    - 使用 `actions/deploy-pages@v4` 部署到 GitHub Pages。

## 开发命令

在项目根目录下，可以通过以下命令进行开发：

- `npm run dev`: 启动本地开发服务器，用于实时预览和调试。
- `npm run build`: 构建项目，生成用于部署的静态文件。
- `npm run preview`: 启动一个本地的静态服务器，预览构建结果，确保部署前一切正常。

## 注意事项

- 在修改 `package.json` 文件后，确保运行 `npm install` 以更新项目依赖。
- 在修改路由配置后，确保更新导航守卫中的逻辑以匹配新的路由结构。
- 使用 GitHub Pages 部署时，请确保项目构建的静态文件输出路径与 `deploy.yml` 中的配置一致。