import { TCreateBooking } from "../dto/add-booking";
import { Booking } from "../entity/booking";
import { AvailableTimes } from "../entity/available-times";

interface IBookingAPI {
  getAvailableTimes: (providerId: string, date?: string) => Promise<AvailableTimes>;
  create: (dto: TCreateBooking) => Promise<Booking>;
  getAll: () => Promise<Booking[]>;
  cancel: (id: string) => Promise<{ message: string }>;
}
export default IBookingAPI;
