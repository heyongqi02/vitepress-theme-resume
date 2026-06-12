<script setup lang="ts">
import { computed } from "vue";

import ResumeBrandIcon from "./ResumeBrandIcon.vue";
import ResumeIconText from "./ResumeIconText.vue";
import { normalizeBrandSlug } from "./brand-slugs";
import type { SkillTagTone } from "./skill-tag-tones";

const props = defineProps<{
  text: string | number;
  tone?: SkillTagTone;
  icon?: string;
}>();

const toneClasses: Record<SkillTagTone, string> = {
  sky: "bg-sky-50 text-sky-800 ring-sky-200/80",
  emerald: "bg-emerald-50 text-emerald-800 ring-emerald-200/80",
  amber: "bg-amber-50 text-amber-900 ring-amber-200/80",
  rose: "bg-rose-50 text-rose-800 ring-rose-200/80",
  violet: "bg-violet-50 text-violet-800 ring-violet-200/80",
  cyan: "bg-cyan-50 text-cyan-900 ring-cyan-200/80",
};

const label = computed(() => String(props.text));
const brandSlug = computed(() => (props.icon ? normalizeBrandSlug(props.icon) : null));
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ring-1 print:bg-transparent print:ring-zinc-300"
    :class="tone ? toneClasses[tone] : 'bg-zinc-100 text-zinc-700 ring-zinc-200/80'">
    <template v-if="brandSlug">
      <ResumeBrandIcon :slug="brandSlug" size="sm" />
      <span>{{ label }}</span>
    </template>
    <ResumeIconText v-else :text="text" />
  </span>
</template>
