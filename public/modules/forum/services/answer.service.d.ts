import type { UserRole } from "../../../types/types.js";
import type { CreateAnswerDto, UpdateAnswerDto, ListAnswersQuery } from "../schema/answer.schema.js";
export declare class AnswerService {
    /**
     * Create an answer for a question.
     * Verifies the question exists and is not locked.
     * Increments the question's answerCount in a transaction.
     */
    static createAnswer(questionId: string, authorId: string, dto: CreateAnswerDto): Promise<{
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
     * List answers for a question with offset-based pagination.
     */
    static listAnswers(questionId: string, query: ListAnswersQuery): Promise<{
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
     * Update an answer.
     * Only the original author can update.
     */
    static updateAnswer(userId: string, answerId: string, dto: UpdateAnswerDto): Promise<{
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
     * Soft-delete an answer.
     * Allowed for the original author or ADMIN users.
     * Decrements the question's answerCount in a transaction.
     */
    static deleteAnswer(userId: string, userRole: UserRole, answerId: string): Promise<{
        id: string;
    }>;
    /**
     * Accept (or toggle) an answer as the solution.
     * Only the question author can accept an answer.
     * Unsets any previously accepted answer, then marks the new one.
     * Sets question.isSolved = true.
     */
    static acceptAnswer(userId: string, answerId: string): Promise<({
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
}
//# sourceMappingURL=answer.service.d.ts.map