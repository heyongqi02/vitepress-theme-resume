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
  <li class="resume-stack-item">
    <img
      v-if="showIcon"
      :src="iconUrl"
      alt=""
      class="resume-stack-item__icon"
      loading="lazy"
      decoding="async"
      @error="iconFailed = true" />
    <span class="resume-stack-item__label">{{ label }}</span>
  </li>
</template>
