<script setup lang="ts">
import { useTheme } from "@/composables/use-theme";

const { toggleIcon, toggleTheme } = useTheme();
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    aria-label="切换深浅色主题"
    @click="toggleTheme"
  >
    <span aria-hidden="true">{{ toggleIcon }}</span>
  </button>
</template>
