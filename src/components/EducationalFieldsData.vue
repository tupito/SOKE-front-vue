<!-- Koulutusalojen tietojen näyttäminen -->
<template>
  <div class="edu-list-item">
    <router-link
      :to="{
        name: 'Realizations',
        params: {
          // Välitetään router-linkillä data, esim. koulutusalan tarjolla olevat toteutukset
          educationalFieldId: item.educationalFields[0].id,
          educationalFieldName: item.educationalFields[0].localizedNameFi,
          realizations: item.realizations
        }
      }"
      tag="div"
    >
      {{ item.educationalFields[0].localizedNameFi }}
      <span>Malliopintojaksot: {{ item.realizations.length }} kpl</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["educationalField"], // koulutusalan tiedot
  data() {
    return {
      item: this.educationalField
    };
  }
};
</script>

<style>
div.edu-list-item {
  background-color: lightblue;
  border: 1px solid black;
  border-radius: 5px;
  width: 80%;
  margin: 5px auto;
  padding: 5px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 3px 2px;
}

div.edu-list-item :hover {
  background-color: lightskyblue;
}

.edu-list-item :active {
  transform: translateY(4px);
}

.edu-list-item span {
  display: block;
  font-size: smaller;
  font-style: italic;
  font-weight: normal;
}
</style>
