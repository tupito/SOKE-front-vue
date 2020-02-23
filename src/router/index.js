import Vue from "vue";
import VueRouter from "vue-router";
import VueInfo from "../views/VueInfo.vue";
import Koulutusalat from "../views/Home.vue";
import Realizations from "../views/Realizations.vue";

Vue.use(VueRouter);

const routes = [
  // koulutusalan toteutusvalintasivu
  {
    path: "realizations/:id",
    name: "Realizations",
    component: Realizations
  },
  // aloitussivu / koulutusalan valinta
  {
    path: "/",
    name: "Koulutusalat",
    component: Koulutusalat
    //component: () => import("../views/Koulutusalat.vue")
  },
  // malli, todo: siivoa pois
  {
    path: "/vueinfo",
    name: "VueInfo",
    component: VueInfo
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
