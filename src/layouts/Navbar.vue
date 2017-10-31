<template>
  <header class="navbar">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">Teste</router-link>

    <h1 class="navbar-text align-bottom">{{ title }}</h1>

    <div class="dropdown show ml-auto">
      <a class="dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" role="button">
        {{ currentUser.email }}
      </a>

      <div class="dropdown-menu">
        <router-link class="dropdown-item" :to="{ name: 'PasswordEdit' }">Alterar senha</router-link>
        <a href @click.prevent="logout" class="dropdown-item">Sair</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    props: ['title'],
    data() {
      return {
        currentUser: Auth.currentUser(),
      }
    },
    methods: {
      logout() {
        Auth.logout()
        this.$router.replace({ name: 'SessionNew' })
      }
    },
  }
</script>
