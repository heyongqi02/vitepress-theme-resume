<script setup lang="ts">
import { computed, ref } from "vue";

import { getStackIconUrl } from "../utils/simple-icons";

const props = defineProps<{
  name: string;
}>();

const iconFailed = ref(false);

const label = computed(() => props.name.trim());
const iconUrl = computed(() => getStackIconUrl(label.value));
const showIcon = computed(() => !iconFailed.value);
</script>

<template>
  <li v-if="showIcon" class="resume-stack-item" :title="label">
    <img
      :src="iconUrl"
      :alt="label"
      width="12"
      height="12"
      class="resume-stack-item__icon"
      loading="lazy"
      decoding="async"
      @error="iconFailed = true" />
  </li>
</template>
