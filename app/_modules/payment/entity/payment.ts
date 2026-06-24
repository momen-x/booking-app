export interface Payment {
  id: string;
  status: "PENDING" | "SUCCESS" | "FAILED" | "REFUNDED";
  amount: number;
  provider: string;
  bookingId: string;
  createdAt: Date;
  updatedAt: Date;
}
