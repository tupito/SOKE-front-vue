<template>
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
</style>