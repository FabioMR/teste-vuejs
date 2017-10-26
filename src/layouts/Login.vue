<template>
  <main class="container">
    <h1 class="text-center pt-5">
      <img src="../images/logo.png" class="img-fluid" alt="Logo">
    </h1>

    <div class="row justify-content-center mt-5">
      <slot/>
    </div>
  </main>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import "src/scss/main.scss";
</style>
