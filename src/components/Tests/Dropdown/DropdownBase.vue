<script setup>
import { defineProps, provide, ref, computed } from "vue";
import DropdownToggler from "@/components/Dropdown/DropdownToggler.vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "Placeholder text here"
  }
});

const sharedState = ref({
  active: false
});

provide('sharedState', sharedState);

const cssVars = computed(() => {
  return {
    "--padding": "8px"
  }
});
</script>


<template>
  <div class="dropdown-base-container" :style="cssVars">

    <div class="dropdown-input-container">
      <input :placeholder="props.placeholder" />
    </div>

    <!-- Dropdown items -->
    <slot />

    <slot class="toggler" name="toggler">
      <DropdownToggler />
    </slot>
  </div>
</template>


<style scoped lang="scss">
.dropdown-base-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 5px 0;
  // padding: var(--padding);

  border: 1px solid var(--ui-border-color);
  border-radius: 4px;

  transition: border-color 0.1s ease-in;

  cursor: pointer;

  &:hover {
    border: 1px solid currentColor;
  }

  &:focus {
    border: 1px solid var(--primary-color);
  }

  &:focus-visible {
    outline: 0;
  }
}

.dropdown-input-container {
  input {
    box-sizing: content-box;
    width: 2px;
  }
}

.toggler {
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-shrink: 0;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 14px;
  color: var(--primary-text-color);
  background-color: var(--primary-background-color);
  border-radius: var(--border-radius-small);
  height: 38px;
}
</style>
