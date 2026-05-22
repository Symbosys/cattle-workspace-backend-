import { db } from "../../../db/db.js";

export class AuthService {
  public static async findOtpByMobile(mobile: string) {
    return await db.otpCode.findUnique({
      where: { mobile },
    });
  }

  public static async upsertOtp(mobile: string, otp: string, expiresAt: Date) {
    return await db.otpCode.upsert({
      where: { mobile },
      update: {
        otp,
        expiresAt,
        attempts: 0,
        lastAttemptedAt: null,
        isUsed: false,
      },
      create: {
        mobile,
        otp,
        expiresAt,
        attempts: 0,
        isUsed: false,
      },
    });
  }

  public static async incrementAttempts(mobile: string) {
    return await db.otpCode.update({
      where: { mobile },
      data: {
        attempts: { increment: 1 },
        lastAttemptedAt: new Date(),
      },
    });
  }

  public static async markOtpAsUsed(mobile: string) {
    return await db.otpCode.update({
      where: { mobile },
      data: {
        isUsed: true,
      },
    });
  }

  public static async findUserByPhone(phone: string) {
    return await db.user.findUnique({
      where: { phone },
    });
  }

  public static async createUser(phone: string) {
    return await db.user.create({
      data: {
        phone,
        role: "USER",
        status: "ACTIVE",
      },
    });
  }

  public static async updateLastLogin(userId: string) {
    return await db.user.update({
      where: { id: userId },
      data: {
        lastLoginAt: new Date(),
      },
    });
  }
}