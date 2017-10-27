<template>
  <div class="container-fluid">
    <navbar :title="title"/>

    <div class="row">
      <sidenav class="col"/>

      <main class="col wrapper">
        <loader v-if="loading" size="big" class="main-loader"></loader>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import Sidenav from './Sidenav'
  import Loader from 'vue-simple-spinner'

  export default {
    components: {
      Navbar,
      Sidenav,
      Loader,
    },
    props: ['title', 'loading'],
  }
</script>

<style lang="scss">
  @import "src/scss/main.scss";
</style>
