import z from "zod";

export const notificationsSchema = z.object({
  // userId: z.string().min(1, "User ID is required"),
  title: z.string().min(1, "Title is required"),
  message: z.string().min(1, "Message is required"),
  type: z.enum(["PROVIDER_REQUEST", "BOOKING", "PAYMENT", "SYSTEM"]),
});

export type TNotifications = z.infer<typeof notificationsSchema>;
