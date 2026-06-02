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
export const createProductSchema = z.object({
    brandId: z.string().uuid("Invalid Brand ID format"),
    categoryId: z.string().uuid("Invalid Category ID format"),
    title: z.string().trim().min(1, "Product title is required"),
    description: z.string().trim().min(1, "Product description is required"),
    status: z.enum(["ACTIVE", "OUT_OF_STOCK", "ARCHIVED"]).optional(),
    metaTitle: z.string().trim().nullable().optional(),
    metaDescription: z.string().trim().nullable().optional(),
    images: z.array(imageSchema).nullable().optional(),
    attributes: z.record(z.string(), z.any()).nullable().optional(),
    // Optional top-level fields for simple product default variant
    sku: z.string().trim().optional(),
    price: z.preprocess(numberPreprocess, z.number().positive({ message: "Price must be a positive number" }).optional()),
    compareAtPrice: z.preprocess(nullableNumberPreprocess, z.number().positive({ message: "Compare at price must be positive" }).nullable().optional()),
    stock: z.preprocess(numberPreprocess, z.number().int().nonnegative().optional()),
    variants: z
        .array(z.object({
        sku: z.string().trim().min(1, "SKU is required"),
        title: z.string().trim().min(1, "Variant title is required"),
        price: z.preprocess(numberPreprocess, z.number().positive({ message: "Price must be a positive number" })),
        compareAtPrice: z.preprocess(nullableNumberPreprocess, z.number().positive({ message: "Compare at price must be positive" }).nullable().optional()),
        stock: z.preprocess(numberPreprocess, z.number().int().nonnegative().optional()),
        imageUrl: imageSchema.nullable().optional(),
        isActive: z.boolean().optional(),
        isDefault: z.boolean().optional(),
    }))
        .optional(),
}).refine((data) => {
    if (!data.variants || data.variants.length === 0) {
        return !!data.sku && data.price !== undefined;
    }
    return true;
}, {
    message: "Sku and Price are required if variants list is not provided",
    path: ["sku"],
});
export const updateProductSchema = z.object({
    categoryId: z.string().uuid("Invalid Category ID format").optional(),
    title: z.string().trim().min(1).optional(),
    description: z.string().trim().min(1).optional(),
    status: z.enum(["ACTIVE", "OUT_OF_STOCK", "ARCHIVED"]).optional(),
    metaTitle: z.string().trim().nullable().optional(),
    metaDescription: z.string().trim().nullable().optional(),
    images: z.array(imageSchema).nullable().optional(),
    attributes: z.record(z.string(), z.any()).nullable().optional(),
});
//# sourceMappingURL=products.schema.js.map