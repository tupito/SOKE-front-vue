import educationalFieldsRepository from "./educationFieldsRepository";
import realizationsRepository from "./realizationsRepository";

// apin kautta haettavien tietojen repositoriot
const repositories = {
  educationalFields: educationalFieldsRepository, // koulutusalat
  realizations: realizationsRepository // koulutusalan opintojaksot
  // muut repositoriot tänne...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
