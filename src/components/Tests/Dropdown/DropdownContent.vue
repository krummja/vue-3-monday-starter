<script setup>
import { inject, computed } from "vue";

const sharedState = inject('sharedState');

const active = computed(() => {
  return sharedState.value.active;
});
</script>

<template>
  <div class="dropdown-content-container">
    <div v-if="active">
      <slot />
    </div>
  </div>
</template>
