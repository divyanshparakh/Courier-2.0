<template>
  <div>
    <router-view></router-view>
  </div>
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
div {
  height: 100vh;
  padding: 1.5vh;
  overflow: hidden;
}
@media screen and (min-width: 1080px) {
  div {
    padding: 1vh;
  }
}
</style>
