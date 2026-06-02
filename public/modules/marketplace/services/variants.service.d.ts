export declare class VariantsService {
    /**
     * Create a new variant for a product
     */
    static createVariant(ownerId: string, productId: string, data: {
        sku: string;
        title: string;
        price: number;
        compareAtPrice?: number | null | undefined;
        stock?: number | undefined;
        imageUrl?: {
            url: string;
            public_id: string;
        } | null | undefined;
        isActive?: boolean | undefined;
        isDefault?: boolean | undefined;
    }): Promise<{
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
    /**
     * Update an existing variant
     */
    static updateVariant(ownerId: string, id: string, data: {
        sku?: string | undefined;
        title?: string | undefined;
        price?: number | undefined;
        compareAtPrice?: number | null | undefined;
        stock?: number | undefined;
        imageUrl?: {
            url: string;
            public_id: string;
        } | null | undefined;
        isActive?: boolean | undefined;
        isDefault?: boolean | undefined;
    }): Promise<{
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
    /**
     * Delete an existing variant
     */
    static deleteVariant(ownerId: string, id: string): Promise<{
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
    /**
     * Get variant by ID
     */
    static getVariantById(id: string): Promise<({
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
            status: import("../../../types/types.js").ProductStatus;
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
}
//# sourceMappingURL=variants.service.d.ts.map