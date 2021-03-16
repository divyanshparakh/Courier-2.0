import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: true, // Optional Line
  state: {
    UserName: null
  },
  getters: {},
  mutations: {
    Login: state => {
      state.UserName = "Divyansh";
    },
    Logout: state => {
      state.UserName = null;
    }
  },
  actions: {},
  modules: {}
});
