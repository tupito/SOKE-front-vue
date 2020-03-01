import educationalFieldsRepository from "./educationFieldsRepository";

const repositories = {
  educationalFields: educationalFieldsRepository
};
console.log("repositories", repositories);
export const RepositoryFactory = {
  get: name => repositories[name]
};
