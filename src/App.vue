<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';

const nombrePadre = ref('Carlos');
const mensaje = ref('');

const recibirMensaje = (msg) => {
  mensaje.value = msg;
};

const mensaje2 = ref('Texto inicial');
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div>
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>
