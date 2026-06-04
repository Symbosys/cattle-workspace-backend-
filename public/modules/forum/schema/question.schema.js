import { z } from "zod";
// ─── Create ──────────────────────────────────────────────────────────
export const createQuestionSchema = z.object({
    title: z
        .string()
        .trim()
        .min(5, "Title must be at least 5 characters")
        .max(200, "Title must be at most 200 characters"),
    content: z
        .string()
        .trim()
        .min(20, "Content must be at least 20 characters"),
    tags: z
        .array(z
        .string()
        .trim()
        .max(30, "Each tag must be at most 30 characters")
        .transform((t) => t.toLowerCase()))
        .max(5, "You can add a maximum of 5 tags")
        .optional()
        .default([]),
});
// ─── Update ──────────────────────────────────────────────────────────
export const updateQuestionSchema = z.object({
    title: z
        .string()
        .trim()
        .min(5, "Title must be at least 5 characters")
        .max(200, "Title must be at most 200 characters")
        .optional(),
    content: z
        .string()
        .trim()
        .min(20, "Content must be at least 20 characters")
        .optional(),
    tags: z
        .array(z
        .string()
        .trim()
        .max(30, "Each tag must be at most 30 characters")
        .transform((t) => t.toLowerCase()))
        .max(5, "You can add a maximum of 5 tags")
        .optional(),
});
// ─── List Query ──────────────────────────────────────────────────────
export const listQuestionsSchema = z.object({
    cursor: z.string().uuid().optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(50)
        .optional()
        .default(20),
    tag: z.string().trim().optional(),
    search: z.string().trim().optional(),
    sort: z
        .enum(["recent", "votes", "unanswered"])
        .optional()
        .default("recent"),
});
//# sourceMappingURL=question.schema.js.map