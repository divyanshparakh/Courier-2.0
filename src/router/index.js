import Vue from "vue";
import VueRouter from "vue-router";
import LoginRegister from "../views/Login-Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LoginRegister",
    component: LoginRegister,
    children: [
      {
        path: "/register",
        name: "Register",
        component: () => import("@/components/LoginRegister/Register.vue")
      },
      {
        path: "",
        name: "Login",
        component: () => import("@/components/LoginRegister/Login.vue")
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
