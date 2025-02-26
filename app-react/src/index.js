/*
 * @Description: 
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 15:49:07
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-26 14:56:05
 * @FilePath: \fengpu-mico\mico-qiankun\app-react\src\index.js
 * Endless Story. - NANA
 */
import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
//     <App />
//   </BrowserRouter>
// );
function render(props) {
  const { container } = props;
  const root = createRoot(container ? container.querySelector('#root') : document.querySelector('#root'));
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app/app-react' : '/'}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      
    </BrowserRouter>);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  // const { container } = props;
  console.log(ReactDOM)
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
