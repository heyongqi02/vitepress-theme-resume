<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <article class="py-1">
    <h3 class="resume-highlight-title text-[13px] font-medium text-zinc-900">
      {{ title }}
    </h3>
    <div
      class="mt-1 text-[12.5px] leading-relaxed text-zinc-600 [&>p]:m-0 [&>p+p]:mt-1.5 [&_strong]:font-medium [&_strong]:text-zinc-800">
      <slot />
    </div>
  </article>
</template>
