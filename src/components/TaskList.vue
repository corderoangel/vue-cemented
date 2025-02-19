<script setup>
import { useTaskStore } from "../store/store";

const taskStore = useTaskStore();
</script>

<template>
	<div class="max-w-md mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
		<h2 class="text-xl font-bold mb-4">Lista de Tareas</h2>
		<ul>
			<li class="flex justify-between items-center p-2 border-b" v-for="task in taskStore.tasks" :key="task.id">
				<span :class="{ 'line-through text-gray-500': task.completed }">
					{{ task.title }}
				</span>
				<div class="flex gap-2">
					<button @click="taskStore.toggleTask(task.id)" class="text-blue-500 hover:underline">✅</button>
					<button @click="taskStore.deleteTask(task.id)" class="text-red-500 hover:underline">❌</button>
				</div>
			</li>
		</ul>
	</div>
</template>
