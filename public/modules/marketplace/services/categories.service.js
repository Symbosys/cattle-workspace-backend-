import { db } from "../../../db/db.js";
import { ErrorResponse } from "../../../utils/response.util.js";
import { CategoriesRepository } from "../repo/categories.repository.js";
export class CategoriesService {
    /**
     * Create a new category
     */
    static async createCategory(brandId, data) {
        return await db.$transaction(async (tx) => {
            // 1. Verify parent category exists if parentId is supplied
            if (data.parentId) {
                const parentCategory = await CategoriesRepository.findById(data.parentId, tx);
                if (!parentCategory) {
                    throw new ErrorResponse("Parent category not found", 404);
                }
            }
            // 2. Create category
            return await CategoriesRepository.create({
                brandId,
                name: data.name,
                description: data.description ?? null,
                parentId: data.parentId ?? null,
                isActive: data.isActive ?? true,
            }, tx);
        });
    }
    /**
     * Update an existing category
     */
    static async updateCategory(id, data) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch existing category
            const category = await CategoriesRepository.findById(id, tx);
            if (!category) {
                throw new ErrorResponse("Category not found", 404);
            }
            // 2. Check for cycle prevention if parentId is updated
            if (data.parentId !== undefined && data.parentId !== category.parentId) {
                if (data.parentId === id) {
                    throw new ErrorResponse("Category cannot be its own parent", 400);
                }
                if (data.parentId !== null) {
                    // Check parent existence
                    const parentCategory = await CategoriesRepository.findById(data.parentId, tx);
                    if (!parentCategory) {
                        throw new ErrorResponse("Parent category not found", 404);
                    }
                    // Cycle detection check
                    let currentParentId = data.parentId;
                    while (currentParentId) {
                        if (currentParentId === id) {
                            throw new ErrorResponse("Circular dependency detected: Parent category cannot be a descendant of this category", 400);
                        }
                        const parentNode = await CategoriesRepository.findById(currentParentId, tx);
                        currentParentId = parentNode?.parentId ?? null;
                    }
                }
            }
            // 3. Update fields
            const updateData = {};
            if (data.name !== undefined)
                updateData.name = data.name;
            if (data.description !== undefined)
                updateData.description = data.description;
            if (data.parentId !== undefined)
                updateData.parentId = data.parentId;
            if (data.isActive !== undefined)
                updateData.isActive = data.isActive;
            return await CategoriesRepository.update(id, updateData, tx);
        });
    }
    /**
     * Fetch category by ID
     */
    static async getCategoryById(id) {
        return await CategoriesRepository.findById(id);
    }
    /**
     * Fetch categories list by filters
     */
    static async getCategories(filters) {
        const where = {};
        if (filters.brandId) {
            where.brandId = filters.brandId;
        }
        if (filters.parentId !== undefined) {
            where.parentId = filters.parentId;
        }
        if (filters.isActive !== undefined) {
            where.isActive = filters.isActive;
        }
        return await CategoriesRepository.findMany(where);
    }
    /**
     * Delete category
     */
    static async deleteCategory(id) {
        return await db.$transaction(async (tx) => {
            const category = await CategoriesRepository.findById(id, tx);
            if (!category) {
                throw new ErrorResponse("Category not found", 404);
            }
            return await CategoriesRepository.delete(id, tx);
        });
    }
}
//# sourceMappingURL=categories.service.js.map