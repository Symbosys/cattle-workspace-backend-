export declare class BookmarkRepo {
    /**
     * Find an existing bookmark by user and question.
     */
    static findByUserAndQuestion(userId: string, questionId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        questionId: string;
    } | null>;
    /**
     * Create a new bookmark.
     */
    static create(userId: string, questionId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        questionId: string;
    }>;
    /**
     * Delete a bookmark by ID.
     */
    static delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        questionId: string;
    }>;
    /**
     * List bookmarks for a user with offset pagination.
     * Includes question details for display.
     */
    static listByUser(userId: string, page: number, limit: number): Promise<{
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
     * Check if a user has bookmarked a specific question.
     */
    static isBookmarked(userId: string, questionId: string): Promise<boolean>;
}
//# sourceMappingURL=bookmark.repo.d.ts.map