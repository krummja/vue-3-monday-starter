<script setup>
import { ref } from "vue";

import { Editor } from "@baklavajs/core";
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue3";
import { OptionPlugin } from "@baklavajs/plugin-options-vue3";
import { Engine } from "@baklavajs/plugin-engine";

// import { BaseNode } from "./Nodes/BaseNode";
// import { QueryNode } from "./Nodes/QueryNode";
// import { BoardNode } from "./Nodes/BoardNode";

import SidePanel from "@/components/NodeEditor/SidePanel.vue";

const editor = ref(new Editor());
const viewPlugin = ref(new ViewPlugin());
const engine = ref(new Engine(true));
const options = ref(new OptionPlugin());

editor.value.use(viewPlugin.value);
editor.value.use(options.value);
editor.value.use(engine.value);

// editor.value.registerNodeType("BaseNode", BaseNode);
// editor.value.registerNodeType("QueryNode", QueryNode);
// editor.value.registerNodeType("BoardNode", BoardNode);
</script>


<template>
  <div class="viewport">
    <SidePanel />
    <baklava-editor :plugin="viewPlugin" />
  </div>
</template>


<style scoped lang="scss">
.viewport {
  width: 100vw;
  height: 100vh;
}
</style>
