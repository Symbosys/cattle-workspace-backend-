import type { UserRole } from "../../../types/types.js";
import type { CreateCommentDto, UpdateCommentDto } from "../schema/comment.schema.js";
export declare class CommentService {
    /**
     * Create a comment on a question.
     * Verifies the question exists and is not locked.
     */
    static createQuestionComment(authorId: string, questionId: string, dto: CreateCommentDto): Promise<{
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
     * Create a comment on an answer.
     * Verifies the answer exists and its parent question is not locked.
     */
    static createAnswerComment(authorId: string, answerId: string, dto: CreateCommentDto): Promise<{
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
     * List all comments for a question.
     */
    static listQuestionComments(questionId: string): Promise<({
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
     * List all comments for an answer.
     */
    static listAnswerComments(answerId: string): Promise<({
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
     * Update a comment.
     * Only the original author can update.
     */
    static updateComment(userId: string, commentId: string, dto: UpdateCommentDto): Promise<{
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
     * Soft-delete a comment.
     * Allowed for the original author or ADMIN users.
     */
    static deleteComment(userId: string, userRole: UserRole, commentId: string): Promise<{
        id: string;
    }>;
}
//# sourceMappingURL=comment.service.d.ts.map