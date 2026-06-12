<script setup lang="ts">
import { computed } from "vue";

import ResumeBrandIcon from "./ResumeBrandIcon.vue";
import { normalizeBrandSlug } from "./brand-slugs";

const props = defineProps<{
  text: string | number;
  /** @deprecated kept for markdown compat; styling is unified */
  tone?: string;
  icon?: string;
}>();

const label = computed(() => String(props.text));
const brandSlug = computed(() => (props.icon ? normalizeBrandSlug(props.icon) : null));
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50/80 px-2.5 py-1 text-[12px] text-zinc-700 print:border-zinc-300 print:bg-transparent">
    <template v-if="brandSlug">
      <ResumeBrandIcon :slug="brandSlug" size="sm" :color="false" />
      <span>{{ label }}</span>
    </template>
    <span v-else>{{ label }}</span>
  </span>
</template>
