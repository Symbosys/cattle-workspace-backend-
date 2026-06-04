import type { CreateReportDto, ReviewReportDto, ListReportsQuery } from "../schema/report.schema.js";
export declare class ReportService {
    /**
     * Submit a report on a question, answer, or comment.
     * - Verifies the target exists and is not deleted
     * - Blocks self-reporting
     * - Blocks duplicate pending reports from the same user
     */
    static createReport(reporterId: string, dto: CreateReportDto): Promise<{
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
        status: import("../../../types/types.js").ReportStatus;
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
     * List reports with pagination and optional status filter.
     * Admin-only operation.
     */
    static listReports(query: ListReportsQuery): Promise<{
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
            status: import("../../../types/types.js").ReportStatus;
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
     * Get a single report by ID with full details.
     * Admin-only operation.
     */
    static getReportById(id: string): Promise<{
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
        status: import("../../../types/types.js").ReportStatus;
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
     * Review (resolve or dismiss) a pending report.
     * Admin-only operation.
     */
    static reviewReport(reviewerId: string, reportId: string, dto: ReviewReportDto): Promise<{
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
        status: import("../../../types/types.js").ReportStatus;
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
     * Get the count of pending reports.
     * Admin-only operation (for dashboard badge).
     */
    static getPendingCount(): Promise<{
        pendingCount: number;
    }>;
}
//# sourceMappingURL=report.service.d.ts.map