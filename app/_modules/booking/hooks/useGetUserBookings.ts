import { useQuery } from "@tanstack/react-query";
import { resBooking } from "../repo/resBooking";
import { BOOKING_KEY } from "./useAddBooking";
export const useGetUserBookings = () => {
  return useQuery({
    queryKey: [BOOKING_KEY],
    queryFn: resBooking.getAll,
  });
};
