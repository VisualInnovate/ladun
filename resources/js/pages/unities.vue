<template>
    <carousel :items-to-show="2">
        <slide v-for="slide in 10" :key="slide">
            <div  class=" rounded-xl border-2 border-gray-border-light bg-white relative mx-2 " :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'">
                <img class="w-20 h-20 rounded-full mx-auto my-3 mb-0" src="../../img/company.png" >
                <div class="flex flex-col items-center">
                    <h3 class="flex-initial p-2 font-bold">{{ slide }}</h3>
                    <h4 class="flex-initial flex p-2 text-dark-brown">
                        <img src="../../img/projects/locationIcon.svg" alt="locationIcon" class="rtl:ml-2 ltr:mr-2" />
                        {{ slide }}
                    </h4>
                    <small class="flex-initial mb-2 text-dark-brown">{{ slide}}</small>
                </div>

                <div class="grid grid-cols-4 mb-4 ">
                    <p class="px-2 text-grey text-xs col-start-1 col-end-4 ">
                        {{slide}}
                    </p>
                    <div class="flex flex-col justify-end col-start-4 col-end-4">
                    </div>
                </div>
                <div class="absolute bottom-0 w-full">
                    {{slide}}
                </div>
            </div>
        </slide>
        <template #addons>
            <navigation/>
            <pagination/>
        </template>
    </carousel>

</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
    name: "utilities",
    components: {
        Carousel, Slide, Pagination, Navigation
    }
}
</script>

<style scoped>

</style>
