import { db } from "../../../db/db.js";
/**
 * Author fields included in bookmark question details.
 */
const QUESTION_INCLUDE = {
    author: {
        select: {
            id: true,
            name: true,
            avatarUrl: true,
        },
    },
};
export class BookmarkRepo {
    /**
     * Find an existing bookmark by user and question.
     */
    static async findByUserAndQuestion(userId, questionId) {
        return await db.forumBookmark.findFirst({
            where: { userId, questionId },
        });
    }
    /**
     * Create a new bookmark.
     */
    static async create(userId, questionId) {
        return await db.forumBookmark.create({
            data: { userId, questionId },
        });
    }
    /**
     * Delete a bookmark by ID.
     */
    static async delete(id) {
        return await db.forumBookmark.delete({
            where: { id },
        });
    }
    /**
     * List bookmarks for a user with offset pagination.
     * Includes question details for display.
     */
    static async listByUser(userId, page, limit) {
        const skip = (page - 1) * limit;
        const [bookmarks, total] = await Promise.all([
            db.forumBookmark.findMany({
                where: { userId },
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
                include: {
                    question: {
                        select: {
                            id: true,
                            title: true,
                            slug: true,
                            tags: true,
                            viewCount: true,
                            voteScore: true,
                            answerCount: true,
                            isSolved: true,
                            createdAt: true,
                            deletedAt: true,
                            ...QUESTION_INCLUDE,
                        },
                    },
                },
            }),
            db.forumBookmark.count({ where: { userId } }),
        ]);
        return {
            bookmarks,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
    /**
     * Check if a user has bookmarked a specific question.
     */
    static async isBookmarked(userId, questionId) {
        const bookmark = await db.forumBookmark.findFirst({
            where: { userId, questionId },
            select: { id: true },
        });
        return bookmark !== null;
    }
}
//# sourceMappingURL=bookmark.repo.js.map