import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Provider } from "../entity/provider";
import { TUpdateProvider } from "../dto/update-provider";
import { resProvider } from "../repo/resProvider";
import { PROVIDERS_KEY } from "./useGetAllProviders";

export const useUpdateProvider = (
  id?: string,
): UseMutationResult<Provider, Error, TUpdateProvider> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: TUpdateProvider) => resProvider.update(dto, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROVIDERS_KEY] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
