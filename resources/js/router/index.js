import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("@/pages/Home.vue"), name: 'Home', meta:{title:"Home"} },
    { path: "/companies", component: () => import("@/pages/Companies.vue"), name: 'Companies', meta:{title:"Companies"}  },

    { path: "/media-center", component: () => import("@/pages/MediaCenter.vue"), name: 'Media Center', meta:{title:"Media Center"}  },
    { path: "/about", component: () => import("@/pages/AboutPage.vue"), name: 'About Us', meta:{title:"About Us"}  },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const title = to.meta.title
    if (title) {
        document.title = title
    }
    next()
})

export default router
