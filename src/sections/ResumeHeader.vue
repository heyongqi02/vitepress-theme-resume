<script setup lang="ts">
import type { ResumeProfile, ResumeProfileTag } from "../types";

import ResumeIconText from "../components/ResumeIconText.vue";
import ResumeSkillTag from "../components/ResumeSkillTag.vue";
import { skillTagTones } from "../components/skill-tag-tones";

defineProps<{
  profile: ResumeProfile;
}>();

function resolveTagTone(index: number, tag?: ResumeProfileTag) {
  return tag?.tone ?? skillTagTones[index % skillTagTones.length];
}
</script>

<template>
  <header class="resume-header mb-7 border-b border-zinc-200/70 pb-6">
    <h1
      class="mb-3 bg-gradient-to-r from-zinc-900 via-slate-800 to-zinc-700 bg-clip-text text-[26px] font-bold tracking-tight text-transparent">
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
        <ResumeIconText :text="item" />
      </template>
    </p>

    <div v-if="profile.tags?.length" class="mt-3 flex flex-wrap gap-2">
      <ResumeSkillTag
        v-for="(tag, index) in profile.tags"
        :key="tag.label"
        :text="tag.label"
        :icon="tag.icon"
        :tone="resolveTagTone(index, tag)" />
    </div>

    <div v-else-if="profile.intent?.length" class="mt-3 flex flex-wrap gap-2">
      <ResumeSkillTag
        v-for="(item, index) in profile.intent"
        :key="String(item)"
        :text="item"
        :tone="resolveTagTone(index)" />
    </div>
  </header>
</template>
