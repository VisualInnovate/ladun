<template>

    <Navbar class="bg-black fixed z-50 w-full"/>
    <div class="pt-[4rem]">
        <div class="relative img-banner-slot">
            <div class=" overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>

            <img class="w-full " style="height: 450px;"   :src="banner">
            <div class="z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                <img class="w-[30%] md:w-[45%] lg:w-[53%] mx-auto md:mb-3 "
                     src="../../img/ladun-logo-banner.png">
            </div>
        </div>
    </div>


    <section class="company py-28 bg-background-section">
        <div class=" px-[5%] mx-auto ">
            <div class="grid lg:grid-cols-4 gap-3 w-full " >
                <div  v-for=" company in companies" :key="company.id"

                     :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'"
                     class="relative rounded-2xl border border-light-brown overflow-hidden  border-gray-border-light  content-center p-2 pb-8  pt-5 items-center bg-[#fbfbfb] mb-12 w-[100%]   mx-auto">
                    <div class="w-full md:w-[50%]  m-auto">

                        <img class="img-companies  rounded-full border-2 mb-4 m-auto"  :src="company.media[0]?.original_url"
                         alt="Sunset in the mountains">

                    </div>
                    <div class="text-center w-full p-2">
                        <h3 class="justify-center font-bold text-[16x]  " > {{ company.title[$i18n.locale] }} </h3>
                        <p class=" text-[#6e6b6b] text-justify justify-start py-6 text-xs"
                        v-html="company.content[$i18n.locale]"></p>

                    <div class=" absolute bottom-4 left-[50%] -translate-x-[50%] w-full " v-if="company.url!=''">
                        <a :href="company.url" target="_blank" class=" special-button button bg-dark-brown rounded-3xl text-white px-4 py-2  ml-4 ">{{ $t('visit') }} </a>
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
            companies: [],
            banner:''
        }
    },
    components: {
        ImgBanner, Navbar, LightFooter
    },
    methods: {
        callbanner(){
            axios.get("/api/banners-pages").then(res => {
                this.banner= res.data.pages[0].media[0].original_url
                console.log(this.banner)
            })
        },

        getAllCompanies() {
            axios.get("/api/companies").then(res => {
                this.companies = res.data.companies
                console.log(this.companies)

            })
        }

    },
    mounted() {
        this.getAllCompanies()
        this.callbanner()
    }
}


</script>
<style scoped>


</style>
