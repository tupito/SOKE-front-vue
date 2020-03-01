import educationalFieldsRepository from "./educationFieldsRepository";

// apin kautta haettavien tietojen repositoriot
const repositories = {
  educationalFields: educationalFieldsRepository // koulutusalat
  // muut repositoriot tänne...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
