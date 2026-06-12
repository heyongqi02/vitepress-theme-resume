<script setup lang="ts">
defineProps<{
  period: string;
}>();
</script>

<template>
  <div
    class="resume-experience group relative mb-5 break-inside-avoid rounded-r-sm border-l-2 border-slate-800/20 bg-zinc-50/60 py-3 pl-4 pr-1 print:border-l-slate-300 print:bg-transparent print:py-2 print:pl-3">
    <span
      class="resume-experience-period pointer-events-none absolute top-3 right-3 text-xs font-medium tabular-nums tracking-wide text-zinc-400 print:top-2 print:right-0">
      {{ period }}
    </span>
    <div
      class="resume-experience-body text-zinc-600 [&>p:first-child]:mb-2.5 [&>p:first-child]:max-w-[calc(100%-5.5rem)] [&>p:first-child]:text-[13.5px] [&>p:first-child]:font-semibold [&>p:first-child]:leading-snug [&>p:first-child]:text-zinc-900 [&>p]:mb-1.5 [&_strong]:font-semibold [&_strong]:text-zinc-900">
      <slot />
    </div>
  </div>
</template>
