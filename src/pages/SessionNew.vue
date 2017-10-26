<template>
  <login-layout>
    <div class="col">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email" class="sr-only">E-mail</label>
          <div class="input-group input-group-lg">
            <span class="input-group-addon"><svgicon name="envelope-closed"/></span>
            <input type="text" id="email" v-model.trim="email" class="form-control" placeholder="E-mail" autofocus aria-label="E-mail">
          </div>
        </div>

        <div class="form-group mt-3">
          <label for="password" class="sr-only">Senha</label>
          <div class="input-group input-group-lg">
            <span class="input-group-addon"><svgicon name="lock-locked"/></span>
            <input type="password" id="password" v-model="password" class="form-control" placeholder="Senha" aria-label="Senha">
          </div>
          <div class="d-block invalid-feedback">{{ errors.first('password') }}</div>
        </div>

        <button type="submit" class="btn btn-secondary btn-lg btn-block mt-5">Entrar</button>
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
        email: '',
        password: '',
      }
    },
    methods: {
      login() {
        Auth.login('12345')
        this.$router.replace({ name: 'Home' })
      }
    },
  }
</script>

<style scoped>
  .col {
    max-width: 400px;
  }
</style>
