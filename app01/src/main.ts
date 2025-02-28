/*
 * @Description:
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 13:31:23
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-27 14:47:30
 * @FilePath: \fengpu-mico\mico-qiankun\app01\src\main.ts
 * Endless Story. - NANA
 */
// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
  type QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
let app = createApp(App);

const render = (container?: any) => {
  app = createApp(App);
  app.use(router).mount(container ? container.querySelector("#app") : "#app");
};

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props;
      render(container);
    },
    bootstrap() {},
    unmount() {
      app.unmount();
    },
    update: function (props: QiankunProps): void | Promise<void> {
      throw new Error("Function not implemented.");
    },
  });
};
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
app.use(createPinia());
// app.use(router);

// app.mount("#app");
