<template>
  <div class="Home">
    <h1>Avoin AMK -opintotarjonta SeAMK:ssa [View:Home.vue]</h1>
    <p class="todo">Todo: WelcomeTxt-component</p>
    <Koulutusalat />
  </div>
</template>

<script>
// @ is an alias to /src
import Koulutusalat from "@/components/Koulutusalat.vue";

export default {
  name: "Home-view",
  components: {
    Koulutusalat
  }
};
</script>

<style>
.todo {
  background-color: yellow;
}
</style>
