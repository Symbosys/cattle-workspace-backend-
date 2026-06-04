import { z } from "zod";

// ─── Cast Vote ───────────────────────────────────────────────────────
export const castVoteSchema = z.object({
  targetType: z.enum(["QUESTION", "ANSWER"], {
    message: 'targetType must be "QUESTION" or "ANSWER"',
  }),
  targetId: z.string().uuid("Invalid target ID"),
  voteType: z.enum(["UPVOTE", "DOWNVOTE"], {
    message: 'voteType must be "UPVOTE" or "DOWNVOTE"',
  }),
});

// ─── Vote Status Query ──────────────────────────────────────────────
export const voteStatusSchema = z.object({
  targetType: z.enum(["QUESTION", "ANSWER"]),
  targetId: z.string().uuid("Invalid target ID"),
});

// ─── DTO Types ───────────────────────────────────────────────────────
export type CastVoteDto = z.infer<typeof castVoteSchema>;
export type VoteStatusQuery = z.infer<typeof voteStatusSchema>;
