import crypto from "crypto";

export const generateOtp = (): string => {
  const otp = crypto.randomInt(1000, 10000).toString();
  return otp;
};

function base64url(str: string | Buffer): string {
  const base64 = typeof str === "string" ? Buffer.from(str).toString("base64") : str.toString("base64");
  return base64
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export const signJwt = (payload: object, secret: string): string => {
  const header = { alg: "HS256", typ: "JWT" };
  const encodedHeader = base64url(JSON.stringify(header));
  const encodedPayload = base64url(JSON.stringify(payload));
  
  const signature = crypto
    .createHmac("sha256", secret)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest();
  
  const encodedSignature = base64url(signature);
  return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
};
