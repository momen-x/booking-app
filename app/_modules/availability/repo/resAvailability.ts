import { IAavailabilityAPI } from "./availability";
import { TCreateAvailability } from "../dto/create-available";
import api from "@/utils/axiosInstance";

const BASE_URL = "/api/availability";

export const resAvailability: IAavailabilityAPI = {
  AddAvailable: async (dto: TCreateAvailability) => {
    const res = await api.post(BASE_URL, dto);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
};
