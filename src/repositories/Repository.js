import axios from "axios";

const baseDomain = "http://localhost:3000";
const baseUrl = `${baseDomain}/api`;
console.log("baseUrl", baseUrl);

export default axios.create({
  baseURL: baseUrl
  // headers and tokens here...
});
