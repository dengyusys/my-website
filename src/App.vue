<script setup lang="ts">
import { RouterView } from "vue-router";

import AppHeader from "@/components/AppHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
</script>

<template>
  <AppHeader />
  <main class="site-main">
    <RouterView />
  </main>
  <SiteFooter />
</template>
