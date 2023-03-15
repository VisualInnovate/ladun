<template>
    <!-- header section -->
        <Navbar class="fixed z-30 w-full animate__animated animate__backInDown" :class="{ 'bg-black': !view.topOfPage}" />
    <header class="relative flex h-screen overflow-hidden">
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
        

        

        <div class="z-20 justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <img
                class=" h-48 lg:h-auto animate__animated animate__fadeIn animate__zoomIn"
                src="../../img/logowithouttext.svg"
            />
            <h1 class="z-50 text-white fadeinoutElement" >شركة لدن للإستثمار</h1>
        </div>
        <div class="animate__animated animate__fadeInUp z-20 absolute top-1/2 ltr:right-0 rtl:left-0  translate-y-1/2 ">
            <button
                class="bg-dark-brown text-white rounded-2xl  w-72 h-10 ltr:rotate-90 rtl:-rotate-90 origin-top ltr:translate-x-1/2 rtl:-translate-x-1/2"
            >
                {{ $t("shareYourInterests") }}
            </button>
        </div>
    </header>
    <div class="flex justify-center">
        <button class="bg-dark-brown text-white rounded-full z-20 py-1 -mt-[2rem] w-72 h-14  animate__animated animate__fadeInUp">
            {{ $t('scrollDown') }}
            <ChevronDownIcon class="h-6 w-6 text-white mx-auto my-1/2" />
        </button>
    </div>
    <!-- end of header section -->
    <!-- Latest Project section -->
    <section>
        <div class="grid grid-cols-4 gap-4 my-10" >

                <h2 class="animate__animated animate__fadeInLeft flex text-black before:content-[''] before:m-0.5  before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto ">
                    {{ $t('latestProjects') }}
                </h2>

                <h2 class="animate__animated animate__fadeInLeft flex justify-end text-center text-dark-brown after:content-['']  after:w-1 after:h-10 ltr:after:ml-6 rtl:after:mr-4  after:bg-grey after:rounded after:mr-2 after:my-auto">
                    {{ $t('realEstateManagement') }}
                </h2>

                <h2 class="animate__animated animate__fadeInLeft flex text-dark-brown">
                    {{ $t('realEstateAssetManagement') }}
                </h2>

        </div>

        <div class="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 lg:grid-cols-4 mx-auto container px-5">

            <div v-for="project in latestProjects" class="rounded-lg border-2 border-gray-border-light bg-white">
                    <img class="w-full rounded-lg" v-if="project.logo" :src="project.logo.original_url" alt="Project Photo">
                    <div class="flex items-center">
                        <h3 class="flex-initial p-2">{{ project.title[$i18n.locale] }}</h3>
                        <span class="flex-initial mx-2 text-light-brown">
                            <MapPinIcon class="inline-block h-4 w-4 "/>
                            <small class="font-bold" v-if="project.location">{{ project.location.city }}</small>
                        </span>
                    </div>
                    <p class="px-2 text-grey text-xs" v-html="project.text[$i18n.locale]"></p>
                    <div class="flex justify-end my-4 mx-2">
                        <button class="bg-dark-brown text-white rounded-2xl w-36 h-8" @click.prevent="$router.push({ name: 'Project', params:{ id:project.id } })">
                            <small>
                                <MagnifyingGlassIcon class="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 justify-end" />{{ $t('exploreProject') }}
                            </small>
                        </button>
                    </div>

                    <div class="flex flex-wrap m-2">
                        <div>
                            <Bars3Icon class="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"/>
                            <small class="whitespace-nowrap text-gray-500">{{ $t('residentialLandPlots') }}</small>
                        </div>
                        <div>
                            <BuildingOffice2Icon class="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"/>
                            <small class="whitespace-nowrap text-gray-500">{{ project.Land_area }}  {{ $t('areaUnit') }}</small>
                        </div>
                        <div>
                            <BuildingOffice2Icon class="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"/>
                            <small class="whitespace-nowrap text-gray-500">{{ project.units_number }} {{ $t('unit') }}</small>
                        </div>
                    </div>

            </div>
        </div>
    </section>
    <!-- End of Latest Project section -->

    <!-- About Us section -->
    <section class="relative about-section">
        <div class="flex py-5" >
            <h2 class="animate__animated animate__fadeInLeft flex-initial w-64 text-black before:content-[''] before:m-0.5  before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 ">
                {{ $t('aboutLadun') }}
            </h2>
        </div>
        <div class="grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-3 mx-auto container px-5">

            <p class="px-2 my-auto text-grey text-xs" v-if="aboutData.content" v-html="aboutData.content[$i18n.locale]" ></p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto container px-5 justify-items-center">
                <div class="grid grid-cols-2 justify-center ">
                    <img src="../../img/experience_years.svg" alt="experience_years" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block text-xs">{{ $t('experienceYears') }}</p></div>
                </div>
                <div class="grid grid-cols-2 justify-center ">
                    <img src="../../img/projects_units.svg" alt="projects_units" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block text-xs">{{ $t('projectsUnits') }}</p></div>
                </div>
                <div class="grid grid-cols-2 justify-center ">
                    <img src="../../img/affiliate.svg" alt="affiliate" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block text-xs">{{ $t('affiliate') }}</p></div>
                </div>
                <div class="grid grid-cols-2 justify-center ">
                    <img src="../../img/projects_investment.svg" alt="projects_investment" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block text-xs">{{ $t('projectsInvestment') }}</p></div>
                </div>
                <div class="grid grid-cols-2 justify-center ">
                    <img src="../../img/projects_areas.svg" alt="projects_areas" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block text-xs">{{ $t('projectsAreas') }}</p></div>
                </div>
                <div class="grid grid-cols-2 justify-center ">
                    <img src="../../img/projects_revenue.svg" alt="projects_revenue" class="my-auto mx-auto" /> <div class="my-auto text-center"><strong class="text-xl  counter text-dark-brown">+</strong><p class="block text-xs">{{ $t('projectsRevenue') }}</p></div>
                </div>
            </div>
            <img class="w-full" src="../../img/about_ladun_image.png" alt="About Ladun">

        </div>

        <!-- share your interest -->
        <div class="rounded-2xl border-2 border-yellow-300 bg-gray-100 w-3/4 h-14 mx-auto text-center font-light py-2 my-5">
            {{ $t('shareYourInterestWithUs') }}
        </div>

        <!-- dropdown -->

    <dropdown text="Bottom" class="hover:cursor-pointer [&>div]:w-full w-1/2 h-10 bottom-0 origin-top rtl:-translate-x-1/2 ltr:translate-x-1/2 -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50  dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800  bg-dark-brown " >
    <template #trigger>
        <span class="w-full inline-flex justify-between px-4 text-white"><span>{{ $t('choose') }}</span> <svg class="my-auto w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>
    </template>
    </dropdown>

    </section>
    <!-- End About Us section -->
    <!-- footer section -->
    <LightFooter />

