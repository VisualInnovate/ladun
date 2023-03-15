<script setup>

import { computed } from 'vue'
import i18n from '../plugins/i18n';

import { GlobeAltIcon } from "@heroicons/vue/24/solid";

import { useAppLangStore } from '../stores/AppLang';

const appLang = useAppLangStore()

const localeBtn = computed({
  get() {
    if(appLang.appLang == 'en') return 'ar'
    else return 'en'
  },
  set(val) {
    appLang.appLang = val
  }
})

const changeLocale = () => {
  (i18n.global.locale.value == 'ar')? executeArCode():executeEnCode()
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
    <button @click="changeLocale">
      <GlobeAltIcon class="h-8 w-8 text-white" />
    </button>
</template>

<style scoped>

</style>
