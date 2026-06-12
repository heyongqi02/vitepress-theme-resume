<script setup lang="ts">
import type { ResumeProfile } from '../types'

defineProps<{
  profile: ResumeProfile
}>()
</script>

<template>
  <header class="mb-7 border-b border-zinc-200/80 pb-6">
    <h1 class="mb-3 text-[26px] font-bold tracking-tight text-zinc-900">
      {{ profile.name }}
    </h1>
    <p
      v-if="profile.meta?.length"
      class="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-zinc-500"
    >
      <template v-for="(item, index) in profile.meta" :key="item">
        <span
          v-if="index > 0"
          class="hidden h-3 w-px bg-zinc-300 sm:inline-block"
          aria-hidden="true"
        />
        <span>{{ item }}</span>
      </template>
    </p>
    <p
      v-if="profile.intent?.length"
      class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-zinc-600"
    >
      <template v-for="(item, index) in profile.intent" :key="item">
        <span
          v-if="index > 0"
          class="hidden h-3 w-px bg-zinc-300 sm:inline-block"
          aria-hidden="true"
        />
        <span>{{ item }}</span>
      </template>
    </p>
  </header>
</template>
