<template>
  <button @click="cambiarMensaje">Cambiar mensaje</button>
</template>

<script setup>
import { useStore } from '../store';

const store = useStore();

const cambiarMensaje = () => {
  store.actualizarMensaje('Hola desde Hermano 1');
};
</script>
