import { db } from "../../../db/db.js";
import type { VoteType } from "../../../types/types.js";

export class VoteRepo {
  /**
   * Find an existing vote by a user on a specific question.
   */
  public static async findByUserAndQuestion(
    userId: string,
    questionId: string,
  ) {
    return await db.forumVote.findFirst({
      where: { userId, questionId },
    });
  }

  /**
   * Find an existing vote by a user on a specific answer.
   */
  public static async findByUserAndAnswer(userId: string, answerId: string) {
    return await db.forumVote.findFirst({
      where: { userId, answerId },
    });
  }

  /**
   * Create a new vote record.
   */
  public static async create(params: {
    userId: string;
    voteType: VoteType;
    questionId?: string | undefined;
    answerId?: string | undefined;
  }) {
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
  public static async update(id: string, voteType: VoteType) {
    return await db.forumVote.update({
      where: { id },
      data: { voteType },
    });
  }

  /**
   * Delete a vote record (used for undo).
   */
  public static async delete(id: string) {
    return await db.forumVote.delete({
      where: { id },
    });
  }
}
