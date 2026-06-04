import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse, } from "../../../utils/response.util.js";
import { createReportSchema, reviewReportSchema, listReportsSchema, } from "../schema/report.schema.js";
import { ReportService } from "../services/report.service.js";
/**
 * POST /api/v1/forum/reports
 * Submit a report on a question, answer, or comment.
 */
export const createReport = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const validated = createReportSchema.parse(req.body);
    const report = await ReportService.createReport(req.user.id, validated);
    return SuccessResponse(res, "Report submitted successfully", report, 201);
});
/**
 * GET /api/v1/forum/reports
 * List all reports with optional status filter. ADMIN only.
 */
export const listReports = asyncHandler(async (req, res) => {
    const validated = listReportsSchema.parse(req.query);
    const result = await ReportService.listReports(validated);
    return SuccessResponse(res, "Reports fetched successfully", result, 200);
});
/**
 * GET /api/v1/forum/reports/pending-count
 * Get the count of pending reports. ADMIN only.
 */
export const getPendingCount = asyncHandler(async (req, res) => {
    const result = await ReportService.getPendingCount();
    return SuccessResponse(res, "Pending count fetched successfully", result, 200);
});
/**
 * GET /api/v1/forum/reports/:id
 * Get a single report by ID. ADMIN only.
 */
export const getReport = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next(new ErrorResponse("Report ID is required", 400));
    }
    const report = await ReportService.getReportById(id);
    return SuccessResponse(res, "Report fetched successfully", report, 200);
});
/**
 * PATCH /api/v1/forum/reports/:id
 * Resolve or dismiss a report. ADMIN only.
 */
export const reviewReport = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const { id } = req.params;
    if (!id) {
        return next(new ErrorResponse("Report ID is required", 400));
    }
    const validated = reviewReportSchema.parse(req.body);
    const report = await ReportService.reviewReport(req.user.id, id, validated);
    return SuccessResponse(res, "Report reviewed successfully", report, 200);
});
//# sourceMappingURL=report.controller.js.map