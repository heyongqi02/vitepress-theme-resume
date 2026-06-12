<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  period: string;
  company?: string;
  role?: string;
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
  <section class="resume-experience">
    <header class="resume-experience-header">
      <div v-if="company" class="resume-experience-heading min-w-0">
        <p class="resume-experience-company">{{ company }}</p>
        <p v-if="role" class="resume-experience-role">{{ role }}</p>
      </div>
      <div class="resume-experience-meta">
        <time class="resume-experience-period">{{ period }}</time>
        <ul v-if="stackItems.length" class="resume-experience-stack" translate="no">
          <li v-for="item in stackItems" :key="item">{{ item }}</li>
        </ul>
      </div>
    </header>
    <div class="resume-experience-body">
      <slot />
    </div>
  </section>
</template>
