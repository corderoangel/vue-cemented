<script setup>
import { useTaskStore } from '../store/store';

const taskStore = useTaskStore();
</script>
<template>
  <ul>
    <li
      v-for="task in taskStore.tasks"
      :key="task.id"
      class="flex justify-between items-center p-3 border-b bg-gray-100 rounded mb-2"
    >
      <span
        :class="{ 'line-through text-gray-500': task.completed }"
        class="flex-1"
      >
        {{ task.title }}
      </span>

      <div class="flex gap-2">
        <button
          @click="taskStore.toggleTask(task.id)"
          class="text-green-500 hover:text-green-600"
        >
          ✅
        </button>
        <button
          @click="taskStore.removeTask(task.id)"
          class="text-red-500 hover:text-red-600"
        >
          ❌
        </button>
      </div>
    </li>
  </ul>
</template>
