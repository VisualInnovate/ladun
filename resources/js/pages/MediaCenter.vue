<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <!-- <section class="media-center dark py-28 bg-background-section dark:bg-black dark:text-[white]" style=" color:rgb(255, 255, 255);height: 300px; background-image: url('http://[::1]:5173/resources/js/new.jpg'); background-size: cover; background-position: center; text-align: center;">
        {{$t('mediaCenter')}}
        <div style="color:rgb(255, 255, 255); padding-top:20px; font-size:16px" >
            <router-link :to="{ name: 'Home' }"> <a href="" class="dark:text-[white]">{{$t('companyAds')}}</a>  /   {{$t('main')}} </router-link>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8">
            <template>
                <img class="md:h-full object-cover img-media-center lg:rtl:rounded-l-lg lg:ltr:rounded-r-lg w-full md:w-48 rounded-t-lg md:rounded-t-none rtl:pl-2 ltr:pr-2" src="" alt="">
            </template>
        </div>
    </section> -->
    <div class="pt-26 dark:text-white dark:bg-black ">
        <img-banner>
            <img class="w-full" style="height: 300px;"  :src="banner">

            <template   #text> {{ $t('mediaCenter') }}

            </template>

        </img-banner>
    </div>


    <section class="media-center py-28 bg-background-section dark:bg-black">
        <div class="container mx-auto">
            <h1 class="text-4xl text-center  mb-10 dark:text-[white]">{{ $t('mediaCenter') }}</h1>
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8">
                <template v-if="media.length">


                        <div v-for="item in media" :key="item.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <img class="rounded-t-lg" style="width: 100%;height: 200px;" :src="getpic(item)" alt="" />

                            <div class="p-1 px-3">
                                <p  class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ formatDate(item.created_at) }}</p>


                            <p v-html="convertToString(item?.title[$i18n.locale])" style="min-height:90px ; font-size: 15px;" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></p>


                            </div>
                            <div>
                                <p  @click="details(item.id)" class="  mx-4 cursor-pointer py-2 my-2 w-[90%]  text-sm font-medium text-center text-white bg-dark-brown rounded-lg hover:bg-dark-brownfocus:ring-4 focus:outline-none focus:bg-dark-brown dark:bg-dark-brown dark:hover:bg-dark-brown dark:focus:bg-dark-brown">
                                    {{ $t('readMore') }}

                                </p>
                            </div>
                        </div>



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
import ImgBanner from "@/components/ImgBanner.vue";
import LightFooter from '../components/LightFooter.vue';
import {ref, onBeforeMount, onMounted, computed} from "vue";
import {useRouter} from 'vue-router'

import axios from "axios";

const router = useRouter()
const media = ref({})
const banner = ref('')
const projects_2 = new URL('../../img/real-state-management-banner.png', import.meta.url).href
const pic = ref('')
const pictures = [

    {
        src: projects_2,
        alt: 'Picture 2',
    },
]
const convertToString=(id)=>{
    const stringContent = String(id);
    const words = stringContent.split(/\s+/);

// Extract the first 15 words and join them back into a string
const truncatedWords = words.slice(0, 15).join(' ');

return truncatedWords;

}
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
    return media.media[0].collection_name=='attachments'?media.media[0]?.original_url:media.media[1]?.original_url
}
const fetchBanner = () => {
  axios.get("/api/banners-pages")
    .then(res => {
        banner.value= res.data.pages[3].media[0].original_url;
        console.log(banner.value)
    })
    .then(bannerUrl => {
      banner.value = bannerUrl;
    })
    .catch(error => {
      console.error('Error fetching banner:', error);
    });
};


onBeforeMount(() => {
    axios.get("/api/media-center").then(res => {
        media.value = res.data.mediaCenter

        // console.log(res.data.mediaCenter[0].media[0])

    })


    fetchBanner()
})


</script>

<style>
button
{
    width: 100%;
  color: rgb(0, 0, 0);
}

</style>
