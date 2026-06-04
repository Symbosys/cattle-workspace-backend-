import { ErrorResponse } from "../../../utils/response.util.js";
import { ReportRepo } from "../repo/report.repo.js";
import { QuestionRepo } from "../repo/question.repo.js";
import { AnswerRepo } from "../repo/answer.repo.js";
import { CommentRepo } from "../repo/comment.repo.js";
import type {
  CreateReportDto,
  ReviewReportDto,
  ListReportsQuery,
} from "../schema/report.schema.js";

export class ReportService {
  /**
   * Submit a report on a question, answer, or comment.
   * - Verifies the target exists and is not deleted
   * - Blocks self-reporting
   * - Blocks duplicate pending reports from the same user
   */
  public static async createReport(
    reporterId: string,
    dto: CreateReportDto,
  ) {
    const { targetType, targetId, reason } = dto;

    // 1. Verify target exists and get the author ID
    let targetAuthorId: string;

    if (targetType === "QUESTION") {
      const question = await QuestionRepo.findById(targetId);
      if (!question || question.deletedAt) {
        throw new ErrorResponse("Question not found", 404);
      }
      targetAuthorId = question.authorId;
    } else if (targetType === "ANSWER") {
      const answer = await AnswerRepo.findById(targetId);
      if (!answer || answer.deletedAt) {
        throw new ErrorResponse("Answer not found", 404);
      }
      targetAuthorId = answer.authorId;
    } else {
      const comment = await CommentRepo.findById(targetId);
      if (!comment || comment.deletedAt) {
        throw new ErrorResponse("Comment not found", 404);
      }
      targetAuthorId = comment.authorId;
    }

    // 2. Block self-reporting
    if (targetAuthorId === reporterId) {
      throw new ErrorResponse("You cannot report your own content", 403);
    }

    // 3. Block duplicate pending reports
    const duplicate = await ReportRepo.findDuplicate(
      reporterId,
      targetType,
      targetId,
    );

    if (duplicate) {
      throw new ErrorResponse(
        "You have already submitted a pending report for this content",
        409,
      );
    }

    // 4. Create the report with correct FK
    const reportData: {
      targetType: "QUESTION" | "ANSWER" | "COMMENT";
      questionId?: string | undefined;
      answerId?: string | undefined;
      commentId?: string | undefined;
      reason: string;
    } = {
      targetType,
      reason,
    };

    if (targetType === "QUESTION") reportData.questionId = targetId;
    else if (targetType === "ANSWER") reportData.answerId = targetId;
    else reportData.commentId = targetId;

    return await ReportRepo.create(reporterId, reportData);
  }

  /**
   * List reports with pagination and optional status filter.
   * Admin-only operation.
   */
  public static async listReports(query: ListReportsQuery) {
    return await ReportRepo.list({
      page: query.page,
      limit: query.limit,
      status: query.status,
    });
  }

  /**
   * Get a single report by ID with full details.
   * Admin-only operation.
   */
  public static async getReportById(id: string) {
    const report = await ReportRepo.findById(id);

    if (!report) {
      throw new ErrorResponse("Report not found", 404);
    }

    return report;
  }

  /**
   * Review (resolve or dismiss) a pending report.
   * Admin-only operation.
   */
  public static async reviewReport(
    reviewerId: string,
    reportId: string,
    dto: ReviewReportDto,
  ) {
    const report = await ReportRepo.findById(reportId);

    if (!report) {
      throw new ErrorResponse("Report not found", 404);
    }

    if (report.status !== "PENDING") {
      throw new ErrorResponse(
        `Report has already been ${report.status.toLowerCase()}`,
        400,
      );
    }

    return await ReportRepo.updateStatus(
      reportId,
      reviewerId,
      dto.status,
      dto.remarks,
    );
  }

  /**
   * Get the count of pending reports.
   * Admin-only operation (for dashboard badge).
   */
  public static async getPendingCount() {
    const count = await ReportRepo.countPending();
    return { pendingCount: count };
  }
}
