import { z } from "zod";
const numberPreprocess = (val) => {
    if (val === "" || val === undefined || val === null || val === "null" || val === "undefined") {
        return undefined;
    }
    const num = Number(val);
    return isNaN(num) ? undefined : num;
};
const nullableNumberPreprocess = (val) => {
    if (val === "" || val === undefined || val === null || val === "null" || val === "undefined") {
        return null;
    }
    const num = Number(val);
    return isNaN(num) ? null : num;
};
const imageSchema = z.object({
    url: z.string().url("Invalid image URL"),
    public_id: z.string().min(1, "Image public ID is required"),
});
export const createVariantSchema = z.object({
    sku: z.string().trim().min(1, "SKU is required"),
    title: z.string().trim().min(1, "Variant title is required"),
    price: z.preprocess(numberPreprocess, z.number().positive({ message: "Price must be a positive number" })),
    compareAtPrice: z.preprocess(nullableNumberPreprocess, z.number().positive({ message: "Compare at price must be positive" }).nullable().optional()),
    stock: z.preprocess(numberPreprocess, z.number().int().nonnegative().optional()),
    imageUrl: imageSchema.nullable().optional(),
    isActive: z.boolean().optional(),
    isDefault: z.boolean().optional(),
});
export const updateVariantSchema = z.object({
    sku: z.string().trim().min(1).optional(),
    title: z.string().trim().min(1).optional(),
    price: z.preprocess(numberPreprocess, z.number().positive({ message: "Price must be a positive number" })).optional(),
    compareAtPrice: z.preprocess(nullableNumberPreprocess, z.number().positive({ message: "Compare at price must be positive" }).nullable().optional()),
    stock: z.preprocess(numberPreprocess, z.number().int().nonnegative().optional()),
    imageUrl: imageSchema.nullable().optional(),
    isActive: z.boolean().optional(),
    isDefault: z.boolean().optional(),
});
//# sourceMappingURL=variants.schema.js.map