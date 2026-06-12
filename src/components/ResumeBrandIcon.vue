<script setup lang="ts">
import { normalizeBrandSlug } from "./brand-slugs";

const props = withDefaults(
  defineProps<{
    slug: string;
    color?: boolean;
    size?: "sm" | "md" | "lg";
  }>(),
  {
    color: true,
    size: "md",
  },
);

const normalized = normalizeBrandSlug(props.slug);
</script>

<template>
  <i
    :class="[
      'si-fit si inline-block shrink-0 not-italic leading-none',
      `si-${normalized}`,
      color && 'si--color',
      size === 'sm' && 'text-[13px]',
      size === 'md' && 'text-base',
      size === 'lg' && 'text-lg',
    ]"
    :aria-label="slug"
    role="img" />
</template>
