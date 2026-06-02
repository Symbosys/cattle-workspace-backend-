import { z } from "zod";
export declare const createVariantSchema: z.ZodObject<{
    sku: z.ZodString;
    title: z.ZodString;
    price: z.ZodPreprocess<z.ZodNumber>;
    compareAtPrice: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    stock: z.ZodPreprocess<z.ZodOptional<z.ZodNumber>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        url: z.ZodString;
        public_id: z.ZodString;
    }, z.core.$strip>>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateVariantSchema: z.ZodObject<{
    sku: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodPreprocess<z.ZodNumber>>;
    compareAtPrice: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    stock: z.ZodPreprocess<z.ZodOptional<z.ZodNumber>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        url: z.ZodString;
        public_id: z.ZodString;
    }, z.core.$strip>>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateVariantDto = z.infer<typeof createVariantSchema>;
export type UpdateVariantDto = z.infer<typeof updateVariantSchema>;
//# sourceMappingURL=variants.schema.d.ts.map