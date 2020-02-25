<template>
  <div class="Home">
    <Realizations />
  </div>
</template>

<script>
// @ is an alias to /src
import Realizations from "@/components/Realizations.vue";
//import dateMixin from "@/mixins/dateMixin.js";

export default {
  name: "Realizations-view",
  //mixins: [dateMixin],
  components: {
    Realizations
  }
};
</script>

<style></style>
