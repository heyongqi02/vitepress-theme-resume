<script setup lang="ts">
import { computed } from "vue";

import { resolveResumeIcon } from "./resolve-icon";

const props = defineProps<{
  text: string | number;
}>();

const icon = computed(() => resolveResumeIcon(props.text));
const label = computed(() => String(props.text));
</script>

<template>
  <span class="inline-flex items-center gap-1.5">
    <component
      :is="icon"
      v-if="icon"
      class="size-3.5 shrink-0 text-zinc-400 print:text-zinc-500"
      :stroke-width="2"
      aria-hidden="true" />
    <span>{{ label }}</span>
  </span>
</template>
