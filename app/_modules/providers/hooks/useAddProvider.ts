import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Provider } from "../entity/provider";
import { TCreateProvider } from "../dto/add-provider";
import { resProvider } from "../repo/resProvider";
import { PROVIDERS_KEY } from "./useGetAllProviders";
import { NOTIFICATIONS_KEY } from "@/utils/constance";

export const useAddProvider = (): UseMutationResult<
  Provider,
  Error,
  TCreateProvider
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resProvider.add,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PROVIDERS_KEY, NOTIFICATIONS_KEY],
      });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
