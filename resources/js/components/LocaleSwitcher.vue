<script setup>

import {computed, onBeforeMount} from 'vue'
import i18n from '../plugins/i18n';
import {Dropdown, ListGroup, ListGroupItem ,Input} from 'flowbite-vue'

import { ref } from "vue";

const value=ref("")
const show= ref(false)
import {useAppLangStore} from '../stores/AppLang';
const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}
function showtext(){
    console.log(show)
   return show.value=!(show.value)


}
function searchvalue(){
    console.log("E")
    return value.value=""
}

const appLang = useAppLangStore()

const currentLang = ref("English")

const localeBtn = computed({
    get() {
        if (i18n.global.locale.value == 'en') return 'English'
        else return 'العربية'
    },
    set(val) {
        appLang.appLang = val
    }
})
const secondLang = computed({
    get() {
        if (i18n.global.locale.value== 'en') return 'العربية'
        else return 'English'
    },
    set(val) {
        appLang.appLang = val
    }
})

const changeLocale = () => {
    if (i18n.global.locale.value == 'ar') {

        executeArCode()
    } else {

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
    <div class="mx-12  flex" >

        <div v-if="show" class="relative animate__animated animate__backInDown" >
            <svg @click="searchvalue()" class="absolute z-30 cursor-pointe top-[8%] left-1" width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 8L16 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 8L8 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

            <Input :placeholder='$t("click_search")' class="text-center text-base w-48 h-10 focus:ring-0" v-model="value">
                <template #prefix>
    </template>

        </Input>
        </div>
        <div  class="m-auto px-2" @click="showtext()">
            <svg class="cursor-pointer" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
         <div class="m-auto">
        <dropdown
            class="[&>div:nth-child(2n)>ul]:bg-[#51586B] [&>div:nth-child(2n)>ul]:w-100 px-2 [&>div:nth-child(2n)>ul]:p-2 [&>div:nth-child(2n)>ul]:box-border [&>div:nth-child(2n)]:bg-[#51586B] hover:[&>div:nth-child(2n)>ul>li]:bg-black [&>div:nth-child(2n)>ul>li]:text-[#D9D9D9] [&>div:nth-child(2n)>ul>li]:inline-block [&>div:nth-child(2n)>ul>li]:mx-0 [&>div:nth-child(2n)>ul>li]:text-start [&>div:nth-child(2n)>ul>li]:border-none [&>div:nth-child(2n)]:rounded-lg hover:cursor-pointer focus:outline-none  font-normal leading-6 text-white relative inline-block after:content-[''] after:absolute after:w-full after:h-[1px] after:rounded-lg after:bg-white after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100">
            <template #trigger class="w-full">
                <div class="flex items-center text-white">
                    <div @click="changeLocale" class="text-lg">   {{ secondLang }}</div>
                </div>
            </template>

        </dropdown>
        </div>
    </div>




</template>

<style scoped>

</style>
