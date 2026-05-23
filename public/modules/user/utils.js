import crypto from "crypto";
import jwt from "jsonwebtoken";
import env from "../../config/env.js";
/**
 * Generates a 4-digit numeric OTP.
 */
export const generateOtp = () => {
    const otp = crypto.randomInt(1000, 10000).toString();
    return otp;
};
/**
 * Signs a JWT using the jsonwebtoken package.
 */
export const signJwt = (payload, secret, options) => {
    return jwt.sign(payload, secret, options);
};
/**
 * Verifies a JWT using the jsonwebtoken package.
 */
export const verifyJwt = (token, options) => {
    return jwt.verify(token, env.jwtSecret, options);
};
//# sourceMappingURL=utils.js.map