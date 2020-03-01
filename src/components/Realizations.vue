<!-- 
haku + sort -malli https://jsfiddle.net/f8p52n04/4/ 
computed: filteredList
methods: findBy, orderBy, sort
-->

<template>
  <div>
    <h2>Koulutusalan {{ $route.params.name }} avoimen AMK:n opintojaksot</h2>
    <div class="searchConditions">
      <h3>Suodata/järjestä hakutuloksia</h3>
      <input type="text" v-model="searchName" placeholder="etsi opintojaksoa nimellä..." />
      <div
        class="btn"
        v-on:click="
          changeSortingParam('enrollmentEnd'); // järjestäminen tehdään alkuperäisellä aikatiedolla, ei Suomi-päivämäärällä
          reverseSort = !reverseSort;
        "
      >
        {{
        reverseSort
        ? "Järjestys: Seuraavaksi päättyvät ensin"
        : "Järjestys: Viimeiseksi päättyvät ensin"
        }}
      </div>

      <div class="btn" v-on:click="hidePastEnrollments = !hidePastEnrollments">
        {{
        hidePastEnrollments ? "Näytä: Piilota umpeutuneet" : "Näytä: Kaikki"
        }}
      </div>
    </div>

    <h3 v-if="hidePastEnrollments">Opintojaksot, joiden ilmoittautuminen ei ole päättynyt</h3>
    <h3 v-else>Kaikki opintojaksot</h3>

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
      searchName: "", // haku
      hidePastEnrollments: false // piilota menneet
      //hideBtnTxt = ,
      //sortBtnTxt =
    };
  },
  // Computed properties are for transforming data for the presentation layer, not to alter or change data!
  computed: {
    filteredList() {
      let filteredList = this.filter(this.realizations, this.searchName); // suodatus hakukentän mukaan
      filteredList = this.order(filteredList, this.sortParam, this.reverseSort); // järjestäminen (nouseva/laskeva)
      filteredList = this.filterPastEnrollments(
        filteredList,
        this.hidePastEnrollments
      ); // piilota/näytä ne, joissa ilmoittautumisaika umpeutunut
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
    filterPastEnrollments(list, hidePastEnrollments) {
      console.log("filterDate...", list, hidePastEnrollments);
      // halutaanko suodattaa umpeutuneet pois listasta
      if (hidePastEnrollments) {
        return list.filter(realization => {
          // muutetaan vertailtavat päivämäärät UNIX-aikaan vertailua varten
          let realizationEndDate = Date.parse(realization.enrollmentEnd); // ilmoittautumisen päättyminen
          let dateNow = Date.parse(Date(Date.now())); // nykyhetki
          return realizationEndDate > dateNow;
        });
      } else {
        // ei muokata suodatettua listaa
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
    changeSortingParam(param) {
      // muutetaan järjestysparametria
      this.sortParam = param;
    }
  }
};
</script>

<style>
.btn {
  border: 1px solid black;
  width: 30%;
  margin: 5px;
  font-size: small;
  background-color: lightblue;
  display: inline-block;
  padding: 1px;
  cursor: pointer;
}

.searchConditions {
  border: 1px solid black;
  width: 80%;
  margin: auto;
}
</style>
