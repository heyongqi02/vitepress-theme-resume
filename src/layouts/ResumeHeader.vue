<script setup lang="ts">
import { computed } from "vue";

import { useResume } from "../use-resume";
import { getMetaHref } from "../utils/meta-href";

const { profile } = useResume();

const metaItems = computed(() =>
  (profile.value?.meta ?? []).map((item) => {
    const href = getMetaHref(item);
    return {
      href,
      isExternal: href?.startsWith("http") ?? false,
      label: String(item),
    };
  }),
);
</script>

<template>
  <header v-if="profile" class="resume-header">
    <h1>{{ profile.name }}</h1>

    <p v-if="metaItems.length" class="resume-header-meta">
      <template v-for="(item, index) in metaItems" :key="item.label">
        <span v-if="index > 0" class="resume-header-meta-separator" aria-hidden="true">/</span>
        <a
          v-if="item.href"
          :href="item.href"
          class="resume-meta-link"
          :rel="item.isExternal ? 'noopener noreferrer' : undefined">
          {{ item.label }}
        </a>
        <span v-else class="resume-min-w-0">{{ item.label }}</span>
      </template>
    </p>

    <p v-if="profile.tags?.length" class="resume-header-tags">
      <template v-for="(tag, index) in profile.tags" :key="tag.label">
        <span v-if="index > 0" class="resume-header-meta-separator" aria-hidden="true">/</span>
        <span class="resume-header-tag">{{ tag.label }}</span>
      </template>
    </p>
  </header>
</template>
