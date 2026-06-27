import { TCreateProvider } from "../dto/add-provider";
import { TUpdateProvider } from "../dto/update-provider";
import { Provider } from "../entity/provider";

interface IProviderAPI {
  add: (dto: TCreateProvider, providerRequestId?: string) => Promise<Provider>;
  update: (dto: TUpdateProvider, userId?: string) => Promise<Provider>;
  delete: (id: string) => Promise<{ success: boolean }>;
  getAll: () => Promise<Provider[]>;
  getById: (id: string) => Promise<Provider>;
  getCurrentProvider: () => Promise<Provider>;
}
export default IProviderAPI;
