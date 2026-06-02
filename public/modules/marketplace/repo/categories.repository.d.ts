import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
type PrismaClientOrTx = Prisma.TransactionClient | typeof db;
export declare class CategoriesRepository {
    static findById(id: string, tx?: PrismaClientOrTx): Promise<({
        brand: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            isActive: boolean;
            isVerified: boolean;
            userId: string;
            brandName: string;
            slug: string;
            contactEmail: string | null;
            contactPhone: string | null;
            address: string | null;
            gstNumber: string | null;
            rating: import("@prisma/client-runtime-utils").Decimal;
            logoUrl: import("@prisma/client/runtime/client").JsonValue | null;
            bannerUrl: import("@prisma/client/runtime/client").JsonValue | null;
        };
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        brandId: string;
        parentId: string | null;
    }) | null>;
    static create(data: Prisma.MarketplaceCategoryUncheckedCreateInput, tx?: PrismaClientOrTx): Promise<{
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        brandId: string;
        parentId: string | null;
    }>;
    static update(id: string, data: Prisma.MarketplaceCategoryUncheckedUpdateInput, tx?: PrismaClientOrTx): Promise<{
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        brandId: string;
        parentId: string | null;
    }>;
    static delete(id: string, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        brandId: string;
        parentId: string | null;
    }>;
    static findMany(where: Prisma.MarketplaceCategoryWhereInput, tx?: PrismaClientOrTx): Promise<({
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        brandId: string;
        parentId: string | null;
    })[]>;
}
export {};
//# sourceMappingURL=categories.repository.d.ts.map