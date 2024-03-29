import axiosClient from "./axiosClient";
const userApi = {
  users: () => {
    const url = "users";
    const config = {};
    return axiosClient.get(url, config);
  },
  register: (params) => {
    const url = "register";
    // const config = { headers: { "Content-Type": "multipart/form-data" } };
    return axiosClient.post(url, params);
  },
  login: (params) => {
    const url = "login";
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    return axiosClient.post(url, params, config);
  },
  logout: () => {
    const url = "logout";
    return axiosClient.get(url);
  },
  loadUser: () => {
    const url = "me";
    return axiosClient.get(url);
  },
  allBedType: () => {
    const url = "all-bed-type-list";
    const config = {};
    return axiosClient.get(url, config);
  },
  allTypeOfAccommodation: () => {
    const url = "/all-type-of-accommodation";
    const config = {};
    return axiosClient.get(url, config);
  },
  allServices: () => {
    const url = "/user-get-all-service";
    const config = {};
    return axiosClient.get(url, config);
  },
  createRegistrationInfo: (params) => {
    const url = "/create-registration-info";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  createRegistrationLocation: (params) => {
    const url = "/create-registration-location";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  createRegistrationDesc: (params) => {
    const url = "/create-registration-desc";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  createRegistrationServices: (params) => {
    const id = params[0].dsa_propertyRegistrationId;
    const url = `/create-registration-services/${id}`;
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  createRegistrationPriceSetup: (params) => {
    const url = "/create-registration-price-setup";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  createRegistrationImages: (params) => {
    const url = "/create-registration-images";
    const config = { "Content-Type": "multipart/form-data" };
    return axiosClient.post(url, params, config);
  },
  createRegistrationFile: (params) => {
    const url = "/create-registration-file";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  getAllAccommodation: () => {
    const url = "/get-all-accommodation";
    const config = {};
    return axiosClient.get(url, config);
  },
  createRoomInfo: (params) => {
    const url = "/create-room-info";
    const config = { "Content-Type": "multipart/form-data" };
    return axiosClient.post(url, params, config);
  },
  getAllTypeRoom: (params) => {
    const url = "/get-all-type-room";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  getTypeRoomById: (params) => {
    const url = "/get-type-room-by-id";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  getAllOrderById: () => {
    const url = "/all_order";
    const config = {};
    return axiosClient.get(url, config);
  },
  getAllOrderAccommodationsById: (params) => {
    const url = "/get-all-order-accommodation-by-id";
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
};

export default userApi;
