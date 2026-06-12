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
  <section class="resume-experience group">
    <div class="resume-experience-period">
      <p class="text-[12px] tracking-wide text-zinc-500 tabular-nums">
        {{ period }}
      </p>
      <p v-if="stackLabel" class="mt-0.5 text-[11px] leading-snug text-zinc-400" translate="no">
        {{ stackLabel }}
      </p>
    </div>
    <div
      class="resume-experience-body [&_.resume-highlights]:max-w-none [&_strong]:font-medium [&_strong]:text-zinc-900 [&>p]:m-0 [&>p+p]:mt-2">
      <slot />
    </div>
  </section>
</template>
