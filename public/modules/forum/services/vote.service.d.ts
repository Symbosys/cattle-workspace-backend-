import type { CastVoteDto, VoteStatusQuery } from "../schema/vote.schema.js";
/**
 * Vote score adjustments for each toggle scenario.
 *
 * | Action              | Delta |
 * |---------------------|-------|
 * | New UPVOTE          | +1    |
 * | New DOWNVOTE        | -1    |
 * | Undo UPVOTE         | -1    |
 * | Undo DOWNVOTE       | +1    |
 * | Flip UP→DOWN        | -2    |
 * | Flip DOWN→UP        | +2    |
 */
export declare class VoteService {
    /**
     * Cast, flip, or undo a vote on a question or answer.
     * All mutations happen inside a single transaction to keep voteScore consistent.
     */
    static castVote(userId: string, dto: CastVoteDto): Promise<{
        action: "voted" | "changed" | "removed";
        voteType: string | null;
        voteScore: number;
    }>;
    /**
     * Get the current user's vote status on a target.
     * Returns the voteType or null if the user hasn't voted.
     */
    static getUserVoteStatus(userId: string, query: VoteStatusQuery): Promise<{
        hasVoted: boolean;
        voteType: import("../../../types/types.js").VoteType | null;
    }>;
}
//# sourceMappingURL=vote.service.d.ts.map