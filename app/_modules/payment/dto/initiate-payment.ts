import { z } from "zod";

export const initiatePaymentSchema = z.object({
  bookingId: z.string(),
});

export type TInitiatePayment = z.infer<typeof initiatePaymentSchema>;

export interface InitiatePaymentResponse {
  clientSecret: string;
  paymentIntentId: string;
}