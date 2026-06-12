<script setup lang="ts">
defineProps<{
  title: string;
  /** @deprecated icons are no longer rendered */
  icon?: string;
  /** @deprecated kept for markdown compat; styling is unified */
  tone?: string;
}>();
</script>

<template>
  <article class="py-1">
    <h4 class="text-[13px] font-medium text-zinc-900">
      {{ title }}
    </h4>
    <div
      class="mt-1 text-[12.5px] leading-relaxed text-zinc-600 [&>p]:m-0 [&>p+p]:mt-1.5 [&_strong]:font-medium [&_strong]:text-zinc-800">
      <slot />
    </div>
  </article>
</template>
