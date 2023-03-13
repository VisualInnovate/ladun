import "./bootstrap";
import "../css/app.css"
import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "@/plugins/i18n";
// import 'gitart-vue-dialog/dist/style.css'
import App from "./app.vue";
import axios from 'axios'


const axiosInstance = axios.create({
    withCredentials: true,
})

import router from "./router";

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(i18n);
app.config.globalProperties.$axios = { ...axiosInstance }

app.mount("#app");
