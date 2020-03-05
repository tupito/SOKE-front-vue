<template>
  <div class="realization-list-item">
    <router-link
      :to="{
        name: 'RealizationItem',
        params: { realizationItemId: item.id, realization: item }
      }"
    >
      {{ item.vLocalizedNameFi }}
      ( {{ toFinDate(item.startDate) }} - {{ toFinDate(item.endDate) }} ) (
      ilmoittautuminen päättyy: {{ toFinDate(item.enrollmentEnd) }})
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

<style>
.realization-list-item {
}
</style>
