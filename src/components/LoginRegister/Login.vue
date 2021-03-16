<template>
  <div class="container">
    <Brand />
    <input
      type="email"
      name="UserEmail"
      v-model="UserEmail"
      placeholder="Email"
    />
    <input
      type="password"
      name="UserPassword"
      v-model="UserPassword"
      placeholder="Password"
    />
    <button type="button" :onclick="login">Login</button>
    Or
    <router-link tag="button" to="/register">
      Register
    </router-link>
  </div>
</template>

<script>
import Brand from "@/components/Common/Brand.vue";

export default {
  components: {
    Brand
  },
  props: {},
  data() {
    return {
      UserEmail: "",
      UserPassword: ""
    };
  },
  computed: {
    UserName() {
      return this.$store.state.UserName;
    },
    login() {
      return this.$store.commit("Login");
    }
  },
  methods: {
    check() {
      if (this.UserName != null) {
        console.log("Divyansh");
        this.$router.push({ path: "/" });
      }
    }
  },
  created() {},
  mounted() {
    this.check();
  },
  updated() {}
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #10163a;
  width: 95%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  input {
    margin: 1vh;
    border: none;
    padding: 0.8em;
    color: #7367f0;
    background-color: #262c47;
    &:active,
    &:focus {
      border: #7367f0 1px solid;
    }
  }
  button {
    background-color: #262c47;
    margin: 1vh;
    border: none;
    color: white;
    padding: 0.5em;
    width: 10em;
    &:active,
    &:focus {
      border: #7367f0 1px solid;
    }
  }
}
</style>
