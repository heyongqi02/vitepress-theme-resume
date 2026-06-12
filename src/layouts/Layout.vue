<script setup lang="ts">
import { useData } from "vitepress";

import ResumePage from "./ResumePage.vue";
import ResumeHeader from "../sections/ResumeHeader.vue";
import type { ResumeFrontmatter } from "../types";

const { frontmatter } = useData<ResumeFrontmatter>();
</script>

<template>
  <div class="min-h-screen" :class="frontmatter.resume ? 'px-4 py-8 sm:px-6 print:p-0' : ''">
    <ResumePage v-if="frontmatter.resume && frontmatter.profile">
      <ResumeHeader :profile="frontmatter.profile" />
      <main class="resume-content vp-doc">
        <Content />
      </main>
    </ResumePage>
    <main v-else class="vp-doc mx-auto max-w-3xl px-6 py-10">
      <Content />
    </main>
  </div>
</template>
