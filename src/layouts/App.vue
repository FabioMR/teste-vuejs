<template>
  <div class="container-fluid">
    <navbar :title="title"/>

    <div class="row">
      <sidenav class="col"/>

      <main class="col wrapper">
        <slot></slot>
        <loader v-if="loading" size="big" class="main-loader"></loader>
      </main>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import Sidenav from './Sidenav'

  export default {
    components: {
      Navbar,
      Sidenav,
    },
    props: ['title', 'loading'],
  }
</script>

<style lang="scss">
  @import "src/scss/main.scss";
</style>
