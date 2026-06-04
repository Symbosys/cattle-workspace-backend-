import { db } from "../../../db/db.js";
import { ErrorResponse } from "../../../utils/response.util.js";
import { VoteRepo } from "../repo/vote.repo.js";
import { QuestionRepo } from "../repo/question.repo.js";
import { AnswerRepo } from "../repo/answer.repo.js";
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

export class VoteService {
  /**
   * Cast, flip, or undo a vote on a question or answer.
   * All mutations happen inside a single transaction to keep voteScore consistent.
   */
  public static async castVote(userId: string, dto: CastVoteDto) {
    const { targetType, targetId, voteType } = dto;

    // 1. Verify the target exists and is not deleted
    if (targetType === "QUESTION") {
      const question = await QuestionRepo.findById(targetId);
      if (!question || question.deletedAt) {
        throw new ErrorResponse("Question not found", 404);
      }
      if (question.authorId === userId) {
        throw new ErrorResponse("You cannot vote on your own question", 403);
      }
    } else {
      const answer = await AnswerRepo.findById(targetId);
      if (!answer || answer.deletedAt) {
        throw new ErrorResponse("Answer not found", 404);
      }
      if (answer.authorId === userId) {
        throw new ErrorResponse("You cannot vote on your own answer", 403);
      }
    }

    // 2. Check for an existing vote
    const existingVote =
      targetType === "QUESTION"
        ? await VoteRepo.findByUserAndQuestion(userId, targetId)
        : await VoteRepo.findByUserAndAnswer(userId, targetId);

    // 3. Determine action and execute in a transaction
    return await db.$transaction(async (tx) => {
      let action: "voted" | "changed" | "removed";
      let scoreDelta: number;
      let resultVoteType: string | null;

      if (!existingVote) {
        // No existing vote → create new
        action = "voted";
        scoreDelta = voteType === "UPVOTE" ? 1 : -1;
        resultVoteType = voteType;

        await tx.forumVote.create({
          data: {
            userId,
            voteType,
            questionId: targetType === "QUESTION" ? targetId : null,
            answerId: targetType === "ANSWER" ? targetId : null,
          },
        });
      } else if (existingVote.voteType === voteType) {
        // Same vote type → undo (remove)
        action = "removed";
        scoreDelta = voteType === "UPVOTE" ? -1 : 1;
        resultVoteType = null;

        await tx.forumVote.delete({
          where: { id: existingVote.id },
        });
      } else {
        // Different vote type → flip
        action = "changed";
        scoreDelta = voteType === "UPVOTE" ? 2 : -2;
        resultVoteType = voteType;

        await tx.forumVote.update({
          where: { id: existingVote.id },
          data: { voteType },
        });
      }

      // 4. Update the target's voteScore
      if (targetType === "QUESTION") {
        await tx.forumQuestion.update({
          where: { id: targetId },
          data: { voteScore: { increment: scoreDelta } },
        });
      } else {
        await tx.forumAnswer.update({
          where: { id: targetId },
          data: { voteScore: { increment: scoreDelta } },
        });
      }

      // 5. Get updated voteScore
      let voteScore: number;
      if (targetType === "QUESTION") {
        const updated = await tx.forumQuestion.findUnique({
          where: { id: targetId },
          select: { voteScore: true },
        });
        voteScore = updated?.voteScore ?? 0;
      } else {
        const updated = await tx.forumAnswer.findUnique({
          where: { id: targetId },
          select: { voteScore: true },
        });
        voteScore = updated?.voteScore ?? 0;
      }

      return { action, voteType: resultVoteType, voteScore };
    });
  }

  /**
   * Get the current user's vote status on a target.
   * Returns the voteType or null if the user hasn't voted.
   */
  public static async getUserVoteStatus(
    userId: string,
    query: VoteStatusQuery,
  ) {
    const { targetType, targetId } = query;

    const vote =
      targetType === "QUESTION"
        ? await VoteRepo.findByUserAndQuestion(userId, targetId)
        : await VoteRepo.findByUserAndAnswer(userId, targetId);

    return {
      hasVoted: vote !== null,
      voteType: vote?.voteType ?? null,
    };
  }
}
