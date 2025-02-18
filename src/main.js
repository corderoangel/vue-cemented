import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia); // 💡 Aquí debes usar Pinia antes de `mount`
app.use(router); // Si usas Vue Router, agrégalo después

app.mount("#app"); // 💡 Solo monta la app después de configurar todo
