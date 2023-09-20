<template>
    <!-- header section -->
    <Navbar class="fixed z-30 w-full animate__animated animate__backInDown animate__slow"
            :class="{ 'bg-black': !view.topOfPage}"/>
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


        <div
            class="animate__animated animate__fadeInUp animate__slow z-20 absolute top-1/2 ltr:right-0 rtl:left-0  translate-y-1/2 ">
            <button
                class="bg-dark-brown text-white rounded-2xl  w-72 h-10 ltr:rotate-90 rtl:-rotate-90 origin-top ltr:translate-x-1/2 rtl:-translate-x-1/2" v-scroll-to="{
                            el: '#form',
                            offset: -128
                        }"
            >
                {{ $t("shareYourInterests") }}
            </button>
        </div>
    </header>
    <div class="flex justify-center bg-white">
        <a class="bg-dark-brown text-center text-white rounded-full z-20 py-1 -mt-[2rem] w-72 h-14  animate__animated animate__fadeInUp animate__slow"
           href="#" v-scroll-to="{
                            el: '#project-latst',
                            offset: -128
                        }">

            {{ $t('scrollDown') }}
            <ChevronDownIcon class="h-6 w-6 text-white mx-auto my-1/2"/>
        </a>
    </div>

    <!-- end of header section -->
    <!-- Latest Project section -->
    <section id="project-latst"   class="bg-white">
        <div class="grid grid-cols-4 gap-4 py-10 bg-white">
            <h2 id="latest_project_header bg-white"
                class=" flex text-black before:content-[''] before:m-0.5  before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto ">
                {{ $t('latestProjects') }}
            </h2>
        </div>
        <div

            class="[&>div>div>ul]:justify-center [&>div>div]:border-0 bg-white [&>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>ul>li>.text-blue-600]:hover:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-dark-brown">
            <tabs variant="underline" v-model="activeTab">
                <!-- class appends to content DIV for all tabs -->
                <tab
                    v-for="department in fetchedData"
                    :name="department.title['en']"
                    :title="department.title[$i18n.locale]"
                    class="py-2  bg-white"

                >
                    <carousel class=" bg-white" v-bind="settings" :autoplay="false" :wrap-around="true" :breakpoints="breakpoints">

                        <slide v-for="project in department.latest" :key="project.id"  >

                            <div
                                class=" w-full lg:w-[80%] h-full rounded-xl bg-[#FBF9F1] latest_project mx-5">
                                <router-link
                                        :to="{name: 'Project', params: { id: project.id }}">
                                        <img style="border: 1px height:80%px;" class="w-full  lg:h-[356px] rounded-xl" v-if="project.attachment" :src="project.attachment">
                                </router-link>
                                <div class="flex   text-right p-2">
                                   <div class="flex w-full flex-row-reverse ">
                                    <router-link
                                        :to="{name: 'Project', params: { id: project.id }}">
                                        <h3 class="ltr:text-start rtl:text-end my-auto text-[#636463] p-2 font-bold">{{ project.title[$i18n.locale] }}</h3>
                                     </router-link>
                                    <div class="text-dark-brown flex">
                                        <small class=" text-right my-auto " >
                                            <h6 class="ltr:text-start rtl:text-end my-auto text-[#636463] p-2 font-bold text-dark-brown">{{ project.address[$i18n.locale] }}</h6>

                                            </small>
                                        <svg class="my-auto " version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#AF9751" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path> <path fill="#AF9751" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> <path fill="#AF9751" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path> </g> </g></svg>
                                    </div>
                                   </div>
                                </div>
                                <div class="">
                                    <p style="font-size: 14px;" class="p-2 h-28 text-[#6e6e6e]  ltr:text-start rtl:text-end"
                                   v-html="project.text[$i18n.locale].slice(0, 200)"></p>
                                <div class=" flex justify-between   ltr:text-start rtl:text-end w-full  ">

                                    <div class="flex my-auto mx-1">
                                        <div class="flex ">
                                            <p class="my-auto text-gray-500">{{ $t('unit') }}</p>
                                            <small class="whitespace-nowrap my-auto text-gray-800 px-2">  {{ project.units_number }}
                                           </small>
                                        </div>
                                            <img class="h-6 w-6" src="../../img/buildings-icon.png">

                                            <!-- <BuildingOffice2Icon
                                            class="inline-block h-6 w-6 ltr:mr-2 rtl:ml-2 text-light-brown"/> -->


                                    </div>
                                    <div class="flex my-auto" >
                                        <small class="whitespace-nowrap text-gray-500 px-2">{{ project.land_area }}
                                            {{ $t('areaUnit') }}</small>
                                            <img class="w-7 h-7" src="../mm.jpeg">
                                            <!-- <svg width="24px" height="24px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#C4A94C"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <path d="M4,12L4,13L12,13L12,12L13,12L13,4L12,4L12,3L4,3L4,4L3,4L3,12L4,12ZM7,7L9,7L9,9L7,9L7,7ZM16,12L16,16L12,16L12,15L4,15L4,16L0,16L0,12L1,12L1,4L0,4L0,0L4,0L4,1L12,1L12,0L16,0L16,4L15,4L15,12L16,12Z"></path> </g></svg> -->
                                        <!-- <BuildingOffice2Icon
                                            class="inline-block h-6 w-6 ltr:mr-2 rtl:ml-2 text-light-brown"/> -->

                                    </div>
                                    <div  class="flex my-auto px-1">
                                        <small class=" text-gray-900 px-2">{{
                                                project?.type[$i18n.locale]
                                        }}</small>
                                        <img class="w-6 h-6" src="../rrr.jpeg">
                                            <!-- <svg class="my-auto" width="32px" height="32px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.5 7.5H20.5" stroke="#000000" stroke-linecap="round"></path> <path d="M3.5 12H17.5" stroke="#000000" stroke-linecap="round"></path> <path d="M3.5 16.5H20.5" stroke="#000000" stroke-linecap="round"></path> </g></svg> -->
                                        <!-- <BuildingOffice2Icon
                                            class="inline-block h-6 w-6 ltr:mr-2 rtl:ml-2 text-light-brown"/> -->

                                    </div>
                                </div>
                                <div class=" ltr:text-end rtl:text-start w-full my-4 ">
                                    <button class="bg-dark-brown text-white mx-4 rounded-2xl w-36 h-8"
                                            @click.prevent="$router.push({ name: 'Project', params:{ id:project.id } })">
                                        <small class="">
                                            <MagnifyingGlassIcon
                                                class="inline-block h-6 w-6  "/>
                                            {{ $t('exploreProject') }}
                                        </small>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </slide>


                        <!--                     -->
                        <template #addons>
                            <navigation>
                                <template #next>
                                    <svg fill="#AF9744" height="34px" width="34px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" stroke="#AF9744"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>                                </template>
                                <template #prev>
                                    <svg fill="#AF9744" height="34px" width="34px" version="1.1" id="XMLID_54_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" stroke="#AF9744"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="previous"> <g> <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 "></polygon> </g> </g> </g></svg>                                </template>
                                </navigation>
                        </template>
                    </carousel>
                </tab>
            </tabs>
        </div>
    </section>
    <!-- End of Latest Project section -->

    <!-- About Us section -->
    <section class=" bg-[white] relative about-section pt-12" id="aboutSection">
        <div class="flex py-5">
            <h2 :class="{ 'animate__animated animate__fadeInLeft animate__slow': !view.aboutLadunSection}"
                class="flex-initial w-64 text-black before:content-[''] before:m-0.5  before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 font-bold text-3xl"
                id="aboutLadunHeader"
            >
                {{ $t('aboutLadun') }}
            </h2>
        </div>
        <div class="grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2  mx-auto lg:w-[95%] px-5 ">
            <div class="right">
                <p class="px-2 my-auto text-grey text-justify text-lg mb-7" v-if="aboutData.content"
                   v-html="aboutData.content[$i18n.locale]"></p>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto container">
                    <div class="grid grid-cols-3 justify-center ">
                        <img src="../../img/experience_years.svg" alt="experience_years" class="my-auto mx-auto"/>
                        <div class="my-auto col-span-2 text-center"><strong class="text-3xl text-dark-brown">+
                            <number ref="number1" :from="0" :to="setting?.experience" :delay="3" :duration="3" easing="Power1.easeOut"/>
                        </strong>
                            <p class="block " style="font-size: 14px;">{{ $t('experienceYears') }}</p></div>
                    </div>
                    <div class="grid grid-cols-3 justify-center ">
                        <img src="../../img/projects_units.svg" alt="projects_units" class="my-auto mx-auto"/>
                        <div class="my-auto col-span-2  text-center"><strong class="text-3xl text-dark-brown">+
                            <number ref="number4" :from="0" :to="setting?.developed_buildings" :delay="3" :duration="3" easing="Power1.easeOut"/>
                        </strong>
                            <p class="block text-sm  " style="font-size: 12px;">{{ $t('projectsUnits') }}</p>
                            <p class="block text-sm  " style="font-size: 12px;">{{ $t('waiting') }}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 justify-center ">
                        <img src="../../img/affiliate.svg" alt="affiliate" class="my-auto mx-auto"/>
                        <div class="my-auto col-span-2 text-center"><strong class="text-3xl text-dark-brown">+
                            <number ref="number3" :from="0" :to="setting?.companies" :delay="3" :duration="3" easing="Power1.easeOut"/>
                        </strong>
                            <p class="block text-sm" style="font-size: 12px;">{{ $t('affiliate') }}</p></div>
                    </div>

                     <div class="grid grid-cols-3 justify-center ">
                        <img src="../romte.png" alt="projects_areas" class="my-auto mx-auto"/>
                        <div class="my-auto col-span-2 text-center"><strong class="text-3xl truncate text-dark-brown">+
                            <number ref="number5" :from="0" :to="setting?.developed_buildings" :delay="3" :duration="3"
                                    easing="Power1.easeOut"/>
                        </strong>
                        <p class="block " style="font-size: 12px;">{{ $t('Investment_project') }}</p></div>
                    </div>

                    <div class="grid grid-cols-3 justify-center ">
                        <img src="../../img/projects_areas.svg" alt="projects_areas" class="my-auto mx-auto"/>
                        <div class="my-auto col-span-2 text-center"><strong class="text-3xl truncate text-dark-brown">+
                            <number ref="number5" :from="0" :to="setting?.developing_buildings" :delay="3" :duration="3"
                                    easing="Power1.easeOut"/>
                        </strong>
                            <p class="block text-sm" style="font-size: 12px;">{{ $t('unitsUnderProcess') }}</p></div>
                    </div>
                    <div class="grid grid-cols-3 justify-center ">
                        <img src="../../img/projects_revenue.svg" alt="projects_investment" class="my-auto mx-auto"/>
                        <div class="my-auto col-span-2 text-center"><strong class="text-3xl text-dark-brown">+
                            <number ref="number2" :from="0" :to="setting?.investments" :delay="3" :duration="3" easing="Power1.easeOut"/>
                        </strong>
                            <p class="block text-sm" style="font-size: 12px;">{{ $t('projectsInvestment') }}</p></div>
                    </div>

                </div>
            </div>

            <img class="w-[91%] left" src="../../img/about_ladun_image.png" alt="About Ladun">
        </div>



        <!-- share your interest -->
        <div
            class="rounded-2xl border-2 border-yellow-300 mt-20 bg-gray-100 w-3/4 h-14  mx-auto text-center font-light py-2 my-5" id="form">
            {{ $t('shareYourInterestWithUs') }}
        </div>


    </section>

    <Modal :formShow="isShowModal"/>


    <!-- End About Us section -->
    <!-- footer section -->
    <LightFooter id="footerSection"/>

