<!-- Opintojakson tietojen listaus -->
<template>
  <div class="edu-list-item">
    <router-link
      :to="{
        name: 'RealizationItem',
        params: { realizationItemId: item.id, realization: item }
      }"
      tag="div"
    >
      {{ item.vLocalizedNameFi }}
      ( {{ toFinDate(item.startDate) }} - {{ toFinDate(item.endDate) }} )
      <span>ilmoittautuminen päättyy: {{ toFinDate(item.enrollmentEnd) }}</span>
    </router-link>
  </div>
</template>

<script>
import { dateMixin } from "@/mixins/dateMixin.js"; // päivämäärän apufunktiot

export default {
  name: "RealizationsData-component",
  props: ["realization"], // tuodaan toteutuksen tiedot
  mixins: [dateMixin],

  data: function() {
    return {
      item: this.realization
    };
  }
};
</script>
