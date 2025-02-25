/*
 * @Description:
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 13:31:23
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-25 14:52:17
 * @FilePath: \fengpu-mico\mico-qiankun\app01\vite.config.ts
 * Endless Story. - NANA
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    qiankun("app02", {
      useDevMode: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 7002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
