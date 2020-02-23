<template>
  <div class="Home">
    <p class="todo">Todo: WelcomeTxt-component</p>
    <!--koulutusalat-->
    <EducationalFields />
  </div>
</template>

<script>
// @ is an alias to /src
import EducationalFields from "@/components/EducationalFields.vue";

export default {
  name: "Home-view",
  components: {
    EducationalFields
  }
};
</script>

<style>
.todo {
  background-color: yellow;
}
</style>