</template>

<script setup>
import {onBeforeMount, ref} from 'vue'
import Navbar from "../components/Navbar.vue";
import LightFooter from "../components/LightFooter.vue"
import {MagnifyingGlassIcon, ChevronDownIcon, BuildingOffice2Icon, Bars3Icon} from "@heroicons/vue/24/outline";
import {MapPinIcon} from "@heroicons/vue/24/solid";
import {Tabs, Tab} from "flowbite-vue";
import i18n from '../plugins/i18n'
import {Dropdown, ListGroup, ListGroupItem} from 'flowbite-vue'
import axios from 'axios';
import Modal from '../components/Modal.vue'
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'


const isShowModal = ref(false)

const number1 = ref(null)
const number2 = ref(null)
const number3 = ref(null)
const number4 = ref(null)
const number5 = ref(null)
const setting= ref(null)


// const i18n = useI18n()
const view = ref({
    topOfPage: true,
    latestProjectsSection: true,
    aboutLadunSection: true,
})

const activeTab = ref("");
const fetchedData = ref([]);

const settings = {
    itemsToShow: 1,
    snapAlign: 'center',
}

const breakpoints = {
    // 700px and up
    700: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 3,
        snapAlign: 'center',
    },
}

const latestProjects = ref([])
var flag = 1;

