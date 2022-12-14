import axios from "axios";

const instance = axios.create({
  baseURL: "/api/v1/",
  timeout: 10000, // 5 seconds
});

export default instance;
