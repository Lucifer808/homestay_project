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
};

export default userApi;
