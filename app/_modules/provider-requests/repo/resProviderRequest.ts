import api from "@/utils/axiosInstance";
import { IProviderAPI } from "./provider-request";
import { TProviderRequest } from "../dto/provider-request";

const BASE_URL = "/api/provider-request";

export const resProviderRequest: IProviderAPI = {
  requestProvider: async (data: TProviderRequest) => {
    const formData = new FormData();

    formData.append("provideName", data.provideName);
    formData.append("IDNumber", data.IDNumber);
    formData.append("fullName", data.fullName);
    formData.append(
      "birthday",
      data.birthday instanceof Date
        ? data.birthday.toISOString()
        : String(data.birthday),
    );
    formData.append("nationality", data.nationality);
    formData.append("location", data.location);

    if (data.IDImage) {
      formData.append("IDImage", data.IDImage);
    }

    if (data.selfieIDImage) {
      formData.append("selfieIDImage", data.selfieIDImage);
    }
    if (data.Portfolio) {
      data.Portfolio.forEach((file) => {
        formData.append("Portfolio", file);
      });
    }
    const res = await api.post(`${BASE_URL}`, formData);
    return res.data;
  },
  delete: async (id: string) => {
    const res = await api.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
};

