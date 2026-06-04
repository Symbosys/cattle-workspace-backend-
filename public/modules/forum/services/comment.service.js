import { ErrorResponse } from "../../../utils/response.util.js";
import { CommentRepo } from "../repo/comment.repo.js";
import { QuestionRepo } from "../repo/question.repo.js";
import { AnswerRepo } from "../repo/answer.repo.js";
export class CommentService {
    /**
     * Create a comment on a question.
     * Verifies the question exists and is not locked.
     */
    static async createQuestionComment(authorId, questionId, dto) {
        const question = await QuestionRepo.findById(questionId);
        if (!question || question.deletedAt) {
            throw new ErrorResponse("Question not found", 404);
        }
        if (question.isLocked) {
            throw new ErrorResponse("This question is locked and no longer accepts comments", 403);
        }
        return await CommentRepo.create(authorId, { questionId }, dto);
    }
    /**
     * Create a comment on an answer.
     * Verifies the answer exists and its parent question is not locked.
     */
    static async createAnswerComment(authorId, answerId, dto) {
        const answer = await AnswerRepo.findById(answerId);
        if (!answer || answer.deletedAt) {
            throw new ErrorResponse("Answer not found", 404);
        }
        if (answer.question.isLocked) {
            throw new ErrorResponse("The parent question is locked and no longer accepts comments", 403);
        }
        return await CommentRepo.create(authorId, { answerId }, dto);
    }
    /**
     * List all comments for a question.
     */
    static async listQuestionComments(questionId) {
        const question = await QuestionRepo.findById(questionId);
        if (!question || question.deletedAt) {
            throw new ErrorResponse("Question not found", 404);
        }
        return await CommentRepo.listByQuestion(questionId);
    }
    /**
     * List all comments for an answer.
     */
    static async listAnswerComments(answerId) {
        const answer = await AnswerRepo.findById(answerId);
        if (!answer || answer.deletedAt) {
            throw new ErrorResponse("Answer not found", 404);
        }
        return await CommentRepo.listByAnswer(answerId);
    }
    /**
     * Update a comment.
     * Only the original author can update.
     */
    static async updateComment(userId, commentId, dto) {
        const comment = await CommentRepo.findById(commentId);
        if (!comment) {
            throw new ErrorResponse("Comment not found", 404);
        }
        if (comment.deletedAt) {
            throw new ErrorResponse("Cannot update a deleted comment", 400);
        }
        if (comment.authorId !== userId) {
            throw new ErrorResponse("You are not authorized to update this comment", 403);
        }
        return await CommentRepo.update(commentId, dto);
    }
    /**
     * Soft-delete a comment.
     * Allowed for the original author or ADMIN users.
     */
    static async deleteComment(userId, userRole, commentId) {
        const comment = await CommentRepo.findById(commentId);
        if (!comment) {
            throw new ErrorResponse("Comment not found", 404);
        }
        if (comment.deletedAt) {
            throw new ErrorResponse("Comment is already deleted", 400);
        }
        const isAuthor = comment.authorId === userId;
        const isAdmin = userRole === "ADMIN";
        if (!isAuthor && !isAdmin) {
            throw new ErrorResponse("You are not authorized to delete this comment", 403);
        }
        await CommentRepo.softDelete(commentId);
        return { id: commentId };
    }
}
//# sourceMappingURL=comment.service.js.map