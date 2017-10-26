<template>
  <nav class="sidenav list-group">
    <router-link class="list-group-item" :to="{ name: 'AdminIndex' }">
      <svgicon name="people" class="mr-md-3"/>
      <span class="d-none d-md-flex">Administradores</span>
    </router-link>

    <router-link class="list-group-item" :to="{ name: 'ContactIndex' }">
      <svgicon name="envelope-open" class="mr-md-3"/>
      <span class="d-none d-md-flex">Contatos</span>
    </router-link>
  </nav>
</template>

<script>
  export default {
  }
</script>
