<template>
  <div>
    <NavBar />
    <div class="jumbotron text-center">
      <h1>Welcome To The Next Gen Courier Service</h1>
      <p>WE ARE BEST AT DELIVERING</p>
      <img
        class="img"
        width="95%"
        height="400px"
        src="@/assets/761f14fd757faee3cde5c0798b3fcd90.jpg"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>
<style media="screen">
.jumbotron {
  margin-top: 20em;
}
</style>