</template>

<script setup>
import { onBeforeMount , ref, onMounted } from 'vue'
import Navbar from "../components/Navbar.vue";
import LightFooter from "../components/LightFooter.vue"
import {MagnifyingGlassIcon, ChevronDownIcon, BuildingOffice2Icon, Bars3Icon } from "@heroicons/vue/24/outline";
import { MapPinIcon } from "@heroicons/vue/24/solid";
import { Dropdown } from 'flowbite-vue'
import axios from 'axios';

const view = ref({
    topOfPage: true
})


const latestProjects = ref([])

const aboutData = ref([])
onBeforeMount(()=>{
    window.addEventListener('scroll', handleScroll)
    axios.get('/api/projects/latest')
    .then((response) => {
        latestProjects.value = response.data.data
        console.log(latestProjects.value)  
    })
    .catch(error => console.log(error))

    axios.get('/api/about')
    .then((response) => {
        aboutData.value = response.data[0]
    })
    .catch(error => console.log(error))
})

const handleScroll = () => {
    if(window.pageYOffset > 0){
        if(view.value.topOfPage)  view.value.topOfPage = false
    } else {
        if(!view.value.topOfPage) view.value.topOfPage = true
    }
}

onMounted(()=>{
    document.documentElement.style.setProperty('--animate-duration', '3s');
})

</script>

<style scoped>
.fadeinoutElement{
    -webkit-animation: fadeinout 4s linear forwards;
    animation: fadeinout 4s linear forwards;
}
@-webkit-keyframes fadeinout {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes fadeinout {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}
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

</style>
