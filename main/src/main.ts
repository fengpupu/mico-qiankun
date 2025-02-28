/*
 * @Description:
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 13:30:59
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-27 14:49:11
 * @FilePath: \fengpu-mico\mico-qiankun\main\src\main.ts
 * Endless Story. - NANA
 */
// import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
