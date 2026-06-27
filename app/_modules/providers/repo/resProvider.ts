import api from "@/utils/axiosInstance";
import IProviderAPI from "./provider";
import { TUpdateProvider } from "../dto/update-provider";
import { TCreateProvider } from "../dto/add-provider";

const BASE_URL = "/api/providers";
export const resProvider: IProviderAPI = {
  add: async (dto: TCreateProvider, providerRequestId?: string) => {
    const res = await api.post(`${BASE_URL}?provider-request=${providerRequestId}`, {
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
  getCurrentProvider: async () => {
    const res = await api.get(`${BASE_URL}/current-provider`);
    return res.data;
  },
};
