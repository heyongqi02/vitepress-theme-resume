<script setup lang="ts">
import { computed } from "vue";

import ResumeSkillTag from "../../components/ResumeSkillTag.vue";
import { useResume } from "../use-resume";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s\-+()]+$/;

function getMetaHref(item: string | number): string | undefined {
  const text = String(item).trim();

  if (EMAIL_PATTERN.test(text)) {
    return `mailto:${text}`;
  }

  if (PHONE_PATTERN.test(text)) {
    const digits = text.replace(/\D/g, "");
    if (digits.length >= 7) {
      return `tel:${digits}`;
    }
  }

  return undefined;
}

const { profile } = useResume();

const metaItems = computed(() =>
  (profile.value?.meta ?? []).map((item) => ({
    href: getMetaHref(item),
    label: String(item),
  })),
);
</script>

<template>
  <header v-if="profile" class="resume-header mb-8 border-b border-zinc-200 pb-6">
    <h1 class="mb-3 text-[26px] font-semibold tracking-tight text-zinc-900">
      {{ profile.name }}
    </h1>

    <p
      v-if="metaItems.length"
      class="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-zinc-500">
      <template v-for="(item, index) in metaItems" :key="item.label">
        <span
          v-if="index > 0"
          class="hidden h-3 w-px bg-zinc-300 sm:inline-block"
          aria-hidden="true" />
        <a v-if="item.href" :href="item.href" class="resume-meta-link min-w-0">
          {{ item.label }}
        </a>
        <span v-else class="min-w-0">{{ item.label }}</span>
      </template>
    </p>

    <div v-if="profile.tags?.length" class="mt-4 flex flex-wrap gap-2">
      <ResumeSkillTag v-for="tag in profile.tags" :key="tag.label" :text="tag.label" />
    </div>
  </header>
</template>
