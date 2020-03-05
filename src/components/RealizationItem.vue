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

    <!-- Toteutuksen tiedot -->
    <RealizationItemData v-bind:realization="realizationItem"></RealizationItemData>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiError from "@/components/ApiError.vue";
import RealizationItemData from "@/components/RealizationItemData.vue";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";

const RealizationItemRepository = RepositoryFactory.get("realizationItem"); // apin kautta haettava data

export default {
  name: "RealizationItem-component",
  components: {
    ApiError,
    RealizationItemData
  },
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
      const realizationItemId = this.$route.params.realizationItemId; // haetaan toteutuksen id-tieto urlsta
      const { data } = await RealizationItemRepository.get(realizationItemId); // toteutuksen tiedot apista
      this.realizationItem = data;
    }
  }
};
</script>

<style></style>
