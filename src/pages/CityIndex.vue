<template>
  <app-layout title="Lista de canais" :loading="loading">
    <table v-if="cities.length" class="table table-bordered table-striped table-hover table-responsive">
      <thead>
        <tr>
          <th class="min">#</th>
          <th>Nome</th>
          <th class="min">Canal digital</th>
          <th class="min">Sintonia manual</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="city in cities">
          <th class="min">{{ city.id }}</th>
          <td>{{ city.name }}</td>
          <td class="min">{{ city.digital_channel }}</td>
          <td class="min">{{ city.analog_channel }}</td>
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
        cities: [],
      }
    },
    created() {
      API.get('me/cities').then(response => {
        this.loading = false
        this.cities = response.data
      })
    }
  }
</script>
