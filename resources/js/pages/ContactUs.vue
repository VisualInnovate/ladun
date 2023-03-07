<template>
    <Navbar />
    <h1>
        {{ $t("contactUs") }}
    </h1>

    <div
            class="flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 " 
        >
        <div class="flex-auto md:w-1/2 bg-black ">
            <small class="text-dark-brown my-5 px-2">
                {{ $t('beInTouch') }}
            </small>
            <form class="grid grid-cols gap-y-5 justify-center">
                <div class="flex">

                    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('fullName')">
                    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('email')">

                </div>
                <div class="flex">
                    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('mobile')">
                    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('subject')">

                </div>

                <textarea id="message" rows="4" class="mx-2 block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('content')"></textarea>

                <button type="submit" class="bg-dark-brown">{{ $t('sendNow') }}</button>
            </form>

        </div>
        <div class="flex-auto md:w-1/2 ">

            <p class="text-dark-footer-text-color py-5 md:py-10" >{{ $t('darkFooterText') }}</p>

        </div>

    
        </div>
    <DarkFooter />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import DarkFooter from "../components/DarkFooter.vue";
import { Input } from 'flowbite-vue'
</script>
