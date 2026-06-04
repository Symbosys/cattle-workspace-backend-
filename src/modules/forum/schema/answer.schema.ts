import { z } from "zod";

// ─── Create ──────────────────────────────────────────────────────────
export const createAnswerSchema = z.object({
  content: z
    .string()
    .trim()
    .min(20, "Answer must be at least 20 characters"),
});

// ─── Update ──────────────────────────────────────────────────────────
export const updateAnswerSchema = z.object({
  content: z
    .string()
    .trim()
    .min(20, "Answer must be at least 20 characters")
    .optional(),
});

// ─── List Query ──────────────────────────────────────────────────────
export const listAnswersSchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(50).optional().default(20),
  sort: z
    .enum(["votes", "oldest", "newest"])
    .optional()
    .default("votes"),
});

// ─── DTO Types ───────────────────────────────────────────────────────
export type CreateAnswerDto = z.infer<typeof createAnswerSchema>;
export type UpdateAnswerDto = z.infer<typeof updateAnswerSchema>;
export type ListAnswersQuery = z.infer<typeof listAnswersSchema>;
