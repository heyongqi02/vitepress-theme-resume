<script setup lang="ts">
import { useResume } from "../use-resume";
import ResumeHeader from "./ResumeHeader.vue";

const { config, isResumeMode } = useResume();
</script>

<template>
  <div class="resume-layout" :class="isResumeMode ? 'px-4 py-6 sm:px-6 print:p-0' : ''">
    <a href="#resume-main" class="resume-skip-link">{{ config.skipLinkLabel }}</a>

    <template v-if="isResumeMode">
      <slot name="page-before" />
      <article class="resume-page print:m-0 print:max-w-none print:px-0 print:py-0">
        <slot name="header-before" />
        <ResumeHeader />
        <slot name="header-after" />
        <main id="resume-main" class="resume-content vp-doc" tabindex="-1">
          <slot name="content-before" />
          <Content />
          <slot name="content-after" />
        </main>
      </article>
      <slot name="page-after" />
    </template>

    <main v-else id="resume-main" class="resume-doc-page vp-doc" tabindex="-1">
      <Content />
    </main>
  </div>
</template>
