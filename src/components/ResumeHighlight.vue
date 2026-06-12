<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="resume-highlight">
    <dt v-if="title" class="resume-highlight-title">{{ title }}</dt>
    <dd class="resume-highlight-body">
      <slot />
    </dd>
  </div>
</template>
