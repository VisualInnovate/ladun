<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <Carsoul/>
    <section class="py-28">
        <div class="container mx-auto">
            <div class=" flex flex-wrap flex-col lg:flex-row  ">
                <div class= " lg:w-[30%] w-[100%] mb-10 lg:mb-0">
                    <img v-if="media[0].media"
                         class="rounded-xl w-full"
                         :src="media[0].media[0].original_url" alt="">
                </div>


                <div class="lg:w-[70%] w-[100%] ltr:pl-12 rtl:pr-12">
                    <h1 v-if="media[0].title" class="font-bold text-dark-brown mb-5">{{ media[0].title[$i18n.locale] }}</h1>
                    <p v-if="media[0].title" v-html="media[0].content[$i18n.locale]" class="text-justify text-lg"></p>

                </div>
            </div>


        </div>

    </section>

    <DarkFooter/>

</template>

<script>
import Navbar from "../components/Navbar.vue"
import DarkFooter from '../components/DarkFooter.vue';
import Carsoul from '../components/CarsoulWithPadding.vue';
import axios from "axios";


export default {
    components: {
        Navbar, DarkFooter, Carsoul
    },
    data() {
        return {
            media: {},
            computedData:{}
        }

    }, methods: {
        getData() {
            axios.post(`/api/media-center/${this.$route.params.id}`).then(res => {
                this.media = res.data.mediaCenter
                console.log(this.media)
            })
        }
    },
    created() {
        this.getData()
    },
    computed:{
        comp(){
          return   this.media[0]
        }
    },

}


</script>

<style scoped>

</style>
