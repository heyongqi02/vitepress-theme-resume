<script setup lang="ts">
defineProps<{
  text: string | number;
}>();
</script>

<template>
  <span
    class="inline-flex items-center rounded border border-zinc-200 bg-zinc-50/80 px-2 py-0.5 text-[11.5px] text-zinc-600 print:border-zinc-300 print:bg-transparent">
    {{ String(text) }}
  </span>
</template>
