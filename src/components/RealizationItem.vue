<template>
  <div>
    <h2>{{ courseInfo.courseName }}</h2>
    <div>
      <p>Aika: {{ courseInfo.time }}</p>
      <p>Ilmoittautumisaika: {{ courseInfo.registrationTime }}</p>
      <p>Opetusmuoto: {{ courseInfo.teachingMode }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RealizationItem-component",
  data() {
    return {
      courseInfo: this.$route.params.courseInfo
    };
  }
};
</script>

<style></style>
