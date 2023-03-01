import "./bootstrap";
import "../css/app.css"
import { createApp } from "vue";

import 'flowbite'
import App from "./app.vue";

import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
