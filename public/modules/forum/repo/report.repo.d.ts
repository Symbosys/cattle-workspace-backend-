import type { ReportStatus } from "../../../types/types.js";
export declare class ReportRepo {
    /**
     * Create a new report.
     */
    static create(reporterId: string, data: {
        targetType: "QUESTION" | "ANSWER" | "COMMENT";
        questionId?: string | undefined;
        answerId?: string | undefined;
        commentId?: string | undefined;
        reason: string;
    }): Promise<{
        comment: {
            id: string;
            authorId: string;
            content: string;
        } | null;
        question: {
            id: string;
            title: string;
            slug: string;
            authorId: string;
        } | null;
        answer: {
            id: string;
            authorId: string;
            content: string;
            questionId: string;
        } | null;
        reporter: {
            id: string;
            name: string | null;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        reviewer: {
            id: string;
            name: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: ReportStatus;
        questionId: string | null;
        answerId: string | null;
        reporterId: string;
        targetType: import("../../../types/types.js").ReportTargetType;
        commentId: string | null;
        reason: string;
        reviewerId: string | null;
        remarks: string | null;
    }>;
    /**
     * Find a report by its ID.
     */
    static findById(id: string): Promise<({
        comment: {
            id: string;
            authorId: string;
            content: string;
        } | null;
        question: {
            id: string;
            title: string;
            slug: string;
            authorId: string;
        } | null;
        answer: {
            id: string;
            authorId: string;
            content: string;
            questionId: string;
        } | null;
        reporter: {
            id: string;
            name: string | null;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        reviewer: {
            id: string;
            name: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: ReportStatus;
        questionId: string | null;
        answerId: string | null;
        reporterId: string;
        targetType: import("../../../types/types.js").ReportTargetType;
        commentId: string | null;
        reason: string;
        reviewerId: string | null;
        remarks: string | null;
    }) | null>;
    /**
     * Find a duplicate pending report from the same user on the same target.
     */
    static findDuplicate(reporterId: string, targetType: "QUESTION" | "ANSWER" | "COMMENT", targetId: string): Promise<{
        id: string;
    } | null>;
    /**
     * List reports with pagination and optional status filter.
     */
    static list(params: {
        page: number;
        limit: number;
        status?: ReportStatus | undefined;
    }): Promise<{
        reports: ({
            comment: {
                id: string;
                authorId: string;
                content: string;
            } | null;
            question: {
                id: string;
                title: string;
                slug: string;
                authorId: string;
            } | null;
            answer: {
                id: string;
                authorId: string;
                content: string;
                questionId: string;
            } | null;
            reporter: {
                id: string;
                name: string | null;
                avatarUrl: import("@prisma/client/runtime/client").JsonValue;
            };
            reviewer: {
                id: string;
                name: string | null;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: ReportStatus;
            questionId: string | null;
            answerId: string | null;
            reporterId: string;
            targetType: import("../../../types/types.js").ReportTargetType;
            commentId: string | null;
            reason: string;
            reviewerId: string | null;
            remarks: string | null;
        })[];
        total: number;
        totalPages: number;
        currentPage: number;
    }>;
    /**
     * Update report status (admin review action).
     */
    static updateStatus(id: string, reviewerId: string, status: ReportStatus, remarks?: string | undefined): Promise<{
        comment: {
            id: string;
            authorId: string;
            content: string;
        } | null;
        question: {
            id: string;
            title: string;
            slug: string;
            authorId: string;
        } | null;
        answer: {
            id: string;
            authorId: string;
            content: string;
            questionId: string;
        } | null;
        reporter: {
            id: string;
            name: string | null;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        reviewer: {
            id: string;
            name: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: ReportStatus;
        questionId: string | null;
        answerId: string | null;
        reporterId: string;
        targetType: import("../../../types/types.js").ReportTargetType;
        commentId: string | null;
        reason: string;
        reviewerId: string | null;
        remarks: string | null;
    }>;
    /**
     * Count pending reports.
     */
    static countPending(): Promise<number>;
}
//# sourceMappingURL=report.repo.d.ts.map