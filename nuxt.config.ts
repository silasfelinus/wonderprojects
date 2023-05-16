export default ({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/auth-next', '@nuxtjs/eslint-config'],
  typescript: {
    shim: false
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' }
        }
        // autoLogout: false
      }
    }
  }
})
