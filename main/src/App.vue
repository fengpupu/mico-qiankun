<!--
 * @Description: 
 * @Author: fengpu 1126120965@qq.com
 * @Date: 2025-02-25 13:30:59
 * @LastEditors: fengpu 1126120965@qq.com
 * @LastEditTime: 2025-02-27 14:51:19
 * @FilePath: \fengpu-mico\mico-qiankun\main\src\App.vue
 * Endless Story. - NANA
-->
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 20px;
    "
  >
    <header>
      <nav>
        <router-link to="/app/app01">app01</router-link>
        <router-link to="/app/app02/#/">app02</router-link>
        <router-link to="/app/app-react">app-react</router-link>
      </nav>
    </header>
    <RouterView style="flex: 1" />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding: 20px 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
