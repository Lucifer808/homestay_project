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
  allTypeOfAccommodationHeader: () => {
    const url = "/all-type-of-accommodation-header";
    const config = {};
    return axiosClient.get(url, config);
  },
  allTypeOfAccommodation: () => {
    const url = "/all-type-of-accommodation";
    const config = {};
    return axiosClient.get(url, config);
  },
  createTypeOfAccommodation: (params) => {
    const url = "/create-type-of-accommodation";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  updateTypeOfAccommodation: (params) => {
    const url = "/update-type-of-accommodation";
    const config = { "Content-Type": "application/json" };
    return axiosClient.put(url, params, config);
  },
  allAccommodation: () => {
    const url = "/all-accommodation";
    const config = {};
    return axiosClient.get(url, config);
  },
  getAllImageById: (params) => {
    const url = "/all-image-by-id";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  updateRentalRegistrationStatus: (params) => {
    const url = "/update-rental-status";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
};

export default adminApi;
