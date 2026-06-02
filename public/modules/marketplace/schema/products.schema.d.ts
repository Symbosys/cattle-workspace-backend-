import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    brandId: z.ZodString;
    categoryId: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        ARCHIVED: "ARCHIVED";
        OUT_OF_STOCK: "OUT_OF_STOCK";
    }>>;
    metaTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metaDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    images: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        public_id: z.ZodString;
    }, z.core.$strip>>>>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    sku: z.ZodOptional<z.ZodString>;
    price: z.ZodPreprocess<z.ZodOptional<z.ZodNumber>>;
    compareAtPrice: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    stock: z.ZodPreprocess<z.ZodOptional<z.ZodNumber>>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    categoryId: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        ARCHIVED: "ARCHIVED";
        OUT_OF_STOCK: "OUT_OF_STOCK";
    }>>;
    metaTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metaDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    images: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        public_id: z.ZodString;
    }, z.core.$strip>>>>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
}, z.core.$strip>;
export type CreateProductDto = z.infer<typeof createProductSchema>;
export type UpdateProductDto = z.infer<typeof updateProductSchema>;
//# sourceMappingURL=products.schema.d.ts.map