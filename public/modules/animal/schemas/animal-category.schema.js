import { z } from "zod";
export const createCategorySchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
});
export const updateCategorySchema = z.object({
    name: z.string().min(1, "Name is required").optional(),
    description: z.string().optional(),
});
export const createSubCategorySchema = z.object({
    categoryId: z.string().uuid("Invalid Category ID"),
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
});
export const updateSubCategorySchema = z.object({
    name: z.string().min(1, "Name is required").optional(),
    description: z.string().optional(),
    categoryId: z.string().uuid("Invalid Category ID").optional(),
});
//# sourceMappingURL=animal-category.schema.js.map