import { TUpdatePassword, TUpdateUsername, TUploadUserImage } from "../dto/update-userprofile";
import { User } from "../entity/user";


interface IUserAPI {
  uploadImage: (dto: TUploadUserImage) => Promise<User>;
  deleteUserImage: () => Promise<User>;
  updateUsername: (dto: TUpdateUsername) => Promise<User>;
  updatePassword: (dtp: TUpdatePassword) => Promise<User>;
  getCurrentUser: () => Promise<User>;
}

export default IUserAPI;
