import { z } from "zod";
export declare const createReviewSchema: z.ZodObject<{
    rating: z.ZodPreprocess<z.ZodNumber>;
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    images: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        public_id: z.ZodString;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export declare const updateReviewSchema: z.ZodObject<{
    rating: z.ZodOptional<z.ZodPreprocess<z.ZodNumber>>;
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    images: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        public_id: z.ZodString;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export declare const sellerReplySchema: z.ZodObject<{
    reply: z.ZodString;
}, z.core.$strip>;
export type CreateReviewDto = z.infer<typeof createReviewSchema>;
export type UpdateReviewDto = z.infer<typeof updateReviewSchema>;
export type SellerReplyDto = z.infer<typeof sellerReplySchema>;
//# sourceMappingURL=reviews.schema.d.ts.map