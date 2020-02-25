<template>
  <div>
    <h2>Koulutusalan {{ $route.params.name }} avoimen AMK:n opintojaksot</h2>
    <div>
      <button v-on:click="filterRealizations()">todo filterRealizations</button>
      <button
        v-on:click="
          changeParam('enrollmentEnd');
          reverseSort = !reverseSort;
        "
      >Järjestä ilmoittautumisen päättymisen mukaan</button>
      <button
        v-on:click="
          changeParam('localizedNameFi');
          reverseSort = !reverseSort;
        "
      >Järjestä nimen mukaan</button>
    </div>

    <!-- <div v-for="item in realizationsWithFinnishDates" :key="item.id"> -->
    <div v-for="item in sortedRealizations" :key="item.id">
      <router-link
        :to="{
          name: 'RealizationItem',
          params: { id: item.id, realization: item }
        }"
      >
        {{ item.localizedNameFi }}
        ( {{ item.startDate }} - {{ item.endDate }} ) ( ilmoittautuminen
        päättyy: {{ item.enrollmentEnd }})
      </router-link>
    </div>
  </div>
</template>

<script>
import { exampleMixin } from "@/mixins/exampleMixin.js";
//import lib from "@/lib/customFunctions.js";

export default {
  name: "Realizations-component",
  mixins: [exampleMixin],
  created() {
    console.log("Realizations-component called");
  },
  beforeMount() {
    // simplify nested data for sorting
    this.simplifyNestedData();
  },
  data() {
    return {
      // $route.params = haetaan välitettyjä tietoja router-link:ltä
      realizations: this.$route.params.realizations,
      sortParam: "",
      reverseSort: false
    };
  },
  // Computed properties are for transforming data for the presentation layer, not to alter or change data!
  computed: {
    // Näytetään toteutusten päivämäärät suomalaisessa muodossa (2020-05-31T23:59:00 -> 31.5.2020)
    /*     realizationsWithFinnishDates() {
      console.log("computed");
      let realizationFinDates = this.realizations;
      realizationFinDates.forEach(elem => {
        elem.startDate = lib.toFinDate(elem.startDate);
        elem.endDate = lib.toFinDate(elem.endDate);
        elem.enrollmentStart = lib.toFinDate(elem.enrollmentStart);
        elem.enrollmentEnd = lib.toFinDate(elem.enrollmentEnd);
      });
      return realizationFinDates;
    }, */
    sortedRealizations() {
      console.log(this.sortParam, this.reverseSort);
      if (this.sortParam) {
        return this.realizations.slice().sort((a, b) => {
          if (this.reverseSort) {
            return b[this.sortParam].localeCompare(a[this.sortParam]);
          } else {
            return a[this.sortParam].localeCompare(b[this.sortParam]);
          }
        });
      } else {
        return this.realizations;
      }
    }
  },
  methods: {
    simplifyNestedData() {
      this.realizations.forEach(elem => {
        elem.localizedNameFi = elem.courseUnit.localizedName.valueFi;
      });
    },
    filterRealizations() {
      console.log("filterRealizations");
    },
    changeParam(param) {
      this.sortParam = param;
    }
  }
};
</script>

<style></style>
