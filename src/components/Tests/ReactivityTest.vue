<script setup>
import { ref, watch, onMounted } from "vue";

// Component State
const count = ref(0);

// Waits for a change in `count` then fires its function
watch(count, (count, prevCount) => {
  console.log(count);
  console.log(prevCount);
});

// Method that mutates state and triggers updates
const increment = () => {
  count.value++;
};

// Vue Lifecycle hook
onMounted(() => {
  count.value = 10;
});
</script>

<template>
  <div class="reactivity-test">
    <button @click="increment">Increment</button>

    <span>{{ count }}</span>
  </div>
</template>

<style lang="scss" scoped>
.reactivity-test {
  margin: 20px;
}
</style>
