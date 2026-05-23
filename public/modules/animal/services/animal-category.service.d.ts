import { Prisma } from "../../../types/types.js";
export declare class AnimalCategoryService {
    static createCategory(data: Prisma.CategoryCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    static getAllCategories(): Promise<({
        subCategories: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
            categoryId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
    })[]>;
    static getCategoryById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
    } | null>;
    static updateCategory(id: string, data: Prisma.CategoryUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    static createSubCategory(data: Prisma.SubCategoryUncheckedCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        categoryId: string;
    }>;
    static getAllSubCategories(): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        categoryId: string;
    })[]>;
    static getSubCategoryById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        categoryId: string;
    } | null>;
    static updateSubCategory(id: string, data: Prisma.SubCategoryUncheckedUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        imageUrl: import("@prisma/client/runtime/client").JsonValue | null;
        categoryId: string;
    }>;
}
//# sourceMappingURL=animal-category.service.d.ts.map