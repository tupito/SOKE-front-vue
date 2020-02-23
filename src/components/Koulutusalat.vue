<template>
  <div>
    <h2>Koulutusalat (Opintotarjonta) [Component: Koulutusalat.vue]</h2>
    <div v-for="item in koulutusalat" :key="item.id">
      <router-link
        :to="{
          name: 'Realizations',
          params: { id: item.routeUrl, name: item.name }
        }"
      >{{ item.name }}</router-link>|
      <router-link to="/realizations">testeri</router-link>
    </div>
  </div>
</template>

<script>
const koulutusalatDummy = [
  {
    name: "Kauppa, hallinto ja oikeustieteet",
    routeUrl: "kauppa-hallinto-ja-oikeustieteet"
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
  name: "Koulutusalat-component",
  data: function() {
    return {
      koulutusalat: koulutusalatDummy
    };
  }
};
</script>

<style></style>
