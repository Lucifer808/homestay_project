import axios from "axios";
import queryString from "query-string";
const axiosClient = axios.create({
  baseURL: "http://localhost:8800/api/v1",
  paramsSerializer: (params) => queryString.stringify(params),
  withCredentials: true,
});

axios.interceptors.request.use(async (config) => {
  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
