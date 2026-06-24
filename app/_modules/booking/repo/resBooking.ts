import api from "@/utils/axiosInstance";
import { minutesToISOString, TCreateBooking } from "../dto/add-booking";
import IBookingAPI from "./booking";

const BASE_URL = "/api/booking";

export const resBooking: IBookingAPI = {
  create: async (dto: TCreateBooking) => {
    const { providerId, serviceId, date, startTime } = dto;
    const res = await api.post(BASE_URL, {
      providerId,
      serviceId,
      date, // string is fine
      startTime: minutesToISOString(startTime, date), // number (e.g. 540)
    });
    return res.data;
  },
  getAll: async () => {
    const res = await api.get(`${BASE_URL}/my-bookings`);
    return res.data;
  },
  cancel: async (id: string) => {
    const res = await api.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
};
