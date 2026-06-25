import { IAavailabilityAPI } from "./availability";
import { TCreateAvailability, timeToMinutes } from "../dto/create-available";
import api from "@/utils/axiosInstance";
import { API_DOMAIN } from "../../../../utils/constance";
import { TUpdateAvailability } from "../dto/update-availability";

const BASE_URL = `${API_DOMAIN}/api/availability`;

export const resAvailability: IAavailabilityAPI = {
  AddAvailable: async (data: TCreateAvailability) => {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        dayOfWeek: data.dayOfWeek,
        startTime: timeToMinutes(data.startTime),
        endTime: timeToMinutes(data.endTime),
      }),
    });

    if (!response.ok) throw await response.json();
    return response.json();
  },
  delete: async (id) => {
    const res = await api.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
  update: async (id, dto: TUpdateAvailability) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        dayOfWeek: dto.dayOfWeek,
        startTime: timeToMinutes(dto.startTime),
        endTime: timeToMinutes(dto.endTime),
      }),
    });
    if (!response.ok) throw await response.json();
    return response.json();
  },
  getAll: async () => {
    const res = await api.get(BASE_URL);
    return res.data;
  },
};
