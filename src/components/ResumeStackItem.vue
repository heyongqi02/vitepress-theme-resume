<script setup lang="ts">
import { computed, ref } from "vue";

import { getStackIconUrl } from "../utils/simple-icons";

const props = defineProps<{
  name: string;
}>();

const iconFailed = ref(false);

const label = computed(() => props.name.trim());
const iconUrl = computed(() => getStackIconUrl(label.value));
</script>

<template>
  <li class="resume-stack-item" :title="label" tabindex="0" :aria-label="label">
    <img
      v-if="!iconFailed"
      :src="iconUrl"
      :alt="label"
      width="12"
      height="12"
      class="resume-stack-item__icon"
      loading="lazy"
      decoding="async"
      @error="iconFailed = true" />
    <span v-else class="resume-stack-item__label">{{ label }}</span>
  </li>
</template>
