<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <section class="company-info   py-28 bg-background-section pt-36 ">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">
                <div class="img-company-info  ">
                    <Carousel :pictures="gallery"
                              class="about-us-carousel h-[690px] [&>div:first-child]:h-[690px]  [&>div>div>img]:h-[690px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1  "/>

                </div>
                <div class="d-info h-full flex flex-col justify-center">
                    <h1 class="font-bold text-3xl mb-4 text-center md:text-start">About ladun investment </h1>
                    <p class="mb-24 text-2xl">
                        تأسست شركة لدن للاستثمارعام 1968م وتوالت نجاحاتها وإنجازاتها حتى أصبحت شركة سعودية مساهمة عامة
                        برأس مال وقدره (500,000,000) ريال سعودي، وتملك الشركة ما يزيد عن نصف قرن من الخبرة في الاستثمار
                        والتطوير العقاري وإدارة الأصول العقارية من خلال مجموعة من الشركات التابعة المتخصصة في المقاولات
                        والصناعة وإدارة المجمعات السكنية والتجارية، وقد نجحت الشركة في إرساء معايير جديدة لتطوير
                        المشاريع التجارية والسكنية والمشاريع متعددة الإستخدامات، مع حرصها على الحفاظ على مبادئ جودة
                        التصميم والابتكار والاستدامة طبقاً لأفضل المعايير العالمية الرائدة . والتعامل مع الشركات
                        المقاولات المشهورة

                    </p>
                    <div class="company-button flex items-center  flex-wrap w-full">
                        <a class=" flex items-center special-button text-2xl button bg-dark-brown text-white px-11 py-2 my-5 rtl:ml-28 ltr:mr-28 ml-4 rtl:mr-4 w-48">
                            <PhoneIcon class="h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"/>
                            <span>اتصل بنا</span>

                        </a>

                        <a class="flex text-dark-brown items-center ">

                            <!--                            <PlayCircleIcon class="h-16 w-16 rtl:ml-2 ltr:mr-2   "/>-->
                            <img src="../../img/play-button.png" class="rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]">
                            <span class="font-bold text-3xl">Video</span>
                        </a>

                    </div>
                </div>


            </div>
        </div>


    </section>


    <section class="company-manager py-24 bg-background-section">

        <h1 class="text-center font-bold mb-12 text-3xl">Board of Directors</h1>
        <div class="container mx-auto flex justify-center">


            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20 ">

                <div class=" max-w-sm border-2 border-gray-border-light rounded-xl p-2">

                    <div
                        class=" bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7">
                        <div class="flex justify-center px-4 pt-4">

                            <div class="flex flex-col items-center pb-10">
                                <img
                                    class="w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg"
                                    src="../../img/media-center.png"
                                    alt="Bonnie image"/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white  font-bold">Bonnie
                                    Green</h5>
                                <span
                                    class="text-sm text-gray-500 dark:text-gray-400 text-light-brown">Visual Designer</span>
                                <div class="flex text-center mt-2">

                                    يحمل شهادة الماجستير في إدارة الأعمال كما لديه العديد من الخبرات المهنية التي تتجاوز
                                    30 عاماً. تنقل خلالها في العديد من الشركات في مجال الصناعة والتطوير العقاري
                                    والاستثمار المالي.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div class=" max-w-sm border-2 border-gray-border-light rounded-xl p-2">

                    <div
                        class=" bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7">
                        <div class="flex justify-center px-4 pt-4">

                            <div class="flex flex-col items-center pb-10">
                                <img
                                    class="w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg"
                                    src="../../img/media-center.png"
                                    alt="Bonnie image"/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white  font-bold">Bonnie
                                    Green</h5>
                                <span
                                    class="text-sm text-gray-500 dark:text-gray-400 text-light-brown">Visual Designer</span>
                                <div class="flex text-center mt-2">

                                    يحمل شهادة الماجستير في إدارة الأعمال كما لديه العديد من الخبرات المهنية التي تتجاوز
                                    30 عاماً. تنقل خلالها في العديد من الشركات في مجال الصناعة والتطوير العقاري
                                    والاستثمار المالي.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div class=" max-w-sm border-2 border-gray-border-light rounded-xl p-2">

                    <div
                        class=" bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7">
                        <div class="flex justify-center px-4 pt-4">

                            <div class="flex flex-col items-center pb-10">
                                <img
                                    class="w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg"
                                    src="../../img/media-center.png"
                                    alt="Bonnie image"/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white  font-bold">Bonnie
                                    Green</h5>
                                <span
                                    class="text-sm text-gray-500 dark:text-gray-400 text-light-brown">Visual Designer</span>
                                <div class="flex text-center mt-2">

                                    يحمل شهادة الماجستير في إدارة الأعمال كما لديه العديد من الخبرات المهنية التي تتجاوز
                                    30 عاماً. تنقل خلالها في العديد من الشركات في مجال الصناعة والتطوير العقاري
                                    والاستثمار المالي.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div class=" max-w-sm border-2 border-gray-border-light rounded-xl p-2">

                    <div
                        class=" bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7">
                        <div class="flex justify-center px-4 pt-4">

                            <div class="flex flex-col items-center pb-10">
                                <img
                                    class="w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg"
                                    src="../../img/media-center.png"
                                    alt="Bonnie image"/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white  font-bold">Bonnie
                                    Green</h5>
                                <span
                                    class="text-sm text-gray-500 dark:text-gray-400 text-light-brown">Visual Designer</span>
                                <div class="flex text-center mt-2">

                                    يحمل شهادة الماجستير في إدارة الأعمال كما لديه العديد من الخبرات المهنية التي تتجاوز
                                    30 عاماً. تنقل خلالها في العديد من الشركات في مجال الصناعة والتطوير العقاري
                                    والاستثمار المالي.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div class=" max-w-sm border-2 border-gray-border-light rounded-xl p-2">

                    <div
                        class=" bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7">
                        <div class="flex justify-center px-4 pt-4">

                            <div class="flex flex-col items-center pb-10">
                                <img
                                    class="w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg"
                                    src="../../img/media-center.png"
                                    alt="Bonnie image"/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white  font-bold">Bonnie
                                    Green</h5>
                                <span
                                    class="text-sm text-gray-500 dark:text-gray-400 text-light-brown">Visual Designer</span>
                                <div class="flex text-center mt-2">

                                    يحمل شهادة الماجستير في إدارة الأعمال كما لديه العديد من الخبرات المهنية التي تتجاوز
                                    30 عاماً. تنقل خلالها في العديد من الشركات في مجال الصناعة والتطوير العقاري
                                    والاستثمار المالي.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div class=" max-w-sm border-2 border-gray-border-light rounded-xl p-2">

                    <div
                        class=" bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7">
                        <div class="flex justify-center px-4 pt-4">

                            <div class="flex flex-col items-center pb-10">
                                <img
                                    class="w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg"
                                    src="../../img/media-center.png"
                                    alt="Bonnie image"/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white  font-bold">Bonnie
                                    Green</h5>
                                <span
                                    class="text-sm text-gray-500 dark:text-gray-400 text-light-brown">Visual Designer</span>
                                <div class="flex text-center mt-2">

                                    يحمل شهادة الماجستير في إدارة الأعمال كما لديه العديد من الخبرات المهنية التي تتجاوز
                                    30 عاماً. تنقل خلالها في العديد من الشركات في مجال الصناعة والتطوير العقاري
                                    والاستثمار المالي.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div class=" max-w-sm border-2 border-gray-border-light rounded-xl p-2">

                    <div
                        class=" bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7">
                        <div class="flex justify-center px-4 pt-4">

                            <div class="flex flex-col items-center pb-10">
                                <img
                                    class="w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg"
                                    src="../../img/media-center.png"
                                    alt="Bonnie image"/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white  font-bold">Bonnie
                                    Green</h5>
                                <span
                                    class="text-sm text-gray-500 dark:text-gray-400 text-light-brown">Visual Designer</span>
                                <div class="flex text-center mt-2">

                                    يحمل شهادة الماجستير في إدارة الأعمال كما لديه العديد من الخبرات المهنية التي تتجاوز
                                    30 عاماً. تنقل خلالها في العديد من الشركات في مجال الصناعة والتطوير العقاري
                                    والاستثمار المالي.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div class=" max-w-sm border-2 border-gray-border-light rounded-xl p-2">

                    <div
                        class=" bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7">
                        <div class="flex justify-center px-4 pt-4">

                            <div class="flex flex-col items-center pb-10">
                                <img
                                    class="w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg"
                                    src="../../img/media-center.png"
                                    alt="Bonnie image"/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white  font-bold">Bonnie
                                    Green</h5>
                                <span
                                    class="text-sm text-gray-500 dark:text-gray-400 text-light-brown">Visual Designer</span>
                                <div class="flex text-center mt-2">

                                    يحمل شهادة الماجستير في إدارة الأعمال كما لديه العديد من الخبرات المهنية التي تتجاوز
                                    30 عاماً. تنقل خلالها في العديد من الشركات في مجال الصناعة والتطوير العقاري
                                    والاستثمار المالي.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    </section>

    <DarkFooter/>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import DarkFooter from '../components/DarkFooter.vue';
import {Carousel} from 'flowbite-vue'
import {PhoneIcon, PlayCircleIcon} from "@heroicons/vue/24/solid";
import {ref , onMounted} from 'vue'

const gallery = ref([
    {
        src: new URL('../../img/about-us-info.png', import.meta.url).href,
        alt: 'project_1'
    },
    {
        src: new URL('../../img/about_ladun_image.png', import.meta.url).href,
        alt: 'project_2'
    },
    {
        src: new URL('../../img/about-us-info.png', import.meta.url).href,
        alt: 'project_2'
    },
    {
        src: new URL('../../img/about_ladun_image.png', import.meta.url).href,
        alt: 'project_1'
    },
    {
        src: new URL('../../img/about-us-info.png', import.meta.url).href,
        alt: 'project_2'
    },
    {
        src: new URL('../../img/about_ladun_image.png', import.meta.url).href,
        alt: 'project_2'
    },
]);

const about = ref([]);

const getAbouUs = () => {
    axios.get("/api/investors").then(res => {
        about.value = res.data.aboutUs
        console.log(about.value)

    })
}

</script>


<style scoped>

</style>
