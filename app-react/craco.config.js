/*
 * @Description: 
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-26 13:23:07
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-26 13:23:15
 * @FilePath: \fengpu-mico\mico-qiankun\app-react\craco.config.js
 * Endless Story. - NANA
 */
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  // 修改 webpack 配置
  webpack: {
    alias: {
      '@': resolve('src'),
      comp: resolve('src/components')
    }

  },
  // 修改 babel 配置
  babel: {
    // ...
  },
  // 修改 eslint 配置
  eslint: {
    // ...
  },
  devServer: {
    proxy: {

    }
  }
};
