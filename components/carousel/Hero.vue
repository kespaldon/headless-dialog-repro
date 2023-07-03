<template>
  <div>
    <!-- <Swiper
      :spaceBetween="4"
      :loop="true"
      :slidesPerView="defaultOptions.slidesPerView"
      :pagination="defaultOptions.pagination"
      :modules="defaultOptions.modules"
      :breakpoints="defaultOptions.breakPoints"
      :navigation="true"
      ref="swiper"
      @keyPress="onKeyPress"
      class="h-64"
    >
      <swiper-slide v-for="i in 8" class="bg-slate-700">
      </swiper-slide>
    </Swiper> -->
    <swiper class="h-[24rem] lg:h-[32rem] xl:h-[36rem]">
      <swiper-slide
        v-for="i in 8"
        class="bg-orange-100 flex justify-center items-center"
      >
        Slide {{ i }}
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Autoplay, Keyboard, Navigation } from "swiper";
const defaultSlidesPerView = 8;
const defaultOptions = {
  slidesPerView: 8,
  pagination: {
    clickable: true,
  },
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  // },
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
</script>

<style lang="scss" scoped></style>
