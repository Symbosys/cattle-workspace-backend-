import { asyncHandler } from "../../../middlewares/error.middleware.js";
import {
  ErrorResponse,
  SuccessResponse,
} from "../../../utils/response.util.js";
import {
  createQuestionSchema,
  updateQuestionSchema,
  listQuestionsSchema,
} from "../schema/question.schema.js";
import { QuestionService } from "../services/question.service.js";

/**
 * POST /api/v1/forum/questions
 * Create a new forum question.
 */
export const createQuestion = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const validated = createQuestionSchema.parse(req.body);

  const question = await QuestionService.createQuestion(
    req.user.id,
    validated,
  );

  return SuccessResponse(res, "Question created successfully", question, 201);
});

/**
 * GET /api/v1/forum/questions/:slug
 * Get a single question by slug. Increments view count.
 */
export const getQuestion = asyncHandler(async (req, res, next) => {
  const { slug } = req.params;

  if (!slug) {
    return next(new ErrorResponse("Question slug is required", 400));
  }

  const question = await QuestionService.getQuestionBySlug(slug as string);

  return SuccessResponse(res, "Question fetched successfully", question, 200);
});

/**
 * GET /api/v1/forum/questions
 * List questions with cursor-based pagination, filtering, and sorting.
 */
export const listQuestions = asyncHandler(async (req, res) => {
  const validated = listQuestionsSchema.parse(req.query);

  const result = await QuestionService.listQuestions(validated);

  return SuccessResponse(res, "Questions fetched successfully", result, 200);
});

/**
 * PUT /api/v1/forum/questions/:id
 * Update a question. Only the original author can update.
 */
export const updateQuestion = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const { id } = req.params;

  if (!id) {
    return next(new ErrorResponse("Question ID is required", 400));
  }

  const validated = updateQuestionSchema.parse(req.body);

  const question = await QuestionService.updateQuestion(
    req.user.id,
    id as string,
    validated,
  );

  return SuccessResponse(res, "Question updated successfully", question, 200);
});

/**
 * DELETE /api/v1/forum/questions/:id
 * Soft-delete a question. Author or ADMIN only.
 */
export const deleteQuestion = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const { id } = req.params;

  if (!id) {
    return next(new ErrorResponse("Question ID is required", 400));
  }

  const result = await QuestionService.deleteQuestion(
    req.user.id,
    req.user.role,
    id as string,
  );

  return SuccessResponse(res, "Question deleted successfully", result, 200);
});
