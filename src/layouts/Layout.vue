<script setup lang="ts">
import { useData } from "vitepress";

import ResumePage from "./ResumePage.vue";
import ResumeHeader from "../sections/ResumeHeader.vue";
import type { ResumeFrontmatter } from "../types";

const { frontmatter } = useData<ResumeFrontmatter>();
</script>

<template>
  <div class="min-h-screen" :class="frontmatter.resume ? 'px-4 py-8 sm:px-6 print:p-0' : ''">
    <a href="#resume-main" class="resume-skip-link">跳到主内容</a>
    <ResumePage v-if="frontmatter.resume && frontmatter.profile">
      <ResumeHeader :profile="frontmatter.profile" />
      <main id="resume-main" class="resume-content vp-doc" tabindex="-1">
        <Content />
      </main>
    </ResumePage>
    <main v-else id="resume-main" class="vp-doc mx-auto max-w-3xl px-6 py-10" tabindex="-1">
      <Content />
    </main>
  </div>
</template>
