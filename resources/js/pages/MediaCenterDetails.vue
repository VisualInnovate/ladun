<template>
    <Navbar class="bg-black fixed z-50 w-full"/>


    <section class="py-20">
        <router-link
             to="/media-center">
             <p class="w-full m-auto text-center py-[2%] text-4xl font-bold cursor-pointer">{{ $t('mediaCenter') }}</p>
    </router-link>
        <div class="container mx-auto">

            <div class=" flex flex-wrap flex-col lg:flex-row  ">
                <div class= " lg:w-[30%] w-[100%] mb-10 lg:mb-0">
                    <img v-if="media[0]"
                         class="rounded-xl w-full"
                         :src="getpic(media[0])?.original_url" alt="">
                </div>


                <div class="lg:w-[70%] w-[100%] ltr:pl-12 rtl:pr-12">
                    <h1 v-if="media[0]" class="font-bold text-dark-brown mb-5">{{ media[0].title[$i18n.locale] }}</h1>
                    <p v-if="media[0]" v-html="media[0].content[$i18n.locale]" class="text-justify text-lg"></p>
                    <div class="company-button ">
                        <div class="flex flex-wrap justify-between " v-if="!media[0]">

                                 <a :href="`${getFile(media[0])?.original_url}`" target="_blank"
                                   class="hover:bg-[#74642a] hover:cursor-pointer  special-button text-xl button bg-dark-brown mx-auto rounded-lg flex items-center text-white px-2 py-2 my-5 mb-14 ml-4 rtl:mr-4">
                                   <svg fill="white" width="30px" height="30px" viewBox="0 0 24 24" id="download-8" xmlns="http://www.w3.org/2000/svg" class="icon line my-auto"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline id="primary" points="15 14 12 17 9 14" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></polyline><path id="primary-2" data-name="primary" d="M12,17V3m4,7h3a1,1,0,0,1,1,1v9a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H8" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path></g></svg>
                                    {{$t('download')}}
                                </a>
                        </div>
                    </div>

                </div>

            </div>



        </div>

    </section>

    <LightFooter/>

</template>

<script>
import Navbar from "../components/Navbar.vue"
import LightFooter from '../components/LightFooter.vue';
import Carsoul from '../components/CarsoulWithPadding.vue';
import axios from "axios";


export default {
    components: {
        Navbar, LightFooter, Carsoul
    },
    data() {
        return {
            media: [],
            computedData:{}
        }

    },
    methods: {
        getData() {
            axios.post(`/api/media-center/${this.$route.params.id}`).then(res => {
                this.media = res.data.mediaCenter
                console.log(this.media)
            })
        },
         getpic(media) {
            return media.media[0].collection_name=='attachments'?media.media[0]:media.media[1]
        },getFile(media) {
            return media.media[0].collection_name=='attachments'?media.media[1]:media.media[0]
        }

    },
    created() {
        this.getData()
    },
    // computed:{
    //     comp(){
    //       return   this.media[0]
    //     }
    // },

}


</script>

<style scoped>

</style>
