import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { resPayment } from "../repo/resPayment";
import { InitiatePaymentResponse } from "../dto/initiate-payment";

export const useInitiatePayment = (): UseMutationResult<
  InitiatePaymentResponse,
  Error,
  string // bookingId
> => {
  return useMutation({
    mutationFn: (bookingId: string) => resPayment.initiate(bookingId),
    onError: (err: Error) => {
      console.error(err);
    },
  });
};
