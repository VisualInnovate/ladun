<template>
    <nav
        class="z-30 flex items-center justify-between relative"
        aria-label="Global"
    >
        <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Ladun</span>
                <img
                    v-show="!mobileMenuOpen"
                    src="../../img/logo.svg"
                    alt=""
                />
            </a>
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
            <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="text-md font-light leading-6 text-white hover:text-gray-700"
                >{{ item.name_ar }}</a
            >
        </div>
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
                            >{{ item.name_ar }}</a
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

const navigation = [
    { name: "Main", name_ar:"الرئيسية" ,href: "#" },
    { name: "About us", name_ar:"نبذة عنا" ,href: "#" },
    { name: "Companies", name_ar:"الشركات" ,href: "#" },
    { name: "Projects", name_ar:"المشاريع" ,href: "#" },
    { name: "Investors Relations", name_ar:"علاقات المستثمرين" ,href: "#" },
    { name: "Contact us", name_ar:"اتصل بنا" ,href: "#" },
    { name: "Join us", name_ar:"انضم الينا" ,href: "#" },
];
const mobileMenuOpen = ref(false);
</script>
