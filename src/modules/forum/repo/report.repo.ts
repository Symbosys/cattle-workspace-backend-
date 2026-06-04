import { db } from "../../../db/db.js";
import type { Prisma, ReportStatus } from "../../../types/types.js";

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
} as const;

export class ReportRepo {
  /**
   * Create a new report.
   */
  public static async create(
    reporterId: string,
    data: {
      targetType: "QUESTION" | "ANSWER" | "COMMENT";
      questionId?: string | undefined;
      answerId?: string | undefined;
      commentId?: string | undefined;
      reason: string;
    },
  ) {
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
  public static async findById(id: string) {
    return await db.forumReport.findUnique({
      where: { id },
      include: REPORT_INCLUDE,
    });
  }

  /**
   * Find a duplicate pending report from the same user on the same target.
   */
  public static async findDuplicate(
    reporterId: string,
    targetType: "QUESTION" | "ANSWER" | "COMMENT",
    targetId: string,
  ) {
    const where: Prisma.ForumReportWhereInput = {
      reporterId,
      targetType,
      status: "PENDING",
    };

    // Set the correct FK based on targetType
    if (targetType === "QUESTION") where.questionId = targetId;
    else if (targetType === "ANSWER") where.answerId = targetId;
    else if (targetType === "COMMENT") where.commentId = targetId;

    return await db.forumReport.findFirst({
      where,
      select: { id: true },
    });
  }

  /**
   * List reports with pagination and optional status filter.
   */
  public static async list(params: {
    page: number;
    limit: number;
    status?: ReportStatus | undefined;
  }) {
    const { page, limit, status } = params;
    const skip = (page - 1) * limit;

    const where: Prisma.ForumReportWhereInput = {};
    if (status) where.status = status;

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
  public static async updateStatus(
    id: string,
    reviewerId: string,
    status: ReportStatus,
    remarks?: string | undefined,
  ) {
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
  public static async countPending(): Promise<number> {
    return await db.forumReport.count({
      where: { status: "PENDING" },
    });
  }
}
