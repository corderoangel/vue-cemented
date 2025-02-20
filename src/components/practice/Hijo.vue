<template>
  <div>
    <h2>Hola, mi nombre es {{ nombre }}</h2>
  </div>
  <button @click="enviarMensaje">Enviar mensaje al padre</button>
</template>

<script setup>
defineProps({
  nombre: String,
});

const emit = defineEmits(['mensajeEnviado']); // Define el evento

const enviarMensaje = () => {
  emit('mensajeEnviado', 'Hola desde el hijo!');
};
</script>
<!-- 
defineProps({ nombre: String }) → Permite recibir la propiedad nombre del padre.

defineEmits(['mensajeEnviado']) → Define el evento que el hijo emitirá.
emit('mensajeEnviado', 'Hola desde el hijo!') → Envía el mensaje al padre.

:value="modelValue" → Recibe el valor inicial desde el padre.
@input="$emit('update:modelValue', $event.target.value)" → Informa al padre cada cambio.
-->
