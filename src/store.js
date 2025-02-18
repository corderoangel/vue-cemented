import { defineStore } from "pinia";

export const useStore = defineStore("counter", {
	state: () => ({ count: 0, mensaje: "Mensaje inicial" }),
	actions: {
		increment() {
			this.count++;
		},
		actualizarMensaje(nuevoMensaje) {
			this.mensaje = nuevoMensaje;
		},
	},
});
