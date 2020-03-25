import axios from "axios";

export default axios.create({
  baseURL: "https://isellapi.herokuapp.com/api"
});
