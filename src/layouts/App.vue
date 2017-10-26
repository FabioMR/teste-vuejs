<template>
  <div class="container-fluid">
    <navbar :title="title"/>

    <div class="row">
      <sidenav class="col"/>

      <main class="col wrapper">
        <slot/>
      </main>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import Sidenav from './Sidenav'

  export default {
    components: { Navbar, Sidenav },
    props: ['title'],
  }
</script>

<style lang="scss">
  @import "src/scss/main.scss";
</style>