const aboutData = ref([])
onBeforeMount(() => {
    window.addEventListener('scroll', handleScroll)
})

function closeModal() {
    isShowModal.value = false
}

function showModal() {
    isShowModal.value = true
}

function getData() {
    axios.get('/api/projects/latest')
        .then((response) => {
            console.log(response)
            latestProjects.value = response.data.data
            // console.log(Object.values(latestProjects.value[0].gallery)[0].original_url)
        })
        .catch(error => console.log(error))

    axios.get('/api/about')
        .then((response) => {
            aboutData.value = response.data[0]
        })
        .catch(error => console.log(error))
}

getData()
const handleScroll = () => {
    let aboutSection = document.getElementById('aboutSection')
    let footerSection = document.getElementById('footerSection')

    if (scrollY > (footerSection.offsetTop - aboutSection.offsetTop + 300) && flag) {
        flag = 0
        // number1.value.restart()
        // number2.value.restart()
        // number3.value.restart()
        // number4.value.restart()
        // number5.value.restart()
    }

    if (window.pageYOffset > 0) {
        if (view.value.topOfPage) view.value.topOfPage = false
        if (view.value.latestProjectsSection) view.value.latestProjectsSection = false
    } else {
        if (!view.value.topOfPage) view.value.topOfPage = true
        if (!view.value.latestProjectsSection) view.value.latestProjectsSection = true
    }
}

