import axios from "axios";

const instance = axios.create({
  baseURL:  process.env.NODE_ENV === "development" ? "http://localhost" : "" + "/api/v1/",
  timeout: 5000, // 5 seconds
});

export default instance;
