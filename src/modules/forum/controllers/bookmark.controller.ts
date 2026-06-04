import { asyncHandler } from "../../../middlewares/error.middleware.js";
import {
  ErrorResponse,
  SuccessResponse,
} from "../../../utils/response.util.js";
import {
  toggleBookmarkSchema,
  listBookmarksSchema,
} from "../schema/bookmark.schema.js";
import { BookmarkService } from "../services/bookmark.service.js";

/**
 * POST /api/v1/forum/bookmarks
 * Toggle a bookmark on a question.
 */
export const toggleBookmark = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const validated = toggleBookmarkSchema.parse(req.body);

  const result = await BookmarkService.toggleBookmark(
    req.user.id,
    validated.questionId,
  );

  const message = result.bookmarked
    ? "Question bookmarked successfully"
    : "Bookmark removed successfully";

  return SuccessResponse(res, message, result, 200);
});

/**
 * GET /api/v1/forum/bookmarks
 * List the current user's bookmarked questions.
 */
export const listUserBookmarks = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const validated = listBookmarksSchema.parse(req.query);

  const result = await BookmarkService.listUserBookmarks(
    req.user.id,
    validated,
  );

  return SuccessResponse(
    res,
    "Bookmarks fetched successfully",
    result,
    200,
  );
});

/**
 * GET /api/v1/forum/bookmarks/status/:questionId
 * Check if a specific question is bookmarked by the current user.
 */
export const checkBookmarkStatus = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const { questionId } = req.params;

  if (!questionId) {
    return next(new ErrorResponse("Question ID is required", 400));
  }

  const result = await BookmarkService.isBookmarked(
    req.user.id,
    questionId as string,
  );

  return SuccessResponse(
    res,
    "Bookmark status fetched successfully",
    result,
    200,
  );
});
