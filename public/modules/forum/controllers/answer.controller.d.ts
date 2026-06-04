/**
 * POST /api/v1/forum/questions/:questionId/answers
 * Create an answer for a question.
 */
export declare const createAnswer: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/questions/:questionId/answers
 * List answers for a question with pagination.
 */
export declare const listAnswers: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * PUT /api/v1/forum/questions/answers/:id
 * Update an answer. Author only.
 */
export declare const updateAnswer: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * DELETE /api/v1/forum/questions/answers/:id
 * Soft-delete an answer. Author or ADMIN only.
 */
export declare const deleteAnswer: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * PATCH /api/v1/forum/questions/answers/:id/accept
 * Accept or unaccept an answer. Question author only.
 */
export declare const acceptAnswer: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=answer.controller.d.ts.map