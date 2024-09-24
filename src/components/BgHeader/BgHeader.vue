<script setup lang="ts">
import FilterGroup from "../FilterGroup/FilterGroup.vue";
</script>

<template>
  <header>
    <picture>
      <source
        media="(max-width: 375px)"
        srcset="/images/bg-header-mobile.svg"
      />
      <img src="/images/bg-header-desktop.svg" alt="Header Background" />
    </picture>
    <FilterGroup />
  </header>
</template>

<style scoped>
header {
  position: relative;
  background-color: var(--desaturated-dark-cyan);
  height: 10vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}

picture {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

picture > img {
  flex: 1;
  display: block;
  max-width: 100%;
}
</style>
