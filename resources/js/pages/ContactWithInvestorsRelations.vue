<template>
    <Navbar class="bg-black fixed z-50 w-full" />
    <div class="pt-22">
        <img-banner>
            <img  src="../../img/investors-page.png">
            <template #text>{{$t('investor_banner')}}  </template>

        </img-banner>
    </div>

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
          investors:[]
      }
    },
    components:{
        Navbar,ImgBanner,CardLink,LightFooter
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
