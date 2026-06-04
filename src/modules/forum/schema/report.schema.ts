import { z } from "zod";

// ─── Create Report ───────────────────────────────────────────────────
export const createReportSchema = z.object({
  targetType: z.enum(["QUESTION", "ANSWER", "COMMENT"], {
    message: 'targetType must be "QUESTION", "ANSWER", or "COMMENT"',
  }),
  targetId: z.string().uuid("Invalid target ID"),
  reason: z
    .string()
    .trim()
    .min(10, "Reason must be at least 10 characters")
    .max(500, "Reason must be at most 500 characters"),
});

// ─── Review Report (Admin) ───────────────────────────────────────────
export const reviewReportSchema = z.object({
  status: z.enum(["RESOLVED", "DISMISSED"], {
    message: 'status must be "RESOLVED" or "DISMISSED"',
  }),
  remarks: z
    .string()
    .trim()
    .max(500, "Remarks must be at most 500 characters")
    .optional(),
});

// ─── List Reports Query (Admin) ──────────────────────────────────────
export const listReportsSchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(50).optional().default(20),
  status: z.enum(["PENDING", "RESOLVED", "DISMISSED"]).optional(),
});

// ─── DTO Types ───────────────────────────────────────────────────────
export type CreateReportDto = z.infer<typeof createReportSchema>;
export type ReviewReportDto = z.infer<typeof reviewReportSchema>;
export type ListReportsQuery = z.infer<typeof listReportsSchema>;
