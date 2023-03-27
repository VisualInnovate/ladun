<template>
    <carousel>
        <slide v-for="(item,index) in items" :key="index">
        </slide>
        <template #addons>
            <navigation/>
            <pagination/>
        </template>
    </carousel>

</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
    name: "utilities",
    components: {
        Carousel, Slide, Pagination, Navigation
    }
}
</script>

<style scoped>

</style>
