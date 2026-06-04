import { z } from "zod";
export declare const castVoteSchema: z.ZodObject<{
    targetType: z.ZodEnum<{
        QUESTION: "QUESTION";
        ANSWER: "ANSWER";
    }>;
    targetId: z.ZodString;
    voteType: z.ZodEnum<{
        UPVOTE: "UPVOTE";
        DOWNVOTE: "DOWNVOTE";
    }>;
}, z.core.$strip>;
export declare const voteStatusSchema: z.ZodObject<{
    targetType: z.ZodEnum<{
        QUESTION: "QUESTION";
        ANSWER: "ANSWER";
    }>;
    targetId: z.ZodString;
}, z.core.$strip>;
export type CastVoteDto = z.infer<typeof castVoteSchema>;
export type VoteStatusQuery = z.infer<typeof voteStatusSchema>;
//# sourceMappingURL=vote.schema.d.ts.map