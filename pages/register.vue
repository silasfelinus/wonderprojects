<template>
    <div class="register-container">
      <h2 class="title">Join Cafe Purr</h2>
      <form @submit.prevent="register" class="register-form">
        <div class="input-container">
          <input v-model="name" type="text" placeholder="Name" required class="input-field"/>
        </div>
        <div class="input-container">
          <input v-model="email" type="email" placeholder="Email" required class="input-field"/>
        </div>
        <div class="input-container">
          <input v-model="password" type="password" placeholder="Password" required class="input-field"/>
        </div>
        <button type="submit" class="submit-button">Register</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
import { user } from '@prisma/client'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const newUser: Partial<user> = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      if (response.ok) {
        this.$router.push('/login')
      } else {
        console.error('Registration failed')
      }
    }
  }
}
</script>

  
  <style scoped>
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .title {
    font-size: 2.5rem;
    color: #ff6347;
    margin-bottom: 2rem;
  }
  
  .register-form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  
  .input-field {
    padding: 1rem;
    border-radius: 50px;
    border: none;
    outline: none;
  }
  
  .submit-button {
    padding: 1rem;
    border-radius: 50px;
    border: none;
    background-color: #ff6347;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #ff4500;
  }
  </style>
  