import { INotificationsAPI } from "./notifications";
import { TNotifications } from "../dto/add-notifications";
import { TUpdateNotifications } from "../dto/update-notifications";
import api from "@/utils/axiosInstance";
import { Notifications } from "../entity/notifications";

const BASE_URL = "/api/notifications";

export const resNotifications: INotificationsAPI = {
  add: async (userId: string, dto: TNotifications) => {
    const res = await api.post(`${BASE_URL}/${userId}`, dto);
    return res.data as Notifications;
  },
  delete: async (id: string) => {
    const res = await api.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
  get: async () => {
    const res = await api.get(BASE_URL);
    return res.data as Notifications[];
  },
  update: async ( ) => {
    const res = await api.put(`${BASE_URL}/read-all`);
    return res.data as Notifications;
  },
};
