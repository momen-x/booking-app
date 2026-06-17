import z from "zod";

export const updateNotificationsSchema = z.object({
  isRead: z.boolean(),
});

export type TUpdateNotifications = z.infer<typeof updateNotificationsSchema>;
