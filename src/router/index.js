import Vue from "vue";
import VueRouter from "vue-router";

import EducationalFields from "../views/Home.vue"; // koulutusalat
import Realizations from "../views/Realizations.vue"; // opintojaksot
import RealizationItem from "../views/RealizationItem.vue"; // yksittäinen opintojakso

Vue.use(VueRouter);

const routes = [
  // opintojakson tiedot
  {
    path: "/realizations/:educationalFieldId/:realizationItemId",
    name: "RealizationItem",
    component: RealizationItem
  },
  // koulutusalan opintojaksot valinta
  {
    path: "/realizations/:educationalFieldId",
    name: "Realizations",
    component: Realizations
  },
  // aloitussivu / koulutusalan valinta
  {
    path: "/",
    name: "EducationalFields",
    component: EducationalFields
    //component: () => import("../views/Koulutusalat.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
