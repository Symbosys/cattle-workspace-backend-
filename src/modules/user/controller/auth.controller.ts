import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { AuthService } from "../services/auth.service.js";
import { generateOtp, signJwt } from "../utils.js";

export const sendOtp = asyncHandler(async (req, res, next) => {
  const { mobile } = req.body;

  if (!mobile) {
    return next(new ErrorResponse("Please provide mobile number", 400));
  }

  // Validate mobile number format (simple regex for digits and length)
  const isNumeric = /^\d+$/.test(mobile);
  if (!isNumeric || mobile.length < 10 || mobile.length > 15) {
    return next(new ErrorResponse("Invalid mobile number format", 400));
  }

  // Check rate limit (1 minute)
  const existingOtp = await AuthService.findOtpByMobile(mobile);
  if (existingOtp) {
    const timeDiff = Date.now() - new Date(existingOtp.updatedAt).getTime();
    if (timeDiff < 60 * 1000) {
      return next(new ErrorResponse("Please wait 1 minute before requesting another OTP", 429));
    }
  }

  // Generate new OTP
  const otp = generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiration

  // Database upsert
  await AuthService.upsertOtp(mobile, otp, expiresAt);

  // Send OTP (Mock / Console Log)
  console.log(`[SMS-MOCK] OTP for mobile ${mobile} is: ${otp}`);

  return SuccessResponse(
    res,
    "OTP generated successfully. Check your mobile device or server logs.",
    process.env.NODE_ENV === "production" ? {} : { otp },
    200
  );
});

export const verifyOtp = asyncHandler(async (req, res, next) => {
  const { mobile, otp } = req.body;

  if (!mobile || !otp) {
    return next(new ErrorResponse("Please provide both mobile number and OTP code", 400));
  }

  // Find OTP record
  const otpRecord = await AuthService.findOtpByMobile(mobile);

  if (!otpRecord) {
    return next(new ErrorResponse("OTP record not found", 404));
  }

  if (otpRecord.isUsed) {
    return next(new ErrorResponse("OTP has already been used", 400));
  }

  if (new Date() > new Date(otpRecord.expiresAt)) {
    return next(new ErrorResponse("OTP has expired", 400));
  }

  if (otpRecord.attempts >= 5) {
    return next(new ErrorResponse("Too many failed attempts. Please generate a new OTP", 400));
  }

  // Verify OTP match
  if (otpRecord.otp !== otp) {
    const updatedOtp = await AuthService.incrementAttempts(mobile);
    const remaining = 5 - updatedOtp.attempts;
    if (remaining <= 0) {
      return next(new ErrorResponse("Incorrect OTP. Too many failed attempts. Please request a new OTP", 400));
    }
    return next(new ErrorResponse(`Incorrect OTP. ${remaining} attempts remaining`, 400));
  }

  // Correct OTP: Mark used
  await AuthService.markOtpAsUsed(mobile);

  // Check if user exists
  let user = await AuthService.findUserByPhone(mobile);
  let isNewUser = false;

  if (!user) {
    isNewUser = true;
    user = await AuthService.createUser(mobile);
  } else {
    await AuthService.updateLastLogin(user.id);
  }

  // Sign JWT session token
  const secret = process.env.JWT_SECRET || "cattle_fallback_jwt_secret_key_1234567890!";
  const token = signJwt(
    {
      id: user.id,
      phone: user.phone,
      role: user.role,
    },
    secret
  );

  return SuccessResponse(
    res,
    isNewUser ? "Account created successfully" : "Logged in successfully",
    {
      user: {
        id: user.id,
        phone: user.phone,
        role: user.role,
        status: user.status,
        name: user.name,
        email: user.email,
      },
      token,
    },
    200
  );
});