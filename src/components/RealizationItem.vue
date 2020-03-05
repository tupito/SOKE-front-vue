<template>
  <!-- jos datan haku ei onnistunut -->
  <ApiError v-if="!realizationItem"></ApiError>
  <!-- data haettu -->
  <div v-else>
    <router-link
      :to="{
        name: 'Realizations',
        params: { educationalFieldId: this.educationalFieldId }
      }"
    >Takaisin koulutusalan opintojaksoihin</router-link>
    <h2>{{ realizationItem.courseUnit.localizedName.valueFi }}</h2>
    <div>
      <p>Koodi: {{ realizationItem.code }}</p>
      <p>
        Aika: {{ toFinDate(realizationItem.startDate) }} -
        {{ toFinDate(realizationItem.endDate) }}
      </p>
      <p>
        Ilmoittautumisaika: {{ toFinDate(realizationItem.enrollmentStart) }} -
        {{ toFinDate(realizationItem.enrollmentEnd) }}
      </p>
      <p>Opintopisteet: {{ realizationItem.credits }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiError from "@/components/ApiError.vue";
import { dateMixin } from "@/mixins/dateMixin.js"; // päivämäärän apufunktiot
import { RepositoryFactory } from "@/repositories/RepositoryFactory";

const RealizationItemRepository = RepositoryFactory.get("realizationItem"); // apin kautta haettava data

export default {
  name: "RealizationItem-component",
  components: {
    ApiError
  },
  mixins: [dateMixin],
  data() {
    return {
      educationalFieldId: null, // routerlinkille (paluu) tieto koulutusalaid:stä
      realizationItem: null // näytettävä toteutus
    };
  },

  created() {
    let routerLinkRealizationItem = this.$route.params.realization;
    if (routerLinkRealizationItem) {
      // käyttäjä on avannut sivun routerlinkin kautta
      this.realizationItem = routerLinkRealizationItem; // opintojaksojen data ensisijaisesti router-link:ltä
    } else {
      this.fetch(); // data apista, esim. jos käyttäjä tulee suoralla url:lla
    }
    this.educationalFieldId = this.$route.params.educationalFieldId;
  },

  methods: {
    async fetch() {
      console.log("API CALL TRIGGERED");
      const realizationItemId = this.$route.params.realizationItemId; // haetaan toteutuksen id-tieto urlsta
      const { data } = await RealizationItemRepository.get(realizationItemId); // toteutuksen tiedot apista
      this.realizationItem = data;
    }
  }
};
</script>

<style></style>
