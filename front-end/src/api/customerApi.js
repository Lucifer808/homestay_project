import axiosClient from "./axiosClient";
const customerApi = {
  customerSearch: (params) => {
    const url = `/search${params}`;
    const config = {};
    return axiosClient.get(url, config);
  },
  customerRoomDetail: (params) => {
    const url = `/roomdetail/${params}`;
    const config = {};
    return axiosClient.get(url, config);
  },
};
export default customerApi;
