import { z } from "zod";
export const createCategorySchema = z.object({
    name: z.string().trim().min(1, "Category name is required"),
    brandId: z.string().uuid("Invalid Brand ID format"),
    description: z.string().trim().nullable().optional(),
    parentId: z.string().uuid("Invalid Parent Category ID format").nullable().optional(),
    isActive: z.boolean().optional(),
});
export const updateCategorySchema = z.object({
    name: z.string().trim().min(1).optional(),
    description: z.string().trim().nullable().optional(),
    parentId: z.string().uuid("Invalid Parent Category ID format").nullable().optional(),
    isActive: z.boolean().optional(),
});
//# sourceMappingURL=categories.schema.js.map