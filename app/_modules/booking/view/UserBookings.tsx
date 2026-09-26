import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Booking } from "../entity/booking";
import { Clock, User, Scissors, MapPin, CalendarX2 } from "lucide-react";
import CancelBookingBtn from "./cancel-booking-btn";
import Image from "next/image";
import { defaultImage } from "@/utils/constance";

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
      <Card className="border-dashed bg-muted/20">
        <CardContent className="py-16 text-center text-muted-foreground flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <CalendarX2 className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            No bookings found
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            You don&apos;t have any appointments scheduled yet.
          </p>
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
          <Card
            key={booking.id}
            className="overflow-hidden border-border/60 hover:border-border transition-all duration-200"
          >
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row items-stretch">
                {/* Date Sidebar */}
                <div className="sm:w-28 p-4 bg-muted/40 flex sm:flex-col items-center justify-center gap-1 border-b sm:border-b-0 sm:border-r border-border/50 shrink-0">
                  <span className="text-3xl font-extrabold tracking-tight text-foreground">
                    {date.getDate()}
                  </span>
                  <div className="flex sm:flex-col items-center gap-1 sm:gap-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {date.toLocaleString("default", { month: "short" })}
                    </span>
                    <span className="text-xs text-muted-foreground/80 font-medium">
                      {date.toLocaleString("default", { weekday: "short" })}
                    </span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-5 flex flex-col justify-between gap-4">
                  {/* Top Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        #{booking.id.slice(0, 8)}
                      </span>
                      <Badge
                        variant={status.variant}
                        className="text-xs font-medium px-2.5 py-0.5"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${status.color} mr-1.5 inline-block`}
                        />
                        {status.label}
                      </Badge>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      {booking.status === "PENDING" && (
                        <>
                          <Link href={`/booking/${booking.id}/confirm`}>
                            <Button
                              size="sm"
                              className="h-8 text-xs font-medium"
                            >
                              Confirm
                            </Button>
                          </Link>
                          <CancelBookingBtn bookingId={booking.id} />
                        </>
                      )}
                      {booking.status === "CONFIRMED" && (
                        <CancelBookingBtn bookingId={booking.id} />
                      )}
                    </div>
                  </div>

                  {/* Service Details with Thumbnail */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-border/60 bg-muted">
                      <Image
                        src={
                          booking.service && booking.service.images.length > 0
                            ? booking.service.images[0]
                            : defaultImage
                        }
                        alt={booking.service.name || "Service image"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-2">
                      {/* Service Name & Price */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 truncate">
                          <Scissors className="w-4 h-4 text-muted-foreground shrink-0" />
                          <h4 className="font-semibold text-foreground text-base truncate">
                            {booking.service.name}
                          </h4>
                        </div>
                        <span className="text-sm font-semibold text-foreground shrink-0">
                          ${booking.service.price}
                        </span>
                      </div>

                      {/* Grid Metadata */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-xs text-muted-foreground">
                        {/* Time & Duration */}
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 shrink-0 text-muted-foreground/70" />
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
                            <span className="text-muted-foreground/60 ml-1">
                              ({booking.service.duration}m)
                            </span>
                          </span>
                        </div>

                        {/* Provider & Location */}
                        <div className="flex items-center gap-2 truncate">
                          <User className="w-3.5 h-3.5 shrink-0 text-muted-foreground/70" />
                          <span className="font-medium text-foreground/90 truncate">
                            {booking.provider.businessName}
                          </span>
                          {booking.provider.location && (
                            <span className="text-muted-foreground/60 flex items-center gap-0.5 truncate">
                              • <MapPin className="w-3 h-3 shrink-0" />
                              {booking.provider.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer metadata */}
                  <div className="flex items-center justify-end text-[11px] text-muted-foreground/60 pt-1">
                    <span>
                      Booked on{" "}
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </span>
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
