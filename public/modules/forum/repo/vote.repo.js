import { db } from "../../../db/db.js";
export class VoteRepo {
    /**
     * Find an existing vote by a user on a specific question.
     */
    static async findByUserAndQuestion(userId, questionId) {
        return await db.forumVote.findFirst({
            where: { userId, questionId },
        });
    }
    /**
     * Find an existing vote by a user on a specific answer.
     */
    static async findByUserAndAnswer(userId, answerId) {
        return await db.forumVote.findFirst({
            where: { userId, answerId },
        });
    }
    /**
     * Create a new vote record.
     */
    static async create(params) {
        return await db.forumVote.create({
            data: {
                userId: params.userId,
                voteType: params.voteType,
                questionId: params.questionId ?? null,
                answerId: params.answerId ?? null,
            },
        });
    }
    /**
     * Update the voteType of an existing vote.
     */
    static async update(id, voteType) {
        return await db.forumVote.update({
            where: { id },
            data: { voteType },
        });
    }
    /**
     * Delete a vote record (used for undo).
     */
    static async delete(id) {
        return await db.forumVote.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=vote.repo.js.map