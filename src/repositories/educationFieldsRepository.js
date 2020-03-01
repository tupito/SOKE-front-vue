import Repository from "./Repository";

// koulutusalojen endpoint-tarkenne (http://baseUrl/educationalFields)
const resource = "/educationalFields";

export default {
  // hae kaikki koulutusalat
  get() {
    return Repository.get(`${resource}`);
  }
  // muut pyynnöt tänne, esim. hae yksittäinen koulutusala
};
