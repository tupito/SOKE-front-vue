<template>
  <div>
    <h2>Realizations for {{ $route.params.name }}</h2>
    <div v-for="item in courses" :key="item.id">{{ item.courseName }}</div>
  </div>
</template>

<script>
export default {
  name: "Realizations-component",
  data() {
    return {
      // $route.params = haetaan välitettyjä tietoja router-link:ltä
      courses: this.$route.params.courses
    };
  }
};
</script>

<style></style>
