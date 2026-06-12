<script setup lang="ts">
import type { ResumeProfile } from '../types'

defineProps<{
  profile: ResumeProfile
}>()
</script>

<template>
  <header class="mb-5 text-center">
    <h1 class="mb-2 text-2xl font-bold leading-snug text-gray-900">
      {{ profile.name }}
    </h1>
    <p v-if="profile.meta?.length" class="my-1 text-[13px] leading-relaxed text-gray-500">
      <template v-for="(item, index) in profile.meta" :key="item">
        <span v-if="index > 0" class="mx-2 text-gray-300">|</span>
        <span>{{ item }}</span>
      </template>
    </p>
    <p v-if="profile.intent?.length" class="my-1 text-[13px] leading-relaxed text-gray-500">
      <template v-for="(item, index) in profile.intent" :key="item">
        <span v-if="index > 0" class="mx-2 text-gray-300">|</span>
        <span>{{ item }}</span>
      </template>
    </p>
  </header>
</template>
