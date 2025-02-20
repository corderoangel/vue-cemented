<script setup>
import { useTaskStore } from '../store/store';

const taskStore = useTaskStore();
</script>
<template>
  <ul v-if="taskStore.tasks.length > 0">
    <li
      v-for="task in taskStore.tasks"
      :key="task.id"
      class="flex justify-between items-center p-3 bg-gray-500 rounded mb-2"
    >
      <span
        :class="{ 'line-through text-gray-900': task.completed }"
        class="flex-1"
      >
        {{ task.title }}
      </span>

      <div class="flex gap-2">
        <button
          @click="taskStore.toggleTask(task.id)"
          class="text-green-500 hover:text-green-600 cursor-pointer"
        >
          ✅
        </button>
        <button
          @click="taskStore.removeTask(task.id)"
          class="text-red-500 hover:text-red-600 cursor-pointer"
        >
          ❌
        </button>
      </div>
    </li>
  </ul>
  <p v-else>Error al cargar la api</p>
</template>
