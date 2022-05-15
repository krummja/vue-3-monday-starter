<script setup>
import ClickableIcon from "@/components/Icons/ClickableIcon.vue";
import { inject, computed } from "vue";

const sharedState = inject('sharedState');
const active = computed(() => {
  return sharedState.value.active;
});

const toggle = () => {
  sharedState.value.active = !sharedState.value.active;
}

const cssVars = computed(() => {
  if (active.value) {
    return {
      "--rotate": "matrix(-1, 0, 0, -1, 0, 0)"
    }
  } else {
    return {
      "--rotate": "matrix(1, 0, 0, 1, 0, 0)"
    }
  }
});
</script>


<template>
  <div class="clickable-icon-container" :style="cssVars">
    <ClickableIcon class="clickable-icon" @click="toggle"/>
  </div>
</template>


<style scoped lang="scss">
.clickable-icon-container {
  color: var(--icon-color);
  display: flex;
  padding: 0px;

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 4px 3px 4px 0px;
  background-color: transparent;
  border-radius: var(--border-radius-small);

&:hover {
    background-color: var(--primary-background-hover-color);
  }
}

.clickable-icon {
  transition-property: color transform;
  transition-duration: 150ms;
  transition-timing-function: ease 0s;
  transform: var(--rotate);
}
</style>
