import api from "@/utils/axiosInstance";
import { LoginData } from "../_dto/login-validation";
import {  RegisterDataAPI } from "../_dto/register-validation";
import IAuthAPI from "./auth";

const BASE_URL = "/api/auth";

export const resAuth: IAuthAPI = {
  login: async (data: LoginData) => {
    const res = await api.post(`${BASE_URL}/login`, data);
    return res.data;
  },
  register: async (data: RegisterDataAPI) => {
    const res = await api.post(`${BASE_URL}/register`, data);
    return res.data;
  },
  logout: async () => {
    const res = await api.post(`${BASE_URL}/logout`);
    return res.data;
  },

  getCurrentUser: async () => {
    const res = await api.get(`/api/users/current-user`);
    return res.data;
  },
};
