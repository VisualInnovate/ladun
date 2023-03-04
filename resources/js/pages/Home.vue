<template>
    <header class="relative flex h-screen overflow-hidden">
        <div class=" px-6 pt-6 lg:px-8 w-full">
            <Navbar />
        </div>
        <video
            autoplay
            loop
            muted
            class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
            <source src="../../videos/28mb_home_page_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <img class="z-30 justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-48 lg:h-auto" src="../../img/logowithouttext.svg" />
        <button class="bg-dark-brown z-30 absolute top-1/2 ltr:right-0 rtl:left-0 ltr:rotate-90 rtl:-rotate-90 origin-top -translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2  w-72 h-10">Your interest</button>
    </header>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>