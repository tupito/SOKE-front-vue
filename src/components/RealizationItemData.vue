<!-- Opintojakson tietojen näyttäminen -->
<template>
  <div class="realization-item-container">
    <h2>{{ realizationItem.courseUnit.localizedName.valueFi }}</h2>
    <hr />

    <h3>Koodi</h3>
    <p>{{ realizationItem.code }}</p>

    <h3>Aika</h3>
    <p>
      {{ toFinDate(realizationItem.startDate) }} -
      {{ toFinDate(realizationItem.endDate) }}
    </p>

    <h3>Ilmoittautumisaika</h3>
    <p>
      {{ toFinDate(realizationItem.enrollmentStart) }} -
      {{ toFinDate(realizationItem.enrollmentEnd) }}
    </p>

    <h3>Opintopisteet</h3>
    <p>{{ realizationItem.credits }}</p>
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

<style scoped>
h3 {
  margin: 5px;
}
p {
  margin: 5px;
  font-style: italic;
}

.realization-item-container {
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
  width: 90%;
  margin: 10px auto;
  padding: 5px;
}
</style>
