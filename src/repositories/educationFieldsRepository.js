import Repository from "./Repository";

const resource = "/educationalFields";
console.log("resource", resource);

export default {
  get() {
    return Repository.get(`${resource}`);
  }
};
