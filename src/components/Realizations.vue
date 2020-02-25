<!-- 
haku + sort -malli https://jsfiddle.net/f8p52n04/4/ 
computed: filteredList
methods: findBy, orderBy, sort
-->

<template>
  <div>
    <h2>Koulutusalan {{ $route.params.name }} avoimen AMK:n opintojaksot</h2>
    <div>
      <input type="text" v-model="searchName" placeholder="etsi nimellä" />
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

    <div v-for="item in filteredList" :key="item.id">
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
      reverseSort: false, // käänteinen järjestämisjärjestys,
      searchName: "" // haku
    };
  },
  // Computed properties are for transforming data for the presentation layer, not to alter or change data!
  computed: {
    filteredList() {
      let filteredList = this.filter(this.realizations, this.searchName); // suodatus hakukentän mukaan
      filteredList = this.order(filteredList, this.sortParam, this.reverseSort); // järjestäminen (nouseva/laskeva)
      return filteredList;
    }
  },
  methods: {
    filter(list, value) {
      console.log("filter...", list, value);
      return list.filter(realization => {
        return realization.vLocalizedNameFi
          .toLowerCase()
          .includes(value.toLowerCase());
      });
    },
    order(list, param, order) {
      console.log("order...", list, param, order);
      if (param) {
        return list.sort((a, b) => {
          return order
            ? a[param].localeCompare(b[param]) // sort
            : -a[param].localeCompare(b[param]); // reverse sort
        });
      } else {
        return list;
      }
    },
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
    changeParam(param) {
      // muutetaan järjestysparametria
      this.sortParam = param;
    }
  }
};
</script>

<style></style>
