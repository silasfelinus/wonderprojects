<template>
  <div class="project-page">
    <header>
      <nav>
        <ul>
          <li><nuxt-link to="/register">Register</nuxt-link></li>
          <li><nuxt-link to="/login">Login</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <div class="header">
      <h1>WonderForge Project Page</h1>
    </div>
    <div class="content">
      <div class="card" v-for="page in pages" :key="page.title">
        <div class="card-body">
          <p>{{ page.title }} - {{ page.description }} - {{ page.link }} - {{ page.image }} - {{ page.gallery }} - {{ page.underDevelopment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { fetch } = useNuxtContent()
const pages = ref([])

fetch('pages')
  .then(data => {
    pages.value = data.pages
  })
</script>

<style scoped>
.project-page {
  background: #EEE;
  padding: 20px;
}

header {
  background: transparent;
  padding: 20px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

nav ul li {
  margin-right: 10px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.card {
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
}
</style>
