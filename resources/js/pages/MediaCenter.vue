<template>

    <section class="media-center py-28">


        <div class="container mx-auto">
            <h1 class="text-3xl text-center mb-7">
                المركز الاعلامي
            </h1>
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10">

                <a href="#" v-for="index in 4" :key="index"
                   class="flex flex-col mx-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="flex flex-col justify-between p-4 pt-1 leading-normal ">
                        <p class="mb-7">الخميس 15 مايو 2022</p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ملتقي التطوع
                            البلدي</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">لدن للاستثمار الراعي والشريك
                            الأساسي في ملتقى التطوع البلدي الأول في مكة المكرمة</p>
                    </div>
                    <img
                        class="h-full w-full object-cover img-media-center rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src="../../img/media-center.png" alt="">

                </a>
            </div>
        </div>

    </section>


</template>

<script>


export default {}
</script>

<style>
.img-media-center {

    width: 250px;
}
</style>
