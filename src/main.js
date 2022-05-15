import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { BaklavaVuePlugin } from "@baklavajs/plugin-renderer-vue3";
import "@baklavajs/plugin-renderer-vue3/dist/styles.css";

const app = createApp(App);
app.use(createPinia());
app.use(BaklavaVuePlugin);
app.mount("#app");
