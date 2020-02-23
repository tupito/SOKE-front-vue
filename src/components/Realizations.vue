<template>
  <div>
    <h1>Realizations</h1>
    <div v-for="item in realizations" :key="item.id">{{ item }}</div>
  </div>
</template>

<script>
const realizationsDummy = [
  {
    name: "Kauppa, hallinto ja oikeustieteet",
    routeId: "kauppa-hallinto-ja-oikeustieteet"
  }
  /*   "Maa- ja metsätalousalat",
  "Palvelualat",
  "Tekniikan alat",
  "Terveys- ja hyvinvointialat",
  "Tietojenkäsittely ja tietoliikenne",
  "Yhteiskunnalliset alat",
  "Muut opinnot" */
];
export default {
  name: "Realizations-component",
  data() {
    return {
      realizations: realizationsDummy
    };
  }
};
</script>

<style></style>
