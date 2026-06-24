import { Payment } from "../entity/payment";
import { InitiatePaymentResponse } from "../dto/initiate-payment";

export default interface IPaymentAPI {
  initiate: (bookingId: string) => Promise<InitiatePaymentResponse>;
  getByBookingId: (bookingId: string) => Promise<Payment>;
}