import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { resAvailability } from "../repo/resAvailability";
import { Availability } from "../entity/availability";
import { TCreateAvailability } from "../dto/create-available";

export const useCreateAvailability = (): UseMutationResult<
  Availability,
  Error,
  TCreateAvailability
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resAvailability.AddAvailable,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["availability"] });
    },
  });
};
