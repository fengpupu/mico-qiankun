/*
 * @Description:
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 13:46:53
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-26 17:08:53
 * @FilePath: \fengpu-mico\mico-qiankun\main\src\qiankun\config.ts
 * Endless Story. - NANA
 */
export default {
  subApps: [
    {
      name: "app01", // 子应用名称，跟package.json一致
      entry:
        process.env.NODE_ENV === "development"
          ? "//localhost:7001"
          : "/app01/index.html", // 子应用入口，本地环境下指定端口
      container: "#sub-container", // 挂载子应用的dom
      activeRule: "/app/app01", // 路由匹配规则
      props: {}, // 主应用与子应用通信传值
    },
    {
      name: "app02",
      entry: "//localhost:7002",
      container: "#sub-container",
      activeRule: "/app/app02",
      props: {}, // 主应用与子应用通信传值
    },
    {
      name: "app-react",
      entry: "//localhost:7003",
      container: "#sub-container",
      activeRule: "/app/app-react",
      props: {}, // 主应用与子应用通信传值
    },
  ],
};
