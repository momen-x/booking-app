import { Metadata } from "next";
import GetAndDisplayUserBookings from "@/app/_modules/booking/view/get-and-display-user-bookings";

export const metadata: Metadata = {
  title: "Your Booking page",
  description: "the best booking app",
};
export const dynamic = "force-dynamic";
const BookingPage = async () => {
  return (
    <div className="w-[80vw] m-auto  flex justify-center mt-4">
      <GetAndDisplayUserBookings />
    </div>
  );
};

export default BookingPage;
