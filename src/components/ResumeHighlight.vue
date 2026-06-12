<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <dt v-if="title" class="resume-highlight-title">{{ title }}</dt>
  <dd class="resume-highlight-body" :class="{ 'resume-highlight-body--solo': !title }">
    <slot />
  </dd>
</template>
