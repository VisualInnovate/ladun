import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/companies", component: () => import("@/pages/Companies.vue") },
    { path: "/", component: () => import("@/pages/Home.vue") },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
