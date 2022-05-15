<script setup>
import { computed } from "vue";

const cssVars = computed(() => {
  return {
    "--padding": "8px 16px",
  };
});
</script>


<template>
  <div class="button-element-container">
    <button 
      :style="cssVars"
      class="button-element"
    >
      <slot></slot>
    </button>
  </div>
</template>


<style scoped lang="scss">
.button-element-container {
  position: relative;
  box-sizing: border-box;
  font-family: var(--font-family);
}

.button-element {
  margin: 5px 0;
  padding: var(--padding);

  background-color: var(--primary-color);
  color: var(--text-color-on-inverted);

  border-radius: 4px;
  border: none;

  cursor: pointer;

  &:hover, &:focus {
    background-color: var(--primary-hover-color);
  }

  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
  }
}
</style>
