import { db } from "../../../db/db.js";
/**
 * Fields to include when listing reports (reporter info + target snippet).
 */
const REPORT_INCLUDE = {
    reporter: {
        select: { id: true, name: true, avatarUrl: true },
    },
    reviewer: {
        select: { id: true, name: true },
    },
    question: {
        select: { id: true, title: true, slug: true, authorId: true },
    },
    answer: {
        select: {
            id: true,
            content: true,
            authorId: true,
            questionId: true,
        },
    },
    comment: {
        select: { id: true, content: true, authorId: true },
    },
};
export class ReportRepo {
    /**
     * Create a new report.
     */
    static async create(reporterId, data) {
        return await db.forumReport.create({
            data: {
                reporterId,
                targetType: data.targetType,
                questionId: data.questionId ?? null,
                answerId: data.answerId ?? null,
                commentId: data.commentId ?? null,
                reason: data.reason,
            },
            include: REPORT_INCLUDE,
        });
    }
    /**
     * Find a report by its ID.
     */
    static async findById(id) {
        return await db.forumReport.findUnique({
            where: { id },
            include: REPORT_INCLUDE,
        });
    }
    /**
     * Find a duplicate pending report from the same user on the same target.
     */
    static async findDuplicate(reporterId, targetType, targetId) {
        const where = {
            reporterId,
            targetType,
            status: "PENDING",
        };
        // Set the correct FK based on targetType
        if (targetType === "QUESTION")
            where.questionId = targetId;
        else if (targetType === "ANSWER")
            where.answerId = targetId;
        else if (targetType === "COMMENT")
            where.commentId = targetId;
        return await db.forumReport.findFirst({
            where,
            select: { id: true },
        });
    }
    /**
     * List reports with pagination and optional status filter.
     */
    static async list(params) {
        const { page, limit, status } = params;
        const skip = (page - 1) * limit;
        const where = {};
        if (status)
            where.status = status;
        const [reports, total] = await Promise.all([
            db.forumReport.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
                include: REPORT_INCLUDE,
            }),
            db.forumReport.count({ where }),
        ]);
        return {
            reports,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
    /**
     * Update report status (admin review action).
     */
    static async updateStatus(id, reviewerId, status, remarks) {
        return await db.forumReport.update({
            where: { id },
            data: {
                status,
                reviewerId,
                remarks: remarks ?? null,
            },
            include: REPORT_INCLUDE,
        });
    }
    /**
     * Count pending reports.
     */
    static async countPending() {
        return await db.forumReport.count({
            where: { status: "PENDING" },
        });
    }
}
//# sourceMappingURL=report.repo.js.map