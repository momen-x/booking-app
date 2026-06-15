import api from "@/utils/axiosInstance";
import {
  TUpdatePassword,
  TUpdateUsername,
  TUploadUserImage,
} from "../dto/update-userprofile";
import IUserAPI from "./user";
import { User } from "../entity/user";

const BASE_URL = "/api/users";

const resUserAPI: IUserAPI = {
  uploadImage: async (dto: TUploadUserImage) => {
    const formData = new FormData();
    if (dto.user_image) formData.append("user_image", dto.user_image);

    const user = (await api.post(`${BASE_URL}/upload-image`, formData)) as User;
    return user;
  },
  deleteUserImage: async () => {
    const user = (await api.delete(`${BASE_URL}/delete-image`)) as User;
    return user;
  },
  updateUsername: async (dto: TUpdateUsername) => {
    const user = (await api.put(`${BASE_URL}/update-username`, dto)) as User;
    return user;
  },
  updatePassword: async (dto: TUpdatePassword) => {
    const user = (await api.put(`${BASE_URL}/update-password`, dto)) as User;
    return user;
  },
  getCurrentUser: async () => {
    const user = await api.get(`${BASE_URL}/current-user`);
    return user.data;
  },
};

export default resUserAPI;
