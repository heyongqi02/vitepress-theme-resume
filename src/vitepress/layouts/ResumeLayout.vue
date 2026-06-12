<script setup lang="ts">
import { useResumeConfig, useResumeMode } from "../../composables";
import ResumeHeader from "../sections/ResumeHeader.vue";
import ResumePage from "./ResumePage.vue";

const isResumeMode = useResumeMode();
const { config } = useResumeConfig();
</script>

<template>
  <div class="min-h-screen" :class="isResumeMode ? 'px-4 py-8 sm:px-6 print:p-0' : ''">
    <a href="#resume-main" class="resume-skip-link">{{ config.skipLinkLabel }}</a>

    <template v-if="isResumeMode">
      <slot name="page-before" />
      <ResumePage>
        <slot name="header-before" />
        <ResumeHeader />
        <slot name="header-after" />
        <main id="resume-main" class="resume-content vp-doc" tabindex="-1">
          <slot name="content-before" />
          <Content />
          <slot name="content-after" />
        </main>
      </ResumePage>
      <slot name="page-after" />
    </template>

    <main v-else id="resume-main" class="vp-doc mx-auto max-w-3xl px-6 py-10" tabindex="-1">
      <Content />
    </main>
  </div>
</template>
