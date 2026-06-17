export interface Notifications {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "PROVIDER_REQUEST" | "BOOKING" | "PAYMENT" | "SYSTEM";
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}