onBeforeMount(async () => {

    const res = await axios.get(`/api/settings`);
    setting.value = res.data.settings[0];

    console.log(setting.value)

    window.addEventListener('scroll', function () {
        // animate__animated animate__fadeInUp
        let latest_project = document.getElementsByClassName('latest_project')
        let latest_project_header = document.getElementById('latest_project_header')
        let aboutLadunHeader = this.document.getElementById('aboutLadunHeader')
        let right = document.getElementsByClassName('right')
        let left = document.getElementsByClassName('left')
        for (let i = 0; i < right.length; i++) {
            console.log(right[i].offsetTop )
            if (window.scrollY >= right[i].offsetTop - 700) {
                if (this.locale == 'en') {
                    right[i].classList.add('animate__animated', 'animate__fadeInLeft','animate__slow' ,'animate__delay-2s')
                } else {
                    right[i].classList.add('animate__animated', 'animate__fadeInRight','animate__slow','animate__delay-2s')
                }
            }
        }
        for (let i = 0; i < left.length; i++) {
            console.log(left[i].offsetTop )
            if (window.scrollY >= left[i].offsetTop - 700) {
                if (this.locale == 'en') {
                    left[i].classList.add('animate__animated', 'animate__zoomIn','animate__slow','animate__delay-2s')
                } else {
                    left[i].classList.add('animate__animated', 'animate__zoomIn','animate__slow','animate__delay-2s')
                }


            }
        }

        for (let i = 0; i < latest_project.length; i++) {
            if (window.scrollY >= latest_project_header.offsetTop - 700) {
                if (i18n.global.locale.value == 'en')
                    latest_project[i].classList.add('animate__animated', 'animate__fadeInLeft')
                else
                    latest_project[i].classList.add('animate__animated', 'animate__fadeInRight')


            }
        }


        if (scrollY > (footerSection.offsetTop - aboutSection.offsetTop + 300)) {
            if (i18n.global.locale.value == 'en')
                aboutLadunHeader.classList.add('animate__animated', 'animate__fadeInLeft')
            else
                aboutLadunHeader.classList.add('animate__animated', 'animate__fadeInRight')


        }

    })
    const response = await axios.get("/api/departments/latest/projects");
    fetchedData.value = response.data.data;

    activeTab.value = fetchedData.value[0].title["en"];
})

</script>

<style scoped>
*{

}
.fadeinoutElement {
    -webkit-animation: fadeinout 4s linear forwards;
    animation: fadeinout 4s linear forwards;
}

@-webkit-keyframes fadeinout {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}

@keyframes fadeinout {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}


</style>
