import { readonly, ref } from "vue";
import mondaySdk from "monday-sdk-js";

export function useState(initialState) {
  const state = ref(initialState);
  const setState = (newState) => {
    state.value = newState;
  };

  return [readonly(state), setState];
}


export async function getBoards(limit) {
  const monday = mondaySdk();
  const query = `query { boards (limit:` + limit.toString() + `) { name id } }`
  const res = await monday.api(query);
  return res;
}
