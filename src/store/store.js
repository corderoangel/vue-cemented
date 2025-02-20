import axios from 'axios';
import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

const useApi = import.meta.env.VITE_USE_API === 'true';

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([]);

  const fetchTasks = async () => {
    if (!useApi) {
      tasks.value = [
        { id: 1, title: 'Learn next.js', completed: false },
        { id: 2, title: 'Learn vue', completed: false },
        { id: 3, title: 'Learn nuxt.js', completed: false },
      ];
      return;
    }
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
      );
      tasks.value = data.map((task) => ({
        id: task.id,
        title: task.title,
        completed: task.completed,
      }));
    } catch (error) {
      console.error('Error getting tasks ' + error);
    }
  };

  const addTask = async (title) => {
    if (!useApi) {
      tasks.value.push({ id: crypto.randomUUID(), title, completed: false });
      return;
    }

    try {
      const { data } = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title,
          completed: false,
        }
      );
      tasks.value.push({
        id: data.id,
        title: data.title,
        completed: data.completed,
      });
    } catch (error) {
      console.error('Error adding tasks ' + error);
    }
  };

  const removeTask = async (id) => {
    if (!useApi) {
      tasks.value = tasks.value.filter((task) => task.id !== id);
      return;
    }

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      tasks.value = tasks.value.filter((task) => task.id !== id);
    } catch (error) {
      console.error('Error deleting task ' + error);
    }
  };

  const toggleTask = async (id) => {
    const task = tasks.value.find((task) => task.id === id);
    if (!task) return;

    if (!useApi) {
      task.completed = !task.completed;
      return;
    }

    try {
      const { data } = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          ...task,
          completed: !task.completed,
        }
      );
      task.completed = data.completed;
    } catch (error) {
      console.error('Error updating task ' + error);
    }
  };

  onMounted(fetchTasks);
  return { tasks, addTask, removeTask, toggleTask };
});
