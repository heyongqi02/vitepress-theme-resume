<script setup lang="ts">
import { computed } from "vue";

import { resolveHighlightIcon } from "./highlight-icons";

const props = defineProps<{
  title: string;
  icon?: string;
  /** @deprecated kept for markdown compat; styling is unified */
  tone?: string;
}>();

const iconComponent = computed(() =>
  props.icon ? resolveHighlightIcon(props.icon) : null,
);
</script>

<template>
  <article class="py-1">
    <h4 class="flex items-center gap-2 text-[13px] font-medium text-zinc-900">
      <component
        :is="iconComponent"
        v-if="iconComponent"
        class="size-3.5 shrink-0 text-zinc-400"
        :stroke-width="1.75"
        aria-hidden="true" />
      {{ title }}
    </h4>
    <div
      class="mt-1 text-[12.5px] leading-relaxed text-zinc-600 [&>p]:m-0 [&>p+p]:mt-1.5 [&_strong]:font-medium [&_strong]:text-zinc-800"
      :class="iconComponent ? 'pl-5' : ''">
      <slot />
    </div>
  </article>
</template>
