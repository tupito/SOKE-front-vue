<template>
  <div>
    <h2>Koulutusalat (Opintotarjonta) [Component: Koulutusalat.vue]</h2>
    <div v-for="item in koulutusalat" :key="item.id">{{ item }}</div>
  </div>
</template>

<script>
const koulutusalatDummy = [
  "Kauppa, hallinto ja oikeustieteet",
  "Maa- ja metsätalousalat",
  "Palvelualat",
  "Tekniikan alat",
  "Terveys- ja hyvinvointialat",
  "Tietojenkäsittely ja tietoliikenne",
  "Yhteiskunnalliset alat",
  "Muut opinnot"
];

export default {
  name: "Koulutusalat",
  data: function() {
    return {
      koulutusalat: koulutusalatDummy
    };
  }
};
</script>

<style></style>
