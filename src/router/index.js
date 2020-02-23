import Vue from "vue";
import VueRouter from "vue-router"; //malli, todo: siivoa
import VueInfo from "../views/VueInfo.vue"; //malli, todo: siivoa

import EducationalFields from "../views/Home.vue"; // koulutusalat
import Realizations from "../views/Realizations.vue"; // opintojaksot

Vue.use(VueRouter);

const routes = [
  // koulutusalan toteutusvalintasivu
  {
    path: "/realizations/:id",
    name: "Realizations",
    component: Realizations
  },
  // aloitussivu / koulutusalan valinta
  {
    path: "/",
    name: "EducationalFields",
    component: EducationalFields
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
