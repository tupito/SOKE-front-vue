<template>
  <div class="Home">
    <h1>Avoin AMK -opintotarjonta SeAMK:ssa [View:Home.vue]</h1>
    <p>Todo: kuva tähän</p>
    <p>Todo: listaa koulutusalat linkkeineen</p>

    <Koulutusalat />
  </div>
</template>

<script>
// @ is an alias to /src
import Koulutusalat from "@/components/Koulutusalat.vue";

export default {
  name: "Home",
  components: {
    Koulutusalat
  }
};
</script>

<style></style>
