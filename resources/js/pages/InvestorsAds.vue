<template>
    <Navbar class="bg-black fixed z-50 w-full" />
    <div class="pt-22 dark:text-white dark:bg-black ">
        <img-banner>
            <img class="w-full" style="height: 300px;"  :src="banner">

            <template  #text>{{$t('companyAds')}}

            </template>

        </img-banner>
    </div>


    <section class="media-center py-28 bg-background-section dark:text-white dark:bg-black">
        <div class="container mx-auto dark:text-white dark:bg-black">

            <div class="grid grid-cols-1 gap-4  lg:grid-cols-4 lg:gap-4 dark:text-white dark:bg-black">

                <card-link v-for="investor in investors" :key="investor.id" class="dark:text-black dark:bg-white [&>div>p>div>h3]:text-[16px]   [&>div>p>]:min-h-[200px] [&>div>h5]:text-[18px]  [&>div>h5]:min-h-[170px]" >
                        <template #date>
                            <div> <img
                        class="object-cover img-media-center rounded-t-lg h-96 md:h-auto top-0 w-full md:rounded-none md:rounded-l-lg rtl:pl-2 ltr:pr-2"
                        alt="" :src="investor.media[0].original_url" ></div>
                        </template>
                        <!-- :src="investor.media[0].original_url" -->
                    <template #head>

                        {{investor.title[$i18n.locale]}}
                    </template>

                    <template > <img
                        class="object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rtl:pl-2 ltr:pr-2"
                        :src="investor.media[0].original_url" alt="">
                    </template>
                    <template #text>
                        <div class="text-sm mb-2">{{investor.created_at}}</div>
                        <div v-html="investor.content[$i18n.locale].slice(0,100)+'...'"></div>
                        <div class="rtl:text-end ltr:text-end"> <button @click.prevent="$router.push({ name: 'Investors Relation' , params: { id: investor.id } })" class="p-2 my-2 text-xs rounded-lg text-white bg-dark-brown">{{$t('readMore')}}</button></div>
                    </template>

                </card-link>
            </div>
        </div>

    </section>
    <LightFooter />

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import CardLink from "@/components/CardLink.vue";
import LightFooter from "../components/LightFooter.vue";

export default {
    data() {
      return {
          investors:[],
          banner:''
      }
    },
    components:{
        Navbar,ImgBanner,CardLink,LightFooter
    },

    methods:{
        callbanner(){
            axios.get("/api/banners-pages").then(res => {
                this.banner= res.data.pages[2].media[2].original_url
                console.log(this.banner)
            })
        },
        getAllInvestors(){
            axios.get("/api/investors").then(res =>{
                this.investors=res.data.investors
                console.log(this.investors)

            })
        }
    },
    mounted() {
        this.getAllInvestors()
        this.callbanner()

    }
}

</script>
