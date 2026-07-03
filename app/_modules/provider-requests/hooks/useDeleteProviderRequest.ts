import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { resProviderRequest } from "../repo/resProviderRequest";
import { PROVIDER_REQUEST_KEY } from "./useGetProvidersRequest";

export const useDeleteProviderRequest = (
  id: string,
): UseMutationResult<void, Error, void> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      if (!id) {
        return Promise.reject(
          new Error("Provider ID is required for deletion"),
        );
      }
      return resProviderRequest.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROVIDER_REQUEST_KEY, id] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
