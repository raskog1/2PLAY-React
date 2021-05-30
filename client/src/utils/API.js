import axios from "axios";
import { setAuthHeader } from "./functions";

const API = {
  // Login/User Methods
  login: function () {
    return axios.get("/login");
  },

  get: async (url, params) => {
    setAuthHeader();
    const result = await axios.get(url, params);
    return result.data;
  },

  post: async (url, params) => {
    setAuthHeader();
    const result = await axios.post(url, params);
    return result.data;
  },
};

export default API;
