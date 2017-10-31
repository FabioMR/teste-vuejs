<template>
  <app-layout title="Problemas reportados" :loading="loading">
    <router-link class="btn btn-secondary mb-3" :to="{ name: 'ReportNew' }">Reportar</router-link>

    <table v-if="reports.length" class="table table-bordered table-striped table-hover table-responsive">
      <thead>
        <tr>
          <th class="min">#</th>
          <th>Reportado em</th>
          <th class="min"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="report in reports">
          <th class="min">{{ report.id }}</th>
          <td>
            {{ new Date | moment("L [às] HH:mm") }}
            <span v-show="report.unread_answer" class="badge badge-secondary">Não lido</span>
          </td>
          <td class="min"><a href>Ver mais</a></td>
        </tr>
      </tbody>
    </table>
  </app-layout>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        reports: [],
      }
    },
    created() {
      API.get('me/reports').then(response => {
        this.loading = false
        this.reports = response.data
      })
    }
  }
</script>
