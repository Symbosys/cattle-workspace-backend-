import { db } from "../../../db/db.js";
export class AuthService {
    static async findOtpByMobile(mobile) {
        return await db.otpCode.findUnique({
            where: { mobile },
        });
    }
    static async upsertOtp(mobile, otp, expiresAt) {
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
    static async incrementAttempts(mobile) {
        return await db.otpCode.update({
            where: { mobile },
            data: {
                attempts: { increment: 1 },
                lastAttemptedAt: new Date(),
            },
        });
    }
    static async markOtpAsUsed(mobile) {
        return await db.otpCode.update({
            where: { mobile },
            data: {
                isUsed: true,
            },
        });
    }
    static async findUserByPhone(phone) {
        return await db.user.findUnique({
            where: { phone },
        });
    }
    static async createUser(phone) {
        return await db.user.create({
            data: {
                phone,
                role: "USER",
                status: "ACTIVE",
            },
        });
    }
    static async updateLastLogin(userId) {
        return await db.user.update({
            where: { id: userId },
            data: {
                lastLoginAt: new Date(),
            },
        });
    }
}
//# sourceMappingURL=auth.service.js.map