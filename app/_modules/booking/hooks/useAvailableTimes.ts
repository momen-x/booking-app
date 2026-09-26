import { useQuery } from "@tanstack/react-query";
import { resBooking } from "../repo/resBooking";

export const AVAILABLE_TIMES_KEY = "available-times";

export function useAvailableTimes(providerId: string, date?: string) {
  return useQuery({
    queryKey: [AVAILABLE_TIMES_KEY, providerId, date],
    queryFn: () => resBooking.getAvailableTimes(providerId, date),
    enabled: Boolean(providerId) && date !== "",
  });
}
