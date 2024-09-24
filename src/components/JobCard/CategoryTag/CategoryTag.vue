<script setup lang="ts">
import { useFiltersStore } from "@/stores/filters";

const props = defineProps<{
  category: string;
}>();

const { addFilter } = useFiltersStore();

function onClick() {
  addFilter(props.category);
}
</script>

<template>
  <button class="tag" @click="onClick">
    <span>{{ category }}</span>
  </button>
</template>

<style scoped>
.tag {
  border: none;
  display: block;
  background-color: var(--light-grayish-cyan-bg);
  padding: 0.5rem 0.7rem;
  border-radius: 2px;
}

.tag:hover {
  cursor: pointer;
  background-color: var(--desaturated-dark-cyan);
}

.tag span {
  color: var(--desaturated-dark-cyan);
  font-family: "LeagueSpartan";
  font-weight: 700;
  text-align: center;
}

.tag:hover span {
  color: var(--light-grayish-cyan-bg);
}
</style>
