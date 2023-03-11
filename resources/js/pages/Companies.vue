<template>

    <Navbar class="bg-black fixed z-50 w-full" />
        <div class="pt-32">
            <img-banner>
               <img  src="../../img/companies-banner.png">
               <template #text>الشركات الخاصة بمسار التطوير العقاري </template>
   
           </img-banner>
        </div>



    <section class="company py-28 bg-background-section">
        <div class="container mx-auto ">
            <div class="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  lg:gap-20 md:gap-32   ">
                <div class="rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center flex-col pt-5 items-center bg-white mb-12 sm:w-3/4  md:w-full mx-auto">
                    <img class="img-companies mb-6" src="../../img/company.png" alt="Sunset in the mountains">
                    <h3 class="text-2xl font-bold">مصنع بلت لتقنية البناء</h3>
                    <p class="text-base px-7 pb-6 pt-3 ">عتبر مصنع بلت لتقنية البناء الذي يقع في المدينة الصناعية بسدير
                        (محافظة المجمعة) على مساحة 25,000 متر مربع من أوائل مقدمي تقنية قوالب الخرسانة المعزولة عالية
                        الكفاءة ( ICF ) بالمملكة العربية السعودية، وهي من التقنيات الحديثة وتكنولوجيا البناء الصديقة
                        للبيئة التي تلقى رواجاً واسعاً في أوروبا ، وأمريكا الشمالية واستراليا والتي تعتمد على قوالب</p>
                    <div class="flex content-start flex-row justify-start w-full">
                        <a class=" special-button button bg-dark-brown text-white px-4 py-2 my-5 mb-14 ml-4 rtl:mr-4">زيارة
                            الموقع </a>
                    </div>


                </div>
                <div class="rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center flex-col pt-5 items-center bg-white mb-12 sm:w-3/4  md:w-full mx-auto">
                    <img class="img-companies mb-6" src="../../img/company.png" alt="Sunset in the mountains">
                    <h3 class="text-2xl font-bold">مصنع بلت لتقنية البناء</h3>
                    <p class="text-base px-7 pb-6 pt-3 ">عتبر مصنع بلت لتقنية البناء الذي يقع في المدينة الصناعية بسدير
                        (محافظة المجمعة) على مساحة 25,000 متر مربع من أوائل مقدمي تقنية قوالب الخرسانة المعزولة عالية
                        الكفاءة ( ICF ) بالمملكة العربية السعودية، وهي من التقنيات الحديثة وتكنولوجيا البناء الصديقة
                        للبيئة التي تلقى رواجاً واسعاً في أوروبا ، وأمريكا الشمالية واستراليا والتي تعتمد على قوالب</p>
                    <div class="flex content-start flex-row justify-start w-full">
                        <a class=" special-button button bg-dark-brown text-white px-4 py-2 my-5 mb-14 ml-4 rtl:mr-4">زيارة
                            الموقع </a>
                    </div>


                </div>
                <div class="rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center flex-col pt-5 items-center bg-white mb-12 sm:w-3/4  md:w-full mx-auto">
                    <img class="img-companies mb-6" src="../../img/company.png" alt="Sunset in the mountains">
                    <h3 class="text-2xl font-bold">مصنع بلت لتقنية البناء</h3>
                    <p class="text-base px-7 pb-6 pt-3 ">عتبر مصنع بلت لتقنية البناء الذي يقع في المدينة الصناعية بسدير
                        (محافظة المجمعة) على مساحة 25,000 متر مربع من أوائل مقدمي تقنية قوالب الخرسانة المعزولة عالية
                        الكفاءة ( ICF ) بالمملكة العربية السعودية، وهي من التقنيات الحديثة وتكنولوجيا البناء الصديقة
                        للبيئة التي تلقى رواجاً واسعاً في أوروبا ، وأمريكا الشمالية واستراليا والتي تعتمد على قوالب</p>
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

<script setup>
import navbarComponent from '@/components/Navbar.vue'
import ImgBanner from '@/components/ImgBanner.vue'
import Navbar from "../components/Navbar.vue"
import DarkFooter from "../components/DarkFooter.vue";

</script>
<style scoped>
.img-companies {
    width: 160px;
    height: 160px;
}

</style>
