<script setup lang="ts">
import { computed } from "vue";

import ResumeStackItem from "./ResumeStackItem.vue";

const props = defineProps<{
  period: string;
  title?: string;
  subtitle?: string;
  stack?: string;
}>();

const stackItems = computed(
  () =>
    props.stack
      ?.split(",")
      .map((item) => item.trim())
      .filter(Boolean) ?? [],
);
</script>

<template>
  <section class="resume-block">
    <header class="resume-block-header">
      <div v-if="title" class="resume-block-heading">
        <p class="resume-block-title">{{ title }}</p>
        <p v-if="subtitle" class="resume-block-subtitle">{{ subtitle }}</p>
      </div>
      <div class="resume-block-meta">
        <time class="resume-block-period">{{ period }}</time>
        <ul v-if="stackItems.length" class="resume-block-stack" translate="no">
          <ResumeStackItem v-for="item in stackItems" :key="item" :name="item" />
        </ul>
      </div>
    </header>
    <div class="resume-block-body">
      <slot />
    </div>
  </section>
</template>
