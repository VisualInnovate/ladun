<template>
  <div>
    <!-- General Info Cards -->
    <section class="genaral-info dark:text-white dark:bg-black bg-white lg:p-[5%]">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div v-if="project.land_area" class="w-56 mx-auto text-center">
          <img src="../../img/project_icon/Area.png" class="w-1/2 mx-auto">
          <p>{{ $t('areaOfLand') }}</p>
          <p class="font-bold text-lg">{{ project.land_area }} {{ $t('areaUnit') }}</p>
        </div>
        <!-- باقي الكروت بنفس الطريقة -->
      </div>
    </section>

    <!-- Project Phases -->
    <section v-if="project.phases?.length" id="project_phases" class="py-16">
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold text-light-brown flex items-center">
          <img src="../../img/project_percentage.png" class="w-8 h-8 mr-2">
          {{ $t('projectPhases') }}
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div v-for="phase in project.phases" class="text-center">
            <CircleProgressBar :value="phase.achieve_percentage" :max="100" percentage colorUnfilled="#eee" />
            <h5 class="mt-4">{{ phase.name[$i18n.locale] }}</h5>
          </div>
        </div>
      </div>
    </section>

    <!-- Services, Models, Gallery, Video, Location, Downloads, Partners ... -->
    <!-- (يمكنك نقل كل قسم كما هو من الكود الأصلي مع تعديل بسيط في الـ v-if) -->

  </div>
</template>

<script setup>
import { CircleProgressBar } from 'circle-progress.vue'
defineProps(['project'])
</script>
