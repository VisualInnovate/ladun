<template>
    <Navbar class="bg-black" />
    <Carousel :pictures="pictures"></Carousel>
    <section class="media-center py-28 bg-background-section">
        <div class="container mx-auto">
            <h1 class="text-3xl text-center mb-7">المركز الاعلامي</h1>
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
                <card-link>
                    <template #date>السبت 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text>
                        لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع
                        البلدي الأول في مكة المكرمة</template
                    >
                    <img
                        class="h-full w-full object-cover img-media-center rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/media-center.png"
                        alt=""
                    />
                </card-link>

                <card-link>
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text>
                        لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع
                        البلدي الأول في مكة المكرمة</template
                    >
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/media-center.png"
                        alt=""
                    />
                </card-link>

                <card-link>
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text>
                        لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع
                        البلدي الأول في مكة المكرمة</template
                    >
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/media-center.png"
                        alt=""
                    />
                </card-link>

                <card-link>
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text>
                        لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع
                        البلدي الأول في مكة المكرمة</template
                    >
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/media-center.png"
                        alt=""
                    />
                </card-link>

                <card-link>
                    <template #date>الخميس 15 مايو 2022</template>
                    <template #head>ملتقى التطوع البلدي</template>
                    <template #text>
                        لدن للاستثمار الراعي والشريك الأساسي في ملتقى التطوع
                        البلدي الأول في مكة المكرمة</template
                    >
                    <img
                        class="h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/media-center.png"
                        alt=""
                    />
                </card-link>
            </div>
        </div>
    </section>


</template>

<script setup>
import CardLink from "@/components/CardLink.vue";
import { Carousel } from "flowbite-vue";

const projects_1 = new URL('../../img/projects_1.png', import.meta.url).href
const projects_2 = new URL('../../img/projects_2.png', import.meta.url).href
const projects_3 = new URL('../../img/projects_3.png', import.meta.url).href
const projects_4 = new URL('../../img/projects_3.png', import.meta.url).href
const pictures = [
    {
        src: projects_1,
        alt: 'Picture 1',
    },
    {
        src: projects_4,
        alt: 'Picture 4',
    },
    {
        src: projects_2,
        alt: 'Picture 2',
    },
    {
        src: projects_3,
        alt: 'Picture 3',
    },
];
</script>

<style>
.img-media-center {
    width: 250px;
}
</style>
