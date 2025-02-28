/*
 * @Description:)!
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 13:31:23
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-28 15:59:22
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
    }
  ],
});

export default router;
