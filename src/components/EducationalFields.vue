<!-- Koulutusalojen listaus -->
<template>
  <div>
    <h2>Koulutusalat (Opintotarjonta)</h2>
    <!-- jos datan haku ei onnistunut -->
    <ApiError v-if="!educationalFields"></ApiError>
    <!-- data haettu -->
    <div v-else v-for="item in educationalFields" :key="item.id">
      <EducationalFieldsData :educationalField="item"></EducationalFieldsData>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiError from "@/components/ApiError.vue";
import EducationalFieldsData from "@/components/EducationalFieldsData.vue";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const EducationalFieldsRepository = RepositoryFactory.get("educationalFields"); // apin kautta haettava data

export default {
  name: "EducationalFields-component",
  components: {
    ApiError,
    EducationalFieldsData
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
