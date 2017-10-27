<template>
  <login-layout>
    <modal-alert title="E-mail enviado" description="Por favor, verifique seu e-mail e siga as instruções." :open="showAlert" @close="close"></modal-alert>

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
            <input type="text" id="email" v-model.trim="email" @focus="onFocus" class="form-control" placeholder="E-mail" autofocus aria-label="E-mail">
          </div>
        </div>

        <div v-if="error" class="invalid-feedback d-block text-center">{{ error }}</div>

        <button type="submit" class="btn btn-secondary btn-lg btn-block btn-loader mt-5">
          Enviar
          <loader v-if="loading" size="small"></loader>
        </button>
      </form>

      <router-link class="btn btn-link btn-block" :to="{ name: 'SessionNew' }">Cancelar</router-link>
    </div>
  </login-layout>
</template>

<script>
  import ModalAlert from '@/components/ModalAlert'
  import Loader from 'vue-simple-spinner'

  export default {
    components: {
      ModalAlert,
      Loader,
    },
    data() {
      return {
        showAlert: false,
        loading: false,
        error: '',
        email: '',
      }
    },
    methods: {
      logout() {
        this.loading = true
        API.post('passwords', {email: this.email})
          .then(response => {
            this.loading = false
            this.showAlert = true
          })
          .catch(error => {
            this.loading = false
            this.error = error.response.data.error
          })
      },
      onFocus() {
        this.error = null
      },
      close() {
        this.$router.replace({ name: 'SessionNew' })
      },
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
