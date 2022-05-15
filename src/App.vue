<script setup>
import { onMounted, ref } from "vue";
import mondaySdk from "monday-sdk-js";

import { getBoards } from "@/composables/state";
import DataView from "@/components/DataView.vue";

const state = ref({
  settings: {},
  context: {},
  boardData: {},
});

const monday = mondaySdk();

onMounted(() => {
  monday.listen("settings", (res) => {
    state.value.settings = res.data;
  });

  monday.listen("context", (res) => {
    state.value.context = res.data;
  });

  getBoards(3).then((res) => { 
    state.value.boardData = res.data.boards 
  });
});
</script>


<template>
  <div class="app vibe">
    <div class="dataview">
      <DataView 
        v-for="board of state.boardData"
        :key="board"
        :name="board.name" 
        :id="board.id" 
      />
    </div>
  </div>
</template>


<style lang="scss">
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/typography.scss";

html {
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  width: auto;
  height: auto;

  overflow-y: scroll;
  font-size: 100%;
}

body {
  margin: 0;
  padding: 3rem;
}

.app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .dataview {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>
