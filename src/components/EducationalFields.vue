<template>
  <div>
    <h2>Koulutusalat (Opintotarjonta)</h2>
    <div v-for="item in educationalFields" :key="item.id">
      <router-link
        :to="{
          name: 'Realizations',
          params: { id: item.routeUrl, name: item.name, courses: item.courses } // Välitetään router-linkillä data, esim. koulutusalan tarjolla olevat toteutukset
        }"
      >{{ item.name }}</router-link>
      ( Avoinna olevat opintojaksot: {{ item.courses.length }} )
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    name: "Kauppa, hallinto ja oikeustieteet",
    routeUrl: "kauppa-hallinto-ja-oikeustieteet",
    courses: [
      {
        courseName:
          "Yritystoiminta ja yrittäjyys, 3 op, 26.08.2019 - 31.05.2020",
        time: "26.08.2019 - 31.05.2020",
        registrationTime: "01.11.2019 - 24.02.2020",
        teachingMode: "verkko-opinto",
        courseId: 1
      },
      {
        courseName:
          "Tutkimus- ja kehittämistyön perusteet, 2 op, 26.08.2019 - 31.05.2020",
        time: "07.03.2020 - 31.05.2020",
        registrationTime: "15.10.2019 - 28.02.2020",
        teachingMode: "verkko-opinto",
        courseId: 2
      },
      {
        courseName: "Saksa 3, 3 op, 26.08.2019 - 31.07.2020",
        time: "07.03.2020 - 31.05.2020",
        registrationTime: "15.10.2019 - 28.02.2020",
        teachingMode: "verkko-opinto",
        courseId: 2
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
  name: "EducationalFields-component",
  data: function() {
    return {
      educationalFields: dummyData
    };
  }
};
</script>

<style></style>
