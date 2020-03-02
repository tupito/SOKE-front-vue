<template>
  <div
    v-if="!realizationItem.courseUnit.localizedName.valueFi"
    class="error"
  >Tietojen hakeminen ei onnistunut...</div>
  <div v-else>
    <h2>{{ realizationItem.courseUnit.localizedName.valueFi }}</h2>
    <div>
      <p>Koodi: {{ realizationItem.code }}</p>
      <p>
        Aika: {{ realizationItem.startDate }} -
        {{ realizationItem.endDate }}
      </p>
      <p>
        Ilmoittautumisaika: {{ realizationItem.enrollmentStart }} -
        {{ realizationItem.enrollmentEnd }}
      </p>
      <p>Opintopisteet: {{ realizationItem.credits }}</p>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";

const RealizationItemRepository = RepositoryFactory.get("realizationItem");

export default {
  name: "RealizationItem-component",

  data() {
    return {
      realizationItem: {}
    };
  },

  created() {
    let rParams = this.$route.params.realization;
    if (rParams) {
      // opintojaksojen data ensisijaisesti router-link:ltä (= ei erillistä API-kutsua)
      this.realizationItem = rParams;
      //this.addViewVariables(); // yksinkertaistetaan dataa järjestämisen helpottamiseksi ja päivämäärät Suomi-muotoon
    } else {
      // tehdään API-kutsu, esim. jos käyttäjä tulee suoralla linkillä
      this.fetch();
    }
  },

  methods: {
    async fetch() {
      console.log("API CALL TRIGGERED");
      const realizationItemId = this.$route.params.id; // haetaan id-tieto urlsta
      const { data } = await RealizationItemRepository.get(realizationItemId);
      this.realizationItem = data;
      console.log(data);
    }
  }
};
</script>

<style></style>
