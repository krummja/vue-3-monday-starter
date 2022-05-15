<script setup>
import { defineProps, ref, watch } from "vue";
import Select from "vue-select";

// Pass in an array of options
// TODO Make this based on a query of the board context
const props = defineProps({
  placeholder: {
    type: String,
    default: "Placeholder text here"
  },
  options: {
    type: Array,
    default: () => []
  }
});

// Selected value in the dropdown
const selected = ref(null);

// Watch for value changes on selected
watch(selected, () => {
  console.log(selected.value);
})
</script>


<template>
  <div class="dropdown-select-container">
    <Select v-model="selected" :options="props.options" :placeholder="props.placeholder" />
  </div>
</template>


<style scoped lang="scss">
@import "vue-select/dist/vue-select.css";

.v-select {
  // Search Input
  --vs-search-input-color: var(--primary-text-color);
  --vs-search-input-placeholder-color: var(--secondary-text-color);

  // Font
  --vs-font-size: 1rem;
  --vs-line-height: 1.4;

  // Disabled State
  // --vs-state-disabled-bg: inherit;
  // --vs-state-disabled-color: inherit;
  // --vs-state-disabled-controls-color: inherit;
  // --vs-state-disabled-cursor: not-allowed;

  // Borders
  --vs-border-color: var(--ui-border-color);

  // Controls Housing
  --vs-actions-padding: 4px 6px 0 3px;

  // Component Controls
  --vs-controls-color: var(--vs-colors--light);
  --vs-controls-size: 1;
  --vs-controls--deselect-text-shadow: 0 1px 0 #fff;

  // Selected
  --vs-selected-bg: #f0f0f0;
  --vs-selected-color: var(--vs-colors--dark);
  --vs-selected-border-color: var(--vs-border-color);
  --vs-selected-border-style: var(--vs-border-style);
  --vs-selected-border-width: var(--vs-border-width);

  // Dropdown
  --vs-dropdown-bg: #fff;
  --vs-dropdown-color: var(--primary-text-color);
  --vs-dropdown-z-index: 1000;
  --vs-dropdown-min-width: 160px;
  --vs-dropdown-max-height: 350px;
  --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);

  // Options
  --vs-dropdown-option-bg: #000;
  --vs-dropdown-option-color: var(--vs-dropdown-color);
  --vs-dropdown-option-padding: 3px 20px;

  // Active State
  --vs-dropdown-option--active-bg: var(--primary-background-hover-color);
  --vs-dropdown-option--active-color: var(--primary-text-color);

  // Deselect State
  --vs-dropdown-option--deselect-bg: #fb5858;
  --vs-dropdown-option--deselect-color: #fff;

  // Transitions
  --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  --vs-transition-duration: 150ms;

  &:hover {
    --vs-border-color: currentColor;
  }

  li {
    margin: 0 10px !important;
  }
}

// .vs--single, .vs--searchable {
//   padding: 8px !important;
// }

.vs__dropdown-option--highlight {
  padding: 0 10px;
  border-radius: var(--border-radius-small) !important;
}

.vs--open, .vs--open:hover {
  --vs-border-color: var(--primary-color);
}

.dropdown-select-container {
  align-self: center;
  flex-basis: 50%;
}


.dropdown-select-options {

}
</style>
