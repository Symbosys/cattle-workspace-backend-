import jwt from "jsonwebtoken";
/**
 * Generates a 4-digit numeric OTP.
 */
export declare const generateOtp: () => string;
/**
 * Signs a JWT using the jsonwebtoken package.
 */
export declare const signJwt: (payload: string | object | Buffer, secret: string, options?: jwt.SignOptions) => string;
/**
 * Verifies a JWT using the jsonwebtoken package.
 */
export declare const verifyJwt: (token: string, secret: string, options?: jwt.VerifyOptions) => any;
//# sourceMappingURL=utils.d.ts.map