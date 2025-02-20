<template>
  <button @click="enviarMensaje">Click</button>
</template>

<script setup>
const emit = defineEmits(['mensaje-enviado']);

const enviarMensaje = () => {
  emit('mensaje-enviado', 'Hola desde el hijo!');
};
</script>
