<template>

    <Navbar class="bg-black fixed z-50 w-full"/>
    <div class="pt-[4rem]">
        <div class="relative img-banner-slot">
            <div class=" overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
            <img class="w-full" src="../../img/companies-banner.png">

            <div class="z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                <img class="w-[30%] md:w-[45%] lg:w-[53%] mx-auto md:mb-3 "

                     src="../../img/ladun-logo-banner.png">
            </div>

        </div>
    </div>


    <section class="company py-28 bg-background-section">
        <div class="container mx-auto ">
            <div class="grid lg:grid-cols-1 ">
                <div v-for=" company in companies" :key="company.id"
                     :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'"
                     class=" hover:border-dark-brown rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light md:flex content-center  pt-5 items-center bg-white mb-12 w-[90%]  md:w-[85%] mx-auto">
                    <div class="w-[20%]">
                        <img class="img-companies m-auto rounded-full mb-4 "  :src="company.media[0].original_url"
                         alt="Sunset in the mountains">
                         <!-- <img class="img-companies m-auto   rounded-full mb-4" src="http://demo.ladun.sa//storage/57/SWeEzUEcaAIL6kATPyjmpRonsY7Gx7-metaMURheW1hdC5wbmc=-.png" alt="Sunset in the mountains"> -->
                    </div>
                    <div class="text-center w-[80%]">
                        <h3 class="justify-center font-bold text-[16x] px-2 md:px-5 " > {{ company.title[$i18n.locale] }} </h3>
                    <p class=" px-2 md:px-5 pb-6 pt-3 text-center "
                       v-html="company.content[$i18n.locale]"></p>

                    <div class="flex content-start flex-row justify-center w-full">
                        <a :href="company.url" target="_blank" class=" special-button button bg-dark-brown text-white px-4 py-2 my-5 mb-14 ml-4 rtl:mr-4">{{ $t('visit') }} </a>
                    </div>
                    </div>
                </div>


            </div>

        </div>

    </section>
    <LightFooter/>
</template>

<script>
import ImgBanner from '@/components/ImgBanner.vue'
import Navbar from "../components/Navbar.vue"
import LightFooter from "../components/LightFooter.vue";

export default {

    data() {
        return {
            companies: []
        }
    },
    components: {
        ImgBanner, Navbar, LightFooter
    },
    methods: {

        getAllCompanies() {
            axios.get("/api/companies").then(res => {
                this.companies = res.data.companies
                console.log(this.companies)

            })
        }

    },
    mounted() {
        this.getAllCompanies()
    }
}


</script>
<style scoped>


</style>
