<template>
  <section class="dark:text-white dark:bg-black text-sm m-auto">
    <div class="container mx-auto pb-4">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 items-center justify-center">
        <!-- كل الأيقونات هنا (مختصرة للتوضيح) -->
        <div v-if="project.phases.length" class="flex items-center justify-center lg:justify-start">
          <img src="../../img/project_percentage.png" class="w-7 h-7">
          <a href="#" v-scroll-to="{ el: '#project_phases', offset: -128 }" class="ml-2 hover:underline">
            {{ $t('project') }}
          </a>
        </div>
        <!-- باقي الأيقونات بنفس الطريقة... -->
        <a class="button bg-light-brown text-white rounded-2xl text-center py-2 hover:bg-dark-brown"
           href="#" v-scroll-to="{ el: '#ask_us', offset: -128 }">
          {{ $t('askUs') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['project'])
</script>
