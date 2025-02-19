<script setup>
import TaskList from "../components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";
</script>

<template>
	<!-- <div class="text-center">
		<h1 class="text-3xl font-bold">Bienvenido a la App de Gestión de Tareas</h1>
		<p class="text-gray-600">Administra tus tareas de forma sencilla.</p>
	</div> -->
	<div class="p-6">
		<TaskForm />
		<TaskList />
	</div>
</template>
