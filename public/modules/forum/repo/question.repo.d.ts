import type { CreateQuestionDto, UpdateQuestionDto } from "../schema/question.schema.js";
export declare class QuestionRepo {
    /**
     * Create a new forum question with an auto-generated slug.
     */
    static create(authorId: string, data: CreateQuestionDto): Promise<{
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
     * Find a question by its unique slug.
     * Excludes soft-deleted records.
     */
    static findBySlug(slug: string): Promise<({
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
    }) | null>;
    /**
     * Find a question by its ID.
     * Does NOT filter soft-deleted (used internally for ownership checks).
     */
    static findById(id: string): Promise<({
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
    }) | null>;
    /**
     * Find a question by slug (used for slug collision detection).
     */
    static findBySlugExact(slug: string): Promise<{
        id: string;
    } | null>;
    /**
     * List questions with cursor-based pagination, filtering, and sorting.
     */
    static list(params: {
        cursor?: string | undefined;
        limit: number;
        tag?: string | undefined;
        search?: string | undefined;
        sort: "recent" | "votes" | "unanswered";
    }): Promise<{
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
     * Update a question's fields.
     */
    static update(id: string, data: UpdateQuestionDto & {
        slug?: string | undefined;
    }): Promise<{
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
     * Soft-delete a question by setting deletedAt.
     */
    static softDelete(id: string): Promise<{
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
     * Increment the view count of a question by 1.
     */
    static incrementViewCount(id: string): Promise<{
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
}
//# sourceMappingURL=question.repo.d.ts.map