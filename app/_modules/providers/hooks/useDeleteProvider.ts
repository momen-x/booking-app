import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { resProvider } from "../repo/resProvider";
import { PROVIDERS_KEY } from "./useGetAllProviders";

export const useDeleteProvider = (
  id?: string,
): UseMutationResult<{ success: boolean }, Error, void> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      if (!id) {
        return Promise.reject(
          new Error("Provider ID is required for deletion"),
        );
      }
      return resProvider.delete(id);
    },
    onSuccess: (data) => {
      console.log("success", data);
      queryClient.invalidateQueries({ queryKey: [PROVIDERS_KEY] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
