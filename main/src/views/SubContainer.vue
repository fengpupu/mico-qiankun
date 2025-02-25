<!--
 * @Description: 
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 14:22:33
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-25 14:22:38
 * @FilePath: \fengpu-mico\mico-qiankun\main\src\views\SubContainer.vue
 * Endless Story. - NANA
-->
<template>
  <div id="sub-container"></div>
</template>

<script setup lang="ts">
import { start } from "qiankun";
import { registerApps } from "@/qiankun/run";
import { onMounted } from "vue";
onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    registerApps();
    start({
      sandbox: {
        experimentalStyleIsolation: true, // 样式隔离
      },
    });
  }
});
</script>
