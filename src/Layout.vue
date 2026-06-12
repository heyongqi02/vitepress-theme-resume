<script setup lang="ts">
import { useData } from 'vitepress'
import ResumePage from './components/ResumePage.vue'
import ResumeHeader from './components/ResumeHeader.vue'
import type { ResumeFrontmatter } from './types'

const { frontmatter } = useData<ResumeFrontmatter>()
</script>

<template>
  <div class="resume-layout" :class="{ 'resume-layout--resume': frontmatter.resume }">
    <ResumePage v-if="frontmatter.resume && frontmatter.profile">
      <ResumeHeader :profile="frontmatter.profile" />
      <main class="resume-content vp-doc">
        <Content />
      </main>
    </ResumePage>
    <main v-else class="resume-fallback vp-doc">
      <Content />
    </main>
  </div>
</template>
