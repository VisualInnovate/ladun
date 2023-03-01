import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("@/pages/Home.vue") },
    { path: "/companies", component: () => import("@/pages/Companies.vue") },

    { path: "/media-center", component: () => import("@/pages/MediaCenter.vue") },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
