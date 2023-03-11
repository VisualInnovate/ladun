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

                <card-link >
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text> لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع البلدي الأول في مكة المكرمة</template>
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/investor-section.png" alt="">
                </card-link>

                <card-link >
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text> لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع البلدي الأول في مكة المكرمة</template>
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/investor-section.png" alt="">
                </card-link>


                <card-link >
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text> لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع البلدي الأول في مكة المكرمة</template>
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/investor-section.png" alt="">
                </card-link>


                <card-link >
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text> لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع البلدي الأول في مكة المكرمة</template>
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/investor-section.png" alt="">
                </card-link>


                <card-link >
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text> لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع البلدي الأول في مكة المكرمة</template>
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/investor-section.png" alt="">
                </card-link>

            </div>
        </div>

    </section>
    <DarkFooter />

</template>

<script setup >
import Navbar from "@/components/Navbar.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import CardLink from "@/components/CardLink.vue";
import DarkFooter from "../components/DarkFooter.vue";
</script>
