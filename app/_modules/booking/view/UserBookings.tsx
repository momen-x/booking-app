import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Booking } from "../entity/booking";
import { Clock, User, Scissors, MapPin } from "lucide-react";
import CancelBookingBtn from "./cancel-booking-btn";

const statusConfig = {
  PENDING: {
    variant: "secondary" as const,
    color: "bg-amber-500",
    label: "Pending",
  },
  CONFIRMED: {
    variant: "default" as const,
    color: "bg-emerald-500",
    label: "Confirmed",
  },
  CANCELLED: {
    variant: "destructive" as const,
    color: "bg-red-500",
    label: "Cancelled",
  },
};

interface UserBookingsProps {
  bookings: Booking[];
}

const UserBookings = ({ bookings }: UserBookingsProps) => {
  if (!bookings.length) {
    return (
      <Card className="border-dashed">
        <CardContent className="py-12 text-center text-muted-foreground">
          <div className="text-4xl mb-3">📅</div>
          <p>No bookings found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => {
        const status = statusConfig[booking.status];
        const date = new Date(booking.date);
        const start = new Date(booking.startTime);
        const end = new Date(booking.endTime);

        return (
          <Card key={booking.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Date Sidebar */}
                <div className="md:w-24 p-4 bg-muted/30 flex md:flex-col items-center md:justify-center gap-1 border-b md:border-b-0 md:border-r">
                  <span className="text-2xl font-bold">{date.getDate()}</span>
                  <span className="text-sm font-medium uppercase text-muted-foreground">
                    {date.toLocaleString("default", { month: "short" })}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {date.toLocaleString("default", { weekday: "short" })}
                  </span>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">
                        #{booking.id.slice(0, 8)}
                      </span>
                      <Badge variant={status.variant} className="text-xs">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${status.color} mr-1 inline-block`}
                        />
                        {status.label}
                      </Badge>
                    </div>
                    {booking.status === "PENDING" && (
                      <div className="flex items-center gap-2">
                        <Link href={`/booking/${booking.id}/confirm`}>
                          <Button size="sm">Confirm</Button>
                        </Link>
                        <CancelBookingBtn bookingId={booking.id} />
                      </div>
                    )}
                    {booking.status === "CONFIRMED" && (
                      <CancelBookingBtn bookingId={booking.id} />
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>
                        {start.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}{" "}
                        -{" "}
                        {end.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Scissors className="w-4 h-4 shrink-0" />
                      <span className="font-medium text-foreground">
                        {booking.service.name}
                      </span>
                      <span className="text-muted-foreground/60 text-xs">
                        ({booking.service.duration}m · ${booking.service.price})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="w-4 h-4 shrink-0" />
                      <span className="font-medium text-foreground">
                        {booking.provider.businessName}
                      </span>
                      {booking.provider.location && (
                        <span className="text-muted-foreground/60 text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />{" "}
                          {booking.provider.location}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground sm:justify-end">
                      <span className="text-xs text-muted-foreground/60">
                        Booked{" "}
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default UserBookings;
