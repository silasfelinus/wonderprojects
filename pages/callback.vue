<template>
    <div>Loading...</div>
  </template>
  
  <script>
  export default {
    async mounted() {
      await this.$auth.fetchUserOnce()
      this.$router.push('/')
    }
  }
  </script>