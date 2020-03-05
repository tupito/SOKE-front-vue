<template>
  <div>
    <h2>{{ realizationItem.courseUnit.localizedName.valueFi }}</h2>
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
</template>

<script>
import { dateMixin } from "@/mixins/dateMixin.js"; // päivämäärän apufunktiot

export default {
  props: ["realization"], // tuodaan toteutuksen tiedot
  mixins: [dateMixin],
  data: function() {
    return {
      realizationItem: this.realization // toteutuksen tiedot
    };
  }
};
</script>

<style></style>
