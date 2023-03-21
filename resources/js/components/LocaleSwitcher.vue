<script setup>

import {computed} from 'vue'
import i18n from '../plugins/i18n';
import {Dropdown, ListGroup, ListGroupItem} from 'flowbite-vue'
import { ref, onBeforeMount } from "vue";

import {GlobeAltIcon} from "@heroicons/vue/24/solid";

import {useAppLangStore} from '../stores/AppLang';

const appLang = useAppLangStore()

const currentLang = ref("English")
const secondLang = ref("Arabic")
const localeBtn = computed({
    get() {
        if (appLang.appLang == 'en') return 'ar'
        else return 'en'
    },
    set(val) {
        appLang.appLang = val
    }
})

const changeLocale = () => {
    if (i18n.global.locale.value == 'ar') {
        currentLang.value = "English"
        secondLang.value = "Arabic"
        executeArCode()
    } else {
        currentLang.value = "Arabic"
        secondLang.value = "English"
        executeEnCode()

    }


}

const executeArCode = () => {
    i18n.global.locale.value = 'en'
    appLang.setAppLang(i18n.global.locale.value)
    appLang.setAppRtl(false)

}

const executeEnCode = () => {
    i18n.global.locale.value = 'ar'
    appLang.setAppLang(i18n.global.locale.value)
    appLang.setAppRtl(true)

}
</script>

<template>


    <dropdown

        class="[&>div:nth-child(2n)>ul]:bg-[#51586B] [&>div:nth-child(2n)>ul]:w-100 [&>div:nth-child(2n)>ul]:p-2 [&>div:nth-child(2n)>ul]:box-border [&>div:nth-child(2n)]:bg-[#51586B] hover:[&>div:nth-child(2n)>ul>li]:bg-black [&>div:nth-child(2n)>ul>li]:text-[#D9D9D9] [&>div:nth-child(2n)>ul>li]:inline-block [&>div:nth-child(2n)>ul>li]:mx-0 [&>div:nth-child(2n)>ul>li]:text-start [&>div:nth-child(2n)>ul>li]:border-none [&>div:nth-child(2n)]:rounded-lg hover:cursor-pointer focus:outline-none  font-normal leading-6 text-white relative inline-block after:content-[''] after:absolute after:w-full after:h-[1px] after:rounded-lg after:bg-white after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100">
        <template #trigger class="w-full">
            <div class="flex items-center text-white">
                <div class="px-3">{{ currentLang }}</div>
                <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

        </template>
        <list-group class="border-none">
            <list-group-item @click="changeLocale">

                {{ secondLang }}

            </list-group-item>
        </list-group>
    </dropdown>


</template>

<style scoped>

</style>
