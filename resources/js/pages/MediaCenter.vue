<template>
    <Navbar class="bg-black fixed z-50 w-full" />

    <Carousel :pictures="pictures" class="h-[100vh] [&>div:first-child]:h-[100vh] [&>div>div>img]:h-[100vh] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"></Carousel>
    <section class="media-center py-28 bg-background-section">
        <div class="container mx-auto">
            <h1 class="text-3xl text-center mb-7">المركز الاعلامي</h1>
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
                <card-link v-for="item in media">
                    <template #date>{{item.created_at}}</template>
                    <template #head>{{item.title[$i18n.locale]}}</template>
                    <template #text> <div v-html="item.content[$i18n.locale].slice(0,100)+'...'"></div></template>
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        :src="item.media[0].original_url" alt="">
                </card-link>


            </div>
        </div>
    </section>

    <DarkFooter />
</template>

<script setup>
import CardLink from "@/components/CardLink.vue";
import { Carousel } from "flowbite-vue";
import Navbar from "../components/Navbar.vue"
import DarkFooter from '../components/DarkFooter.vue';
import {ref, onBeforeMount, onMounted} from "vue";
import axios from "axios";


const media = ref({})
const projects_1 = new URL('../../img/banner-mediaCenter.png', import.meta.url).href
const projects_2 = new URL('../../img/real-state-management-banner.png', import.meta.url).href
const projects_3 = new URL('../../img/banner-mediaCenter.png', import.meta.url).href
const projects_4 = new URL('../../img/real-managent-utility-section.png', import.meta.url).href
const pictures = [
    {
        src: projects_1,
        alt: 'Picture 1',
    },
    {
        src: projects_4,
        alt: 'Picture 4',
    },
    {
        src: projects_2,
        alt: 'Picture 2',
    },
    {
        src: projects_3,
        alt: 'Picture 3',
    },


    onBeforeMount(()=>{
        axios.get("/api/media-center").then(res =>{
            media.value=res.data.mediaCenter


        })
    })

];
</script>

<style>
.img-media-center {
    width: 250px;
}
</style>
