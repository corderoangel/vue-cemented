<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store/store";

const taskStore = useTaskStore();
const newTask = ref("");

const addTask = () => {
	if (newTask.value.trim()) {
		taskStore.addTask(newTask.value);
		newTask.value = "";
	}
};
</script>

<template>
	<div class="max-w-md mx-auto mt-4">
		<input v-model="newTask" type="text" placeholder="Nueva tarea" class="border p-2 rounded w-full" />
		<button @click="addTask" class="bg-blue-500 text-white p-2 rounded mt-2 w-full">Agregar</button>
	</div>
</template>
