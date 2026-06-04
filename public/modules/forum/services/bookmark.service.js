import { ErrorResponse } from "../../../utils/response.util.js";
import { BookmarkRepo } from "../repo/bookmark.repo.js";
import { QuestionRepo } from "../repo/question.repo.js";
export class BookmarkService {
    /**
     * Toggle a bookmark on a question.
     * If already bookmarked → removes it. If not → creates it.
     */
    static async toggleBookmark(userId, questionId) {
        // Verify question exists and is not deleted
        const question = await QuestionRepo.findById(questionId);
        if (!question || question.deletedAt) {
            throw new ErrorResponse("Question not found", 404);
        }
        // Check for existing bookmark
        const existing = await BookmarkRepo.findByUserAndQuestion(userId, questionId);
        if (existing) {
            // Already bookmarked → remove
            await BookmarkRepo.delete(existing.id);
            return { bookmarked: false, questionId };
        }
        // Not bookmarked → create
        await BookmarkRepo.create(userId, questionId);
        return { bookmarked: true, questionId };
    }
    /**
     * List the current user's bookmarked questions with pagination.
     */
    static async listUserBookmarks(userId, query) {
        return await BookmarkRepo.listByUser(userId, query.page, query.limit);
    }
    /**
     * Check if a specific question is bookmarked by the user.
     */
    static async isBookmarked(userId, questionId) {
        const bookmarked = await BookmarkRepo.isBookmarked(userId, questionId);
        return { bookmarked, questionId };
    }
}
//# sourceMappingURL=bookmark.service.js.map