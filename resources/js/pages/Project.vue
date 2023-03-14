<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <div class=" pt-32"></div>
    <div class="relative img-banner-slot">
        <div class=" overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
        <img class="w-full" src="../../img/real-state-management-banner.png">

        <div class="z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
            <img class="w-[30%] md:w-[60%] lg:w-[80%] mx-auto md:mb-3 rounded-full"
                v-if="project.logo"
                 :src="project.logo.original_url">
            <p class="text-center text-sm md:text-3xl" v-if="project.title" >{{ project.title[$i18n.locale] }}</p>
        </div>

    </div>

    <section class="genaral-info bg-brown-section">
        <div class="container mx-auto ">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20  lg:grid-cols-4 lg:gap-16 text-white p-10 ">

                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto  ">
                    <img class="w-auto mx-auto" src="../../img/icon-area.png">
                    <div class="my-auto mx-auto">
                        <p>Area Of Land</p>
                        <p class="font-bold">{{ project.Land_area }} m2</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto  ">
                    <img class="w-auto mx-auto" src="../../img/icon-area.png">
                    <div class="my-auto mx-auto">
                        <p>Area Of Building</p>
                        <p class="font-bold">{{ project.building_area }} m2</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto  ">
                    <img class="w-auto mx-auto" src="../../img/icon-area.png">
                    <div class="my-auto mx-auto">
                        <p>Number of Units</p>
                        <p class="font-bold">{{ project.units_number }}</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto  ">
                    <img class="w-auto mx-auto" src="../../img/icon-area.png">
                    <div class="my-auto mx-auto">
                        <p>Number of Models</p>
                        <p class="font-bold">{{ project.models_number }}</p>
                    </div>
                </div>

            </div>

        </div>
    </section>


    <!-- navigation -->
    <section class="bg-white drop-shadow-md">
        <div class="container mx-auto">
            <div class="py-10 w-full lg:w-[60%]">
                <div
                    class="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-15  lg:grid-cols-6 lg:gap-14 mx-auto items-center ">


                    <div class="mx-auto font-bold">
                        <a href="#" v-scroll-to="{
                            el: '#project',
                            offset: -128
                        }">
                        Project
                        </a>
                    </div>

                    <div class="mx-auto font-bold">
                        <a href="#" v-scroll-to="{
                            el: '#utilities',
                            offset: -128
                        }">
                        Utilities
                        </a>
                    </div>

                    <div class="mx-auto font-bold">
                        <a href="#" v-scroll-to="{
                            el: '#downloads',
                            offset: -128
                        }">
                        Downloads
                        </a>
                    </div>

                    <div class="mx-auto font-bold">
                        <a href="#" v-scroll-to="{
                            el: '#project_models',
                            offset: -128
                        }">
                        Project Models
                        </a>
                    </div>

                    <div class="mx-auto font-bold">
                        <a href="#" v-scroll-to="{
                            el: '#location',
                            offset: -128
                        }">
                        Location
                        </a>
                    </div>

                    <a 
                        class="mx-auto font-bold button bg-light-brown text-white  w-full text-center py-2"
                        href="#" v-scroll-to="{
                            el: '#ask_us',
                            offset: -128
                        }">
                        Ask Us
                    </a>


                </div>
            </div>

        </div>

    </section>


    <!-- project section -->
    <section class="company-info py-28 bg-background-section" id="project">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col ">
                    <h1 class=" text-3xl mb-4" ></h1>
                    <p class="mb-24 text-base" v-if="project.text" v-html="project.text[$i18n.locale]"></p>

                </div>

                <div class="img-company-info ">
                    <img v-if="project.logo" :src="project.logo.original_url">

                </div>


            </div>
        </div>


    </section>
    
    <!-- gallery section -->
    <section>
        <vue-carousel :items="getGallery(project.gallery)" />
    </section>

    <!-- utilities section -->
    <section
        id="utilities"
        class="relative bg-real-state-managemnt-utility-section bg-cover  pt-40 pb-16  text-white flex items-center">
        <div class=" overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
        <div class="z-40   container mx-auto">
            <h2 class="mb-5 text-light-brown ">high level utility </h2>
            <p class="text-sm mb-10">for more information please contact on email </p>
            <div class="flex flex-wrap">
                <div class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]">
                    <div class=" p-7 rounded-full bg-white z-20 mb-2">
                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                    </div>

                    <p class="text-sm">Driver Room</p>
                </div>
                <div class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]">
                    <div class=" p-7 rounded-full bg-white z-20 mb-2">
                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                    </div>

                    <p class="text-sm">Garden</p>
                </div>
                <div class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]">
                    <div class=" p-7 rounded-full bg-white z-20 mb-2">
                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                    </div>

                    <p class="text-sm">Cars Parking</p>
                </div>
                <div class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]">
                    <div class=" p-7 rounded-full bg-white z-20 mb-2">
                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                    </div>

                    <p class="text-sm whitespace-nowrap">Swimming Pool</p>
                </div>

            </div>
        </div>

    </section>

    <!-- downloads sections -->
    <section class="company-info py-20 bg-background-section" id="downloads">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col justify-center">
                    <h1 class=" text-3xl text-light-brown mb-4">Download Project Files</h1>
                    <p class="mb-24 text-sm">
                        أصل عقاري يتم إدارته عن طريق لدن للاستثمار ، يقع في عروس البحر الأحمر وفي موقع استراتيجي بشمال
                        جدة وبالقرب من العديد من مناطق الجذب والخدمات الراقية كان كومباوند أكوا بحلته المميزة والتي

                    </p>

                    <div class="company-button ">
                        <div class="flex flex-wrap justify-between" v-if="project.downloads" >
                            <div class="w-1/2 mb-5" v-for="file in project.downloads">
                                <a :href="`/storage/${file.project_attachment}`" target="_blank" class="hover:bg-green-400 hover:cursor-pointer special-button text-xl button bg-dark-brown  rounded-lg flex items-center text-white px-2 py-2 my-5 mb-14 ml-4 rtl:mr-4">
                                    <ArrowDownTrayIcon class="text-white w-6 h-6 rtl:ml-6 ltr:mr-6"/>
                                    {{ file.name[$i18n.locale] }}
                                </a>
                            </div>


                        </div>


                    </div>


                </div>

                <div class="img-company-info ">
                    <img src="../../img/video-real-state-management.png">

                </div>


            </div>
        </div>


    </section>

    <!-- project models -->
    <section class="company-info   py-28 pt-16  bg-background-section " id="project_models">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col justify-center">
                    <h1 class="font-bold text-3xl mb-4 text-center md:text-start">Project Models </h1>
                    <tabs variant="underline" v-model="activeTab" class="p-5">
                        <!-- class appends to content DIV for all tabs -->
                            <tab v-for="model in project.project_models" :name="model.title['en']" :title="model.title[$i18n.locale]" >
                                <div class="text mb-5">
                                    <p>Land Area: {{ model.Land_area }}</p>
                                    <p>Building Area: {{ model.building_area }}</p>
                                    <p>Floors Number: {{ model.floors_number }}</p>
                                    <p>Units Number: {{ model.units_number }}</p>
                                </div>
                                <div class="flex flex-wrap">
                                    <div
                                        v-for="utility in model.utilities"
                                        class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">

                                        <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                            <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                        </div>
    
                                        <p class="text-sm whitespace-nowrap">{{ utility.title[$i18n.locale] }}</p>

                                    </div>
                                </div>
                            </tab>

                    </tabs>
                </div>

                <div class="img-company-info  ">
                    <Carousel :pictures="getGallery(project.gallery)"
                              class="about-us-carousel h-[690px] [&>div:first-child]:h-[690px]  [&>div>div>img]:h-[690px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1  "/>

                </div>


            </div>
        </div>


    </section>

    <!-- location -->
    <section class="company-info   py-28 bg-background-section" id="location">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col justify-center">
                    <h1 class="font-bold text-3xl mb-4 text-center md:text-start">Location </h1>
                    <p class="mb-24 text-3xl text-dark-brown">
                        في قلب المدينه

                    </p>

                    <p class="flex " dir="rtl" v-if="project.address">
                        <MapPinIcon class="w-6 h-6 text-black"/>
                        {{ project.address[$i18n.locale] }}
                    </p>

                </div>

                <div class="img-company-info  ">
                    <iframe class="w-full h-[550px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.312148166532!2d46.668574651149!3d24.681794158394528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f034b4ad55d0b%3A0x9724c2fb9fb4fce6!2sLadun%20Investment!5e0!3m2!1sen!2seg!4v1678629276760!5m2!1sen!2seg"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>


            </div>
        </div>


    </section>

    <!-- ask_us -->
    <section class="text-center py-28" id="ask_us">
        <div class="container mx-auto">
            <h2 class="mb-5">للإستفسارات والملاحظات</h2>
            <p>
                لجميع الاستفسارات المتعلقة بمشاريع لدن يرجى الاتصال بنا على الرقم
                المجاني: 920011560
            </p>
            <p>
                في حال الاتصال من خارج المملكة العربية السعودية، يرجى الاتصال بنا
                على الرقم 9692001156
            </p>

            <div
                class="flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5 w-"
            >
                <div class="flex-auto md:w-1/2">
                    <div class="bg-black rounded-lg mb-14">
                        <div class="text-dark-brown py-10 px-5 text-sm">
                            {{ $t("pleaseFill") }}
                        </div>
                        <form class="grid gap-y-10 mx-5">
                            <div class="flex justify-center gap-x-5">
                                <!-- choose your inquiry -->
                                <dropdown
                                    text="Bottom"
                                    class="hover:cursor-pointer rounded-lg [&>div]:w-full w-1/2 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"
                                >
                                    <template #trigger class="w-full">
                                        <div
                                            class="flex justify-between px-4 text-white w-full"
                                        >
                                            <div>اختر طلبك</div>
                                            <svg
                                                class="my-auto w-4 h-4 ltr:ml-14 rtl:mr-14"
                                                aria-hidden="true"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </div>
                                    </template>
                                </dropdown>
                                <input
                                    type="text"
                                    id="helper-text"
                                    aria-describedby="helper-text-explanation"
                                    class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('mobile')"
                                />
                            </div>
                            <div class="flex justify-center gap-x-5">
                                <input
                                    type="text"
                                    id="helper-text"
                                    aria-describedby="helper-text-explanation"
                                    class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('fullName')"
                                />
                                <input
                                    type="email"
                                    id="helper-text"
                                    aria-describedby="helper-text-explanation"
                                    class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('email')"
                                />
                            </div>

                            <button
                                type="submit"
                                class="bg-dark-brown h-10 mb-10 mx-2 text-white"
                            >
                                {{ $t("sendNow") }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <p>
                اذا واجهتك أي مشكلة في التقديم <a href="#" class="text-dark-brown">راسلنا الآن</a>
            </p>
        </div>

    </section>


    <DarkFooter/>
</template>

<script setup>

import { useRoute } from 'vue-router';
import { ref, onBeforeMount, computed} from 'vue'
import {Input, Dropdown} from 'flowbite-vue'
import {ArrowDownTrayIcon} from "@heroicons/vue/24/solid";
import {Tabs, Tab} from 'flowbite-vue'
import {Carousel} from 'flowbite-vue'
import { MapPinIcon} from "@heroicons/vue/24/solid";
import Navbar from '../components/Navbar.vue';
import DarkFooter from '../components/DarkFooter.vue';
import VueCarousel from "@/components/VueCarousel.vue";
import axios from 'axios';


const route  = useRoute();

const activeTab = ref()


const getGallery = (gallery) => {
    if(gallery){
        return Object.values(gallery).map((image)=>{
          return {
            src: image.original_url ,
            alt: image.name
          }
      })
    }
    else{
        return [];
    }

};

const project = ref({});
onBeforeMount(async ()=>{

    const response = await axios.get(`/api/projects/${route.params.id}`)
    
    project.value  = response.data.data

    activeTab.value = project.value.project_models[0].title['en']

})

</script>



