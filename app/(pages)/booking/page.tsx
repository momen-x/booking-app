import { Booking } from "@/app/_modules/booking/entity/booking";
import UserBookings from "@/app/_modules/booking/view/UserBookings";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";
import { cookies } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Booking page",
  description: "the best booking app",
};
const BookingPage = async () => {
  const cookieStore = await cookies();
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("token")?.value;
  const response = await fetch(
    `${DYNAMIC_PAGE_API_URL}/api/booking/my-bookings`,
    {
      headers: {
        Cookie: allCookies,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    },
  );
  if (!response.ok) {
    return <>some thing went wrong</>;
  }
  const bookings = (await response.json()) as Booking[];

  return (
    <div className="w-[80vw] m-auto  flex justify-center mt-4">
      <UserBookings bookings={bookings} />
    </div>
  );
};

export default BookingPage;
