import { ErrorResponse } from "../../../utils/response.util.js";
import type { UserRole } from "../../../types/types.js";
import { CommentRepo } from "../repo/comment.repo.js";
import { QuestionRepo } from "../repo/question.repo.js";
import { AnswerRepo } from "../repo/answer.repo.js";
import type {
  CreateCommentDto,
  UpdateCommentDto,
} from "../schema/comment.schema.js";

export class CommentService {
  /**
   * Create a comment on a question.
   * Verifies the question exists and is not locked.
   */
  public static async createQuestionComment(
    authorId: string,
    questionId: string,
    dto: CreateCommentDto,
  ) {
    const question = await QuestionRepo.findById(questionId);

    if (!question || question.deletedAt) {
      throw new ErrorResponse("Question not found", 404);
    }

    if (question.isLocked) {
      throw new ErrorResponse(
        "This question is locked and no longer accepts comments",
        403,
      );
    }

    return await CommentRepo.create(authorId, { questionId }, dto);
  }

  /**
   * Create a comment on an answer.
   * Verifies the answer exists and its parent question is not locked.
   */
  public static async createAnswerComment(
    authorId: string,
    answerId: string,
    dto: CreateCommentDto,
  ) {
    const answer = await AnswerRepo.findById(answerId);

    if (!answer || answer.deletedAt) {
      throw new ErrorResponse("Answer not found", 404);
    }

    if (answer.question.isLocked) {
      throw new ErrorResponse(
        "The parent question is locked and no longer accepts comments",
        403,
      );
    }

    return await CommentRepo.create(authorId, { answerId }, dto);
  }

  /**
   * List all comments for a question.
   */
  public static async listQuestionComments(questionId: string) {
    const question = await QuestionRepo.findById(questionId);

    if (!question || question.deletedAt) {
      throw new ErrorResponse("Question not found", 404);
    }

    return await CommentRepo.listByQuestion(questionId);
  }

  /**
   * List all comments for an answer.
   */
  public static async listAnswerComments(answerId: string) {
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
  public static async updateComment(
    userId: string,
    commentId: string,
    dto: UpdateCommentDto,
  ) {
    const comment = await CommentRepo.findById(commentId);

    if (!comment) {
      throw new ErrorResponse("Comment not found", 404);
    }

    if (comment.deletedAt) {
      throw new ErrorResponse("Cannot update a deleted comment", 400);
    }

    if (comment.authorId !== userId) {
      throw new ErrorResponse(
        "You are not authorized to update this comment",
        403,
      );
    }

    return await CommentRepo.update(commentId, dto);
  }

  /**
   * Soft-delete a comment.
   * Allowed for the original author or ADMIN users.
   */
  public static async deleteComment(
    userId: string,
    userRole: UserRole,
    commentId: string,
  ) {
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
      throw new ErrorResponse(
        "You are not authorized to delete this comment",
        403,
      );
    }

    await CommentRepo.softDelete(commentId);

    return { id: commentId };
  }
}
