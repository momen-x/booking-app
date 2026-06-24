import AuthGuard from "@/app/_modules/guards/AuthGuard";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Booking",
  description: "The Best Booking App",
};

const BookingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    }>
      <AuthGuard>{children}</AuthGuard>
    </Suspense>
  );
};

export default BookingLayout;