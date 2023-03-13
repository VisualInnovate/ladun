<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <div class="relative img-banner-slot pt-32">
        <div class=" overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
        <img class="w-full" src="../../img/real-state-management-banner.png">

        <div class="z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 ">
            <img class="w-[30%] md:w-[60%] lg:w-[80%] mx-auto md:mb-3"
                 src="../../img/img-logo-real-state-managemnt.png">
            <p class="text-center text-sm md:text-3xl">مجمع اكوا السكني </p>
        </div>

    </div>
<!--    test carsoul  card-->


    <section class="genaral-info bg-brown-section">
        <div class="container mx-auto ">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20  lg:grid-cols-4 lg:gap-16 text-white p-10 ">

                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto  ">
                    <img class="w-auto mx-auto" src="../../img/icon-area.png">
                    <div class="my-auto mx-auto">
                        <p>Area Of Land</p>
                        <p class="font-bold">438.124 m2</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto  ">
                    <img class="w-auto mx-auto" src="../../img/icon-area.png">
                    <div class="my-auto mx-auto">
                        <p>Area Of Land</p>
                        <p class="font-bold">438.124 m2</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto  ">
                    <img class="w-auto mx-auto" src="../../img/icon-area.png">
                    <div class="my-auto mx-auto">
                        <p>Area Of Land</p>
                        <p class="font-bold">438.124 m2</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto  ">
                    <img class="w-auto mx-auto" src="../../img/icon-area.png">
                    <div class="my-auto mx-auto">
                        <p>Area Of Land</p>
                        <p class="font-bold">438.124 m2</p>
                    </div>
                </div>

            </div>

        </div>
    </section>


    <section class="bg-white">
        <div class="container mx-auto">
            <div class="py-10 w-full lg:w-[60%]">
                <div
                    class="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-15  lg:grid-cols-6 lg:gap-14 mx-auto flex items-center ">


                    <div class="mx-auto font-bold">
                        projects
                    </div>

                    <div class="mx-auto font-bold">
                        projects
                    </div>

                    <div class="mx-auto font-bold">
                        projects
                    </div>

                    <div class="mx-auto font-bold">
                        projects
                    </div>

                    <div class="mx-auto font-bold">
                        projects
                    </div>

                    <a class="mx-auto font-bold button bg-light-brown text-white  w-full text-center py-2">
                        Ask Us
                    </a>


                </div>
            </div>

        </div>

    </section>


    <section class="company-info py-28 bg-background-section">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col ">
                    <h1 class=" text-3xl mb-4">Project </h1>
                    <p class="mb-24 text-base">
                        أصل عقاري يتم إدارته عن طريق لدن للاستثمار ، يقع في عروس البحر الأحمر وفي موقع استراتيجي بشمال
                        جدة وبالقرب من العديد من مناطق الجذب والخدمات الراقية كان كومباوند أكوا بحلته المميزة والتي
                        تحتوي أرقى الخدمات التي توفر لقاطنية الراحة والرفاهية التي يستحقونها في بيئة مثالية وعصرية
                        ومتكاملة

                    </p>

                </div>

                <div class="img-company-info ">
                    <img src="../../img/video-real-state-management.png">

                </div>


            </div>
        </div>


    </section>
    <section>
        <vue-carousel :items="gallery" />
    </section>
    <section
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

                    <p class="text-sm">garden</p>
                </div>
                <div class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]">
                    <div class=" p-7 rounded-full bg-white z-20 mb-2">
                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                    </div>

                    <p class="text-sm">garden</p>
                </div>
                <div class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]">
                    <div class=" p-7 rounded-full bg-white z-20 mb-2">
                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                    </div>

                    <p class="text-sm">garden</p>
                </div>
                <div class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]">
                    <div class=" p-7 rounded-full bg-white z-20 mb-2">
                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                    </div>

                    <p class="text-sm">garden</p>
                </div>

            </div>
        </div>

    </section>

    <section class="company-info py-28  pt-20 bg-background-section">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col justify-center">
                    <h1 class=" text-3xl text-light-brown mb-4">Project </h1>
                    <p class="mb-24 text-sm">
                        أصل عقاري يتم إدارته عن طريق لدن للاستثمار ، يقع في عروس البحر الأحمر وفي موقع استراتيجي بشمال
                        جدة وبالقرب من العديد من مناطق الجذب والخدمات الراقية كان كومباوند أكوا بحلته المميزة والتي

                    </p>

                    <div class="company-button ">
                        <div class="flex flex-wrap justify-between">
                            <div class="w-1/2 mb-5">
                                <a class=" special-button text-xl button bg-dark-brown  rounded-lg flex items-center justify-center text-white px-11 py-2 my-5 mb-14 ml-4 rtl:mr-4">
                                    <ArrowDownTrayIcon class="text-white w-6 h-6 rtl:ml-6 ltr:mr-6"/>
                                    Project brochure

                                </a>
                            </div>
                            <div class="w-1/2 mb-5">
                                <a class=" special-button text-xl button bg-dark-brown rounded-lg  flex items-center justify-center text-white px-11 py-2 my-5 mb-14 ml-4 rtl:mr-4">
                                    <ArrowDownTrayIcon class="text-white w-6 h-6 rtl:ml-6 ltr:mr-6"/>
                                    Project brochure

                                </a>
                            </div>

                            <div class="w-1/2 mb-5">
                                <a class=" special-button text-xl button bg-dark-brown rounded-lg  flex items-center justify-center text-white px-11 py-2 my-5 mb-14 ml-4 rtl:mr-4">
                                    <ArrowDownTrayIcon class="text-white w-6 h-6 rtl:ml-6 ltr:mr-6"/>
                                    Project brochure

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
    <section class="company-info   py-28 pt-16  bg-background-section  ">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col justify-center">
                    <h1 class="font-bold text-3xl mb-4 text-center md:text-start">Project Models </h1>
                    <tabs variant="underline" v-model="activeTab" class="p-5">
                        <!-- class appends to content DIV for all tabs -->
                        <tab name="first" title="Model A">
                            <div class="text mb-5">
                                <p>مساحة الأرض : 386 متر مربع</p>
                                <p>مساحة الأرض : 386 متر مربع</p>
                                <p>مساحة الأرض : 386 متر مربع</p>
                            </div>
                            <div class="flex flex-wrap">
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>


                            </div>
                        </tab>
                        <tab name="second" title="Model B">
                            <div class="text mb-5">
                                <p>مساحة الأرض : 386 متر مربع</p>
                                <p>مساحة الأرض : 386 متر مربع</p>
                                <p>مساحة الأرض : 386 متر مربع</p>
                            </div>

                            <div class="flex flex-wrap">
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>


                            </div>
                        </tab>
                        <tab name="third" title="Model C">
                            <div class="text mb-5">
                                <p>مساحة الأرض : 386 متر مربع</p>
                                <p>مساحة الأرض : 386 متر مربع</p>
                                <p>مساحة الأرض : 386 متر مربع</p>
                            </div>
                            <div class="flex flex-wrap">
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>
                                <div
                                    class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">
                                    <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                        <img src="../../img/icon-utility.png" class="w-[35px] h-[35px] z-40">
                                    </div>

                                    <p class="text-sm">garden</p>
                                </div>


                            </div>
                        </tab>

                    </tabs>
                </div>

                <div class="img-company-info  ">
                    <Carousel :pictures="gallery"
                              class="about-us-carousel h-[690px] [&>div:first-child]:h-[690px]  [&>div>div>img]:h-[690px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1  "/>

                </div>


            </div>
        </div>


    </section>


    <section class="company-info   py-28 bg-background-section ">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col justify-center">
                    <h1 class="font-bold text-3xl mb-4 text-center md:text-start">Location </h1>
                    <p class="mb-24 text-3xl text-dark-brown">
                        في قلب المدينه

                    </p>

                    <p class="flex " dir="rtl">
                        <MapPinIcon class="w-6 h-6 text-black"/>
                        Riyadh, Saudi Arabia
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


    <section class="text-center py-28">
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
import Navbar from '../components/Navbar.vue';
import {Input, Dropdown, ListGroup, ListGroupItem} from 'flowbite-vue'

import DarkFooter from '../components/DarkFooter.vue';
import {ArrowDownTrayIcon} from "@heroicons/vue/24/solid";

import {Tabs, Tab} from 'flowbite-vue'

const activeTab = ref('first')

import {Carousel} from 'flowbite-vue'
import {PhoneIcon, PlayCircleIcon, MapPinIcon} from "@heroicons/vue/24/solid";
import {ref, computed, onUpdated} from 'vue'


import VueCarousel from "@/components/VueCarousel.vue";

const gallery = ref([
    {
        src: new URL('../../img/about-us-info.png', import.meta.url).href,
        alt: 'project_1'
    },
    {
        src: new URL('../../img/about_ladun_image.png', import.meta.url).href,
        alt: 'project_2'
    },
    {
        src: new URL('../../img/about-us-info.png', import.meta.url).href,
        alt: 'project_2'
    },
    {
        src: new URL('../../img/about_ladun_image.png', import.meta.url).href,
        alt: 'project_1'
    },
    {
        src: new URL('../../img/about-us-info.png', import.meta.url).href,
        alt: 'project_2'
    },
    {
        src: new URL('../../img/about_ladun_image.png', import.meta.url).href,
        alt: 'project_2'
    },
]);


</script>



