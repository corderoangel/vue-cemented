<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Hijo from "./components/Hijo.vue";
import Hijo2 from "./components/Hijo2.vue";
import Hermano1 from "./components/Hermano1.vue";
import Hermano2 from "./components/Hermano2.vue";
import { ref } from "vue";

const nombrePadre = ref("Carlos");
const mensaje = ref("");

const recibirMensaje = (msg) => {
	mensaje.value = msg;
};

const mensaje2 = ref("Texto inicial");
</script>

<template>
	<nav>
		<router-link to="/">Inicio</router-link>
		<router-link to="/about">Acerca de</router-link>
	</nav>
	<router-view></router-view>
	<div>
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
	<Hijo :nombre="nombrePadre" @mensajeEnviado="recibirMensaje" />
	<p>Mensaje recibido: {{ mensaje }}</p>

	<Hijo2 v-model="mensaje" />
	<p>Mensaje2: {{ mensaje2 }}</p>

	<Hermano1 />
	<Hermano2 />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<!-- 
:nombre="nombrePadre" → Enlaza la prop del padre con el hijo.

@mensajeEnviado="recibirMensaje" → Captura el evento desde el hijo.
recibirMensaje(msg) { mensaje.value = msg; } → Actualiza el estado del padre.

v-model="mensaje" → Enlaza la variable del padre con el input del hijo.
-->
