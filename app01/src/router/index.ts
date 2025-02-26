/*
 * @Description:)!
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 13:31:23
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-25 14:49:41
 * @FilePath: \fengpu-mico\mico-qiankun\app01\src\router\index.ts
 * Endless Story. - NANA
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(
    (window as any).qiankunWindow?.__POWERED_BY_QIANKUN__ ? "/app/app01/" : "/"
  ),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
