<script setup lang="ts">
import JobCard from "./components/JobCard/JobCard.vue";
import { data } from "./data";
</script>

<template>
  <main>
    <JobCard v-for="item in data" :key="item.id" :job-posting="item" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
</style>
