import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { resProviderRequest } from "../repo/resProviderRequest";
import { ProvideRequest } from "../entity/provider-request";
import { TUpdateProviderRequestStatus } from "../dto/update-provider-request-status";
import { PROVIDER_REQUEST_KEY } from "./useGetProvidersRequest";

export const useUpdateProviderRequestStatus = (): UseMutationResult<
  ProvideRequest,
  Error,
  { id: string; dto: TUpdateProviderRequestStatus }
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dto }) => resProviderRequest.updateStatus(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROVIDER_REQUEST_KEY] });
    },
  });
};
