/**
 * POST /api/v1/forum/votes
 * Cast, flip, or undo a vote on a question or answer.
 */
export declare const castVote: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * GET /api/v1/forum/votes/status?targetType=QUESTION&targetId=uuid
 * Get the current user's vote status on a target.
 */
export declare const getUserVoteStatus: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=vote.controller.d.ts.map