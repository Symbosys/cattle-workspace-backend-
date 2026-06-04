import type { UserRole } from "../../../types/types.js";
import type { CreateQuestionDto, UpdateQuestionDto, ListQuestionsQuery } from "../schema/question.schema.js";
export declare class QuestionService {
    /**
     * Create a new forum question.
     * Generates a unique slug with collision retry.
     */
    static createQuestion(authorId: string, dto: CreateQuestionDto): Promise<{
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
        title: string;
        slug: string;
        authorId: string;
        content: string;
        tags: string[];
        viewCount: number;
        voteScore: number;
        answerCount: number;
        isLocked: boolean;
        isPinned: boolean;
        isSolved: boolean;
    }>;
    /**
     * Get a single question by slug.
     * Increments view count in the background (fire-and-forget).
     */
    static getQuestionBySlug(slug: string): Promise<{
        _count: {
            comments: number;
            answers: number;
        };
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
        title: string;
        slug: string;
        authorId: string;
        content: string;
        tags: string[];
        viewCount: number;
        voteScore: number;
        answerCount: number;
        isLocked: boolean;
        isPinned: boolean;
        isSolved: boolean;
    }>;
    /**
     * List questions with cursor pagination, filtering, and sorting.
     */
    static listQuestions(query: ListQuestionsQuery): Promise<{
        questions: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            title: string;
            slug: string;
            authorId: string;
            content: string;
            tags: string[];
            viewCount: number;
            voteScore: number;
            answerCount: number;
            isLocked: boolean;
            isPinned: boolean;
            isSolved: boolean;
        }[];
        nextCursor: string | undefined;
        hasMore: boolean;
    }>;
    /**
     * Update a question.
     * Only the original author can update.
     * Re-generates slug if the title changes.
     */
    static updateQuestion(userId: string, questionId: string, dto: UpdateQuestionDto): Promise<{
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
        title: string;
        slug: string;
        authorId: string;
        content: string;
        tags: string[];
        viewCount: number;
        voteScore: number;
        answerCount: number;
        isLocked: boolean;
        isPinned: boolean;
        isSolved: boolean;
    }>;
    /**
     * Soft-delete a question.
     * Allowed for the original author or ADMIN users.
     */
    static deleteQuestion(userId: string, userRole: UserRole, questionId: string): Promise<{
        id: string;
    }>;
}
//# sourceMappingURL=question.service.d.ts.map