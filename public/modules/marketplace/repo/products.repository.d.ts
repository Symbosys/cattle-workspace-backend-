import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
type PrismaClientOrTx = Prisma.TransactionClient | typeof db;
export declare class ProductsRepository {
    static findById(id: string, tx?: PrismaClientOrTx): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        };
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
        variants: {
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
        }[];
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
    }) | null>;
    static findBySlug(slug: string, tx?: PrismaClientOrTx): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
            brandId: string;
            parentId: string | null;
        };
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
        variants: {
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
        }[];
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
    }) | null>;
    static create(data: Prisma.MarketplaceProductUncheckedCreateInput, tx?: PrismaClientOrTx): Promise<{
        variants: {
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
        }[];
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
    }>;
    static update(id: string, data: Prisma.MarketplaceProductUncheckedUpdateInput, tx?: PrismaClientOrTx): Promise<{
        variants: {
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
        }[];
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
    }>;
    static delete(id: string, tx?: PrismaClientOrTx): Promise<{
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
    }>;
    static findMany(options: {
        where: Prisma.MarketplaceProductWhereInput;
        skip?: number;
        take?: number;
        orderBy?: Prisma.MarketplaceProductOrderByWithRelationInput;
    }, tx?: PrismaClientOrTx): Promise<{
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
    }[]>;
    static count(where: Prisma.MarketplaceProductWhereInput, tx?: PrismaClientOrTx): Promise<number>;
}
export {};
//# sourceMappingURL=products.repository.d.ts.map