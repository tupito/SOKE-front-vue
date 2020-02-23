<template>
  <div>
    <h2>Koulutusalan {{ $route.params.name }} avoimen AMK:n opintojaksot</h2>
    <div v-for="item in courses" :key="item.id">
      <router-link
        :to="{
          name: 'RealizationItem',
          params: { id: item.courseId, courseInfo: item }
        }"
      >{{ item.courseName }}</router-link>
    </div>
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
