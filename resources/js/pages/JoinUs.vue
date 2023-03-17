<template>
<Navbar class="bg-black fixed z-50 w-full" />
<div class="container mx-auto">

    <h1 class="pt-36 mx-6 mb-5 font-bold">
        {{ $t("joinUs") }}
    </h1>


    <div
        class="flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5"
    >
        <div class="flex-auto md:w-1/2 ">
            <div class="bg-black rounded-lg mb-14">
                <div class="text-dark-brown py-10 px-5 text-sm">
                    {{ $t('pleaseFill') }}
                </div>
                <form class="grid gap-y-10 mx-5">
                    <div class="flex justify-center gap-x-5">

                        <input type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('fullName')">
                        <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('email')">

                    </div>
                    <div class="flex justify-center gap-x-5">
                        <input type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('mobile')">
                        <!-- <input type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('gender')"> -->

                        <!-- gender -->
                        <!-- flowbit-vue dropdown -->
                        <dropdown text="Bottom" class="hover:cursor-pointer rounded-lg [&>div]:w-full w-1/2 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50  dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800  bg-dark-brown " >
                            <template #trigger class="w-full">
                                <div class="flex justify-between px-4 text-white w-full"><div>{{ $t('gender') }}</div> <svg class="my-auto w-4 h-4 ltr:ml-14 rtl:mr-14" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
                            </template>
                            <list-group class="w-full">
                                <list-group-item>
                                    {{ $t('male') }}
                                </list-group-item>
                                <list-group-item>
                                    {{ $t('female') }}
                                </list-group-item>
                            </list-group>
                        </dropdown>
                    </div>
                    <div class="flex justify-center gap-x-5">
                        <input type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('academicCertification')">
                        <input type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('specialization')">
                    </div>
                    <div class="flex justify-center gap-x-5">
                        <input type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('position')">
                        <input type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('uploadCV')">
                    </div>

                    <button type="submit" class="bg-dark-brown h-10 mb-10 mx-2 text-white ">{{ $t('sendNow') }}</button>
                </form>
            </div>




        </div>
        <div class="w-full md:w-1/2 mb-5 bg-about-us-page-image bg-no-repeat bg-cover bg-center ">
        </div>


    </div>

</div>

    <DarkFooter />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import DarkFooter from "../components/DarkFooter.vue";
import { Input, Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>
