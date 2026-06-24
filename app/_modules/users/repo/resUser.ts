import api from "@/utils/axiosInstance";
import {
  TUpdatePassword,
  TUpdateUsername,
  TUploadUserImage,
} from "../dto/update-userprofile";
import IUserAPI from "./user";
import { User } from "../entity/user";
import { TUpdateUserPassword } from "../dto/admin/update-user-password";

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
  deleteUser: async (userId: string) => {
    await api.delete(`${BASE_URL}/${userId}`);
  },
   updatePasswordByAdmin: async (dto: TUpdateUserPassword) => {
    const updateUser = await api.put(`${BASE_URL}/admin/password`, dto);
    return updateUser.data as User;
  },
  updateUsernameByAdmin: async (id: string, username: string) => {
    const updateUser = await api.put(`${BASE_URL}/${id}/username`, {
      username,
    });
    return updateUser.data as User;
  },
};

export default resUserAPI;
