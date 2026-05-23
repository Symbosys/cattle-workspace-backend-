import { db } from "../../../db/db.js";
import { Prisma } from "../../../types/types.js";
export class AnimalCategoryService {
    // ======================== CATEGORY ========================
    static async createCategory(data) {
        return await db.category.create({ data });
    }
    static async getAllCategories() {
        return await db.category.findMany({
            include: { subCategories: true },
        });
    }
    static async getCategoryById(id) {
        return await db.category.findUnique({ where: { id } });
    }
    static async updateCategory(id, data) {
        return await db.category.update({
            where: { id },
            data,
        });
    }
    // ======================== SUBCATEGORY ========================
    static async createSubCategory(data) {
        return await db.subCategory.create({ data });
    }
    static async getAllSubCategories() {
        return await db.subCategory.findMany({
            include: { category: true },
        });
    }
    static async getSubCategoryById(id) {
        return await db.subCategory.findUnique({ where: { id } });
    }
    static async updateSubCategory(id, data) {
        return await db.subCategory.update({
            where: { id },
            data,
        });
    }
}
//# sourceMappingURL=animal-category.service.js.map