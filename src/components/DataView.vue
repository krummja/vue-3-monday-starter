<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: { type: String, default: "Board" },
  id: { type: String, default: "0" },
});
</script>


<template>
  <div class="data-view-container vibe">
    <h4 class="board-name">{{ props.name }}</h4>
    <span class="board-id">{{ props.id }}</span>
  </div>
</template>


<style scoped lang="scss">
.data-view-container {
  width: 30rem;
  margin: 8px 0;
  padding: 16px;

  border: 1px solid var(--ui-border-color);
  border-radius: 8px;

  color: var(--primary-text-color);

  transition: box-shadow 0.15s ease-in;

  &:hover {
    box-shadow: var(--box-shadow-small);
    cursor: pointer;
  }
}
</style>
