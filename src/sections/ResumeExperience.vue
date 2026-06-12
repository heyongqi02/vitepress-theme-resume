<script setup lang="ts">
import { CalendarRange } from "@lucide/vue";
import { computed } from "vue";

import ResumeBrandIcon from "../components/ResumeBrandIcon.vue";
import { parseBrandStack } from "../components/brand-slugs";

const props = defineProps<{
  period: string;
  stack?: string;
  accent?: "sky" | "emerald" | "amber" | "violet" | "rose" | "cyan";
}>();

const accentClasses = {
  sky: "border-sky-400/50 bg-sky-50/70",
  emerald: "border-emerald-400/50 bg-emerald-50/70",
  amber: "border-amber-400/50 bg-amber-50/70",
  violet: "border-violet-400/50 bg-violet-50/70",
  rose: "border-rose-400/50 bg-rose-50/70",
  cyan: "border-cyan-400/50 bg-cyan-50/70",
};

const brands = computed(() => parseBrandStack(props.stack));
</script>

<template>
  <div
    class="resume-experience group relative mb-5 break-inside-avoid rounded-r-md border-l-[3px] py-3 pl-4 pr-2 print:border-l-zinc-300 print:bg-transparent print:py-2 print:pl-3"
    :class="accent ? accentClasses[accent] : 'border-slate-700/25 bg-zinc-50/60'">
    <div
      class="resume-experience-period pointer-events-none absolute top-3 right-3 flex max-w-[52%] flex-col items-end gap-1.5 print:top-2 print:right-0">
      <span
        class="inline-flex items-center gap-1 text-xs font-medium tabular-nums tracking-wide text-zinc-500">
        <CalendarRange class="size-3 shrink-0 text-violet-500" :stroke-width="2" aria-hidden="true" />
        {{ period }}
      </span>
      <span v-if="brands.length" class="flex flex-wrap justify-end gap-1.5">
        <span
          v-for="slug in brands"
          :key="slug"
          class="inline-flex size-6 items-center justify-center rounded-md bg-white/80 ring-1 ring-zinc-200/80 print:bg-white">
          <ResumeBrandIcon :slug="slug" size="sm" />
        </span>
      </span>
    </div>
    <div
      class="resume-experience-body text-zinc-600 [&>p:first-child]:mb-3 [&>p:first-child]:max-w-[calc(100%-5.5rem)] [&>p:first-child]:text-[13.5px] [&>p:first-child]:font-semibold [&>p:first-child]:leading-snug [&>p:first-child]:text-zinc-900 [&>p]:mb-1.5 [&_strong]:font-semibold [&_strong]:text-zinc-900 [&_.resume-highlights]:max-w-none">
      <slot />
    </div>
  </div>
</template>
