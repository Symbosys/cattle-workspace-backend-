import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse, } from "../../../utils/response.util.js";
import { createAnswerSchema, updateAnswerSchema, listAnswersSchema, } from "../schema/answer.schema.js";
import { AnswerService } from "../services/answer.service.js";
/**
 * POST /api/v1/forum/questions/:questionId/answers
 * Create an answer for a question.
 */
export const createAnswer = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const { questionId } = req.params;
    if (!questionId) {
        return next(new ErrorResponse("Question ID is required", 400));
    }
    const validated = createAnswerSchema.parse(req.body);
    const answer = await AnswerService.createAnswer(questionId, req.user.id, validated);
    return SuccessResponse(res, "Answer posted successfully", answer, 201);
});
/**
 * GET /api/v1/forum/questions/:questionId/answers
 * List answers for a question with pagination.
 */
export const listAnswers = asyncHandler(async (req, res, next) => {
    const { questionId } = req.params;
    if (!questionId) {
        return next(new ErrorResponse("Question ID is required", 400));
    }
    const validated = listAnswersSchema.parse(req.query);
    const result = await AnswerService.listAnswers(questionId, validated);
    return SuccessResponse(res, "Answers fetched successfully", result, 200);
});
/**
 * PUT /api/v1/forum/questions/answers/:id
 * Update an answer. Author only.
 */
export const updateAnswer = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const { id } = req.params;
    if (!id) {
        return next(new ErrorResponse("Answer ID is required", 400));
    }
    const validated = updateAnswerSchema.parse(req.body);
    const answer = await AnswerService.updateAnswer(req.user.id, id, validated);
    return SuccessResponse(res, "Answer updated successfully", answer, 200);
});
/**
 * DELETE /api/v1/forum/questions/answers/:id
 * Soft-delete an answer. Author or ADMIN only.
 */
export const deleteAnswer = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const { id } = req.params;
    if (!id) {
        return next(new ErrorResponse("Answer ID is required", 400));
    }
    const result = await AnswerService.deleteAnswer(req.user.id, req.user.role, id);
    return SuccessResponse(res, "Answer deleted successfully", result, 200);
});
/**
 * PATCH /api/v1/forum/questions/answers/:id/accept
 * Accept or unaccept an answer. Question author only.
 */
export const acceptAnswer = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const { id } = req.params;
    if (!id) {
        return next(new ErrorResponse("Answer ID is required", 400));
    }
    const answer = await AnswerService.acceptAnswer(req.user.id, id);
    return SuccessResponse(res, "Answer acceptance toggled successfully", answer, 200);
});
//# sourceMappingURL=answer.controller.js.map