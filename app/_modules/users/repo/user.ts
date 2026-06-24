import { TUpdateUserPassword } from "../dto/admin/update-user-password";
import { TUpdatePassword, TUpdateUsername, TUploadUserImage } from "../dto/update-userprofile";
import { User } from "../entity/user";


interface IUserAPI {
  uploadImage: (dto: TUploadUserImage) => Promise<User>;
  deleteUserImage: () => Promise<User>;
  updateUsername: (dto: TUpdateUsername) => Promise<User>;
  updatePassword: (dtp: TUpdatePassword) => Promise<User>;
  getCurrentUser: () => Promise<User>;
  deleteUser: (userId: string) => Promise<void>;
  updatePasswordByAdmin: (dto: TUpdateUserPassword) => Promise<User>;
  updateUsernameByAdmin: (id: string, username: string) => Promise<User>;
  
}

export default IUserAPI;
