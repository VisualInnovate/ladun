<template>
    <!-- header section -->
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
    <!-- end of header section -->
    <!-- Latest Project section -->
    <section>
        <div class="grid grid-cols-4 gap-4 my-10" >

                <h2 class=" flex text-black before:content-[''] before:m-0.5  before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto ">
                    {{ $t('latestProjects') }}
                </h2>
                <h2 class=" flex justify-end text-center text-dark-brown after:content-['']  after:w-1 after:h-10   after:bg-grey after:rounded after:mr-2 after:my-auto">
                    {{ $t('realEstateManagement') }}
                </h2>

                <h2 class=" flex text-dark-brown">
                    {{ $t('realEstateAssetManagement') }}
                </h2>

        </div>

        <div class="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 lg:grid-cols-4 mx-auto container px-5">

            <div v-for="index in 4" :key="index" class="rounded-3xl border-2 border-gray-border-light bg-white">
                    <img class="w-full" src="../../img/projects_1.png" alt="Project Photo">
                    <div class="flex items-center">
                        <h3 class="flex-initial p-2">{{ $t('projectExampleTitle') }}</h3>
                        <span class="flex-initial mx-2 text-light-brown">
                            <MapPinIcon class="inline-block h-4 w-4 "/>
                            <small class="font-bold">{{ $t('projectLocation') }}</small>
                        </span>
                    </div>
                    <p class="px-2 text-grey text-xs">{{ $t('projectExampleText') }}</p>
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
    <!-- End of Latest Project section -->

    <!-- About Us section -->
    <section class="relative">
        <div class="flex py-5" >
            <h2 class="flex-initial w-64 text-black before:content-[''] before:m-0.5  before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 ">
                {{ $t('aboutLadun') }}
            </h2>
        </div>
        <div class="grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-3 mx-auto container px-5">

            <p class="px-2 my-auto text-grey text-xs">{{ $t('projectExampleText') }}</p>
            <div class="grid grid-cols-3 gap-5 mx-auto container px-5 justify-items-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 sm:w-48 w-20 gap-1  md:grid-cols-3">
                    <img src="../../img/experience_years.svg" alt="experience_years" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block">{{ $t('experienceYears') }}</p></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 sm:w-48 w-20 gap-1  md:grid-cols-3">
                    <img src="../../img/projects_units.svg" alt="projects_units" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block">{{ $t('projectsUnits') }}</p></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 sm:w-48 w-20 gap-1  md:grid-cols-3">
                    <img src="../../img/affiliate.svg" alt="affiliate" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block">{{ $t('affiliate') }}</p></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 sm:w-48 w-20 gap-1  md:grid-cols-3">
                    <img src="../../img/projects_investment.svg" alt="projects_investment" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block">{{ $t('projectsInvestment') }}</p></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 sm:w-48 w-20 gap-1  md:grid-cols-3">
                    <img src="../../img/projects_areas.svg" alt="projects_areas" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block">{{ $t('projectsAreas') }}</p></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 sm:w-48 w-20 gap-1  md:grid-cols-3">
                    <img src="../../img/projects_revenue.svg" alt="projects_revenue" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block">{{ $t('projectsRevenue') }}</p></div>
                </div>
            </div>
            <img class="w-full" src="../../img/about_ladun_image.png" alt="About Ladun">

        </div>

        <!-- share your interest -->
        <div class="rounded-3xl border-2 border-yellow-300 bg-gray-100 w-3/4 h-14 mx-auto text-center font-light py-2 my-5">
            {{ $t('shareYourInterestWithUs') }}
        </div>

        <!-- dropdown -->

    <dropdown text="Bottom" class="custom-dropdown w-1/2 h-10 bottom-0 translate-y-[1.5rem] left-1/2 -translate-x-1/2 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50  dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800  bg-dark-brown " >
    <template #trigger>

        <span class="inline-flex justify-between px-4 text-white custom-span"><span>{{ $t('choose') }}</span> <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>

    </template>
    <list-group>
      <list-group-item>
        <template #prefix>
          <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
        </template>
        Profile
      </list-group-item>
      <list-group-item>
        <template #prefix>
          <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
        </template>
        Settings
      </list-group-item>
      <list-group-item>
        <template #prefix>
          <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
        </template>
        Messages
      </list-group-item>
      <list-group-item>
        <template #prefix>
          <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
        </template>
        Download
      </list-group-item>
    </list-group>
    </dropdown>

    </section>
    <!-- End About Us section -->
    <!-- footer section -->
    <LightFooter />

</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import LightFooter from "../components/LightFooter.vue"
import {MagnifyingGlassIcon, ChevronDownIcon, BuildingOffice2Icon, Bars3Icon } from "@heroicons/vue/24/outline";
import { MapPinIcon } from "@heroicons/vue/24/solid";
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>

<style scoped lang="scss">
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

strong.counter {
  animation: counter forwards normal 5s ease-in-out;
  counter-reset: num var(--num);
}
strong.counter::after {
  content: counter(num);
}

@keyframes counter {
  from {
    --num: 0;
  }
  to {
    --num: 100;
  }
}
.custom-dropdown{
    position: absolute;
}
</style>
