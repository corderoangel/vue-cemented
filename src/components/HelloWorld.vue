<!-- define la lógica -->
<script setup>
import { ref } from "vue";
import NewComponent from "./NewComponent.vue";
import Directives from "./Directives.vue";
import { useCounterStore } from "../store";
import Boton from "./BotonHijo.vue";

// ?
defineProps({
	msg: String,
});
const recibirMensaje = (msg) => {
	mensaje.value = msg;
};

// ?
const count = ref(0);
const mensaje = ref("");

// ?
const counter = useCounterStore();
</script>

<!-- define el html -->
<template>
	<h1><span>msg: </span>{{ msg }}</h1>
	<NewComponent />
	<Directives />
	<Boton @mensaje-enviado="recibirMensaje" />
	<p>{{ mensaje }}</p>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>

		<!-- ? -->
		<p>Contador: {{ counter.count }}</p>
		<button @click="counter.increment">Incrementar</button>
	</div>
</template>

<!-- define los estilos -->
<style scoped>
.read-the-docs {
	color: #888;
}
</style>
