import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse, } from "../../../utils/response.util.js";
import { createCommentSchema, updateCommentSchema, } from "../schema/comment.schema.js";
import { CommentService } from "../services/comment.service.js";
/**
 * POST /api/v1/forum/questions/:questionId/comments
 * Create a comment on a question.
 */
export const createQuestionComment = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const { questionId } = req.params;
    if (!questionId) {
        return next(new ErrorResponse("Question ID is required", 400));
    }
    const validated = createCommentSchema.parse(req.body);
    const comment = await CommentService.createQuestionComment(req.user.id, questionId, validated);
    return SuccessResponse(res, "Comment posted successfully", comment, 201);
});
/**
 * POST /api/v1/forum/answers/:answerId/comments
 * Create a comment on an answer.
 */
export const createAnswerComment = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const { answerId } = req.params;
    if (!answerId) {
        return next(new ErrorResponse("Answer ID is required", 400));
    }
    const validated = createCommentSchema.parse(req.body);
    const comment = await CommentService.createAnswerComment(req.user.id, answerId, validated);
    return SuccessResponse(res, "Comment posted successfully", comment, 201);
});
/**
 * GET /api/v1/forum/questions/:questionId/comments
 * List all comments on a question.
 */
export const listQuestionComments = asyncHandler(async (req, res, next) => {
    const { questionId } = req.params;
    if (!questionId) {
        return next(new ErrorResponse("Question ID is required", 400));
    }
    const comments = await CommentService.listQuestionComments(questionId);
    return SuccessResponse(res, "Comments fetched successfully", comments, 200);
});
/**
 * GET /api/v1/forum/answers/:answerId/comments
 * List all comments on an answer.
 */
export const listAnswerComments = asyncHandler(async (req, res, next) => {
    const { answerId } = req.params;
    if (!answerId) {
        return next(new ErrorResponse("Answer ID is required", 400));
    }
    const comments = await CommentService.listAnswerComments(answerId);
    return SuccessResponse(res, "Comments fetched successfully", comments, 200);
});
/**
 * PUT /api/v1/forum/comments/:id
 * Update a comment. Author only.
 */
export const updateComment = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const { id } = req.params;
    if (!id) {
        return next(new ErrorResponse("Comment ID is required", 400));
    }
    const validated = updateCommentSchema.parse(req.body);
    const comment = await CommentService.updateComment(req.user.id, id, validated);
    return SuccessResponse(res, "Comment updated successfully", comment, 200);
});
/**
 * DELETE /api/v1/forum/comments/:id
 * Soft-delete a comment. Author or ADMIN only.
 */
export const deleteComment = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const { id } = req.params;
    if (!id) {
        return next(new ErrorResponse("Comment ID is required", 400));
    }
    const result = await CommentService.deleteComment(req.user.id, req.user.role, id);
    return SuccessResponse(res, "Comment deleted successfully", result, 200);
});
//# sourceMappingURL=comment.controller.js.map