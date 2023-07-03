<template>
  <NuxtLayout>
    <div class="flex flex-col gap-y-1">
      <CarouselHero></CarouselHero>
      <div>
        <CarouselPoster @onPosterClick="onPosterClick"></CarouselPoster>
        <CarouselPoster @onPosterClick="onPosterClick"></CarouselPoster>
        <CarouselPoster @onPosterClick="onPosterClick"></CarouselPoster>
        <CarouselPoster @onPosterClick="onPosterClick"></CarouselPoster>
      </div>
      <client-only>
        <Modal key="poster" :trigger="modal" @on-close="modal = false">
          poster! {{ selectedPoster }}
          <template #footer> footer for poster modal</template>
        </Modal>
      </client-only>
    </div>
  </NuxtLayout>
</template>

<script setup>
const focusedCarousel = ref(1);
const selectedPoster = ref(null);
const modal = useModal();

const onPosterClick = (poster) => {
  selectedPoster.value = poster;
  modal.value = true;
  // navigateTo(`/title/${poster}`);
};
</script>

<style lang="scss" scoped></style>
