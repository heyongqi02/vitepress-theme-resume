<script setup lang="ts">
defineProps<{
  text: string | number;
  primary?: boolean;
}>();
</script>

<template>
  <span class="resume-header-tag" :class="{ 'resume-header-tag--lead': primary }">
    {{ String(text) }}
  </span>
</template>
