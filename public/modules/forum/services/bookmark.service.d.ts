import type { ListBookmarksQuery } from "../schema/bookmark.schema.js";
export declare class BookmarkService {
    /**
     * Toggle a bookmark on a question.
     * If already bookmarked → removes it. If not → creates it.
     */
    static toggleBookmark(userId: string, questionId: string): Promise<{
        bookmarked: boolean;
        questionId: string;
    }>;
    /**
     * List the current user's bookmarked questions with pagination.
     */
    static listUserBookmarks(userId: string, query: ListBookmarksQuery): Promise<{
        bookmarks: ({
            question: {
                id: string;
                createdAt: Date;
                deletedAt: Date | null;
                title: string;
                slug: string;
                tags: string[];
                viewCount: number;
                voteScore: number;
                answerCount: number;
                isSolved: boolean;
                author: {
                    id: string;
                    name: string | null;
                    avatarUrl: import("@prisma/client/runtime/client").JsonValue;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            userId: string;
            questionId: string;
        })[];
        total: number;
        totalPages: number;
        currentPage: number;
    }>;
    /**
     * Check if a specific question is bookmarked by the user.
     */
    static isBookmarked(userId: string, questionId: string): Promise<{
        bookmarked: boolean;
        questionId: string;
    }>;
}
//# sourceMappingURL=bookmark.service.d.ts.map