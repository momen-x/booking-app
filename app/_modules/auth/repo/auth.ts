import { User } from "../../users/entity/user";
import { LoginData } from "../_dto/login-validation";
// import { TProviderRequest } from "../_dto/provider-request";
import { RegisterDataAPI } from "../_dto/register-validation";

interface IAuthAPI {
  login: (data: LoginData) => Promise<{ success: boolean }>;
  register: (data: RegisterDataAPI) => Promise<{ success: boolean }>;
  logout: () => Promise<{ success: boolean }>;
  //   requestProvider: (data: TProviderRequest) => Promise<{ success: boolean }>;
  getCurrentUser: () => Promise<User>;
}

export default IAuthAPI;
