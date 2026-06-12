<script setup lang="ts">
import { computed } from "vue";

import { resolveHighlightIcon } from "./highlight-icons";

const props = defineProps<{
  title: string;
  icon?: string;
  tone?: "sky" | "emerald" | "amber" | "violet" | "rose" | "cyan";
}>();

const toneClasses = {
  sky: "text-sky-600 bg-sky-50 ring-sky-100",
  emerald: "text-emerald-600 bg-emerald-50 ring-emerald-100",
  amber: "text-amber-700 bg-amber-50 ring-amber-100",
  violet: "text-violet-600 bg-violet-50 ring-violet-100",
  rose: "text-rose-600 bg-rose-50 ring-rose-100",
  cyan: "text-cyan-700 bg-cyan-50 ring-cyan-100",
};

const iconComponent = computed(() => resolveHighlightIcon(props.icon));
</script>

<template>
  <article
    class="rounded-lg bg-white/75 p-3 ring-1 ring-zinc-200/70 print:bg-white print:ring-zinc-200">
    <h4 class="flex items-center gap-1.5 text-[13px] font-semibold text-zinc-900">
      <span
        class="inline-flex size-6 shrink-0 items-center justify-center rounded-md ring-1"
        :class="tone ? toneClasses[tone] : 'bg-zinc-100 text-zinc-600 ring-zinc-200/80'">
        <component :is="iconComponent" class="size-3.5" :stroke-width="2" aria-hidden="true" />
      </span>
      {{ title }}
    </h4>
    <div
      class="mt-2 text-[12.5px] leading-relaxed text-zinc-600 [&>p]:m-0 [&>p+p]:mt-1.5 [&_strong]:font-medium [&_strong]:text-zinc-800">
      <slot />
    </div>
  </article>
</template>
