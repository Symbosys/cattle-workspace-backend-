import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse } from "../../../utils/response.util.js";
import UserService from "../services/user.service.js";
import { verifyJwt } from "../utils.js";

export const authenticate = asyncHandler(async (req, res, next) => {
  const tokenFromHeader = req.headers["authorization"]?.startsWith("Bearer ")
    ? req.headers["authorization"].split("Bearer ")[1]
    : null;

  const tokenFromCookie = req.cookies.token;

  const token = tokenFromCookie || tokenFromHeader;

  if (!token) return next(new ErrorResponse("Unauthorized", 401));

  let decode;
  try {
    decode = verifyJwt(token) as { id: string; role: string; phone: string };
  } catch (error) {
    return next(new ErrorResponse("Invalid or expired token", 401));
  }

  if (!decode?.id) return next(new ErrorResponse("Invalid token", 401));

  const user = await UserService.findUserById(decode.id);

  if (!user) return next(new ErrorResponse("Invalid Token", 401));

  req.user = user;

  next();
});
