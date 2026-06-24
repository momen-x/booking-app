import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { resAvailability } from "../repo/resAvailability";
import { Availability } from "../entity/availability";
import { TUpdateAvailability } from "../dto/update-availability";

export const useUpdateAvailability = (): UseMutationResult<
  Availability,
  Error,
  { id: string; dto: TUpdateAvailability }
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dto }) => resAvailability.update(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["availability"] });
    },
  });
};
