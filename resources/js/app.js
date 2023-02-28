import './bootstrap';

import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import {createApp} from 'vue'

import App from './app.vue'

window.Alpine = Alpine;

Alpine.plugin(focus);

Alpine.start();


createApp(App).mount("#app")
