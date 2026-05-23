export declare class AuthService {
    static findOtpByMobile(mobile: string): Promise<{
        id: string;
        mobile: string;
        otp: string;
        expiresAt: Date;
        attempts: number;
        lastAttemptedAt: Date | null;
        isUsed: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    static upsertOtp(mobile: string, otp: string, expiresAt: Date): Promise<{
        id: string;
        mobile: string;
        otp: string;
        expiresAt: Date;
        attempts: number;
        lastAttemptedAt: Date | null;
        isUsed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static incrementAttempts(mobile: string): Promise<{
        id: string;
        mobile: string;
        otp: string;
        expiresAt: Date;
        attempts: number;
        lastAttemptedAt: Date | null;
        isUsed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static markOtpAsUsed(mobile: string): Promise<{
        id: string;
        mobile: string;
        otp: string;
        expiresAt: Date;
        attempts: number;
        lastAttemptedAt: Date | null;
        isUsed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static findUserByPhone(phone: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        email: string | null;
        phone: string;
        avatarUrl: import("@prisma/client/runtime/client").JsonValue | null;
        role: import("../../../types/types.js").UserRole;
        status: import("../../../types/types.js").UserStatus;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    } | null>;
    static createUser(phone: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        email: string | null;
        phone: string;
        avatarUrl: import("@prisma/client/runtime/client").JsonValue | null;
        role: import("../../../types/types.js").UserRole;
        status: import("../../../types/types.js").UserStatus;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    }>;
    static updateLastLogin(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        email: string | null;
        phone: string;
        avatarUrl: import("@prisma/client/runtime/client").JsonValue | null;
        role: import("../../../types/types.js").UserRole;
        status: import("../../../types/types.js").UserStatus;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map