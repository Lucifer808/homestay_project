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
  customerAccommodationAndRoomDetail: (params) => {
    const url = `/accommodation_and_room`;
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  customerRoomDetailById: (params) => {
    const url = `/room_detail`;
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  customerGetStripeKey: () => {
    const url = `/stripeapikey`;
    const config = {};
    return axiosClient.get(url, config);
  },
  customerProcessPayment: (params) => {
    const url = `/payment/process`;
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  customerComfirmOrder: (params) => {
    const url = `/confirm_order`;
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
  customerNewOrder: (params) => {
    const url = `/order_new`;
    const config = { "Content-Type": "application/json" };
    return axiosClient.post(url, params, config);
  },
};
export default customerApi;
