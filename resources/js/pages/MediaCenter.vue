<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <section class="media-center dark:bg-black py-28 bg-background-section dark:bg-black dark:text-[white]" style=" color:rgb(255, 255, 255);height: 300px; background-image: url('http://[::1]:5173/resources/js/new.jpg'); background-size: cover; background-position: center; text-align: center;">
        {{$t('mediaCenter')}}
        <div style="color:rgb(255, 255, 255); padding-top:20px; font-size:16px" >
            <router-link :to="{ name: 'Home' }"> <a href="" class="dark:text-[white]">{{$t('companyAds')}}</a>  /   {{$t('main')}} </router-link>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8">
            <template>
                <img class="md:h-full object-cover img-media-center lg:rtl:rounded-l-lg lg:ltr:rounded-r-lg w-full md:w-48 rounded-t-lg md:rounded-t-none rtl:pl-2 ltr:pr-2" src="" alt="">
            </template>
        </div>
    </section>



    <section class="media-center py-28 bg-background-section dark:text-white dark:bg-black">
        <div class="container mx-auto">
            <h1 class="text-4xl text-center   mb-10 dark:text-[white]">{{ $t('mediaCenter') }}</h1>
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8">
                <template v-if="media.length">
                    <card-link v-for="item in media" :key="item.id" class="  dark:text-white dark:bg-black " >
                        <!--                    <template #date>{{item.creted_at}}</template>-->
                        <!-- :src="getpic(item)" -->
                        <template #date>
                            <p class="text-xl">
                                <img class="rounded-t-lg" :src="getpic(item)" alt="" style="width:250px; height: 210px;">
                            </p>
                        </template>

                        <template #text>

                            <div v-html="item.content[$i18n.locale].slice(0,155)+'...'" class="mb-3 font-normal text-gray-700 dark:text-gray-400"></div>
                            <div style="opacity: 80% !important;" class="rtl:text-end ltr:text-end"> <button @click="details(item.id)" class="p-2 my-2 text-xs rounded-lg text-white bg-dark-brown text-cecter">{{ $t('readMore') }}</button></div>
                        </template>
                    <template #head>

                        <p class=" dark:text-white dark:bg-black">{{ formatDate(item.created_at) }}</p>
                        </template>
                    </card-link>

                </template>


            </div>
        </div>
    </section>

    <LightFooter/>
</template>

<script setup>
import CardLink from "@/components/CardLink.vue";
import {Carousel} from "flowbite-vue";
import Navbar from "../components/Navbar.vue"
import LightFooter from '../components/LightFooter.vue';
import {ref, onBeforeMount, onMounted, computed} from "vue";
import {useRouter} from 'vue-router'

import axios from "axios";

const router = useRouter()
const media = ref({})
const projects_2 = new URL('../../img/real-state-management-banner.png', import.meta.url).href
const pic = ref('')
const pictures = [

    {
        src: projects_2,
        alt: 'Picture 2',
    },
]

const formatDate = (dateString) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = ('0' + date.getDate()).slice(-2);
  return `${month} ${day}, ${year}`;
};

const details = (id) => {
    router.push({
        name: "Media Center Details",
        params: {
            id: id
        }
    })
}
const getpic = (media) => {
    return media.media[0].collection_name=='attachments'?media.media[0].original_url:media.media[1].original_url
}



onBeforeMount(() => {
    axios.get("/api/media-center").then(res => {
        media.value = res.data.mediaCenter

        // console.log(res.data.mediaCenter[0].media[0])


    })
})


</script>

<style>
button
{
    width: 100%;
  color: rgb(0, 0, 0);
}

</style>
