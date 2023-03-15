<template>

    <Navbar class="bg-black fixed z-50 w-full" />
        <div class="pt-32">
            <img-banner>
               <img  src="../../img/companies-banner.png">
               <template #text>{{$t('banner_company')}} </template>

           </img-banner>
        </div>

    <section class="company py-28 bg-background-section">
        <div class="container mx-auto ">
            <div class="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  lg:gap-20 md:gap-32   ">


                <div v-for =" company in companies" :key="company.id" class="rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center flex-col pt-5 items-center bg-white mb-12 sm:w-3/4  md:w-full mx-auto">
                    <img class="img-companies rounded-full mb-6" :src="company.media[0].original_url" alt="Sunset in the mountains">
                    <h3 class="text-2xl font-bold"  >  {{company.title[$i18n.locale]}} </h3>
                    <p class="text-base px-7 pb-6 pt-3 text-justify" v-html="company.content[$i18n.locale]">    </p>

                    <div class="flex content-start flex-row justify-start w-full">
                        <a class=" special-button button bg-dark-brown text-white px-4 py-2 my-5 mb-14 ml-4 rtl:mr-4">زيارة

                            الموقع </a>
                    </div>
                </div>


            </div>

        </div>

    </section>
    <DarkFooter />
</template>

<script >
import ImgBanner from '@/components/ImgBanner.vue'
import Navbar from "../components/Navbar.vue"
import DarkFooter from "../components/DarkFooter.vue";
export default {

    data(){
      return{
          companies:[]
      }
    },
    components:{
     ImgBanner,Navbar,DarkFooter
    },
    methods: {

        getAllCompanies(){
            axios.get("/api/companies").then(res =>{
                this.companies=res.data.companies
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
.img-companies {
    width: 160px;
    height: 160px;
}

</style>
