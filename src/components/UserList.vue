<!-- por qué utiliza setup -->
<script setup>
// qué es ref y qué es onMounted
import { ref, onMounted } from "vue";

// estado para almacenar usuarios y busqueda
const users = ref([]);
const searchQuery = ref("");
const loading = ref(true);

// función para obtener datos de la api

const fetchUsers = async () => {
	loading.value = true;
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		users.value = await response.json();
	} catch (error) {
		console.error("Error al obtener usuarios: ", error);
	} finally {
		loading.value = false;
	}
};

// filtrar usuarios
const filterUsers = () => {
	return users.value.filter((user) => user.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
};

// cargar datos al montar el componente
onMounted(fetchUsers);
</script>

<template>
	<h2>lista de usuarios</h2>

	<input v-model="searchQuery" type="text" placeholder="Buscar usuario..." />

	<button @click="fetchUsers">Recargar usuarios</button>

	<!-- v-if / v-else para mostrar resultados o un mensaje -->
	<ul v-if="filterUsers().length > 0">
		<li v-for="user in filterUsers()" :key="user.id">
			<a href="'mailto:' + user.email" target="_blank"> {{ user.name }} - {{ user.email }} </a>
		</li>
	</ul>

	<!-- <p v-else>No se encontraron usuarios.</p> -->
	<p v-else>No se encontraron usuarios</p>
</template>

<style scoped>
input {
	margin-bottom: 10px;
	padding: 5px;
	width: 100%;
}
button {
	margin-bottom: 10px;
	padding: 5px 10px;
	cursor: pointer;
}
ul {
	list-style: none;
	padding: 0;
}
li {
	margin: 5px 0;
}
</style>
