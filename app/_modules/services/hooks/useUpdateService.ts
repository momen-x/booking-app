import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Service } from "../entity/service";
import { TUpdateService } from "../dto/update-service";
import { resService } from "../repo/resService";
import { SERVICES_KEY } from "./useGetServices";

export const useUpdateService = (): UseMutationResult<
  Service,
  Error,
  { id: string; data: TUpdateService }
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => resService.updateService(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [SERVICES_KEY],
      });
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
