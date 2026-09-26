export interface AvailableTimes {
  date: string;
  dayOfWeek: number;
  timezone: string;
  availableTimes: { startTime: string; endTime: string }[];
}
