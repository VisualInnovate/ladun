<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <div
        class="[&>div>div>ul]:justify-center pt-24 [&>div>div]:border-0 [&>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-dark-brown">
        <tabs variant="underline" v-model="activeTab"> <!-- class appends to content DIV for all tabs -->
            <tab v-for="department in fetchedData" :name="department.title['en']"
                 :title="department.title[$i18n.locale]"
                 class="[&>div>div>div>ul]:justify-center [&>div>div>div]:border-0 [&>div>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>div>ul>li>.border-blue-600]:border-dark-brown">
                <!-- regions -->
                <tabs variant="underline" v-model="regionActiveTab" class="justify-center py-10 ">
                    <tab v-for="region in department.regions" :name="region.title['en']"
                         :title="region.title[$i18n.locale]">
                        <div class="grid grid-cols-1 gap-10 md:grid-cols-3 pt-2 container mx-auto   [&>div]:lg:h-[574px]  [&>div]:md:h-[635px] [&>div]:h-[560px]">

                            <div v-for="project in region.projects"
                                 class=" rounded-xl  bg-[#fff8f8]  mx-2 "
                                 :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'">
                                 <div class="w-full relative z-10">

                                    <Carousel :autoplay="false" :pictures="getGallery(project.gallery)"
                                              class="[&>div>div>img]:h-full [&>div:first-child]:lg:h-[243px] [&>button>span]:hidden [&>div>button]:hidden  [&>div>button]:mx-2 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1 "/>
                                </div>
                                <img class="w-20 h-20 z-20 absolute top-[10%] mx-auto my-3 mb-0" :src="project.logo?.original_url"
                                     :alt="project.logo?.name">
                                <!-- <div class="flex flex-col items-center">

                                    <h4 class="flex-initial flex p-2 text-dark-brown">
                                        <img src="../../img/projects/locationIcon.svg" alt="locationIcon"
                                             class="rtl:ml-2 ltr:mr-2"/>
                                        {{ region.title[$i18n.locale] }}
                                    </h4>
                                    <small
                                        class="flex-initial mb-2 text-dark-brown">{{ department.title[$i18n.locale] }}</small>
                                </div> -->
                               <div class="flex">
                                <h3 class="flex-initial my-auto text-[#636463] p-2 font-bold">{{ project.title[$i18n.locale] }}</h3>
                                <svg class="my-auto" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#AF9744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#AF9744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                   <h6 class="flex-initial my-auto text-[#636463] p-2 font-bold text-dark-brown">{{ project.address[$i18n.locale] }}</h6>
                               </div>
                                <div class=" mb-4 ">
                                    <p class="px-2 h-24 text-grey text-sm col-start-1 col-end-4 "
                                       v-html="project.text[$i18n.locale].slice(0, 190)">
                                    </p>

                                </div>
                                <div class=" flex justify-between  py-4 ltr:text-start rtl:text-end w-full  ">
                                    <div  class="flex my-auto">
                                        <img class="w-6 h-6" src="../rrr.jpeg">
                                        <small class=" text-gray-900 px-2">{{
                                            $t('residentialLandPlots')
                                        }}</small>

                                            <!-- <svg class="my-auto" width="32px" height="32px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.5 7.5H20.5" stroke="#000000" stroke-linecap="round"></path> <path d="M3.5 12H17.5" stroke="#000000" stroke-linecap="round"></path> <path d="M3.5 16.5H20.5" stroke="#000000" stroke-linecap="round"></path> </g></svg> -->
                                        <!-- <BuildingOffice2Icon
                                            class="inline-block h-6 w-6 ltr:mr-2 rtl:ml-2 text-light-brown"/> -->

                                    </div>


                                    <div class="flex my-auto" >
                                        <img class="w-7 h-7" src="../mm.jpeg">
                                        <small class="whitespace-nowrap text-gray-500 px-2">{{ project.land_area }}
                                            {{ $t('areaUnit') }}</small>
                                            <!-- <svg width="24px" height="24px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#C4A94C"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <path d="M4,12L4,13L12,13L12,12L13,12L13,4L12,4L12,3L4,3L4,4L3,4L3,12L4,12ZM7,7L9,7L9,9L7,9L7,7ZM16,12L16,16L12,16L12,15L4,15L4,16L0,16L0,12L1,12L1,4L0,4L0,0L4,0L4,1L12,1L12,0L16,0L16,4L15,4L15,12L16,12Z"></path> </g></svg> -->
                                        <!-- <BuildingOffice2Icon
                                            class="inline-block h-6 w-6 ltr:mr-2 rtl:ml-2 text-light-brown"/> -->

                                    </div>
                                    <div class="flex my-auto">
                                        <img class="h-9 w-9" src="../../img/buildings-icon.png">
                                        <small class="whitespace-nowrap my-auto text-gray-500 px-2">{{ project.units_number }}
                                            {{ $t('unit') }}</small>


                                            <!-- <BuildingOffice2Icon
                                            class="inline-block h-6 w-6 ltr:mr-2 rtl:ml-2 text-light-brown"/> -->


                                    </div>
                                </div>
                                <div class="flex flex-row-reverse">
                                    <router-link
                                        class="w-[100px] bg-dark-brown text-white rounded-md h-6 max-w-20 text-xs text-center flex flex-col justify-center mx-2"
                                        :to="{name: 'Project', params: { id: project.id }}">{{ $t('readMore') }}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </tab>
                </tabs>
            </tab>
        </tabs>
    </div>
    <LightFooter/>
</template>

<script setup>
import {ref, onBeforeMount, watch} from "vue";
import Navbar from "../components/Navbar.vue";
import LightFooter from "../components/LightFooter.vue";
import { BuildingOffice2Icon} from "@heroicons/vue/24/outline";

import {Tabs, Tab, Carousel} from 'flowbite-vue'
import axios from 'axios'

const getGallery = (gallery) => {
    return Object.values(gallery).map((image) => {
        return {
            src: image.original_url,
            alt: image.name
        }
    })
};


const activeTab = ref('')
const regionActiveTab = ref('')

const fetchedData = ref([]);
watch(activeTab , (newValue,oldValue)=>{
    console.log(newValue)
    regionActiveTab.value = fetchedData.value[1].regions[0].title['en']

})
onBeforeMount(async () => {
    const response = await axios.get('/api/departments')
console.log(response)
    fetchedData.value = response.data.data

    activeTab.value = fetchedData.value[0].title['en']
    regionActiveTab.value = fetchedData.value[0].regions[0].title['en']

    console.log(activeTab.value, '----', regionActiveTab.value)

})
</script>
