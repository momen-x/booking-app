import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { SquarePen, Clock } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import getDayOfWeek from "../utils/getDayOfWeek";
import numberToTime from "../utils/getStartAndEndTime";
import { Availability } from "../entity/availability";
import transformingTheDateToATextString from "@/utils/transformingTheDateToATextString";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";

const AvailableTable = async () => {
  const cookieStore = await cookies();
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("token")?.value;
  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/availability`, {
    headers: {
      Cookie: allCookies,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!response.ok) {
    return <>something went wrong</>;
  }

  const availability = (await response.json()) as Availability[];

  // Group availability by day of week
  const groupedByDay = availability.reduce(
    (acc, item) => {
      if (!acc[item.dayOfWeek]) {
        acc[item.dayOfWeek] = [];
      }
      acc[item.dayOfWeek].push(item);
      return acc;
    },
    {} as Record<number, Availability[]>,
  );

  // Sort days from Saturday (6) to Friday (5)
  const dayOrder = [6, 0, 1, 2, 3, 4, 5]; // Saturday to Friday
  const sortedDays = Object.keys(groupedByDay)
    .map(Number)
    .sort((a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b));

  // Sort time slots for each day
  sortedDays.forEach((day) => {
    groupedByDay[day].sort((a, b) => a.startTime - b.startTime);
  });

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-muted/30">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Availability
            </h2>
            <p className="text-sm text-muted-foreground">Weekly schedule</p>
          </div>
          <Badge variant="outline" className="gap-1">
            {availability.length} Total Slots
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-48 font-semibold">Day</TableHead>
                <TableHead className="font-semibold">Available Times</TableHead>
                <TableHead className="font-semibold">Created</TableHead>
                <TableHead className="text-center font-semibold w-32">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {sortedDays.map((day) => {
                const daySlots = groupedByDay[day];
                const firstSlot = daySlots[0];

                return (
                  <TableRow
                    key={day}
                    className="border-b transition-colors hover:bg-muted/30"
                  >
                    <TableCell className="font-medium align-top py-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span className="font-semibold">
                          {getDayOfWeek(day)}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="py-4">
                      <div className="space-y-1">
                        {daySlots.map((slot, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-sm"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-primary/60"></span>
                            <span>
                              {transformingTheDateToATextString(
                                numberToTime(slot.startTime),
                              )}
                              {" - "}
                              {transformingTheDateToATextString(
                                numberToTime(slot.endTime),
                              )}
                            </span>
                            {index < daySlots.length - 1 && (
                              <span className="text-muted-foreground text-xs">
                                •
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </TableCell>

                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span className="text-sm">
                          {transformingTheDateToATextString(
                            firstSlot.createdAt,
                          )}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="py-4">
                      <div className="flex items-center justify-center gap-1">
                        <Link
                          href={`/provider-dashboard//availability/${firstSlot.id}/update`}
                        >
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-9 w-9 text-sky-600 hover:text-sky-700 hover:bg-sky-50 dark:hover:bg-sky-950/50"
                          >
                            <SquarePen className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AvailableTable;
