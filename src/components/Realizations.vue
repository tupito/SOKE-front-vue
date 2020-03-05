<template>
  <!-- jos datan haku ei onnistunut -->
  <ApiError v-if="realizations.length < 1" class="error"></ApiError>
  <!-- data haettu -->
  <div v-else>
    <h2>
      Koulutusalan {{ $route.params.educationalFieldName }} avoimen AMK:n
      opintojaksot
    </h2>
    <div class="searchConditions">
      <h3>Suodata/järjestä hakutuloksia</h3>
      <input type="text" v-model="searchInput" placeholder="Etsi nimellä..." />
      <hr />
      <transition name="fade" mode="out-in">
        <div
          v-if="!timeSort"
          class="btn"
          v-on:click="
            changeSortingParam('startDate');
            timeSort = !timeSort;
          "
          key="time"
        >
          Järjestä: Alkamisjärjestykseen
          <!-- järjestäminen tehdään alkuperäisellä aikatiedolla, ei Suomi-päivämäärällä -->
        </div>

        <div
          v-else
          class="btn"
          v-on:click="
            changeSortingParam('vLocalizedNameFi');
            timeSort = !timeSort;
          "
          key="name"
        >Järjestä: Aakkosjärjestykseen</div>
      </transition>
      <hr />

      <div
        class="btn"
        v-on:click="hidePastEnrollments = !hidePastEnrollments"
      >{{ hidePastEnrollments ? "Näytä kaikki" : "Piilota umpeutuneet" }}</div>
    </div>

    <transition name="fade" mode="out-in">
      <h3 key="notAll" v-if="hidePastEnrollments">Opintojaksot - ilmoittautuminen avoinna</h3>
      <h3 key="all" v-else>Opintojaksot - kaikki</h3>
    </transition>

    <transition-group name="list" tag="div">
      <div v-for="item in filteredList" :key="item.id">
        <RealizationsData :realization="item"></RealizationsData>
      </div>
    </transition-group>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiError from "@/components/ApiError.vue";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
import RealizationsData from "@/components/RealizationsData.vue";

const RealizationsRepository = RepositoryFactory.get("realizations"); // apin kautta haettava data

export default {
  name: "Realizations-component",
  components: {
    ApiError,
    RealizationsData
  },

  data() {
    return {
      realizations: [], // opintojaksot, haetaan ensisijaisesti routerlinkiltä ja toissijaisesti erillisellä API-kutsulla
      sortParam: "", // järjestämisparametri (harjoitustyössä vain ilmoittautumisen päättymispäivä)
      searchInput: "", // haku
      timeSort: true,
      reverseSort: false, // käänteinen järjestämisjärjestys, tehty valmiiksi, ei käytetä tässä työssä
      hidePastEnrollments: false // piilota menneet
    };
  },

  created() {
    let rParams = this.$route.params.realizations;
    if (rParams) {
      // opintojaksojen data ensisijaisesti router-link:ltä (= ei erillistä API-kutsua)
      this.realizations = rParams;
      this.simplifyNestedVariables(); // yksinkertaistetaan dataa järjestämisen helpottamiseksi ja päivämäärät Suomi-muotoon
    } else {
      // tehdään API-kutsu, esim. jos käyttäjä tulee suoralla linkillä tai painaa selaimen back-nappulaa opintojakson tiedoissa
      this.fetch();
    }
    this.changeSortingParam("startDate");
  },

  // Computed properties are for transforming data for the presentation layer, not to alter or change data!
  computed: {
    filteredList() {
      let filteredList = this.filter(this.realizations, this.searchInput); // suodatus hakukentän mukaan
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
      return list.filter(realization => {
        if (realization) {
          return realization.vLocalizedNameFi
            .toLowerCase() // kaikki kirjaimet pieniksi vertailua varten
            .includes(value.toLowerCase());
        }
      });
    },
    order(list, param, order) {
      if (param) {
        return list.sort((a, b) => {
          return order
            ? -a[param].localeCompare(b[param]) // sort (vertailu palauttaa 1)
            : a[param].localeCompare(b[param]); // reverse sort (vertailu palauttaa -1)
        });
      } else {
        return list;
      }
    },
    filterPastEnrollments(list, hidePastEnrollments) {
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

    simplifyNestedVariables() {
      // yksinkertaistetaan dataa järjestämisen helpottamiseksi
      this.realizations.forEach(elem => {
        elem.vLocalizedNameFi = elem.courseUnit.localizedName.valueFi; // nested-muuttuja, helpommin vertailtavaan muuttujaan
      });
    },
    changeSortingParam(param) {
      // muutetaan järjestysparametria
      this.sortParam = param;
    },
    async fetch() {
      const educationalFieldId = this.$route.params.educationalFieldId; // haetaan id-tieto urlsta
      const { data } = await RealizationsRepository.get(educationalFieldId);
      this.realizations = data[0].realizations;
      this.simplifyNestedVariables(); // yksinkertaistetaan dataa järjestämisen helpottamiseksi ja päivämäärät Suomi-muotoon
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

/* transition name="fade"*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}

/* transition-group name="list" */
/* sort list */

.list-move {
  transition: transform 1s;
}

/* filter list */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
