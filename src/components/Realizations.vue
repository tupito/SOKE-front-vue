<template>
  <div>
    <h2>Koulutusalan {{ $route.params.name }} avoimen AMK:n opintojaksot</h2>
    <!-- <div v-for="item in courses" :key="item.id"> -->
    <div v-for="item in realizationsWithFinnishDates" :key="item.id">
      <router-link
        :to="{
          name: 'RealizationItem',
          params: { id: item.id, realization: item }
        }"
      >
        {{ item.courseUnit.localizedName.valueFi }}
        ( {{ item.startDate }} - {{ item.endDate }} ) ( ilmoittautuminen
        päättyy: {{ item.enrollmentEnd }})
      </router-link>
    </div>
  </div>
</template>

<script>
import { exampleMixin } from "@/mixins/exampleMixin.js";
import dateLib from "@/lib/customFunctions.js";

export default {
  name: "Realizations-component",
  mixins: [exampleMixin],
  created() {
    console.log("Realizations-component called");
  },
  data() {
    return {
      // $route.params = haetaan välitettyjä tietoja router-link:ltä
      courses: this.$route.params.realizations
    };
  },
  // Computed properties are for transforming data for the presentation layer, not to alter or change data!
  computed: {
    // Näytetään toteutusten päivämäärät suomalaisessa muodossa (2020-05-31T23:59:00 -> 31.5.2020)
    realizationsWithFinnishDates() {
      let realizations = this.$route.params.realizations;
      realizations.forEach(elem => {
        elem.startDate = dateLib.toFinDate(elem.startDate);
        elem.endDate = dateLib.toFinDate(elem.endDate);
        elem.enrollmentStart = dateLib.toFinDate(elem.enrollmentStart);
        elem.enrollmentEnd = dateLib.toFinDate(elem.enrollmentEnd);
      });
      return realizations;
    }
  }
};
</script>

<style></style>
