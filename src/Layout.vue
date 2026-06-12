<script setup lang="ts">
import { useData } from 'vitepress'
import ResumePage from './components/ResumePage.vue'
import ResumeHeader from './components/ResumeHeader.vue'
import type { ResumeFrontmatter } from './types'

const { frontmatter } = useData<ResumeFrontmatter>()
</script>

<template>
  <div
    class="min-h-screen"
    :class="frontmatter.resume ? 'px-4 py-6 print:p-0' : ''"
  >
    <ResumePage v-if="frontmatter.resume && frontmatter.profile">
      <ResumeHeader :profile="frontmatter.profile" />
      <main class="resume-content vp-doc text-gray-700">
        <Content />
      </main>
    </ResumePage>
    <main v-else class="mx-auto max-w-3xl px-6 py-8 vp-doc">
      <Content />
    </main>
  </div>
</template>
