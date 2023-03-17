<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <Carsoul/>
    <section class="py-28">
        <div class="container mx-auto">
            <div class="flex flex-wrap">
                <div class="w-[20%]">
                    <img v-if="media.media"
                         class="rounded-xl w-full"
                         :src="media.media[0].original_url" alt="">
                </div>


                <div class="w-[80%] ltr:pl-12 rtl:pr-12">
                    <h1 v-if="media.title">{{ media.title[$i18n.locale] }}</h1>
                    <p v-if="media.title" v-html="media.content[$i18n.locale]"></p>

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
            media: {}
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
    }
}


</script>

<style scoped>

</style>
