<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<!-- 
:value="modelValue" → Recibe el valor inicial desde el padre.
@input="$emit('update:modelValue', $event.target.value)" → Informa al padre cada cambio.
-->
