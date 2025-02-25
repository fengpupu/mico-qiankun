import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      // history模式需要通配所有路由，详见vue-router文档
      path: "/app/app01/:pathMatch(.*)*",
      name: "app01",
      meta: {},
      component: () => import("@/views/SubContainer.vue"),
    },
    {
      path: "/app/app02/",
      name: "app02",
      meta: {},
      component: () => import("@/views/SubContainer.vue"),
    },
  ],
});

export default router;
