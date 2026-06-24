import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { resBooking } from "../repo/resBooking";
import { NOTIFICATIONS_KEY } from "@/utils/constance";

export const BOOKING_KEY = "booking";

export const useCancelBooking = (
  id: string,
): UseMutationResult<{ message: string }, Error, void> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => resBooking.cancel(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [BOOKING_KEY, NOTIFICATIONS_KEY],
      });
    },
    onError: (err: Error) => {
      console.error(err);
    },
  });
};
