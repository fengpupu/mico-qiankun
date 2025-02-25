/*
 * @Description.
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 14:08:40
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-25 14:08:51
 * @FilePath: \fengpu-mico\mico-qiankun\main\src\qiankun\run.ts
 * Endless Story. - NANA
 */
import { registerMicroApps } from "qiankun";
import config from "./config";

const { subApps } = config;

export function registerApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        async (app) => {
          console.log("before load", app);
        },
      ],
      beforeMount: [
        async (app) => {
          console.log("before mount", app);
        },
      ],
      afterUnmount: [
        async (app) => {
          console.log("before unmount", app);
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
}
