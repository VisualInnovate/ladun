<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <img-banner>
        <img src="../../img/finncial-banner.png">
        <template #text>{{ $t('finncial_banner') }}</template>

    </img-banner>

    <section class="media-center py-28 bg-background-section pt-32">
        <div class="container mx-auto">
            <!--            {{financials}}-->

            <div v-for="f  in financials" :key="index" class="mb-12">
                <div v-for="(financial,index ) in f">

                    <header class="flex flex-wrap justify-between items-center mb-5  "
                            :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'">
                        <div
                            class=" h-16 w-[90%] flex items-center px-4 text-xl  justify-between">
                          <div class="w-[49%]  flex bg-[#E6E6E6] justify-between p-2">
                            <div class="bg-[#E6E6E6] w-[49%] text-center my-auto truncate	">  {{ $t('header_finncial') }}</div>
                            <div class="flex  lg:hidden">
                                <span class="text-dark-brown">{{ index[2] }}{{ index[3] }}</span><span>{{
                                index[0]
                            }}{{ index[1] }}</span>
                            </div>
                          </div>
                           <div class="w-[49%] mx- flex bg-[#E6E6E6] justify-between p-2">
                            <div class="bg-[#E6E6E6] w-[49%]  text-center my-auto truncate	">  {{ $t('التقارير السنويه') }}</div>
                            <div class="flex  lg:hidden">
                                <span class="text-dark-brown">{{ index[2] }}{{ index[3] }}</span><span>{{
                                index[0]
                            }}{{ index[1] }}</span>
                            </div>
                           </div>
                        </div>
                        <div class="year flex items-center text-[50px] font-bold " dir="rtl">
                            <span class="text-dark-brown">{{ index[2] }}{{ index[3] }}</span><span>{{
                                index[0]
                            }}{{ index[1] }}</span>

                        </div>
                    </header>

                    <div class="grid  grid-cols-2  " >
                        <div class="card flex flex-wrap lg:flex-nowrap  ">
                    <a v-for="item in financial"
                    :href="'storage/'+item.financial_file"

<<<<<<< HEAD

                        <a v-for="item in financial"
                           :href="'storage/'+item.financial_file"

                           class="animate__animated animate__bounceIn mx-4 w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10">
                            <div class="flex flex-col items-center ">
                                <div
                                    class=" w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center">
                                    <img class=" w-12 h-12 " src="../../img/financial-logo.png"
                                         alt="Bonnie image"/>
                                </div>
                                <h5 class="mb-1 text-center text-xl font-medium text-gray-900 dark:text-white">
                                    {{ $t('list_money') }}
                                </h5>
                                <span
                                    class="text-sm text-gray-500 dark:text-gray-400">{{ item.title[$i18n.locale] }}</span>
                                <div class="flex  space-x-3 text-dark-brown font-bold">
                                    {{ index }}
                                </div>
=======
                    class="animate__animated animate__bounceIn mx-5  w-60 h-60 bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10">
                        <div class="flex flex-col items-center ">
                            <div
                                class=" w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center">
                                <img class=" w-12 h-12 " src="../../img/financial-logo.png"
                                    alt="Bonnie image"/>
>>>>>>> c21b3f4 (new commit)
                            </div>
                            <h5 class="mb-1 text-center text-xl font-medium text-gray-900 dark:text-white">
                                {{ $t('list_money') }}
                            </h5>
                            <span
                                class="text-sm text-gray-500 dark:text-gray-400">{{ item.title[$i18n.locale] }}</span>
                            <div class="flex  space-x-3 text-dark-brown font-bold">
                                {{ index }}
                            </div>
                        </div>
                    </a>
                    </div>
                    <div class="justify-items-start card card flex flex-wrap lg:flex-nowrap " >
                        <a v-for="item in financial"
                    :href="'storage/'+item.financial_file"

                    class="animate__animated animate__bounceIn mx-4 w-60 bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10">
                        <div class="flex flex-col items-center ">
                            <div
                                class=" w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center">
                                <img class=" w-12 h-12 " src="../../img/financial-logo.png"
                                    alt="Bonnie image"/>
                            </div>
                            <h5 class="mb-1 text-center text-xl font-medium text-gray-900 dark:text-white">
                                {{ $t('list_money') }}
                            </h5>
                            <span
                                class="text-sm text-gray-500 dark:text-gray-400">{{ item.title[$i18n.locale] }}</span>
                            <div class="flex  space-x-3 text-dark-brown font-bold">
                                {{ index }}
                            </div>
                        </div>
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

import Navbar from "@/components/Navbar.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import i18n from "../plugins/i18n";
import LightFooter from '../components/LightFooter.vue';


export default {
    computed: {
        i18n() {
            return i18n
        }
    },
    components: {
        Navbar, ImgBanner, LightFooter
    },
    data() {
        return {

            financials: []
        }
    },
    methods: {
        getAllFincials() {
            axios.get("/api/financials").then(res => {
                // this.financials=res.data.financials
                const reverseBaseonValues = Object.values(res.data.financials).reverse();
                var reverseBaseonKeys = Object.keys(res.data.financials).reverse();
                // console.log(reverseBaseonKeys)
                var i = 0;

                reverseBaseonValues.forEach((elem) => {
                        let obj = {}
                        obj[reverseBaseonKeys[i]] = elem
                        this.financials.push(obj);
                        i += 1
                    }
                )


                console.log(this.financials)

            })
        },
         getAllYears() {
            axios.get("/api/years").then(res => {
                // this.years=res.data.years
                const reverseBaseonValues = Object.values(res.data.years).reverse();
                var reverseBaseonKeys = Object.keys(res.data.years).reverse();
                // console.log(reverseBaseonKeys)
                var i = 0;

                reverseBaseonValues.forEach((elem) => {
                        let obj = {}
                        obj[reverseBaseonKeys[i]] = elem
                        this.years.push(obj);
                        i += 1
                    }
                )

                console.log(this.years)

            })
        }
    },
    mounted() {
        this.getAllFincials(),
        this.getAllYears()
    }
}


</script>
