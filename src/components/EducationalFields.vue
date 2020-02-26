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
import axios from "axios";

export default {
  name: "EducationalFields-component",
  data: function() {
    return {
      educationalFields: null, // haetaan apista
      apiResponse: ""
    };
  },
  // mounted = kutsutaan kun DOM on kiinnitetty
  mounted() {
    axios
      .get("http://localhost:3000/soke")
      .then(response => {
        this.educationalFields = response.data.data;
      })
      .catch(error => {
        this.educationalFields = null;
        this.apiResponse = "api error";
        console.log(error);
      });
  }
};
</script>

<style>
.error {
  background-color: lightcoral;
}
</style>
