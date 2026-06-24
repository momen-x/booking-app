import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Service } from "../entity/service";
import { TService } from "../dto/add-service";
import { resService } from "../repo/resService";
import { SERVICES_KEY } from "./useGetServices";
import { NOTIFICATIONS_KEY } from "@/utils/constance";

export const useAddService = (): UseMutationResult<
  Service,
  Error,
  TService
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resService.addService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [SERVICES_KEY, NOTIFICATIONS_KEY],
      });
    },
    onError: (err: Error) => {
      console.error(err);
    },
  });
};
