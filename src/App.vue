<template>
  <div class="jumbotron-fluid">
    <router-view></router-view>
  </div>
</template>
<script lang="js">

export default {
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.jumbotron-fluid {
  background-color: #262c47;
  height: 100vh;
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
