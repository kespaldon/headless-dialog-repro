// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "nuxt-swiper",
    "nuxt-headlessui",
  ],
  plugins: [
    {
      src: "~/plugins/vue-keyboard-trap",
      mode: "client",
    },
  ],
  headlessui: {
    prefix: "Headless",
  },
  i18n: {
    // baseUrl: 'https://my-nuxt-app.com',
    vueI18n: "./i18n.config.js",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "./i18n/en.js",
        dir: "ltr",
      },
      {
        code: "ar",
        name: "Arabic",
        iso: "ar-AE",
        file: "./i18n/ar.js",
        dir: "rtl",
      },
    ],
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: "i18n_redirected",
    //   redirectOn: "root",
    // },
    // differentDomains: process.env.NODE_ENV === "production",
  },
});
