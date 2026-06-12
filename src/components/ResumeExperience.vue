<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  period: string;
  stack?: string;
}>();

const stackLabel = computed(() =>
  props.stack
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .join(" · "),
);
</script>

<template>
  <section
    class="resume-experience group relative mb-6 break-inside-avoid border-b border-zinc-200/80 pb-6 last:mb-0 last:border-b-0 last:pb-0 print:pb-4">
    <div
      class="resume-experience-period mb-2 flex max-w-full flex-col items-start gap-1 sm:pointer-events-none sm:absolute sm:top-0 sm:right-0 sm:mb-0 sm:max-w-[52%] sm:items-end print:right-0">
      <span class="text-xs tabular-nums tracking-wide text-zinc-500">
        {{ period }}
      </span>
      <span
        v-if="stackLabel"
        class="text-[11px] tracking-wide text-zinc-500"
        translate="no">
        {{ stackLabel }}
      </span>
    </div>
    <div
      class="resume-experience-body text-zinc-600 [&>p:first-child]:mb-3 [&>p:first-child]:max-w-none [&>p:first-child]:text-[13.5px] [&>p:first-child]:font-medium [&>p:first-child]:leading-snug [&>p:first-child]:text-zinc-900 sm:[&>p:first-child]:max-w-[calc(100%-5.5rem)] [&>p]:mb-1.5 [&_strong]:font-medium [&_strong]:text-zinc-900 [&_.resume-highlights]:max-w-none">
      <slot />
    </div>
  </section>
</template>
