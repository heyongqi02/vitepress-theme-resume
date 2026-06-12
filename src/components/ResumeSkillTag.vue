<script setup lang="ts">
defineProps<{
  text: string | number;
  primary?: boolean;
}>();
</script>

<template>
  <span class="resume-tag" :class="{ 'resume-tag--primary': primary }">
    {{ String(text) }}
  </span>
</template>
