import type { CreateAnswerDto, UpdateAnswerDto } from "../schema/answer.schema.js";
export declare class AnswerRepo {
    /**
     * Create a new answer for a question.
     */
    static create(questionId: string, authorId: string, data: CreateAnswerDto): Promise<{
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
        voteScore: number;
        questionId: string;
        isAccepted: boolean;
    }>;
    /**
     * Find an answer by its ID.
     */
    static findById(id: string): Promise<({
        author: {
            id: string;
            name: string | null;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        question: {
            id: string;
            authorId: string;
            isLocked: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        authorId: string;
        content: string;
        voteScore: number;
        questionId: string;
        isAccepted: boolean;
    }) | null>;
    /**
     * List answers for a given question with offset pagination and sorting.
     * Accepted answers always appear first.
     */
    static listByQuestion(params: {
        questionId: string;
        page: number;
        limit: number;
        sort: "votes" | "oldest" | "newest";
    }): Promise<{
        answers: ({
            _count: {
                comments: number;
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
            authorId: string;
            content: string;
            voteScore: number;
            questionId: string;
            isAccepted: boolean;
        })[];
        total: number;
        totalPages: number;
        currentPage: number;
    }>;
    /**
     * Update an answer's fields.
     */
    static update(id: string, data: UpdateAnswerDto): Promise<{
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
        voteScore: number;
        questionId: string;
        isAccepted: boolean;
    }>;
    /**
     * Soft-delete an answer by setting deletedAt.
     */
    static softDelete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        authorId: string;
        content: string;
        voteScore: number;
        questionId: string;
        isAccepted: boolean;
    }>;
    /**
     * Set or unset the isAccepted flag on an answer.
     */
    static setAccepted(id: string, accepted: boolean): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        authorId: string;
        content: string;
        voteScore: number;
        questionId: string;
        isAccepted: boolean;
    }>;
    /**
     * Find the currently accepted answer for a question (if any).
     */
    static findAcceptedByQuestion(questionId: string): Promise<{
        id: string;
    } | null>;
    /**
     * Count non-deleted answers for a question.
     */
    static countByQuestion(questionId: string): Promise<number>;
}
//# sourceMappingURL=answer.repo.d.ts.map