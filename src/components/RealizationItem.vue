<template>
  <div>
    <h2>{{ realizationItem.courseUnit.localizedName.valueFi }}</h2>
    <div>
      <p>Aika: {{ realizationItem.startDate }}</p>
      <p>Ilmoittautumisaika: {{ realizationItem.enrollmentStart }}</p>
      <p>Opintopisteet: {{ realizationItem.credits }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RealizationItem-component",
  data() {
    return {
      realizationItem: this.$route.params.realization
    };
  }
};
</script>

<style></style>
