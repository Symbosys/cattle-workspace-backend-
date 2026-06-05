import { z } from "zod";

export const createDoctorReviewSchema = z.object({
  appointmentId: z.string().uuid("Invalid appointment ID"),
  rating: z.preprocess(
    (val) => Number(val),
    z.number().int().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5")
  ),
  comment: z.string().trim().nullable().optional(),
});

export const getDoctorReviewsQuerySchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(50).optional().default(10),
});

export type CreateDoctorReviewDto = z.infer<typeof createDoctorReviewSchema>;
