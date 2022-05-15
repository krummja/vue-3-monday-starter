<script setup>
import { reactive } from "vue";
import mondaySdk from "monday-sdk-js";

const testComponent = reactive({
  title: "",
});

const monday = mondaySdk();

async function apiTest() {
  try {
    const res = await monday.api("query { me { name } }");
    testComponent.title = `Hello ${res.data.me.name}`;
  } catch {
    console.log("undefined");
  }
}
</script>


<template>
  <div class="test-component">
    <h1>{{ testComponent.title }}</h1>
    <button @click="apiTest">Test</button>
  </div>
</template>
