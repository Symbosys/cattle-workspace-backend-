import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse, } from "../../../utils/response.util.js";
import { castVoteSchema, voteStatusSchema } from "../schema/vote.schema.js";
import { VoteService } from "../services/vote.service.js";
/**
 * POST /api/v1/forum/votes
 * Cast, flip, or undo a vote on a question or answer.
 */
export const castVote = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const validated = castVoteSchema.parse(req.body);
    const result = await VoteService.castVote(req.user.id, validated);
    return SuccessResponse(res, "Vote processed successfully", result, 200);
});
/**
 * GET /api/v1/forum/votes/status?targetType=QUESTION&targetId=uuid
 * Get the current user's vote status on a target.
 */
export const getUserVoteStatus = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const validated = voteStatusSchema.parse(req.query);
    const result = await VoteService.getUserVoteStatus(req.user.id, validated);
    return SuccessResponse(res, "Vote status fetched successfully", result, 200);
});
//# sourceMappingURL=vote.controller.js.map