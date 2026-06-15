import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Provider } from "../entity/provider";
import { TCreateProvider } from "../dto/add-provider";
import { resProvider } from "../repo/resProvider";
import { PROVIDERS_KEY } from "./useGetAllProviders";

export const useAddProvider = (): UseMutationResult<
  Provider,
  Error,
  TCreateProvider
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resProvider.add,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: [PROVIDERS_KEY] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
