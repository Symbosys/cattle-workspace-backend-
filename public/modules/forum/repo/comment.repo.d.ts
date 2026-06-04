import type { CreateCommentDto, UpdateCommentDto } from "../schema/comment.schema.js";
export declare class CommentRepo {
    /**
     * Create a comment on a question or an answer.
     * Exactly one of questionId or answerId must be provided.
     */
    static create(authorId: string, parent: {
        questionId?: string;
        answerId?: string;
    }, data: CreateCommentDto): Promise<{
        author: {
            id: string;
            name: string | null;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        authorId: string;
        content: string;
        questionId: string | null;
        answerId: string | null;
    }>;
    /**
     * Find a comment by its ID.
     */
    static findById(id: string): Promise<({
        author: {
            id: string;
            name: string | null;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        question: {
            id: string;
            isLocked: boolean;
        } | null;
        answer: {
            id: string;
            question: {
                id: string;
                isLocked: boolean;
            };
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        authorId: string;
        content: string;
        questionId: string | null;
        answerId: string | null;
    }) | null>;
    /**
     * List all non-deleted comments for a specific question.
     * Ordered chronologically (oldest first).
     */
    static listByQuestion(questionId: string): Promise<({
        author: {
            id: string;
            name: string | null;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        authorId: string;
        content: string;
        questionId: string | null;
        answerId: string | null;
    })[]>;
    /**
     * List all non-deleted comments for a specific answer.
     * Ordered chronologically (oldest first).
     */
    static listByAnswer(answerId: string): Promise<({
        author: {
            id: string;
            name: string | null;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        authorId: string;
        content: string;
        questionId: string | null;
        answerId: string | null;
    })[]>;
    /**
     * Update a comment's content.
     */
    static update(id: string, data: UpdateCommentDto): Promise<{
        author: {
            id: string;
            name: string | null;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        authorId: string;
        content: string;
        questionId: string | null;
        answerId: string | null;
    }>;
    /**
     * Soft-delete a comment by setting deletedAt.
     */
    static softDelete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        authorId: string;
        content: string;
        questionId: string | null;
        answerId: string | null;
    }>;
}
//# sourceMappingURL=comment.repo.d.ts.map