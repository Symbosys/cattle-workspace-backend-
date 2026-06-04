import type { VoteType } from "../../../types/types.js";
export declare class VoteRepo {
    /**
     * Find an existing vote by a user on a specific question.
     */
    static findByUserAndQuestion(userId: string, questionId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        questionId: string | null;
        answerId: string | null;
        voteType: VoteType;
    } | null>;
    /**
     * Find an existing vote by a user on a specific answer.
     */
    static findByUserAndAnswer(userId: string, answerId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        questionId: string | null;
        answerId: string | null;
        voteType: VoteType;
    } | null>;
    /**
     * Create a new vote record.
     */
    static create(params: {
        userId: string;
        voteType: VoteType;
        questionId?: string | undefined;
        answerId?: string | undefined;
    }): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        questionId: string | null;
        answerId: string | null;
        voteType: VoteType;
    }>;
    /**
     * Update the voteType of an existing vote.
     */
    static update(id: string, voteType: VoteType): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        questionId: string | null;
        answerId: string | null;
        voteType: VoteType;
    }>;
    /**
     * Delete a vote record (used for undo).
     */
    static delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        questionId: string | null;
        answerId: string | null;
        voteType: VoteType;
    }>;
}
//# sourceMappingURL=vote.repo.d.ts.map