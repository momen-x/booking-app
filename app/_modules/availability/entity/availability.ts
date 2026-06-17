export interface Availability {
  id: string;
  providerId: string;
  dayOfWeek: number;
  startTime: number;
  endTime: number;
  createdAt: Date;
  updatedAt: Date;
}
