<script setup>
import { useFiltersStore } from "@/stores/filters";
import CategoryTag from "../JobCard/CategoryTag/CategoryTag.vue";

const { filters, removeFilter, clearFilters } = useFiltersStore();
</script>

<template>
  <section class="container" ref="section" v-show="filters.size > 0">
    <div class="filters-container">
      <template v-for="category in filters" :key="category">
        <div class="filter-delete-container">
          <CategoryTag :category="category" />
          <button
            class="delete-btn"
            @click="
              () => {
                removeFilter(category);
              }
            "
          >
            <img
              src="../../../public/images/icon-remove.svg"
              alt="Remove icon"
            />
          </button>
        </div>
      </template>
    </div>
    <button class="clear-btn" @click="clearFilters">Clear</button>
  </section>
</template>

<style scoped>
.container {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  background-color: white;
  gap: 1.5rem;
  padding: 2rem;
  top: 0;
  right: 50%;
  transform: translate(50%, 50%);
  width: 90%;
  max-width: 1000px;
  border-radius: 8px;
}

.filters-container {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
}

.filter-delete-container {
  display: flex;
}

.delete-btn {
  border: none;
  padding: 0.4rem;
  border-radius: 0px 2px 2px 0px;
  background-color: var(--desaturated-dark-cyan);
}

.delete-btn:hover {
  cursor: pointer;
  background-color: var(--very-dark-grayish-cyan);
}

.clear-btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "LeagueSpartan";
  font-size: 1rem;
  font-weight: 700;
  color: var(--light-grayish-cyan-filter);
}

.clear-btn:hover {
  text-decoration: underline;
  color: var(--desaturated-dark-cyan);
}
</style>
