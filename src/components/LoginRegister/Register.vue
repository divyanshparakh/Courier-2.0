<template>
  <div class="container">
    <Brand />
    <input type="text" v-model="UserName" placeholder="Full Name" />
    <input
      type="ph"
      maxlength="10"
      v-model="UserMobile"
      placeholder="10 Digit Mobile Number"
    />
    <input type="email" v-model="UserEmail" placeholder="Email" />
    <input
      type="password"
      name="UserPassword"
      v-model="UserPassword"
      placeholder="Password"
    />
    <button type="submit">Register</button>
    Or
    <router-link tag="button" to="/login">
      Login
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
      UserName: "",
      UserMobile: "",
      UserEmail: "",
      UserPassword: ""
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
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
