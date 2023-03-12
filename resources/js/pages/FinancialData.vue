<template>
    <Navbar class="bg-black fixed z-50 w-full" />
    <img-banner>
        <img src="../../img/finncial-banner.png">
        <template #text> البيانات الماليه</template>

    </img-banner>

    <section class="media-center py-28 bg-background-section">
        <div class="container mx-auto">
            <header class="flex flex-wrap justify-between items-center">
                <div
                    class="bg-subtraction-ltr-png rtl:bg-subtraction-png h-16 w-[80%] flex items-center rtl:pr-8  ltr:pl-8 text-xl">
                    البيانات المالية الخاصة لعام
                </div>
                <div class="year flex items-center text-[50px] font-bold " dir="rtl" >
                    <span class="text-dark-brown">23</span><span>20</span>
                </div>
            </header>

        </div>
    </section>

</template>

<script setup>

import Navbar from "@/components/Navbar.vue";
import ImgBanner from "@/components/ImgBanner.vue";



</script>
