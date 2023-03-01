import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';


export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                // 'resources/js/app.js',
                'resources/js/main.js',
            ],
            refresh: [
                ...refreshPaths,
                'app/Http/Livewire/**',
                "./node_modules/flowbite/**"
            ],
        }),
        vue(),
    ],
    resolve: {
        alias: {
          '@': resolve(__dirname, 'resources/js'),
        },
    },
});
