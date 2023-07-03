<template>
  <div>
    <HeadlessTransitionRoot as="template" appear :show="open">
      <HeadlessDialog
        as="div"
        class="relative z-10"
        @close="onClose"
      >
        <!-- transition for overlay -->
        <HeadlessTransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-800/80 bg-opacity-75 transition-opacity"
          />
        </HeadlessTransitionChild>
        <!-- overlay transition end -->
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <HeadlessTransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <HeadlessDialogPanel
                class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all max-w-[72rem] min-h-[48rem] sm:my-8 sm:w-full text-white bg-gray-900"
              >
                <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <slot></slot>
                </div>
                <slot name="footer"></slot>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["trigger"]);
const emit = defineEmits(["onClose"]);

const open = ref(false);

// Watch for changes in the trigger prop
watch(
  () => props.trigger,
  (value) => {
    open.value = value;
  }
);

const onClose = (val) => {
  open.value = val;
  emit("onClose");
};
</script>
