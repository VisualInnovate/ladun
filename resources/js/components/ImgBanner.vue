<template>
    <section class="banner relative">
        <div class="overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
      <slot ></slot>

    </section>
</template>

<script>
export default {
    name: "ImgBanner"
}
</script>

<style scoped>

</style>
