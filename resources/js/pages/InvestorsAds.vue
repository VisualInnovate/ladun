<template>
    <Navbar class="bg-black fixed z-50 w-full" />
    <div class="pt-26 dark:text-white dark:bg-black ">
        <img-banner>
            <img class="w-full" style="height: 300px;"  :src="banner">

            <template   #text>{{$t('companyAds')}}

            </template>

        </img-banner>
    </div>


    <section class="media-center py-28 bg-background-section dark:text-white dark:bg-black">
        <div class="container mx-auto dark:text-white dark:bg-black">

            <div class="grid grid-cols-1 gap-4  lg:grid-cols-4 lg:gap-4 dark:text-white dark:bg-black">
                <div v-for="investor in investors" :key="investor.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img class="rounded-t-lg" style="width: 100%;height: 200px;" :src="investor.media[0]?.original_url" alt="" />

<div class="p-1 px-3">
    <p  class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{investor.created_at}}</p>
    <p style="min-height: 144px;" class=" font-normal text-gray-700 dark:text-gray-400">{{investor.title[$i18n.locale]}}</p>
    <div style="min-height: 120px;" v-html="convertToString(investor.content[$i18n.locale])"></div>
</div>

<div>
<p  @click.prevent="$router.push({ name: 'Investors Relation' , params: { id: investor.id } })" class="  mx-4 cursor-pointer py-2 my-2 w-[90%]  text-sm font-medium text-center text-white bg-dark-brown rounded-lg hover:bg-dark-brownfocus:ring-4 focus:outline-none focus:bg-dark-brown dark:bg-dark-brown dark:hover:bg-dark-brown dark:focus:bg-dark-brown">
    {{ $t('readMore') }}

</p>
</div>
</div>


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

        convertToString(content) {
                    // Use String() function to ensure content is treated as a string
                    const stringContent = String(content);

                    // Return the string content
                    return stringContent.slice(0,100)+'...';
                },
        callbanner(){
            axios.get("/api/banners-pages").then(res => {

                this.banner= res.data.pages[2].media[0]?.original_url
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
