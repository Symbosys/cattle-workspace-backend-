import { z } from "zod";

// ─── Toggle Bookmark ─────────────────────────────────────────────────
export const toggleBookmarkSchema = z.object({
  questionId: z.string().uuid("Invalid question ID"),
});

// ─── List Bookmarks Query ────────────────────────────────────────────
export const listBookmarksSchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(50).optional().default(20),
});

// ─── DTO Types ───────────────────────────────────────────────────────
export type ToggleBookmarkDto = z.infer<typeof toggleBookmarkSchema>;
export type ListBookmarksQuery = z.infer<typeof listBookmarksSchema>;
