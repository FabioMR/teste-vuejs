<template>
  <nav class="sidenav list-group">
    <router-link class="list-group-item" :to="{ name: 'AdminIndex' }">
      <svgicon name="people" class="mr-md-3"/>
      <span class="d-none d-md-flex">Administradores</span>
    </router-link>

    <router-link class="list-group-item" :to="{ name: 'CityIndex' }">
      <svgicon name="yen" class="mr-md-3"/>
      <span class="d-none d-md-flex">Lista de canais</span>
    </router-link>

    <router-link class="list-group-item" :to="{ name: 'ReportIndex' }">
      <svgicon name="envelope-open" class="mr-md-3"/>
      <span class="d-none d-md-flex">Problemas reportados</span>
    </router-link>
  </nav>
</template>

<script>
  export default {
  }
</script>
