<script setup>
import { ref } from "vue";

const mensaje = ref("Hola Vue!");
</script>

<template>
	<h1>{{ mensaje }}</h1>
	<button @click="mensaje = 'Vue es genial!'">Cambiar mensaje</button>
</template>

<style scoped>
h1 {
	color: blue;
}
</style>
