import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("@/pages/Home.vue"),meta:{title:"Home"} },
    { path: "/companies", component: () => import("@/pages/Companies.vue"),meta:{title:"Companies"}  },

    { path: "/media-center", component: () => import("@/pages/MediaCenter.vue"),meta:{title:"Media Center"}  },
    { path: "/investors-ads", component: () => import("@/pages/InvestorsAds.vue"),meta:{title:"investors Ads"}  },
    { path: "/about", component: () => import("@/pages/AboutPage.vue"),meta:{title:"About Us"}  },
    { path: "/financial", component: () => import("@/pages/FinancialData.vue"),meta:{title:"financial"}  },

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
