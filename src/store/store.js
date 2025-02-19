import { defineStore } from "pinia";
import { ref } from "vue";

// export const useStore = defineStore("counter", {
// 	state: () => ({ count: 0, mensaje: "Mensaje inicial" }),
// 	actions: {
// 		increment() {
// 			this.count++;
// 		},
// 		actualizarMensaje(nuevoMensaje) {
// 			this.mensaje = nuevoMensaje;
// 		},
// 	},
// });

export const useTaskStore = defineStore("task", () => {
	const tasks = ref([
		{ id: 1, title: "Learn next.js", completed: false },
		{ id: 2, title: "Learn vue", completed: false },
		{ id: 3, title: "Learn nuxt.js", completed: false },
	]);

	const addTask = (title) => {
		tasks.value.push({ id: crypto.randomUUID(), title, completed: false });
	};

	const deleteTask = (id) => {
		tasks.value = tasks.value.filter((task) => task.id !== id);
	};

	const toggleTask = (id) => {
		const task = tasks.value.find((task) => task.id === id);
		if (task) task.completed = !task.completed;
	};

	return { tasks, addTask, deleteTask, toggleTask };
});
