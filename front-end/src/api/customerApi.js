import axiosClient from "./axiosClient";
const customerApi = {
  customerSearch: (params) => {
    const url = `/search${params}`;
    const config = {};
    axiosClient.get(url, config);
  },
};
export default customerApi;
