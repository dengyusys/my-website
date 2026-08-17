<script setup lang="ts">
import ThemeToggle from "@/components/ThemeToggle.vue";
</script>

<template>
  <!-- 固定页头不拦截页面点击，仅主题按钮恢复指针事件。 -->
  <header class="site-header">
    <span class="signature" aria-hidden="true">dy<span>.</span></span>
    <ThemeToggle />
  </header>
</template>
