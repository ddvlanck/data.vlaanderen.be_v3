<template>
  <div id="app">
    <Home></Home>
    <!--<div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>-->
  </div>
</template>

<script>
  import Home from './views/Home';
  export default {
    name: 'app',
    components: {
      Home
    }
  }
</script>

<style lang="scss">
  $vl-icon-font-location: "assets/";
  @import "~@govflanders/vl-ui-core/src/scss/core";
</style>
