/*
 * @Description: 
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-26 14:02:51
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-28 16:17:57
 * @FilePath: \fengpu-mico\mico-qiankun\app-react\.rescriptsrc.js
 * Endless Story. - NANA
 */
const { name } = require('./package');
const  path  = require('path')

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    
    // config.output.path = path.resolve(__dirname, 'dist')
    // config.output.filename = '[name].js'
    config.output.publicPath = './' // 这里设置为当前目录
    return config;
  },

  devServer: (_) => {
    const config = _;
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.liveReload = false;
    config.port = 7003
    return config;
  }
};