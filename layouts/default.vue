<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body class="bg-gray-900 text-white relative">
        <HeaderNav class="w-full z-10 fixed top-0"></HeaderNav>

        <div class="mt-[4.5rem]">
          <slot></slot>

          <div class="invisible xs:visible text-white">xs</div>
          <div class="invisible sm:visible text-white">sm</div>
          <div class="invisible md:visible text-white">md</div>
          <div class="invisible lg:visible text-white">lg</div>
          <div class="invisible xl:visible text-white">xl</div>
        </div>
      </Body>
    </Html>
  </div>
</template>

<script setup>
const { t } = useI18n();
const route = useRoute();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
const title = computed(() =>
  t("layouts.title", { title: t(route.meta.title ?? "TBD") })
);
</script>
