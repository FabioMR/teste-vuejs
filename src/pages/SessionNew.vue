<template>
  <login-layout>
    <div class="col">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email" class="sr-only">E-mail</label>
          <div class="input-group input-group-lg">
            <span class="input-group-addon"><svgicon name="envelope-closed"/></span>
            <input type="text" id="email" v-model.trim="email" @focus="onFocus" class="form-control" placeholder="E-mail" autofocus aria-label="E-mail">
          </div>
        </div>

        <div class="form-group mt-3">
          <label for="password" class="sr-only">Senha</label>
          <div class="input-group input-group-lg">
            <span class="input-group-addon"><svgicon name="lock-locked"/></span>
            <input type="password" id="password" v-model="password" @focus="onFocus" class="form-control" placeholder="Senha" aria-label="Senha">
          </div>
        </div>

        <div v-if="error" class="invalid-feedback d-block text-center">{{ error }}</div>

        <button type="submit" class="btn btn-secondary btn-lg btn-block btn-loader mt-5" :disabled="loading">
          Entrar
          <loader v-if="loading" size="small"></loader>
        </button>
      </form>

      <router-link class="btn btn-link btn-block" :to="{ name: 'PasswordNew' }">Esqueci minha senha</router-link>
    </div>
  </login-layout>
</template>

<script>
  import Auth from '@/helpers/auth'
  export default {
    data() {
      return {
        loading: false,
        error: '',
        email: '',
        password: '',
      }
    },
    methods: {
      login() {
        this.loading = true
        API.post('sessions', {email: this.email, password: this.password}).then(response => {
          this.loading = false
          Auth.login(response.data.user, response.data.user_token)
          this.$router.replace({ name: 'Home' })
        }).catch(error => {
          this.loading = false
          this.error = error.response.data.error
        })
      },
      onFocus() {
        this.error = null
      },
    },
  }
</script>

<style scoped>
  .col {
    max-width: 400px;
  }
</style>
