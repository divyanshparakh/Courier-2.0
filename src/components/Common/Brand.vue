<template>
  <router-link tag="div" class="brand" to="/">
    <img class="brandlogo" draggable="false" src="@/assets/logo.jpg" alt="" />
    <h1 class="brandtext">Courierify</h1>
  </router-link>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.brand {
  font-family: monospace;
  color: #7367f0;
  .brandlogo {
    height: 10em;
    border: white 0.3em dashed;
    border-radius: 20em;
  }
  .brandtext {
    font-size: 2.5em;
    margin: 1vh;
  }
}
@media screen and (min-width: 1080px) {
  .brand {
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
    .brandlogo {
      height: 30vh;
    }
    .brandtext {
      font-size: 6vh;
    }
  }
}
</style>
