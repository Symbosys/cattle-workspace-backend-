import crypto from "crypto";
import jwt from "jsonwebtoken";
import env from "../../config/env.js";

/**
 * Generates a 4-digit numeric OTP.
 */
export const generateOtp = (): string => {
  const otp = crypto.randomInt(1000, 10000).toString();
  return otp;
};

/**
 * Signs a JWT using the jsonwebtoken package.
 */
export const signJwt = (
  payload: string | object | Buffer,
  secret: string,
  options?: jwt.SignOptions
): string => {
  return jwt.sign(payload, secret, options);
};

/**
 * Verifies a JWT using the jsonwebtoken package.
 */
export const verifyJwt = (
  token: string,
  options?: jwt.VerifyOptions
): any => {
  return jwt.verify(token, env.jwtSecret as string, options);
};
