<template>
    <Navbar class="bg-black fixed z-50 w-full" />
    <section class="company-info py-24 bg-background-section pt-40 mx-auto">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
                <div class="img-company-info flex justify-center  "    :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'">
                    <img
                        v-if="investor.media"
                        :src="investor.media[0].original_url"
                        class="about-us-carousel dark:text-gray-400 h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"
                    />
                </div>
                <div class="d-info h-full flex flex-col justify-center"  :class="($i18n.locale=='en' )  ?  'animate__animated animate__fadeInRight':'animate__animated animate__fadeInLeft'">
                    <h1

                        class="font-bold  lg:text-3xl mb-4 text-center md:text-start"
                        v-if="investor.title"
                    >
                        {{ investor.title[$i18n.locale] }}
                    </h1>
                    <p class="mb-4 text-[text]   text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7	"  v-if="investor.content" v-html="investor.content[$i18n.locale]">

                    </p>
                    <a :href="investor.video" class="my-2 w-full mx-auto underline text-dark-brown" v-html="investor.video">


                     </a>

                </div>

            </div>


        </div>
    </section>
    <section class="flex content-center  ">


    </section>

    <LightFooter />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import LightFooter from "../components/LightFooter.vue";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

import axios from "axios";

const investor = ref({});

const route = useRoute();

onBeforeMount(async () => {

    const response = await axios.get(`/api/investors/${route.params.id}`);
    investor.value = response.data.investor;

    console.log(investor.value)

});
</script>
<style>
iframe{
    width:100%;
    height:500px
}
</style>
