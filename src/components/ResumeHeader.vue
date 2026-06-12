<script setup lang="ts">
import type { ResumeProfile } from '../types'

defineProps<{
  profile: ResumeProfile
}>()
</script>

<template>
  <header class="resume-header">
    <h1 class="resume-name">{{ profile.name }}</h1>
    <p v-if="profile.meta?.length" class="resume-meta">
      <template v-for="(item, index) in profile.meta" :key="item">
        <span v-if="index > 0" class="resume-sep">|</span>
        <span>{{ item }}</span>
      </template>
    </p>
    <p v-if="profile.intent?.length" class="resume-intent">
      <template v-for="(item, index) in profile.intent" :key="item">
        <span v-if="index > 0" class="resume-sep">|</span>
        <span>{{ item }}</span>
      </template>
    </p>
  </header>
</template>
