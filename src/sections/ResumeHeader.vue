<script setup lang="ts">
import type { ResumeProfile, ResumeProfileTag } from "../types";

import ResumeSkillTag from "../components/ResumeSkillTag.vue";

defineProps<{
  profile: ResumeProfile;
}>();
</script>

<template>
  <header class="resume-header mb-8 border-b border-zinc-200 pb-6">
    <h1 class="mb-3 text-[26px] font-semibold tracking-tight text-zinc-900">
      {{ profile.name }}
    </h1>

    <p
      v-if="profile.meta?.length"
      class="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-zinc-500">
      <template v-for="(item, index) in profile.meta" :key="String(item)">
        <span
          v-if="index > 0"
          class="hidden h-3 w-px bg-zinc-300 sm:inline-block"
          aria-hidden="true" />
        <span>{{ item }}</span>
      </template>
    </p>

    <div v-if="profile.tags?.length" class="mt-4 flex flex-wrap gap-2">
      <ResumeSkillTag
        v-for="tag in profile.tags"
        :key="tag.label"
        :text="tag.label" />
    </div>

    <div v-else-if="profile.intent?.length" class="mt-4 flex flex-wrap gap-2">
      <ResumeSkillTag v-for="item in profile.intent" :key="String(item)" :text="item" />
    </div>
  </header>
</template>
