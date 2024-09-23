<script setup lang="ts">
import type { JobPosting } from "@/types";

defineProps<{
  jobPosting: JobPosting;
}>();
</script>

<template>
  <article class="job-posting-container">
    <div class="job-posting-img-info-container">
      <img
        :src="`../../../public/images/${jobPosting.logo}`"
        :alt="jobPosting.company + ' logo'"
        class="company-img"
      />
      <div class="information-container">
        <div class="job-posting-header">
          <p class="company-name">{{ jobPosting.company }}</p>
          <span v-if="jobPosting.new" class="new">NEW!</span>
          <span v-if="jobPosting.featured" class="featured">FEATURED</span>
        </div>
        <p class="position">{{ jobPosting.position }}</p>
        <div class="job-posting-details">
          <p>{{ jobPosting.postedAt }}</p>
          <span class="circle-separator"></span>
          <p>{{ jobPosting.contract }}</p>
          <span class="circle-separator"></span>
          <p>{{ jobPosting.location }}</p>
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="tags-container">
      <div class="tag">
        <p>{{ jobPosting.role }}</p>
      </div>
      <div class="tag">
        <p>{{ jobPosting.level }}</p>
      </div>
      <template v-for="language in jobPosting.languages" :key="language">
        <div class="tag">
          <p>{{ language }}</p>
        </div>
      </template>
    </div>
  </article>
</template>

<style scoped>
.job-posting-container {
  border-radius: 4px;
  padding: 1.5rem;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  border-left: 5px solid var(--desaturated-dark-cyan);
  box-shadow: 4px 4px 8px 1px var(--very-dark-grayish-cyan);
}

.job-posting-img-info-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.separator {
  height: 2px;
  background-color: var(--light-grayish-cyan-filter);
}

.company-img {
  max-width: 100%;
  display: block;
}

.information-container {
  display: flex;
  flex-direction: column;
}

.job-posting-header {
  display: flex;
  gap: 0.5rem;
}

.job-posting-details {
  display: flex;
  gap: 0.8rem;
  color: var(--light-grayish-cyan-filter);
  font-size: 0.95rem;
  align-items: center;
}

.circle-separator {
  width: 3px;
  height: 3px;
  background-color: var(--light-grayish-cyan-filter);
  border-radius: 50%;
}

.company-name {
  color: var(--desaturated-dark-cyan);
  font-weight: 700;
  font-size: 1rem;
}

.new,
.featured {
  border-radius: 12px;
  padding: 0rem 0.5rem;
  font-size: 0.7rem;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.new {
  background-color: var(--desaturated-dark-cyan);
}

.featured {
  background-color: var(--very-dark-grayish-cyan);
}

.position {
  color: var(--very-dark-grayish-cyan);
  font-weight: 700;
  font-size: 1.15rem;
}

.tags-container {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.tag {
  background-color: var(--light-grayish-cyan-bg);
  padding: 0.25rem 0.7rem;
  border-radius: 6px;
}

.tag p {
  color: var(--desaturated-dark-cyan);
  font-weight: 700;
  text-align: center;
}
</style>
