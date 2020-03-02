import axios from "axios";

// axios-yhteyden perusasetukset
const baseDomain = "https://soke-back-dummy.herokuapp.com";
const baseUrl = `${baseDomain}/api`;

// luodaan axios-yhteys, jota eri tietojen repositoriot käyttävät
export default axios.create({
  baseURL: baseUrl
  // headers and tokens here...
});
