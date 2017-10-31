<template>
  <app-layout title="Reportar problema" :loading="loading">
    <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="alert-heading">Atenção</h4>
      <p class="mb-0">{{ error }}</p>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="started_on">Quando o problema começou?</label>
        <select class="form-control" id="started_on" name="started_on" v-model="started_on">
          <option></option>
          <option v-for="item in started_ons" :value="item.id">{{ item.description }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="signal_kind">Como você recebe o sinal?</label>
        <select class="form-control" id="signal_kind" name="signal_kind" v-model="signal_kind">
          <option></option>
          <option v-for="item in signal_kinds" :value="item.id">{{ item.description }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="channel">Qual o canal?</label>
        <select class="form-control" id="channel" name="channel" v-model="channel">
          <option></option>
          <option v-for="item in channels" :value="item">{{ item }}</option>
        </select>
      </div>

      <button type="submit" class="btn btn-secondary" :disabled="submiting">Salvar</button>
      <router-link class="btn btn-link" :to="{ name: 'ReportIndex' }">Voltar</router-link>
    </form>
  </app-layout>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        submiting: false,
        error: '',
        started_ons: [],
        started_on: '',
        signal_kinds: [],
        signal_kind: '',
        channels: [],
        channel: '',
        operators: [],
        operator: '',
      }
    },
    created() {
      API.get('me/reports/new').then(response => {
        this.loading = false
        this.started_ons = response.data.started_ons
        this.signal_kinds = response.data.signal_kinds
        this.channels = response.data.channels
        this.operators = response.data.operators
      })
    },
    methods: {
      onSubmit() {
        this.submiting = true
        API.post('me/reports', {started_on: this.started_on}).then(response => {
          this.submiting = false
          this.$router.replace({ name: 'ReportIndex' })
        }).catch(error => {
          this.submiting = false
          this.error = error.response.data.error
        })
      }
    },
  }
</script>
