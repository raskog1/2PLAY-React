import axios from "axios";

const API = {
  // Login/User Methods
  login: function () {
    return axios.get("/login");
  },
};

export default API;
