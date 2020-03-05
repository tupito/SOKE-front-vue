<template>
  <div>
    <h2>Koulutusalat (Opintotarjonta)</h2>
    <!-- jos datan haku ei onnistunut -->
    <ApiError v-if="!educationalFields"></ApiError>
    <!-- data haettu -->
    <div v-else v-for="item in educationalFields" :key="item.id">
      <router-link
        :to="{
          name: 'Realizations',
          params: {
            // Välitetään router-linkillä data, esim. koulutusalan tarjolla olevat toteutukset
            educationalFieldId: item.educationalFields[0].id,
            educationalFieldName: item.educationalFields[0].localizedNameFi,
            realizations: item.realizations
          }
        }"
      >{{ item.educationalFields[0].localizedNameFi }}</router-link>
      ( Avoinna olevat opintojaksot: {{ item.realizations.length }} )
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiError from "@/components/ApiError.vue";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const EducationalFieldsRepository = RepositoryFactory.get("educationalFields"); // apin kautta haettava data

export default {
  name: "EducationalFields-component",
  components: {
    ApiError
  },
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
      this.educationalFields = data;
    }
  }
};
</script>

<style></style>
