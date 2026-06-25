import z from "zod";

export type TProviderRequestStatus = "PENDING" | "APPROVED" | "REJECTED";

export const updateProviderRequestStatusSchema = z.object({
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
});

export type TUpdateProviderRequestStatus = z.infer<
  typeof updateProviderRequestStatusSchema
>;
