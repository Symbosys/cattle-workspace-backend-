/**
 * POST /api/v1/forum/bookmarks
 * Toggle a bookmark on a question.
 */
export declare const toggleBookmark: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/bookmarks
 * List the current user's bookmarked questions.
 */
export declare const listUserBookmarks: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/bookmarks/status/:questionId
 * Check if a specific question is bookmarked by the current user.
 */
export declare const checkBookmarkStatus: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=bookmark.controller.d.ts.map