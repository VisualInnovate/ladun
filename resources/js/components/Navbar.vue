<template>
    <nav
        class="z-30 flex items-center justify-between relative bg-background-overlay"
        aria-label="Global"
    >
        <div class="flex lg:flex-1">
            <router-link :to="{ name: 'Home' }" class="-m-1.5 p-1.5">
                <span class="sr-only">Ladun</span>
                <img v-show="!mobileMenuOpen" src="../../img/logo.svg" alt="" />
            </router-link>
        </div>
        
        
        <div class="flex lg:hidden">
            <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true"
            >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6 text-white" aria-hidden="true" />
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12 ltr:right-0 rtl:left-0">
            <router-link

                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="text-md font-normal leading-6 text-white hover:text-gray-700"
                >{{ $t(item.name) }}</router-link
            >
        </div>
        <LocaleSwitcher class="mx-2" />
    </nav>
    <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <DialogPanel
        class="fixed inset-0 z-10 overflow-y-auto px-6 py-6 lg:hidden"
        >
            <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Ladun</span>
                    <img
                        aria-hidden="true"
                        class="h-10"
                        src="../../img/logo.svg"
                        alt=""
                    />
                </a>
                <button
                    type="button"
                    class="-m-2.5 rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = false"
                >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <a
                            v-for="item in navigation"
                            :key="item.name"
                            :href="item.href"
                            class="-mx-3 block rounded-lg py-2 px-3 text-md font-light leading-6 text-white hover:bg-gray-400/10"
                            >{{ $t(item.name) }}</a
                        >
                    </div>
                </div>
            </div>
        </DialogPanel>
    </Dialog>
    

</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import LocaleSwitcher from "./LocaleSwitcher.vue";
const navigation = [
    { name: "main", href: "#" },
    { name: "aboutUs", href: { name: 'About Us' } },
    { name: "companies", href: "#" },
    { name: "projects", href: "#" },
    { name: "investorsRelations", href: "#" },
    { name: "contactUs", href: "#" },
    { name: "joinUs", href: "#" },
];
const mobileMenuOpen = ref(false);
</script>
