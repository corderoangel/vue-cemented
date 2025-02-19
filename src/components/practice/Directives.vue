<template>
	<ul>
		<li v-for="(item, index) in items" :key="index">{{ item }}</li>
	</ul>
</template>

<script setup>
import { ref } from "vue";

const items = ref(["🍎 Manzana", "🍌 Plátano", "🍇 Uva"]);
</script>
