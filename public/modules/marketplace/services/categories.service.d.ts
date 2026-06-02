export declare class CategoriesService {
    /**
     * Create a new category
     */
    static createCategory(brandId: string, data: {
        name: string;
        description?: string | null | undefined;
        parentId?: string | null | undefined;
        isActive?: boolean | undefined;
    }): Promise<{
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
    /**
     * Update an existing category
     */
    static updateCategory(id: string, data: {
        name?: string | undefined;
        description?: string | null | undefined;
        parentId?: string | null | undefined;
        isActive?: boolean | undefined;
    }): Promise<{
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
    /**
     * Fetch category by ID
     */
    static getCategoryById(id: string): Promise<({
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
    /**
     * Fetch categories list by filters
     */
    static getCategories(filters: {
        brandId?: string | undefined;
        parentId?: string | null | undefined;
        isActive?: boolean | undefined;
    }): Promise<({
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
    /**
     * Delete category
     */
    static deleteCategory(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        brandId: string;
        parentId: string | null;
    }>;
}
//# sourceMappingURL=categories.service.d.ts.map