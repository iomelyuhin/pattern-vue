import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    component: () => import("./components/main.vue"),
    meta: {
      title: "MAIN"
    }
  },
  {
    path: "/new",
    component: () => import("./components/new.vue")
  }
];

export default new VueRouter({ routes });