import Repository from "./Repository";

// koulutusalojen endpoint-tarkenne (http://baseUrl/realization-item/123)
const resource = "/realization-item";

export default {
  // hae opintojakso
  get(realizationItemId) {
    return Repository.get(`${resource}/${realizationItemId}`);
  }
  // muut pyynnöt tänne...
};
