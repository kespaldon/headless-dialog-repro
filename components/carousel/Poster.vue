<template>
  <div>
    <h3 class="text-xl">Title</h3>
    <Swiper
      :spaceBetween="4"
      :loop="true"
      :slidesPerView="defaultOptions.slidesPerView"
      :breakpoints="defaultOptions.breakPoints"
      :pagination="defaultOptions.pagination"
      :modules="defaultOptions.modules"
      :navigation="true"
      :keyboard="defaultOptions.keyboard"
      ref="swiper"
      class="h-[14rem] lg:h-[12rem] xl:h-[18rem]"
    >
      <!-- @keyPress="onKeyPress" -->
      <swiper-slide
        v-for="i in 32"
        class="w-[16rem] bg-slate-700 transition-all duration-75 hover:bg-gray-200 hover:bg-opacity-25 focus:outline-none focus:bg-gray-200 focus:bg-opacity-25"
      >
        <button class="w-full h-full" @click="$emit('onPosterClick', i)">
          poster {{ i }}
        </button>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup>
import { Autoplay, Keyboard, Navigation } from "swiper";
const props = defineProps(["isFocused"]);

// Declare a reactive reference for keyboard.enabled
const keyboardEnabled = ref(false);

const defaultSlidesPerView = 8;
const defaultOptions = computed(() => {
  return {
    slidesPerView: 8,
    pagination: {
      clickable: true,
    },
    keyboard: {
      enabled: true,
      // enabled: keyboardEnabled.value,
      onlyInViewport: true,
    },
    breakPoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.50": {
        slidesPerView: 4,
      },
      "@0.75": {
        slidesPerView: 6,
      },
      "@1.00": {
        slidesPerView: defaultSlidesPerView,
      },
    },
    modules: [Keyboard, Autoplay, Navigation],
  };
});
</script>

<style lang="scss" scoped></style>
