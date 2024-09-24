<script setup lang="ts">
import BgHeader from "./components/BgHeader/BgHeader.vue";
import JobCard from "./components/JobCard/JobCard.vue";
import { data } from "./data";
</script>

<template>
  <div class="container">
    <BgHeader />
    <main>
      <JobCard v-for="item in data" :key="item.id" :job-posting="item" />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

main {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

@media screen and (max-width: 744px) {
  main {
    gap: 2.75rem;
  }
}
</style>
