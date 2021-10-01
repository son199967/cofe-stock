import axios from "axios";
// import axiosRetry from 'axios-retry';

export const BASE_URL = "http://192.168.31.103:8081/stock-app/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {

    let token = localStorage.getItem("token");
      console.log(token)
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
