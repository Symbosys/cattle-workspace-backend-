/**
 * POST /api/v1/forum/reports
 * Submit a report on a question, answer, or comment.
 */
export declare const createReport: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/reports
 * List all reports with optional status filter. ADMIN only.
 */
export declare const listReports: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/reports/pending-count
 * Get the count of pending reports. ADMIN only.
 */
export declare const getPendingCount: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/reports/:id
 * Get a single report by ID. ADMIN only.
 */
export declare const getReport: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * PATCH /api/v1/forum/reports/:id
 * Resolve or dismiss a report. ADMIN only.
 */
export declare const reviewReport: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=report.controller.d.ts.map