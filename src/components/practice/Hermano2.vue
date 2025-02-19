<template>
	<p>Mensaje recibido: {{ store.mensaje }}</p>
</template>

<script setup>
import { useStore } from "../store";

const store = useStore();
</script>
