<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <article class="resume-highlight">
    <h3 class="resume-highlight-title text-[13px] font-medium text-zinc-900">
      {{ title }}
    </h3>
    <div
      class="mt-0.5 text-[12.5px] leading-[1.55] text-zinc-600 [&_strong]:font-medium [&_strong]:text-zinc-800 [&>p]:m-0 [&>p+p]:mt-1">
      <slot />
    </div>
  </article>
</template>
