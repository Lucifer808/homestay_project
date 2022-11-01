import axiosClient from "./axiosClient";
const adminApi = {
  allRentalRegistration: () => {
    const url = "/all-retal-registration";
    const config = {};
    return axiosClient.get(url, config);
  },
  allService: () => {
    const url = "/all-service";
    const config = {};
    return axiosClient.get(url, config);
  },
  createService: (params) => {
    const url = "/create-service";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  updateService: (params) => {
    const url = "/update-service";
    const config = { "Content-Type": "application/json" };
    return axiosClient.put(url, params, config);
  },
  allTypeOfService: () => {
    const url = "/all-type-of-service";
    const config = {};
    return axiosClient.get(url, config);
  },
  createTypeOfService: (params) => {
    const url = "/create-type-of-service";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  updateTypeOfService: (params) => {
    const url = "/update-type-of-service";
    const config = { "Content-Type": "application/json" };
    return axiosClient.put(url, params, config);
  },
  deleteTypeOfService: (params) => {
    const url = `/delete-type-of-service/${params}`;
    const config = { "Content-Type": "application/json" };
    return axiosClient.delete(url, params, config);
  },
};

export default adminApi;
