import { Booking } from "@/app/_modules/booking/entity/booking";
import UserBookings from "@/app/_modules/booking/view/UserBookings";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";
import { cookies, headers } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Booking page",
  description: "the best booking app",
};
export const dynamic = "force-dynamic";
const BookingPage = async () => {
  const cookieStore = await cookies();
  const headersList = await headers();

  console.log("HOST:", headersList.get("host"));
  console.log("COOKIE HEADER:");
  console.log(headersList.get("cookie"));

  console.log("ACCESS TOKEN:");
  console.log(cookieStore.get("access_token"));
  console.log("HOST:", process.env.VERCEL_URL);
  console.log(
    cookieStore.getAll().map((cookie) => ({
      name: cookie.name,
      value: cookie.value.substring(0, 10),
    })),
  );
  console.log(
    "cookies:",
    cookieStore.getAll().map((c) => c.name),
  );
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("access_token")?.value;

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
    console.log("the response is :", await response.json());
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
