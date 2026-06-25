import { TProviderRequest } from "../dto/provider-request";
import { TUpdateProviderRequestStatus } from "../dto/update-provider-request-status";
import { ProvideRequest } from "../entity/provider-request";

export interface IProviderAPI {
  requestProvider: (data: TProviderRequest) => Promise<{ success: boolean }>;
  delete: (id: string) => Promise<void>;
  getAll: () => Promise<ProvideRequest[]>;
  updateStatus: (
    id: string,
    status: TUpdateProviderRequestStatus,
  ) => Promise<ProvideRequest>;
}
