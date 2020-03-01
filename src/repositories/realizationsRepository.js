import Repository from "./Repository";

// koulutusalojen endpoint-tarkenne (http://baseUrl/realizations)
const resource = "/realizations";

export default {
  // hae kaikki koulutusalat
  get(educationFieldId) {
    return Repository.get(`${resource}/${educationFieldId}`);
  }
  // muut pyynnöt tänne, esim. hae yksittäinen koulutusala
};
