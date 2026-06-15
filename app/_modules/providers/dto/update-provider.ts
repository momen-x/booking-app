import z from "zod";

export const UpdateProviderSchema = z.object({
  businessName: z
    .string()
    .min(5, "Business name must be at lest 5 characters")
    .optional(),
  location: z
    .string()
    .min(5, "Location must be at lest 5 characters")
    .optional()
    .nullable(),
  description: z
    .string()
    .min(5, "Description must be at lest 5 characters")
    .optional()
    .nullable(),
});

export type TUpdateProvider = z.infer<typeof UpdateProviderSchema>;
