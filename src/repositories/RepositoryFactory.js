import educationalFieldsRepository from "./educationFieldsRepository";
import realizationsRepository from "./realizationsRepository";
import realizationItemRepository from "./realizationItemRepository";

// apin kautta haettavien tietojen repositoriot
const repositories = {
  educationalFields: educationalFieldsRepository, // koulutusalat
  realizations: realizationsRepository, // koulutusalan opintojaksot
  realizationItem: realizationItemRepository // opintojakso
  // muut repositoriot tänne...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
