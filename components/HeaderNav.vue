<template>
  <div class="bg-gray-900 h-[4.5rem]">
    <client-only>
      <template #fallback>
        <SkeletonsHeaderNav :items="menuItems" />
      </template>
      <header
        ref="header"
        class="h-full flex justify-between gap-x-10 items-stretch text-white uppercase"
        v-kbd-trap.roving.horizontal
      >
        <div class="flex items-center">
          <NuxtLink to="/">
            <Logo />
          </NuxtLink>
        </div>
        <div
          class="menu-items flex-1 flex gap-x-4 font-medium transition-all duration-75"
        >
          <NuxtLink
            v-for="menu in menuItems"
            :to="menu.path"
            :class="[
              menu.path == route.fullPath
                ? 'border-b-gray-400'
                : 'border-transparent',
            ]"
            tabindex="0"
            class="px-3 flex items-center h-full border-b-4 hover:bg-gray-200 hover:bg-opacity-25 focus:outline-none focus:bg-gray-200 focus:bg-opacity-25"
          >
            {{ $t(menu.name) }}
          </NuxtLink>
        </div>
        <div
          class="menu-items flex items-center gap-x-4 font-medium transition-all duration-75"
        >
          <NuxtLink
            :class="[
              '/search' == route.fullPath
                ? 'border-b-gray-400'
                : 'border-transparent',
            ]"
            to="/search"
            tabindex="0"
            class="px-3 flex items-center h-full border-b-4 hover:bg-gray-200 hover:bg-opacity-25 focus:outline-none focus:bg-gray-200 focus:bg-opacity-25"
          >
            <Icon name="uil:search" size="28" />
          </NuxtLink>
          <NuxtLink
            :class="[
              '/browse/kids' == route.fullPath
                ? 'border-b-gray-400'
                : 'border-transparent',
            ]"
            to="/browse/kids"
            tabindex="0"
            class="px-3 flex items-center h-full border-b-4 hover:bg-gray-200 hover:bg-opacity-25 focus:outline-none focus:bg-gray-200 focus:bg-opacity-25"
          >
            {{ $t("Kids") }}
          </NuxtLink>
          <!-- <NuxtLink
            :class="[
              '/profile' == route.fullPath
                ? 'border-b-gray-400'
                : 'border-transparent',
            ]"
            to="/profile"
            tabindex="0"
            class="px-3 flex items-center h-full border-b-4 hover:bg-gray-200 hover:bg-opacity-25 focus:outline-none focus:bg-gray-200 focus:bg-opacity-25"
          >
            <Icon name="uil:user-circle" size="28" />
          </NuxtLink> -->
          <button
            :class="[
              '/profile' == route.fullPath
                ? 'border-b-gray-400 border-b-4'
                : 'border-transparent',
            ]"
            class="px-3 flex items-center h-full hover:bg-gray-200 hover:bg-opacity-25 focus:outline-none focus:bg-gray-200 focus:bg-opacity-25"
            @click="onProfileClick"
          >
            <Icon name="uil:user-circle" size="28" />
          </button>
        </div>
        <!-- <LanguageSwitcher class="me-2" /> -->
      </header>
      <div>
        <Modal key="poster" :trigger="modal" @on-close="modal = false">
          profile!
          <template #footer> footer for profile modal</template>
        </Modal>
      </div>
    </client-only>
  </div>
</template>

<script setup>
const route = useRoute();
const menuItems = computed(() => [
  {
    name: "Home",
    path: "/browse",
  },
  {
    name: "Shows",
    path: "/browse/shows",
  },
  {
    name: "Movies",
    path: "/browse/movies",
  },
  {
    name: "Live TV",
    path: "/browse/live",
  },
  {
    name: "Sports",
    path: "/browse/sports",
  },
  {
    name: "Radio",
    path: "/browse/radio",
  },
]);

const header = ref(null);

const modal = useModal();
const user = useAuth();

const onProfileClick = () => {
  if (!user.value) {
    modal.value = true;
  }
};
</script>
