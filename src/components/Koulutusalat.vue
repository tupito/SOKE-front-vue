<template>
  <div>
    <h2>Koulutusalat (Opintotarjonta) [Component: Koulutusalat.vue]</h2>
    <div v-for="item in koulutusalat" :key="item.id">
      <router-link
        :to="{
          name: 'Realizations',
          params: { id: item.routeUrl, name: item.name, courses: item.courses } // Välitetään router-linkillä data, esim. koulutusalan tarjolla olevat toteutukset
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
    routeUrl: "kauppa-hallinto-ja-oikeustieteet",
    courses: [
      {
        courseName:
          "Yritystoiminta ja yrittäjyys, 3 op, 26.08.2019 - 31.05.2020"
      },
      {
        courseName:
          "Tutkimus- ja kehittämistyön perusteet, 2 op, 26.08.2019 - 31.05.2020"
      }
    ]
  },
  {
    name: "Tekniikan alat",
    routeUrl: "tekniikan-alat",
    courses: [
      {
        courseName:
          "Sähköturvallisuussäädökset ja -standardit, 3 op, 12.08.2019 - 31.05.2020"
      },
      { courseName: "Sähkö- ja lämpöoppi, 3 op, 12.08.2019 - 10.05.2020" }
    ]
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
