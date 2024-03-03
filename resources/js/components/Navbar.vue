<template>
    <div>
        <nav
            class="z-50 flex items-center py-4 top-0 h-[100px] w-full max-w-[1500px] mx-auto"
            aria-label="Global">

            <div class="flex lg:hidden mx-2">
                <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon v-show="!mobileMenuOpen" class="h-6 w-6 text-white" aria-hidden="true"/>
                </button>
            </div>


            <div class="flex pt-2">
                <router-link :to="{ name: 'Home' }" class="flex -m-1.5 p-1.5">
                    <!-- <span class="sr-only">Ladun</span> -->
                    <img v-show="!mobileMenuOpen" src="../../img/logo.png" alt="" class="p-5 pt-4 w-[11rem]"/>
                </router-link>
            </div>

            <div style="font-family: SuisseIntl-Regular;" class="hidden lg:flex lg:gap-x-6 ltr:right-0 rtl:left-0 ltr:mr-auto rtl:ml-auto m-auto ">

                <template
                    v-for="item in navigation"
                    :key="item.name"
                >
                    <dropdown
                        v-if="item.dropdown"
                        text="Bottom"
                        class="[&>div:nth-child(2n)>ul]:bg-[#51586B] [&>div:nth-child(2n)>ul]:w-100 [&>div:nth-child(2n)>ul]:p-2 [&>div:nth-child(2n)>ul]:box-border [&>div:nth-child(2n)]:bg-[#51586B] hover:[&>div:nth-child(2n)>ul>a>li]:bg-black [&>div:nth-child(2n)>ul>a>li]:text-[#D9D9D9] [&>div:nth-child(2n)>ul>a>li]:inline-block [&>div:nth-child(2n)>ul>a>li]:mx-0 [&>div:nth-child(2n)>ul>a>li]:text-start [&>div:nth-child(2n)>ul>a>li]:border-none [&>div:nth-child(2n)]:rounded-lg hover:cursor-pointer focus:outline-none  font-normal leading-6 text-white relative inline-block after:content-[''] after:absolute after:w-full after:h-[1px] after:rounded-lg after:bg-white after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100">
                        <template #trigger class="w-full">
                            <div class="flex justify-between text-white">
                                <div :id="item.name">{{ $t(item.name) }}</div>
                            </div>
                        </template>
                        <list-group class="border-none">
                            <template
                                v-for="dropdownItem in item.dropdownItems"
                            >
                            <router-link
                                :to="dropdownItem.href"
                            >
                                <list-group-item>
                                        {{ $t(dropdownItem.name) }}
                                    </list-group-item>
                                </router-link>
                            </template>
                        </list-group>
                    </dropdown>
                    <router-link
                        v-if="!item.dropdown"
                        :to="item.href"
                        class="font-normal leading-6 text-white relative inline-block after:content-[''] after:absolute after:w-full after:h-[1px] after:rounded-lg after:bg-white after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                    >{{ $t(item.name) }}
                    </router-link
                    >
                </template>

            </div>
            <div>
            <svg  @click="toggleDarkMode" v-if="x==0"  width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-white" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
            <path class="fill-white" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
        </svg>
            <svg  @click="toggleDarkMode" v-if="x==1" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-white" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
            <path class="fill-white" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
        </svg>
           </div>
            <LocaleSwitcher />
        </nav>
        <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen" class="z-50">
            <DialogPanel
                class="fixed top-0 inset-0 z-50 overflow-y-auto px-6 py-6 lg:hidden bg-background-overlay w-1/2 "
            >
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5 ">
                        <span class="sr-only">Ladun</span>
                        <img
                            aria-hidden="true"
                            class="h-10 pt-4"
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
                        <XMarkIcon class="h-6 w-6 text-white mx-5" aria-hidden="true"/>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <template
                                v-for="item in navigation"
                                :key="item.name"
                            >
                                <dropdown
                                    v-if="item.dropdown"
                                    text="Bottom"
                                    class="hover:cursor-pointer py-2 focus:outline-none  font-normal leading-6 text-white relative inline-block after:content-[''] after:absolute after:w-full after:h-[1px] after:rounded-lg after:bg-white after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100">
                                    <template #trigger class="w-full">
                                        <div class="flex justify-between text-white w-full">
                                            <div>{{ $t(item.name) }}</div>
                                        </div>
                                    </template>
                                    <list-group class="w-full">
                                        <template
                                            v-for="dropdownItem in item.dropdownItems"
                                        >
                                            <router-link
                                                :to="dropdownItem.href"
                                            >
                                                <list-group-item>
                                                    {{ $t(dropdownItem.name) }}
                                                </list-group-item>
                                            </router-link>
                                        </template>
                                    </list-group>
                                </dropdown>

                                <div
                                    v-if="!item.dropdown"

                                    class="-mx-3 block px-3 py-2  font-normal text-white "
                                >
                                    <router-link
                                        :to="item.href"
                                        class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:rounded-lg after:bg-white after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                                    >
                                        {{ $t(item.name) }}
                                    </router-link>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </div>
</template>

<script setup>
import {ref , onMounted } from "vue";
import {Dialog, DialogPanel} from "@headlessui/vue";
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline";
import LocaleSwitcher from "./LocaleSwitcher.vue";
import {Dropdown, ListGroup, ListGroupItem} from 'flowbite-vue'
const x=ref(0)
const navigation = [
    {name: "main", href: {name: 'Home'}, dropdown: false},
    {
        name: "aboutUs", href: '#', dropdown: true, dropdownItems: [
            {
                name: "summaryAboutTheCompany",
                href: {name: 'About Us'}
            },
            {
                name: "highboard",
                href: {name: 'highboard'}
            },
            {
                name: "mediaCenter",
                href: {name: 'Media Center'}
            },

        ]
    },
    {name: "companies", href: {name: 'Companies'}, dropdown: false},
    {name: "projects", href: {name: 'Projects'}, dropdown: false},
    {
        name: "investorsRelations", href: '#', dropdown: true, dropdownItems: [
            {
                name: "financialData",
                href: {name: 'Financial'}
            },
            {
                name: "companyAds",
                href: {name: 'Investors Ads'}
            },
            {
                name: "contactWithInvestorsRelations",
                href: {name: 'Contact With Investors Relations'}
            }
        ]
    },
    {name: "contactUs", href: {name: 'Contact Us'}, dropdown: false},
    {name: "joinUs", href: {name: 'Join Us'}, dropdown: false},
];
const mobileMenuOpen = ref(false);
const toggleDarkMode=()=>{
    if(x.value==0){
        x.value=1
    }else{
        x.value=0
    }
    document.documentElement.classList.toggle('dark');
}
onMounted(()=>{
    var pathArray = window.location.pathname.split('/'); // here i get link to add some style in active link unfortunately not the best way i will upgrade next time
    if (pathArray[1]== "about" || pathArray[1]== "highboard" || pathArray[1]== "media-center" ) {
        document.getElementById('aboutUs').style['color']='#eeb013'
    }

    if (pathArray[1]== "financials" || pathArray[1]== "investors-ads" || pathArray[1]== "investors-relations-contact" ) {
        document.getElementById('investorsRelations').style['color']='#eeb013'
    }



})


</script>

<style lang="scss" scoped>
.router-link-active{//put some style in active link in navbar
    color: #eeb013;
}
</style>
