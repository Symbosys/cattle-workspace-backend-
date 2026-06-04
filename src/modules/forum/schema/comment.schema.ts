import { z } from "zod";

// ─── Create ──────────────────────────────────────────────────────────
export const createCommentSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Comment cannot be empty")
    .max(1000, "Comment must be at most 1000 characters"),
});

// ─── Update ──────────────────────────────────────────────────────────
export const updateCommentSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Comment cannot be empty")
    .max(1000, "Comment must be at most 1000 characters")
    .optional(),
});

// ─── DTO Types ───────────────────────────────────────────────────────
export type CreateCommentDto = z.infer<typeof createCommentSchema>;
export type UpdateCommentDto = z.infer<typeof updateCommentSchema>;
