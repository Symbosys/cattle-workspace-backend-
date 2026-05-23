import { db } from "../../../db/db.js";
import { Prisma } from "../../../types/types.js";

export class AnimalCategoryService {
  // ======================== CATEGORY ========================
  public static async createCategory(data: Prisma.CategoryCreateInput) {
    return await db.category.create({ data });
  }

  public static async getAllCategories() {
    return await db.category.findMany({
      include: { subCategories: true },
    });
  }

  public static async getCategoryById(id: string) {
    return await db.category.findUnique({ where: { id } });
  }

  public static async updateCategory(id: string, data: Prisma.CategoryUpdateInput) {
    return await db.category.update({
      where: { id },
      data,
    });
  }

  // ======================== SUBCATEGORY ========================
  public static async createSubCategory(data: Prisma.SubCategoryUncheckedCreateInput) {
    return await db.subCategory.create({ data });
  }

  public static async getAllSubCategories() {
    return await db.subCategory.findMany({
      include: { category: true },
    });
  }

  public static async getSubCategoryById(id: string) {
    return await db.subCategory.findUnique({ where: { id } });
  }

  public static async updateSubCategory(id: string, data: Prisma.SubCategoryUncheckedUpdateInput) {
    return await db.subCategory.update({
      where: { id },
      data,
    });
  }
}
