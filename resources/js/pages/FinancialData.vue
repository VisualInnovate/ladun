<template>
    <Navbar class="bg-black fixed z-50 w-full" />
    <img-banner>
        <img src="../../img/finncial-banner.png">
        <template #text>{{$t('finncial_banner')}}</template>

    </img-banner>

    <section class="media-center py-28 bg-background-section">
        <div class="container mx-auto">
            <div v-for="(financial,index ) in financials" :key="index" class="mb-12">

                <header class="flex flex-wrap justify-between items-center mb-5">
                    <div
                        class="bg-subtraction-ltr-png rtl:bg-subtraction-png h-16 w-[80%] flex items-center rtl:pr-8  ltr:pl-8 text-xl">
                        {{$t('header_finncial')}}
                    </div>
                    <div class="year flex items-center text-[50px] font-bold " dir="rtl">
                        <span class="text-dark-brown">{{index[2] }}{{index[3]}}</span><span>{{index[0] }}{{index[1]}}</span>
                    </div>
                </header>

                <div  class="card w-[80%] flex">

                    <a v-for="item in financial"
                       :href="'storage/'+item.financial_file"
                        class=" mx-4 w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10">
                        <div class="flex flex-col items-center ">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="../../img/financial-logo.png"
                                 alt="Bonnie image"/>
                            <h5 class="mb-1 text-center text-xl font-medium text-gray-900 dark:text-white">{{$t('list_money')}}</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">{{item.title[$i18n.locale]}}</span>
                            <div class="flex  space-x-3 text-dark-brown font-bold">
                                {{index}}
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>


    </section>

    <DarkFooter />

</template>

<script >

import Navbar from "@/components/Navbar.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import i18n from "../plugins/i18n";
import DarkFooter from '../components/DarkFooter.vue';


export default {
    computed: {
        i18n() {
            return i18n
        }
    },
    components:{
      Navbar ,ImgBanner,DarkFooter
    },
    data(){
        return{
            financials:[]
        }
    },
    methods:{
        getAllFincials(){
            axios.get("/api/financials").then(res =>{
                this.financials=res.data.financials
                console.log(this.financials)

            })
        }
    },
    mounted() {
        this.getAllFincials()

    }
}


</script>
