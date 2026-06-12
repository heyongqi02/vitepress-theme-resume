<script setup lang="ts">
import { computed } from "vue";

import { useResume } from "../use-resume";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s\-+()]+$/;
const HTTP_URL_PATTERN = /^https?:\/\//i;
const DOMAIN_URL_PATTERN = /^(?:[\w-]+\.)+[\w-]{2,}(?:\/[^\s]*)?$/;

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

  if (HTTP_URL_PATTERN.test(text)) {
    return text;
  }

  if (DOMAIN_URL_PATTERN.test(text)) {
    return `https://${text}`;
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
  <header v-if="profile" class="resume-header">
    <h1>{{ profile.name }}</h1>

    <p v-if="metaItems.length" class="resume-header-meta">
      <template v-for="(item, index) in metaItems" :key="item.label">
        <span v-if="index > 0" class="resume-header-meta-separator" aria-hidden="true" />
        <a v-if="item.href" :href="item.href" class="resume-meta-link">
          {{ item.label }}
        </a>
        <span v-else class="min-w-0">{{ item.label }}</span>
      </template>
    </p>

    <p v-if="profile.tags?.length" class="resume-header-tags">
      <template v-for="(tag, index) in profile.tags" :key="tag.label">
        <span v-if="index > 0" class="resume-header-meta-separator" aria-hidden="true" />
        <span class="resume-header-tag" :class="{ 'resume-header-tag--lead': index === 0 }">
          {{ tag.label }}
        </span>
      </template>
    </p>
  </header>
</template>
