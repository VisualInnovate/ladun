<template>

        <img-banner>
            <img  src="../../img/companies-banner.png">
            <template #text>الشركات الخاصة بمسار التطوير العقاري </template>

        </img-banner>



    <section class="company py-28 bg-background-section">
        <div class="container mx-auto ">
            <div class="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  lg:gap-20 md:gap-32   ">
                <div class="rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center flex-col pt-5 items-center bg-white mb-12 sm:w-3/4  md:w-full mx-auto">
                    <img class="img-companies " src="../../img/company.png" alt="Sunset in the mountains">
                    <h3 class="text-2xl">مصنع بلت لتقنية البناء</h3>
                    <p class="text-base px-7 py-6">عتبر مصنع بلت لتقنية البناء الذي يقع في المدينة الصناعية بسدير
                        (محافظة المجمعة) على مساحة 25,000 متر مربع من أوائل مقدمي تقنية قوالب الخرسانة المعزولة عالية
                        الكفاءة ( ICF ) بالمملكة العربية السعودية، وهي من التقنيات الحديثة وتكنولوجيا البناء الصديقة
                        للبيئة التي تلقى رواجاً واسعاً في أوروبا ، وأمريكا الشمالية واستراليا والتي تعتمد على قوالب</p>
                    <div class="flex content-start flex-row justify-start w-full">
                        <a class=" special-button button bg-dark-brown text-white px-4 py-3 my-5 mb-14 ml-4 rtl:mr-4">زيارة
                            الموقع </a>
                    </div>


                </div>
                <div
                    class="rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center pt-5 flex-col items-center bg-white sm:mb-12">
                    <img class="img-companies " src="../../img/company.png" alt="Sunset in the mountains">
                    <h3 class="text-2xl">مصنع بلت لتقنية البناء</h3>
                    <p class="text-base px-7 py-6">عتبر مصنع بلت لتقنية البناء الذي يقع في المدينة الصناعية بسدير
                        (محافظة المجمعة) على مساحة 25,000 متر مربع من أوائل مقدمي تقنية قوالب الخرسانة المعزولة عالية
                        الكفاءة ( ICF ) بالمملكة العربية السعودية، وهي من التقنيات الحديثة وتكنولوجيا البناء الصديقة
                        للبيئة التي تلقى رواجاً واسعاً في أوروبا ، وأمريكا الشمالية واستراليا والتي تعتمد على قوالب</p>
                    <div class="flex content-start flex-row justify-start w-full">
                        <a class=" special-button button bg-dark-brown text-white px-4 py-3 my-5 mb-14 ml-4 rtl:mr-4">زيارة
                            الموقع </a>
                    </div>
                </div>
                <div
                    class="rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center  pt-5  flex-col items-center bg-white sm:mb-12">
                    <img class="img-companies " src="../../img/company.png" alt="Sunset in the mountains">
                    <h3 class="text-2xl">مصنع بلت لتقنية البناء</h3>
                    <p class="text-base px-7 py-6">عتبر مصنع بلت لتقنية البناء الذي يقع في المدينة الصناعية بسدير
                        (محافظة المجمعة) على مساحة 25,000 متر مربع من أوائل مقدمي تقنية قوالب الخرسانة المعزولة عالية
                        الكفاءة ( ICF ) بالمملكة العربية السعودية، وهي من التقنيات الحديثة وتكنولوجيا البناء الصديقة
                        للبيئة التي تلقى رواجاً واسعاً في أوروبا ، وأمريكا الشمالية واستراليا والتي تعتمد على قوالب</p>
                    <div class="flex content-start flex-row justify-start w-full">
                        <a class=" special-button button bg-dark-brown text-white px-4 py-3 my-5 mb-14 ml-4 rtl:mr-4">زيارة
                            الموقع </a>
                    </div>
                </div>


            </div>

        </div>

    </section>
</template>

<script>
import navbarComponent from '@/components/Navbar.vue'
import ImgBanner from '@/components/ImgBanner.vue'

export default {
    components: {
        navbarComponent,
        ImgBanner,
    }
}
</script>
<style scoped>
.img-companies {
    width: 160px;
    height: 160px;
}

</style>
