declare class UserService {
    static findUserById(id: string): Promise<{
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
}
export default UserService;
//# sourceMappingURL=user.service.d.ts.map