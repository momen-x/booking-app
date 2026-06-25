import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Booking } from "../entity/booking";
import { TCreateBooking } from "../dto/add-booking";
import { resBooking } from "../repo/resBooking";
import { NOTIFICATIONS_KEY } from "@/utils/constance";

export const BOOKING_KEY = "bookings";

export const useAddBooking = (): UseMutationResult<
  Booking,
  Error,
  TCreateBooking
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resBooking.create,
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
