<template>
  <div>
    <h2>Koulutusalat (Opintotarjonta)</h2>
    <div v-if="!educationalFields" class="error">Tietojen hakeminen ei onnistunut...</div>
    <div v-else v-for="item in educationalFields" :key="item.id">
      <router-link
        :to="{
          name: 'Realizations',
          params: {
            // Välitetään router-linkillä data, esim. koulutusalan tarjolla olevat toteutukset
            id: item.educationalFields[0].id,
            name: item.educationalFields[0].localizedNameFi,
            realizations: item.realizations
          }
        }"
      >{{ item.educationalFields[0].localizedNameFi }}</router-link>
      ( Avoinna olevat opintojaksot: {{ item.realizations.length }} )
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const EducationalFieldsRepository = RepositoryFactory.get("educationalFields"); // apin kautta haettava data

export default {
  name: "EducationalFields-component",
  data: function() {
    return {
      educationalFields: null, // haetaan apista
      apiResponse: ""
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await EducationalFieldsRepository.get();
      this.educationalFields = data.data;
    }
  }
};
</script>

<style>
.error {
  background-color: lightcoral;
}
</style>
