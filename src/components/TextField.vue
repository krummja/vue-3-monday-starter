<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  multiline: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Boolean,
    default: false,
  },
  time: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "Placeholder text here"
  }
});

const cssVars = computed(() => {
  return {
    "--padding": "8px",
  };
});
</script>


<template>
  <div class="text-field-container">
    <textarea 
      v-if="props.multiline" 
      :placeholder="props.placeholder"
      :style="cssVars"
      class="text-field text-field-multiline" 
    />
    <input 
      v-if="!props.multiline && !props.date"
      :placeholder="props.placeholder"
      :style="cssVars"
      class="text-field"
    />
    <input 
      v-if="props.date && !props.time"
      :style="cssVars"
      type="date"
      class="text-field"
    />
    <input 
      v-if="props.date && props.time"
      :style="cssVars"
      type="datetime-local"
      class="text-field"
    />
  </div>
</template>


<style lang="scss" scoped>
.text-field-container {
  position: relative;
  box-sizing: border-box;
  font-family: var(--font-family);
  flex-basis: 50%;

  & * {
    box-sizing: border-box;
  }
}

.text-field {
  width: 100%;
  margin: 5px 0;
  padding: var(--padding);
  
  border: 1px solid var(--ui-border-color);
  border-radius: 4px;

  transition: border-color 0.1s ease-in;

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

.text-field-multiline {
  resize: vertical;
}
</style>
