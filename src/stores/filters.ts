import { reactive, ref, watch } from "vue";
import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filters", () => {
  const filters = reactive<Set<string>>(new Set());

  function addFilter(filter: string) {
    filters.add(filter);
  }

  function removeFilter(filter: string) {
    filters.delete(filter);
  }

  function clearFilters() {
    filters.clear();
  }

  return { filters, addFilter, removeFilter, clearFilters };
});
