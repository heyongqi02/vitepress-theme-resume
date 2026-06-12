<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <li class="resume-highlight">
    <span class="resume-highlight-title">{{ title }}</span>
    <div class="resume-highlight-body">
      <slot />
    </div>
  </li>
</template>
