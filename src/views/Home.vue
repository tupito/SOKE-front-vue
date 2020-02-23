<template>
  <div class="Home">
    <!-- aloitussivun tekstit -->
    <WelcomeTxt />
    <!-- koulutusalat -->
    <EducationalFields />
  </div>
</template>

<script>
// @ is an alias to /src
import EducationalFields from "@/components/EducationalFields.vue";
import WelcomeTxt from "@/components/WelcomeTxt.vue";

export default {
  name: "Home-view",
  components: {
    EducationalFields,
    WelcomeTxt
  }
};
</script>

<style>
.todo {
  background-color: yellow;
}
</style>
