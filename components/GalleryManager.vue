<template>
    <div>
      <h1>Our Galleries</h1>
      <div v-for="gallery in galleries" :key="gallery.id">
        <h2>{{ gallery.name }}</h2>
        <p>{{ gallery.description }}</p>
        <p>By: {{ gallery.user.name }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const galleries = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('/api/galleries');
      galleries.value = response.data;
    } catch (error) {
      console.error('There was an error fetching galleries', error);
    }
  });
  </script>
  