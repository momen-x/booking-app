import { TProviderRequest } from "../dto/provider-request";

export interface IProviderAPI {
  requestProvider: (data: TProviderRequest) => Promise<{ success: boolean }>;
  delete: (id: string) => Promise<void>;
}
