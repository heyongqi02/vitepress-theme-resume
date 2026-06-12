<script setup lang="ts">
defineProps<{
  text: string | number;
}>();
</script>

<template>
  <span
    class="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50/80 px-2.5 py-1 text-[12px] text-zinc-700 print:border-zinc-300 print:bg-transparent">
    {{ String(text) }}
  </span>
</template>
