<template>
  <div class="relative img-banner-slot h-[50vh] md:h-auto">
    <div class="overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
    <img class="h-full md:h-auto w-full lg:h-[400px]" :src="getGallery(project.banner)[0]?.src" alt="banner">

    <div class="z-40 text-white absolute top-[100%] mx-auto -translate-y-[100%] ltr:left-[3%] rtl:right-[3%] rtl:-translate-x-[30%]">
      <img v-if="project.logo" class="animate__animated animate__backInDown max-w-[170px] m-auto" id="logo-project" :src="project.logo.original_url">
    </div>
  </div>

  <section class="bg-background-section dark:text-white dark:bg-black" id="project">
    <div class="container mx-auto">
      <div class="lg:w-[90%]">
        <div class="grid grid-cols-1 lg:grid-cols-9 items-center py-4">
          <div class="lg:col-span-2 px-4 ltr:border-l-2 rtl:border-r-2 border-dark-brown">
            <router-link to="/projects">
              <p class="text-2xl font-bold truncate" v-if="project.department">
                {{ project.department.title[$i18n.locale] }}
              </p>
            </router-link>
            <h1 class="text-3xl text-[#AF9751] truncate" v-if="project.title">
              {{ project.title[$i18n.locale] }}
            </h1>
            <p v-if="project.number" class="text-lg">{{ $t('certified') }}</p>
            <p class="mb-12 text-sm px-2 py-4" v-if="project.number" v-html="project.number"></p>
          </div>
          <div class="lg:col-span-7">
            <p class="mb-12 text-xl px-2 py-4 h-full flex items-center" v-if="project.text" v-html="project.text[$i18n.locale]"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['project', 'top'])
const { $i18n } = useNuxtApp() || getCurrentInstance().appContext.config.globalProperties

const getGallery = (gallery) => {
  if (!gallery) return []
  return Object.values(gallery).map(img => ({
    src: img?.original_url,
    alt: img.name
  }))
}
</script>
