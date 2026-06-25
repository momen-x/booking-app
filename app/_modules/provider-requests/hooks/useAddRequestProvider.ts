import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { TProviderRequest } from "../dto/provider-request";
import { resProviderRequest } from "../repo/resProviderRequest";
import { NOTIFICATIONS_KEY } from "@/utils/constance";

export const useAddRequestProvider = (): UseMutationResult<
  { success: boolean },
  Error,
  TProviderRequest
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resProviderRequest.requestProvider,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [NOTIFICATIONS_KEY, "provider-request"],
      });
    },
  });
};
