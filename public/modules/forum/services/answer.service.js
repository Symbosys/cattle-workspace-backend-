import { db } from "../../../db/db.js";
import { ErrorResponse } from "../../../utils/response.util.js";
import { AnswerRepo } from "../repo/answer.repo.js";
import { QuestionRepo } from "../repo/question.repo.js";
export class AnswerService {
    /**
     * Create an answer for a question.
     * Verifies the question exists and is not locked.
     * Increments the question's answerCount in a transaction.
     */
    static async createAnswer(questionId, authorId, dto) {
        const question = await QuestionRepo.findById(questionId);
        if (!question || question.deletedAt) {
            throw new ErrorResponse("Question not found", 404);
        }
        if (question.isLocked) {
            throw new ErrorResponse("This question is locked and no longer accepts answers", 403);
        }
        // Create answer and increment answerCount in a transaction
        const answer = await db.$transaction(async (tx) => {
            const created = await tx.forumAnswer.create({
                data: {
                    questionId,
                    authorId,
                    content: dto.content,
                },
                include: {
                    author: {
                        select: { id: true, name: true, avatarUrl: true },
                    },
                },
            });
            await tx.forumQuestion.update({
                where: { id: questionId },
                data: { answerCount: { increment: 1 } },
            });
            return created;
        });
        return answer;
    }
    /**
     * List answers for a question with offset-based pagination.
     */
    static async listAnswers(questionId, query) {
        // Verify question exists
        const question = await QuestionRepo.findById(questionId);
        if (!question || question.deletedAt) {
            throw new ErrorResponse("Question not found", 404);
        }
        return await AnswerRepo.listByQuestion({
            questionId,
            page: query.page,
            limit: query.limit,
            sort: query.sort,
        });
    }
    /**
     * Update an answer.
     * Only the original author can update.
     */
    static async updateAnswer(userId, answerId, dto) {
        const answer = await AnswerRepo.findById(answerId);
        if (!answer) {
            throw new ErrorResponse("Answer not found", 404);
        }
        if (answer.deletedAt) {
            throw new ErrorResponse("Cannot update a deleted answer", 400);
        }
        if (answer.authorId !== userId) {
            throw new ErrorResponse("You are not authorized to update this answer", 403);
        }
        return await AnswerRepo.update(answerId, dto);
    }
    /**
     * Soft-delete an answer.
     * Allowed for the original author or ADMIN users.
     * Decrements the question's answerCount in a transaction.
     */
    static async deleteAnswer(userId, userRole, answerId) {
        const answer = await AnswerRepo.findById(answerId);
        if (!answer) {
            throw new ErrorResponse("Answer not found", 404);
        }
        if (answer.deletedAt) {
            throw new ErrorResponse("Answer is already deleted", 400);
        }
        const isAuthor = answer.authorId === userId;
        const isAdmin = userRole === "ADMIN";
        if (!isAuthor && !isAdmin) {
            throw new ErrorResponse("You are not authorized to delete this answer", 403);
        }
        // Soft-delete and decrement answerCount in a transaction
        await db.$transaction(async (tx) => {
            await tx.forumAnswer.update({
                where: { id: answerId },
                data: { deletedAt: new Date() },
            });
            await tx.forumQuestion.update({
                where: { id: answer.questionId },
                data: { answerCount: { decrement: 1 } },
            });
        });
        return { id: answerId };
    }
    /**
     * Accept (or toggle) an answer as the solution.
     * Only the question author can accept an answer.
     * Unsets any previously accepted answer, then marks the new one.
     * Sets question.isSolved = true.
     */
    static async acceptAnswer(userId, answerId) {
        const answer = await AnswerRepo.findById(answerId);
        if (!answer) {
            throw new ErrorResponse("Answer not found", 404);
        }
        if (answer.deletedAt) {
            throw new ErrorResponse("Cannot accept a deleted answer", 400);
        }
        // Only the question author can accept
        if (answer.question.authorId !== userId) {
            throw new ErrorResponse("Only the question author can accept an answer", 403);
        }
        await db.$transaction(async (tx) => {
            // Unset the currently accepted answer (if any)
            const currentlyAccepted = await tx.forumAnswer.findFirst({
                where: {
                    questionId: answer.questionId,
                    isAccepted: true,
                    deletedAt: null,
                },
                select: { id: true },
            });
            if (currentlyAccepted && currentlyAccepted.id !== answerId) {
                await tx.forumAnswer.update({
                    where: { id: currentlyAccepted.id },
                    data: { isAccepted: false },
                });
            }
            // If the user is toggling the same answer, unaccept it
            if (currentlyAccepted?.id === answerId) {
                await tx.forumAnswer.update({
                    where: { id: answerId },
                    data: { isAccepted: false },
                });
                await tx.forumQuestion.update({
                    where: { id: answer.questionId },
                    data: { isSolved: false },
                });
                return;
            }
            // Accept the new answer
            await tx.forumAnswer.update({
                where: { id: answerId },
                data: { isAccepted: true },
            });
            // Mark question as solved
            await tx.forumQuestion.update({
                where: { id: answer.questionId },
                data: { isSolved: true },
            });
        });
        // Return the updated answer
        return await AnswerRepo.findById(answerId);
    }
}
//# sourceMappingURL=answer.service.js.map