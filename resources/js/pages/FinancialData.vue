<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <img-banner>
        <img class="w-full" style="height: 450px;" :src="banner">
        <template #text>{{ $t('finncial_banner') }}</template>

    </img-banner>

    <section class="media-center py-28 bg-background-section pt-32 dark:text-white dark:bg-black">
        <div class="container mx-auto">

            <!--                        {{financials}}-->
            <div class="grid grid-cols-1 lg:grid-cols-2  gap-5 flex-wrap ">
                <div class="" v-if="reports.length!=0">
                    <div v-for="f  in financials" :key="index" class="mb-12">
                        <div v-for="(financial,index ) in f">
                            <header class="flex w-full justify-between items-center mb-5  "
                                    :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'">
                                <div
                                    class=" h-16 w-[80%] flex items-center px-4 text-xl  justify-between">
                                    <div class="w-[100%]  flex bg-[#E6E6E6] justify-between p-2">
                                        <div class="bg-[#E6E6E6]  text-center my-auto truncate	dark:text-black">
                                            {{ $t('header_finncial') }}
                                        </div>

                                    </div>
                                </div>
                                <div class="year flex items-center text-[50px] font-bold " dir="rtl" >

                                    <span class="text-dark-brown" >{{
                                            index[2]
                                        }}{{ index[3] }}</span><span>{{
                                        index[0]
                                    }}{{ index[1] }}</span>
                                </div>
                            </header>

                            <div class="  ">
                                <div class="card grid grid-cols-1 lg:grid-cols-3 gap-3 px-10  ">
                                    <a v-for="item in financial"
                                       :href="'storage/'+item.financial_file"
                                       class="animate__animated  dark:bg-gray-800  animate__bounceIn   dark:text-black  w-full h-60 bg-white border border-gray-200  rounded-lg shadow  dark:border-gray-700 p-1">
                                        <div class="flex flex-col items-center   ">
                                            <div
                                                class=" w-24 h-24 mb-3 rounded-full p-5 shadow-lg dark:bg-[white] flex justify-center items-center">
                                                <img class=" w-12 h-12 " src="../../img/financial-logo.png"
                                                     alt="Bonnie image"/>
                                            </div>
                                            <h5 class="mb-1 dark:text-gray-300  text-center text-lg font-medium text-gray-900 dark:text-black lg:h-14">
                                                {{
                                                    item.title[$i18n.locale]
                                                }}
                                            </h5>

                                            <div class="flex  space-x-3 text-dark-brown font-bold">
                                                {{ index }}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="justify-items-start card card flex flex-wrap lg:flex-nowrap ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="" v-else>
                    <div v-for="f  in financials" :key="index" class="mb-12 ">
                        <div v-for="(financial,index ) in f">
                            <header class="flex flex-wrap justify-between  mb-5  "
                                    :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'">
                                <div
                                    class=" h-16 w-[80%]  items-center px-4 text-xl  justify-between">
                                    <div class="w-[100%]  flex bg-[#E6E6E6] justify-between p-2">
                                        <div class="bg-[#E6E6E6] w-[80%] text-center my-auto truncate	dark:text-black">
                                            {{ $t('header_finncial') }}
                                        </div>

                                    </div>
                                </div>
                                <div class="year flex items-center text-[50px] font-bold my-auto " dir="rtl">
                                    <span class="text-dark-brown">{{ index[2] }}{{ index[3] }}</span><span>{{
                                        index[0]
                                    }}{{ index[1] }}</span>
                                </div>
                            </header>

                            <div class=" ">
                                <div class="card flex flex-wrap lg:flex-nowrap  ">
                                    <a v-for="item in financial"
                                       :href="'storage/'+item.financial_file"

                                       class="animate__animated animate__bounceIn mx-5 dark:bg-gray-800 w-60 h-60 bg-white border border-gray-200  rounded-lg shadow  dark:border-gray-700 p-10">
                                        <div class="space-y-4 flex flex-col items-center ">
                                            <div
                                                class=" w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center">
                                                <img class=" w-12 h-12 " src="../../img/financial-logo.png"
                                                     alt="Bonnie image"/>
                                            </div>
                                            <h5 class="mb-1 text-center text-lg font-medium text-gray-900 dark:text-gray-900">
                                                {{
                                                    item.title[$i18n.locale]
                                                }}
                                            </h5>

                                            <div class="flex  space-x-3 text-dark-brown font-bold">
                                                {{ index }}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="justify-items-start card card flex flex-wrap lg:flex-nowrap ">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="">
                    <div v-for="f  in reports" :key="index" class="mb-12">
                        <div v-for="(financial,index ) in f">

                            <header class="flex  justify-between  mb-5  "
                                    :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'">
                                <div
                                    class=" h-16 w-[80%] text-right mt-2 flex items-start px-4 text-xl  justify-between">
                                    <div class="w-[100%]  flex bg-[#E6E6E6] justify-between p-2">
                                        <div class="bg-[#E6E6E6] w-full text-center my-auto truncate	dark:text-black">
                                            {{ $t('reports') }}
                                        </div>
                                    </div>
                                </div>

                                <div class="year flex items-center text-[50px] font-bold " dir="rtl">
                                    <span class="text-dark-brown">{{ index[2] }}{{ index[3] }}</span><span>{{
                                        index[0]
                                    }}{{ index[1] }}</span>
                                </div>

                            </header>



                            <div class=" ">
                                <div class="card grid grid-cols-1 lg:grid-cols-3  gap-2 px-10  ">

                                    <a v-for="item in financial"
                                       :href="'storage/'+item.year_file"
                                       :class="{ 'invisible': item.year_file == null}"    class="animate__animated animate__bounceIn   w-full h-60 bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-1">
                                        <div class="flex flex-col items-center ">
                                            <div
                                                class=" w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center dark:bg-gray-100">
                                                <img class=" w-12 h-12 " src="../../img/financial-logo.png"
                                                     alt="Bonnie image"/>
                                            </div>
                                            <h5 class="mb-1 dark:text-gray-300 text-center text-xl font-medium text-gray-900 lg:h-14 ">
                                                {{
                                                    item.title[$i18n.locale]
                                                }}
                                            </h5>
                                            <div class="flex  space-x-3 text-dark-brown font-bold">
                                                {{ index }}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="justify-items-start card card flex flex-wrap lg:flex-nowrap ">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-2">
                    <div v-for="f  in annual_report" :key="index" class="mb-12">
                        <div v-for="(annual,index ) in f">

                            <header class="flex  justify-between  mb-5  "
                                    :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'">
                                <div
                                    class=" h-16 w-[80%] text-right mt-2 flex items-start px-4 text-xl  justify-between">
                                    <div class="w-[100%]  flex bg-[#E6E6E6] justify-between p-2">
                                        <div class="bg-[#E6E6E6] w-full text-center my-auto truncate	dark:text-black">
                                            {{ $t('annual_reports') }}
                                        </div>
                                    </div>
                                </div>

                                <div class="year flex items-center text-[50px] font-bold " dir="rtl">
                                    <span class="text-dark-brown">{{ index[2] }}{{ index[3] }}</span><span>{{
                                        index[0]
                                    }}{{ index[1] }}</span>
                                </div>

                            </header>

                            <div class=" ">
                                <div v-for="x in annual">

                                </div>
                                <div class="card grid grid-cols-1 lg:grid-cols-3  gap-2 px-10  ">

                                    <a v-for="item in annual"
                                       :href="'storage/'+item.report_file"
                                       :class="{ 'invisible': item.report_file == null}"    class="animate__animated animate__bounceIn   w-full h-60 bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-1">
                                        <div class="flex flex-col items-center ">
                                            <div
                                                class=" w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center dark:bg-gray-100">
                                                <img class=" w-12 h-12 " src="../../img/financial-logo.png"
                                                     alt="Bonnie image"/>
                                            </div>
                                            <h5 class="mb-1 dark:text-gray-300 text-center text-xl font-medium text-gray-900 lg:h-14 ">
                                                {{
                                                  item.title[$i18n.locale]
                                                }}
                                            </h5>
                                            <div class="flex  space-x-3 text-dark-brown font-bold">
                                                {{ index }}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="justify-items-start card card flex flex-wrap lg:flex-nowrap ">
                                </div>
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

            financials: [],
            reports: [],
            annual_report:[],
            financialAndReports: [],
            banner:''
        }
    },
    methods: {
        callbanner(){
            axios.get("/api/banners-pages").then(res => {
                this.banner= res.data.pages[2].media[2]?.original_url
                console.log(this.banner)
            })
        },
        getAllFincials() {
            axios.get("/api/financials").then(res => {
                // this.financials=res.data.financials

                const reverseBaseonValues = Object.values(res.data.financials).reverse();
                var reverseBaseonKeys = Object.keys(res.data.financials).reverse();
                const reverseBaseonValues2 = Object.values(res.data.reports).reverse();
                var reverseBaseonKeys2 = Object.keys(res.data.reports).reverse();
                const reverseBaseonValues3 = Object.values(res.data.annual_report).reverse();
                var reverseBaseonKeys3 = Object.keys(res.data.annual_report).reverse();
                console.log(res.data.financials)
                var i = 0;

                reverseBaseonValues.forEach((elem) => {
                        let obj = {}
                        obj[reverseBaseonKeys[i]] = elem
                        this.financials.push(obj);
                        i += 1
                    }
                )
                console.log(this.financials)
                i = 0
                reverseBaseonValues2.forEach((elem) => {
                        let obj = {}
                        obj[reverseBaseonKeys2[i]] = elem
                        this.reports.push(obj);
                        i += 1
                    }
                )
                i = 0
                reverseBaseonValues3.forEach((elem) => {
                        let obj = {}
                        obj[reverseBaseonKeys3[i]] = elem
                        this.annual_report.push(obj);
                        i += 1
                    }
                )
                console.log(this.financialAndReports)

            })
        }
    },
    mounted() {
        this.getAllFincials()
        this.callbanner()
    }
}


</script>
