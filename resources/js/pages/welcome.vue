<script setup>
import { Head } from '@inertiajs/vue3';

defineProps({
  welcome: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Head title="Welcome" />

  <div class="py-20">
    <div class="max-w-2xl mx-auto">
      <div
        class="bg-sky-600 overflow-hidden shadow-sm sm:rounded-lg"
      >
        <div class="p-6 text-sky-200 text-center">{{ welcome }}</div>
      </div>
    </div>
  </div>
</template>
