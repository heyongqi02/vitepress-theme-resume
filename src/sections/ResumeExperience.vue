<script setup lang="ts">
import { CalendarRange } from "@lucide/vue";
import { computed } from "vue";

import ResumeBrandIcon from "../components/ResumeBrandIcon.vue";
import { parseBrandStack } from "../components/brand-slugs";

const props = defineProps<{
  period: string;
  stack?: string;
  /** @deprecated kept for markdown compat; styling is unified */
  accent?: string;
}>();

const brands = computed(() => parseBrandStack(props.stack));
</script>

<template>
  <div
    class="resume-experience group relative mb-6 break-inside-avoid border-b border-zinc-200/80 pb-6 last:mb-0 last:border-b-0 last:pb-0 print:pb-4">
    <div
      class="resume-experience-period pointer-events-none absolute top-0 right-0 flex max-w-[52%] flex-col items-end gap-1.5 print:right-0">
      <span
        class="inline-flex items-center gap-1 text-xs tabular-nums tracking-wide text-zinc-500">
        <CalendarRange class="size-3 shrink-0 text-zinc-400" :stroke-width="1.75" aria-hidden="true" />
        {{ period }}
      </span>
      <span v-if="brands.length" class="flex flex-wrap justify-end gap-1">
        <span
          v-for="slug in brands"
          :key="slug"
          class="inline-flex size-5 items-center justify-center opacity-70">
          <ResumeBrandIcon :slug="slug" size="sm" :color="false" />
        </span>
      </span>
    </div>
    <div
      class="resume-experience-body text-zinc-600 [&>p:first-child]:mb-3 [&>p:first-child]:max-w-[calc(100%-5.5rem)] [&>p:first-child]:text-[13.5px] [&>p:first-child]:font-medium [&>p:first-child]:leading-snug [&>p:first-child]:text-zinc-900 [&>p]:mb-1.5 [&_strong]:font-medium [&_strong]:text-zinc-900 [&_.resume-highlights]:max-w-none">
      <slot />
    </div>
  </div>
</template>
