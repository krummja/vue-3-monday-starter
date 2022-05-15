<script setup>
import { onMounted, ref } from "vue";
import mondaySdk from "monday-sdk-js";
import TextField from "@/components/TextField.vue";
import ButtonElement from "@/components/ButtonElement.vue";
import DropdownSelect from "@/components/DropdownSelect.vue";

const monday = mondaySdk();

// Ref for the input form field
const nameInput = ref(null);

// Component state
const state = {
  settings: {},
  itemName: "",
};

// When the component is mounted, add the Monday.com context to state
onMounted(() => {
  monday.listen("context", (res) => {
    state.context = res.data;
  });
});

// When the submit button is pressed, trigger a mutation on the board bound
// to the active context. In this case, the value of `nameInput` will be
// written as a new item.
async function onSubmit() {
  try {
    let mutation = `
      mutation ($boardId: Int!, $itemName: String!) {
        create_item(board_id: $boardId, item_name: $itemName) {
          id name
        }
      }
    `
    monday.api(mutation, {
      variables: {
        boardId: state.context.boardId,
        itemName: nameInput.value.value,
      }
    });
  } catch {
    console.log(nameInput.value.value);
  }
}
</script>


<template>
  <div class="project-form vibe">
    <h1 class="form-title">Key Initiatives Project Request</h1>
    <div class="input-component-wrapper">

      <!-- Project Title  -->
      <TextField placeholder="Project title" />

      <div class="type-date-wrapper">      
        <!-- Project Type -->
        <DropdownSelect placeholder="Placeholder text here" :options="['Standard', 'FAST-TRACK']" />

        <!-- Project Begin Date -->
        <TextField date />
      </div>

      <!-- Project scope -->
      <TextField placeholder="Project scope" multiline />

      <ButtonElement 
        @click="onSubmit"
      >
        Submit Project
      </ButtonElement>

    </div>
  </div>
</template>


<style lang="scss" scoped>
.project-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
}

.form-title {
  margin-bottom: 30px;
}

.input-component-wrapper {
  width: 600px;
}

.input-component {
  border: 1px solid var(--ui-border-color);
  border-radius: 4px;
  margin: 4px 0;

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

.type-date-wrapper {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
