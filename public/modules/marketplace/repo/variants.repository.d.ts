import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
type PrismaClientOrTx = Prisma.TransactionClient | typeof db;
export declare class VariantsRepository {
    static findById(id: string, tx?: PrismaClientOrTx): Promise<({
        product: {
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../../../generated/prisma/enums.js").ProductStatus;
            description: string;
            categoryId: string;
            title: string;
            images: import("@prisma/client/runtime/client").JsonValue | null;
            slug: string;
            brandId: string;
            metaTitle: string | null;
            metaDescription: string | null;
            attributes: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        title: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        isActive: boolean;
        productId: string;
        isDefault: boolean;
        sku: string;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        stock: number;
    }) | null>;
    static findBySku(sku: string, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        title: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        isActive: boolean;
        productId: string;
        isDefault: boolean;
        sku: string;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        stock: number;
    } | null>;
    static create(data: Prisma.ProductVariantUncheckedCreateInput, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        title: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        isActive: boolean;
        productId: string;
        isDefault: boolean;
        sku: string;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        stock: number;
    }>;
    static update(id: string, data: Prisma.ProductVariantUncheckedUpdateInput, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        title: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        isActive: boolean;
        productId: string;
        isDefault: boolean;
        sku: string;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        stock: number;
    }>;
    static delete(id: string, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        title: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        isActive: boolean;
        productId: string;
        isDefault: boolean;
        sku: string;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        stock: number;
    }>;
    static findMany(where: Prisma.ProductVariantWhereInput, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        title: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        isActive: boolean;
        productId: string;
        isDefault: boolean;
        sku: string;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        stock: number;
    }[]>;
}
export {};
//# sourceMappingURL=variants.repository.d.ts.map