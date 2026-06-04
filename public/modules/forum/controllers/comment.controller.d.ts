/**
 * POST /api/v1/forum/questions/:questionId/comments
 * Create a comment on a question.
 */
export declare const createQuestionComment: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * POST /api/v1/forum/answers/:answerId/comments
 * Create a comment on an answer.
 */
export declare const createAnswerComment: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/questions/:questionId/comments
 * List all comments on a question.
 */
export declare const listQuestionComments: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/answers/:answerId/comments
 * List all comments on an answer.
 */
export declare const listAnswerComments: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * PUT /api/v1/forum/comments/:id
 * Update a comment. Author only.
 */
export declare const updateComment: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * DELETE /api/v1/forum/comments/:id
 * Soft-delete a comment. Author or ADMIN only.
 */
export declare const deleteComment: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=comment.controller.d.ts.map