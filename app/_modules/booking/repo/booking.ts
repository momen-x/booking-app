import { TCreateBooking } from "../dto/add-booking";
import { Booking } from "../entity/booking";

interface IBookingAPI {
  create: (dto: TCreateBooking) => Promise<Booking>;
  getAll: () => Promise<Booking>;
  cancel: (id: string) => Promise<{ message: string }>;
}
export default IBookingAPI;
