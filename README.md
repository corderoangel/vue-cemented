## router

## reactive state

## state with pinia

## directives

- v-bind
- v-model
- v-if / v-else
- v-for
- v-on || @

## comunication

- father to son [props]
- son to father, father to son [https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits]
- father to son using v-model
- between brothers

## props

https://vuejs.org/guide/components/props.html#props

## components

## events with slots and emits

1. Instalación de Vue Router
   Si estás trabajando con Vue 3 y no tienes Vue Router instalado, puedes hacerlo con:

sh
Copiar
Editar
npm install vue-router
Luego, debes configurarlo en tu aplicación.

📌 2. Configuración Básica de Vue Router
🔹 Pasos para configurar rutas en Vue
1️⃣ Crear un archivo de rutas (router.js).
2️⃣ Definir las rutas y los componentes asociados.
3️⃣ Configurar Vue Router en la instancia de la aplicación.
4️⃣ Usar <RouterView> y <RouterLink> en los componentes.

📝 Ejemplo de configuración (router.js)
javascript
Copiar
Editar
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
{ path: '/', component: Home },
{ path: '/about', component: About }
];

const router = createRouter({
history: createWebHistory(),
routes
});

export default router;
✅ createRouter() → Crea una nueva instancia del router.
✅ createWebHistory() → Usa el modo de historial HTML5 (sin #).
✅ routes → Define las rutas de la aplicación.

📝 Configurar Vue Router en main.js
javascript
Copiar
Editar
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
✅ app.use(router) → Registra Vue Router en la app.

📌 3. Renderizar las rutas en la App
Dentro de App.vue, debes agregar <RouterView> para que Vue Router sepa dónde mostrar los componentes.

vue
Copiar
Editar
<template>

  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/about">Acerca de</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
</script>

<style>
nav {
  display: flex;
  gap: 10px;
}
</style>

✅ <RouterView /> → Muestra el componente según la ruta actual.
✅ <RouterLink to="/"> → Permite cambiar de ruta sin recargar la página.

📌 4. Tipos de Rutas
🔹 Rutas con Parámetros Dinámicos
Si necesitas que una ruta tenga valores dinámicos, usa :param.

javascript
Copiar
Editar
const routes = [
{ path: '/user/:id', component: UserProfile }
];
En el componente UserProfile.vue, accede al parámetro así:

vue
Copiar
Editar

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params.id);
</script>

✅ route.params.id → Obtiene el ID de la URL.

🔹 Rutas con Parámetros Opcionales
Si el parámetro puede ser opcional, usa ?:

javascript
Copiar
Editar
{ path: '/user/:id?', component: UserProfile }
🔹 Rutas con Múltiples Parámetros
javascript
Copiar
Editar
{ path: '/post/:category/:id', component: PostDetail }
Para acceder en el componente:

vue
Copiar
Editar
const route = useRoute();
console.log(route.params.category, route.params.id);
📌 5. Redirecciones y Alias
🔹 Redireccionar una ruta
Si quieres que una ruta redirija a otra:

javascript
Copiar
Editar
{ path: '/home', redirect: '/' }
📌 Ahora /home automáticamente redirige a /.

🔹 Alias para rutas
Un alias permite que una ruta tenga múltiples URLs:

javascript
Copiar
Editar
{ path: '/perfil', component: Profile, alias: '/usuario' }
📌 /perfil y /usuario cargarán el mismo componente.

📌 6. Rutas Anidadas (Rutas Hijas)
Si un componente tiene sub-rutas, puedes definirlas con children:

javascript
Copiar
Editar
const routes = [
{
path: '/dashboard',
component: Dashboard,
children: [
{ path: 'stats', component: Stats },
{ path: 'settings', component: Settings }
]
}
];
📌 Para acceder a /dashboard/stats, dentro del componente Dashboard.vue usa:

vue
Copiar
Editar
<RouterView />
📌 7. Rutas Protegidas (Guards)
🔹 Protección Global (Antes de Entrar a Cualquier Ruta)
Si quieres proteger rutas antes de que se accedan, usa beforeEach:

javascript
Copiar
Editar
router.beforeEach((to, from, next) => {
const isAuthenticated = false; // Simulación de autenticación
if (to.path === '/admin' && !isAuthenticated) {
next('/login');
} else {
next();
}
});
📌 Si el usuario no está autenticado y trata de acceder a /admin, será redirigido a /login.

🔹 Protección en una Ruta Específica
javascript
Copiar
Editar
const routes = [
{
path: '/admin',
component: Admin,
beforeEnter: (to, from, next) => {
const isAuthenticated = false;
if (!isAuthenticated) next('/login');
else next();
}
}
];
📌 beforeEnter se ejecuta antes de acceder a la ruta.

📌 8. Navegación Programática
🔹 Redirigir a otra ruta en código
vue
Copiar
Editar

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToProfile = () => {
  router.push('/profile');
};
</script>

<template>
  <button @click="goToProfile">Ir al Perfil</button>
</template>
📌 router.push('/profile') → Cambia de ruta.
📌 router.replace('/profile') → Cambia la ruta sin agregarla al historial.

📌 9. Scroll en la Navegación
Si quieres que al cambiar de ruta la página haga scroll al inicio:

javascript
Copiar
Editar
const router = createRouter({
history: createWebHistory(),
routes,
scrollBehavior(to, from, savedPosition) {
return { top: 0 };
}
});
📌 10. Lazy Loading de Rutas
Para mejorar el rendimiento, carga los componentes solo cuando se necesiten.

javascript
Copiar
Editar
const routes = [
{ path: '/about', component: () => import('../views/About.vue') }
];
📌 Ahora About.vue solo se carga cuando se accede a /about.

🚀 Conclusión
🔹 Configura Vue Router con createRouter() en router.js
🔹 Define rutas con path y component
🔹 Usa <RouterView> y <RouterLink> para la navegación
🔹 Maneja parámetros dinámicos con :param
🔹 Protege rutas con beforeEach y beforeEnter
🔹 Usa lazy loading para mejorar rendimiento
