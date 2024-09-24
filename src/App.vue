<script setup lang="ts">
import { computed } from "vue";
import BgHeader from "./components/BgHeader/BgHeader.vue";
import JobCard from "./components/JobCard/JobCard.vue";
import { data } from "./data";
import { useFiltersStore } from "./stores/filters";
import { getCategories } from "./types";
import Attributions from "./components/Attributions.vue/Attributions.vue";

const { filters } = useFiltersStore();

const filteredJobs = computed(() => {
  // role, level, languages
  return data.filter((jobPosting) => {
    const categories = getCategories(jobPosting);
    const filtersArray = Array.from(filters);
    for (let i = 0; i < filtersArray.length; i++) {
      if (!categories.includes(filtersArray[i])) {
        return false;
      }
    }
    return true;
  });
});
</script>

<template>
  <BgHeader />
  <main>
    <JobCard v-for="item in filteredJobs" :key="item.id" :job-posting="item" />
  </main>
  <footer>
    <Attributions />
  </footer>
</template>

<style scoped>
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
