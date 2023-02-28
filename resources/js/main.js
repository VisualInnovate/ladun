import './bootstrap';


import {createApp} from 'vue'

import App from './app.vue'

import {createRouter, createMemoryHistory, createWebHistory} from 'vue-router'

const routes=[
    { path: '/', component: './components/ExampleComponent.vue' },
    { path: '/user', component: './components/User.vue' }
]
const router =  createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes})
const app = createApp(App)
app.use(router)
app.mount("#app")
