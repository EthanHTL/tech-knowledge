<!-- .vuepress/components/BlogHero.vue -->
<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
// import BlogHero from "@theme-hope/modules/blog/components/BlogHero.js";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";

</script>

<template>
  <BlogHero>
    <template #info="info" >
      <HitokotoBlogHero v-bind="info" />
    </template>
  </BlogHero>
</template>