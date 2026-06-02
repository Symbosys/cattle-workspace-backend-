export declare class ProductsService {
    /**
     * Create a new product with optional variants
     */
    static createProduct(ownerId: string, data: {
        brandId: string;
        categoryId: string;
        title: string;
        description: string;
        status?: "ACTIVE" | "OUT_OF_STOCK" | "ARCHIVED" | undefined;
        metaTitle?: string | null | undefined;
        metaDescription?: string | null | undefined;
        images?: {
            url: string;
            public_id: string;
        }[] | null | undefined;
        attributes?: Record<string, any> | null | undefined;
        sku?: string | undefined;
        price?: number | undefined;
        compareAtPrice?: number | null | undefined;
        stock?: number | undefined;
        variants?: {
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
        }[] | undefined;
    }): Promise<{
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
    }>;
    /**
     * Update an existing product
     */
    static updateProduct(ownerId: string, productId: string, data: {
        categoryId?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        status?: "ACTIVE" | "OUT_OF_STOCK" | "ARCHIVED" | undefined;
        metaTitle?: string | null | undefined;
        metaDescription?: string | null | undefined;
        images?: {
            url: string;
            public_id: string;
        }[] | null | undefined;
        attributes?: Record<string, any> | null | undefined;
    }): Promise<{
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
    }>;
    /**
     * Get single product by ID
     */
    static getProductById(id: string): Promise<({
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
    }) | null>;
    /**
     * Get single product by Slug
     */
    static getProductBySlug(slug: string): Promise<({
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
    }) | null>;
    /**
     * List products with pagination and filters
     */
    static getProducts(filters: {
        brandId?: string | undefined;
        categoryId?: string | undefined;
        status?: "ACTIVE" | "OUT_OF_STOCK" | "ARCHIVED" | undefined;
        search?: string | undefined;
        minPrice?: number | undefined;
        maxPrice?: number | undefined;
        page?: number | undefined;
        limit?: number | undefined;
    }): Promise<{
        products: {
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
        }[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    /**
     * Delete product and clean up all Cloudinary assets
     */
    static deleteProduct(ownerId: string, id: string): Promise<{
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
    }>;
}
//# sourceMappingURL=products.service.d.ts.map