<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <li class="resume-highlight">
    <span class="resume-highlight-title">{{ title }}</span>
    <div class="resume-highlight-body [&_strong]:font-medium [&_strong]:text-zinc-800 [&>p]:m-0">
      <slot />
    </div>
  </li>
</template>
