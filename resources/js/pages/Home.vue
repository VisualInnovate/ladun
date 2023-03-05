<template>
    <header class="relative flex h-screen overflow-hidden">
        <div class="px-6 pt-6 lg:px-8 w-full">
            <Navbar />
        </div>
        <div
            class="overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"
        ></div>
        <video
            autoplay
            loop
            muted
            class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
            <source
                src="../../videos/28mb_home_page_video.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
        <img
            class="z-30 justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 lg:h-auto"
            src="../../img/logowithouttext.svg"
        />
        <button
            class="bg-dark-brown text-white rounded-3xl z-30 absolute top-1/2 ltr:right-0 rtl:left-0 ltr:rotate-90 rtl:-rotate-90 origin-top -translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 w-72 h-10"
        >
            {{ $t("shareYourInterests") }}
        </button>
    </header>
    <button class="bg-dark-brown text-white rounded-full z-30 py-1 absolute w-72 h-14 bottom-0 translate-y-[1.5rem] left-1/2 -translate-x-1/2">
        {{ $t('scrollDown') }}
        <ChevronDownIcon class="h-6 w-6 text-white mx-auto my-1/2" />
    </button>

    <section>
        <div class="flex py-10 items-center" >

                <h2 class="flex-initial w-64 text-black before:content-[''] before:m-0.5  before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 ">
                    {{ $t('latestProjects') }}
                </h2>

                <h2 class="flex-initial text-center text-dark-brown px-10">
                    {{ $t('realEstateManagement') }}
                </h2>
                <div class="flex-initial border-l-2 border-grey w-2 h-10 ">

                </div>
                <h2 class="flex-initial text-center text-dark-brown px-10">
                    {{ $t('realEstateAssetManagement') }}
                </h2>

        </div>

        <div class="flex flex-row container mx-auto py-2 md:flex-nowrap flex-wrap">

            <div v-for="index in 3" :key="index" class="rounded-3xl border-2 border-gray-border-light bg-white sm:w-3/4  md:w-full mx-4">
                    <img class="w-full" src="../../img/projects_1.png" alt="Project Photo">
                    <div class="flex items-center">
                        <h3 class="flex-initial p-2">{{ $t('projectExampleTitle') }}</h3>
                        <span class="flex-initial mx-2 text-light-brown">
                            <MapPinIcon class="inline-block h-4 w-4 "/>
                            <small class="font-bold">{{ $t('projectLocation') }}</small>
                        </span>
                    </div>
                    <p class="px-2 text-grey text-sm">{{ $t('projectExampleText') }}</p>
                    <div class="flex justify-end my-4 mx-2">
                        <button class="bg-dark-brown text-white rounded-3xl w-36 h-8">
                            <small>
                                <MagnifyingGlassIcon class="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 justify-end" />{{ $t('exploreProject') }}
                            </small>
                        </button>
                    </div>

                    <div class="flex m-2">
                        <div class="flex-initial w-40">
                            <Bars3Icon class="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"/>
                            <small>{{ $t('residentialLandPlots') }}</small>
                        </div>
                        <div class="flex-initial w-14">
                            <BuildingOffice2Icon class="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"/>
                            <small>{{ $t('areaUnit') }}</small>
                        </div>
                        <div class="flex-initial w-14">
                            <BuildingOffice2Icon class="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"/>
                            <small>{{ $t('unit') }}</small>
                        </div>
                    </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import {MagnifyingGlassIcon, ChevronDownIcon, BuildingOffice2Icon, Bars3Icon } from "@heroicons/vue/24/outline";
import { MapPinIcon } from "@heroicons/vue/24/solid";
</script>
