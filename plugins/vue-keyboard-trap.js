import { VueKeyboardTrapDirectivePlugin } from "@pdanpdan/vue-keyboard-trap";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueKeyboardTrapDirectivePlugin);
});
