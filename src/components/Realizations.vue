<template>
  <div>
    <h2>Koulutusalan {{ $route.params.name }} avoimen AMK:n opintojaksot</h2>
    <div>
      <button v-on:click="filterRealizations()">todo filterRealizations</button>
      <button
        v-on:click="
          changeParam('enrollmentEnd'); // järjestäminen tehdään alkuperäisellä aikatiedolla, ei Suomi-päivämäärällä
          reverseSort = !reverseSort;
        "
      >Järjestä ilmoittautumisen päättymisen mukaan</button>
      <button
        v-on:click="
          changeParam('vLocalizedNameFi');
          reverseSort = !reverseSort;
        "
      >Järjestä nimen mukaan</button>
    </div>

    <div v-for="item in sortedRealizations" :key="item.id">
      <router-link
        :to="{
          name: 'RealizationItem',
          params: { id: item.id, realization: item }
        }"
      >
        {{ item.vLocalizedNameFi }}
        ( {{ item.vStartDate }} - {{ item.vEndDate }} ) ( ilmoittautuminen
        päättyy: {{ item.vEnrollmentEnd }})
      </router-link>
    </div>
  </div>
</template>

<script>
import { exampleMixin } from "@/mixins/exampleMixin.js";
import lib from "@/lib/customFunctions.js";

export default {
  name: "Realizations-component",
  mixins: [exampleMixin],
  created() {
    console.log("Realizations-component called");
  },
  // kutsutaan ennen DOM:iin liittämistä
  beforeMount() {
    this.addViewVariables(); // yksinkertaistetaan dataa järjestämisen helpottamiseksi
  },
  data() {
    return {
      realizations: this.$route.params.realizations, // tietoja router-link:ltä
      sortParam: "", // järjestämisparametri
      reverseSort: false // käänteinen järjestämisjärjestys
    };
  },
  // Computed properties are for transforming data for the presentation layer, not to alter or change data!
  computed: {
    // järjestetään lista parametrin (esim. nimi) ja järjestyssuunnan (nouseva/laskeva) perusteella
    sortedRealizations() {
      console.log("start sort...", this.sortParam);
      if (this.sortParam) {
        // ei mutatoida alkuperäistä dataa, vaan otetaan siitä kopio
        return this.realizations.slice().sort((a, b) => {
          if (this.reverseSort) {
            // normijärjestys
            return b[this.sortParam].localeCompare(a[this.sortParam]);
          } else {
            // käänteinen järjestys
            return a[this.sortParam].localeCompare(b[this.sortParam]);
          }
        });
      } else {
        // ei järjestysparametria, palautetaan alkuperäinen lista
        return this.realizations;
      }
    }
  },
  methods: {
    addViewVariables() {
      // yksinkertaistetaan dataa järjestämisen helpottamiseksi
      this.realizations.forEach(elem => {
        elem.vLocalizedNameFi = elem.courseUnit.localizedName.valueFi; // nested-muuttuja, helpommin vertailtavaan muuttujaan
        elem.vStartDate = lib.toFinDate(elem.startDate); // näytettävä pvm Suomi-muotoon
        elem.vEndDate = lib.toFinDate(elem.endDate); // näytettävä pvm Suomi-muotoon
        elem.vEnrollmentStart = lib.toFinDate(elem.enrollmentStart); // näytettävä pvm Suomi-muotoon
        elem.vEnrollmentEnd = lib.toFinDate(elem.enrollmentEnd); // näytettävä pvm Suomi-muotoon
      });
    },
    filterRealizations() {
      console.log("filterRealizations");
    },
    changeParam(param) {
      // muutetaan järjestysparametria
      this.sortParam = param;
    }
  }
};
</script>

<style></style>
