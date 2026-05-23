import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse } from "../../../utils/response.util.js";
export const authenticate = asyncHandler(async (req, res, next) => {
    const tokenFromHeader = req.headers["authorization"]?.startsWith("Bearer ") ? req.headers["authorization"].split("Bearer ")[1] : null;
    const tokenFromCookie = req.cookies.token;
    const token = tokenFromCookie || tokenFromHeader;
    if (!token)
        return next(new ErrorResponse("Unauthorized", 401));
});
//# sourceMappingURL=auth.middleware.js.map