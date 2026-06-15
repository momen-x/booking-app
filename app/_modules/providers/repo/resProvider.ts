import api from "@/utils/axiosInstance";
import IProviderAPI from "./provider";
import { TUpdateProvider } from "../dto/update-provider";

const BASE_URL = "/api/providers";
export const resProvider: IProviderAPI = {
  add: async (dto) => {
    const res = await api.post(`${BASE_URL}/add`, {
      ...dto,
    });
    return res.data;
  },
  update: async (dto: TUpdateProvider, userId?: string) => {
    const res = await api.put(`${BASE_URL}/${userId?.trim()}`, dto);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`${BASE_URL}/delete/${id}`);
    return res.data;
  },
  getAll: async () => {
    const res = await api.get(`${BASE_URL}/all`);
    return res.data;
  },
  getById: async (id) => {
    const res = await api.get(`${BASE_URL}/${id}`);
    return res.data;
  },
};
