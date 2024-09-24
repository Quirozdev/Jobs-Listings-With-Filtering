<script setup lang="ts">
import { onMounted, useTemplateRef, watch } from "vue";

const img = useTemplateRef("img");

watch(img, () => {});
</script>

<template>
  <img
    class="company-img"
    ref="img"
    :style="{ top: `-${(img?.naturalHeight || 2) / 2}px` }"
  />
</template>

<style scoped>
.company-img {
  max-width: 100%;
  display: block;
}

@media screen and (max-width: 744px) {
  .company-img {
    left: 0;
    position: absolute;
    transform: scale(0.75);
  }
}
</style>
