"use client";

import Loading from "@/app/loading";
import { useGetUserBookings } from "../hooks/useGetUserBookings";
import UserBookings from "./UserBookings";

const GetAndDisplayUserBookings = () => {
  const { data: bookings, isLoading } = useGetUserBookings();
  if (isLoading) return <Loading />;
  if (!bookings)
    return <div className="text-center text-2xl font-bold text-muted-foreground">No bookings found</div>;
  return (
    <div>
      {" "}
      <div className="w-[80vw] m-auto  flex justify-center mt-4">
        <UserBookings bookings={bookings} />
      </div>
    </div>
  );
};

export default GetAndDisplayUserBookings;
