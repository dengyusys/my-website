import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";

// 单页站点暂只有首页；保留路由层为后续新增页面（博客、项目列表等）预留空间。
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
  ],
});
