/**
 * POST /api/v1/forum/questions
 * Create a new forum question.
 */
export declare const createQuestion: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/questions/:slug
 * Get a single question by slug. Increments view count.
 */
export declare const getQuestion: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/questions
 * List questions with cursor-based pagination, filtering, and sorting.
 */
export declare const listQuestions: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * PUT /api/v1/forum/questions/:id
 * Update a question. Only the original author can update.
 */
export declare const updateQuestion: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * DELETE /api/v1/forum/questions/:id
 * Soft-delete a question. Author or ADMIN only.
 */
export declare const deleteQuestion: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=question.controller.d.ts.map