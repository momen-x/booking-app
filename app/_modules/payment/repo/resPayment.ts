import api from "@/utils/axiosInstance";
import IPaymentAPI from "./payment";

const BASE_URL = "/api/payments";

export const resPayment: IPaymentAPI = {
  initiate: async (bookingId: string) => {
    const res = await api.post(`${BASE_URL}/initiate/${bookingId}`);
    return res.data;
  },
  getByBookingId: async (bookingId: string) => {
    const res = await api.get(`${BASE_URL}/booking/${bookingId}`);
    return res.data;
  },
};
