<template>
  <login-layout>
    <div class="col col-lead">
      <p class="lead text-center">Não se preocupe. Insira abaixo o e-mail que você usou no seu cadastro, e nós enviaremos um link de redefinição de senha.</p>
    </div>

    <div class="w-100"></div>

    <div class="col col-form">
      <form @submit.prevent="logout">
        <div class="form-group">
          <label for="email" class="sr-only">E-mail</label>
          <div class="input-group input-group-lg">
            <span class="input-group-addon"><svgicon name="envelope-closed"/></span>
            <input type="text" id="email" v-model.trim="email" class="form-control" placeholder="E-mail" autofocus aria-label="E-mail">
          </div>
        </div>

        <button type="submit" class="btn btn-secondary btn-lg btn-block mt-5">Enviar</button>
      </form>

      <router-link class="btn btn-link btn-block" :to="{ name: 'SessionNew' }">Cancelar</router-link>
    </div>
  </login-layout>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
      }
    },
    methods: {
      logout() {
      }
    },
  }
</script>

<style scoped>
  .col-lead{
    max-width: 650px;
  }

  .col-form {
    max-width: 400px;
  }
</style>
