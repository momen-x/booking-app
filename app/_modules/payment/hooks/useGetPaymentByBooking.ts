import { useQuery } from "@tanstack/react-query";
import { resPayment } from "../repo/resPayment";
import { useRef } from "react";

export const PAYMENT_KEY = "payment";

// useGetPaymentByBooking.ts
export const useGetPaymentByBooking = (bookingId: string, enabled = true) => {
  const startTimeRef = useRef<number | null>(null);

  return useQuery({
    queryKey: [PAYMENT_KEY, bookingId],
    queryFn: () => resPayment.getByBookingId(bookingId),
    enabled: !!bookingId && enabled,
    refetchInterval: (query) => {
      if (query.state.data?.status === "SUCCESS") return false;
      if (query.state.data?.status === "PENDING") {
        if (!startTimeRef.current) startTimeRef.current = Date.now();
        if (Date.now() - startTimeRef.current > 30_000) return false;
        return 2000;
      }
      return false;
    },
  });
};
