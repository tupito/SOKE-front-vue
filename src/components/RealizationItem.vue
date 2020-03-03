<template>
  <div v-if="realizationItem">
    <router-link
      :to="{
        name: 'Realizations',
        params: { educationalFieldId: this.educationalFieldId }
      }"
    >Opintojaksoihin</router-link>
    <h2>{{ realizationItem.vLocalizedNameFi }}</h2>
    <div>
      <p>Koodi: {{ realizationItem.code }}</p>
      <p>
        Aika: {{ realizationItem.vStartDate }} -
        {{ realizationItem.vEndDate }}
      </p>
      <p>
        Ilmoittautumisaika: {{ realizationItem.vEnrollmentStart }} -
        {{ realizationItem.vEnrollmentEnd }}
      </p>
      <p>Opintopisteet: {{ realizationItem.credits }}</p>
    </div>
  </div>
  <div v-else class="error">Tietojen hakeminen ei onnistunut...</div>
</template>

<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
import lib from "@/lib/customFunctions.js"; // omat funktiot

const RealizationItemRepository = RepositoryFactory.get("realizationItem");

export default {
  name: "RealizationItem-component",

  data() {
    return {
      educationalFieldId: null,
      realizationItem: null
    };
  },

  created() {
    console.log(this.$route.params);
    console.log(this.educationalFieldId);

    let rParams = this.$route.params.realization;
    if (rParams) {
      // opintojaksojen data ensisijaisesti router-link:ltä (= ei erillistä API-kutsua)
      this.realizationItem = rParams;
      //this.addViewVariables(); // yksinkertaistetaan dataa järjestämisen helpottamiseksi ja päivämäärät Suomi-muotoon
    } else {
      // tehdään API-kutsu, esim. jos käyttäjä tulee suoralla linkillä
      this.fetch();
    }
    this.educationalFieldId = this.$route.params.educationalFieldId;
    // this.educationalFieldId = this.realizationItem.educationalFieldId;
  },

  methods: {
    async fetch() {
      console.log("API CALL TRIGGERED");
      const realizationItemId = this.$route.params.realizationItemId; // haetaan id-tieto urlsta
      const { data } = await RealizationItemRepository.get(realizationItemId);
      this.realizationItem = data;
      console.log("fetch", data);
      this.addViewVariables();
    },
    addViewVariables() {
      this.realizationItem.vLocalizedNameFi = this.realizationItem.courseUnit.localizedName.valueFi;
      this.realizationItem.vStartDate = lib.toFinDate(
        this.realizationItem.startDate
      );
      this.realizationItem.vEndDate = lib.toFinDate(
        this.realizationItem.endDate
      );
      this.realizationItem.vEnrollmentStart = lib.toFinDate(
        this.realizationItem.enrollmentStart
      );
      this.realizationItem.vEnrollmentEnd = lib.toFinDate(
        this.realizationItem.enrollmentEnd
      );
    }
  }
};
</script>

<style></style>
