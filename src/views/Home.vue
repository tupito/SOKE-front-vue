<template>
  <div class="Home">
    <!-- aloitussivun tekstit -->
    <TheWelcomeTxt />
    <!-- koulutusalat -->
    <EducationalFields />
  </div>
</template>

<script>
// @ is an alias to /src
import EducationalFields from "@/components/EducationalFields.vue";
import TheWelcomeTxt from "@/components/TheWelcomeTxt.vue";

export default {
  name: "Home-view",
  components: {
    EducationalFields,
    TheWelcomeTxt
  }
};
</script>

<style>
.todo {
  background-color: yellow;
}
</style>
