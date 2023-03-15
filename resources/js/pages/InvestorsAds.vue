<template>
    <Navbar class="bg-black fixed z-50 w-full" />
    <div class="pt-32">
        <img-banner>
            <img  src="../../img/investors-page.png">
            <template #text>علاقات المستثمرين  </template>

        </img-banner>
    </div>

    <section class="media-center py-28 bg-background-section">
        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <card-link v-for="investor in investors">
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>{{investor.title[$i18n.locale]}}</template>
                    <template #text> <div v-html="investor.content[$i18n.locale]"></div></template>
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        :src="investor.media[0].original_url" alt="">
                </card-link>


            </div>
        </div>

    </section>
    <DarkFooter />

</template>

<script  >
import Navbar from "@/components/Navbar.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import CardLink from "@/components/CardLink.vue";
import DarkFooter from "../components/DarkFooter.vue";

export default {
    data(){
      return{
          investors:[]
      }
    },
    components:{
        Navbar,ImgBanner,CardLink,DarkFooter
    },
    methods:{
        getAllInvestors(){
            axios.get("/api/investors").then(res =>{
                this.investors=res.data.investors
                console.log(this.investors)

            })
        }
    },
    mounted() {
        this.getAllInvestors()

    }


}

</script>
