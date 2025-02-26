/*
 * @Description: 
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-26 14:02:51
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-26 14:10:54
 * @FilePath: \fengpu-mico\mico-qiankun\app-react\.rescriptsrc.js
 * Endless Story. - NANA
 */
const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    return config;
  },

  devServer: (_) => {
    const config = _;
    console.log(config)

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    // config.watchContentBase = false;
    config.liveReload = false;
    config.port = 7003

    return config;
  },
};