import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// ✅ 1. gzip 压缩插件
import viteCompression from "vite-plugin-compression";

// ✅ 2. CDN 插件（自动 external）
import importToCDN from "vite-plugin-cdn-import";

// https://vite.dev/config/
export default defineConfig({
  base: "/admin-vue3/", // GitHub Pages 发布路径
  plugins: [
    vue(),
    // ✅ gzip 压缩：生成 .gz 文件，服务器开启 gzip 可直接用
    viteCompression({
      verbose: true, // 输出压缩结果
      disable: false, // 是否禁用
      threshold: 10240, // 超过 10kb 生成 .gz
      algorithm: "gzip", // 或 'brotliCompress'
      ext: ".gz",
    }),
    // ✅ CDN 自动引入（vue、vue-router、axios 走 CDN）
    importToCDN({
      modules: [
        {
          name: "vue",
          var: "Vue",
          path: "https://unpkg.com/vue@3.5.17/dist/vue.global.prod.js",
        },
        {
          name: "vue-router",
          var: "VueRouter",
          path: "https://unpkg.com/vue-router@4.5.1/dist/vue-router.global.prod.js",
        },
        {
          name: "pinia",
          var: "Pinia",
          path: "https://unpkg.com/pinia@3.0.3/dist/pinia.iife.prod.js",
        },
        {
          name: "@element-plus/icons-vue",
          var: "ElementPlusIconsVue",
          path: "https://unpkg.com/@element-plus/icons-vue@2.3.1/dist/index.iife.min.js",
        },
        {
          name: "element-plus",
          var: "ElementPlus",
          path: "https://unpkg.com/element-plus@2.10.4/dist/index.full.min.js"
        }
      ],
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @ 指向 src 目录
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("element-plus")) return "element-plus";
            if (id.includes("vue")) return "vue-vendor";
            return "vendor";
          }
        },
      },
    },
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "pinia"], // 预构建依赖库
  },
});
