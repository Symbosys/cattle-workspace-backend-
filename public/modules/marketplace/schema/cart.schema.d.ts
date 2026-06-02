import { z } from "zod";
export declare const addToCartSchema: z.ZodObject<{
    variantId: z.ZodString;
    quantity: z.ZodPreprocess<z.ZodDefault<z.ZodNumber>>;
}, z.core.$strip>;
export declare const updateCartItemSchema: z.ZodObject<{
    quantity: z.ZodPreprocess<z.ZodNumber>;
}, z.core.$strip>;
export type AddToCartDto = z.infer<typeof addToCartSchema>;
export type UpdateCartItemDto = z.infer<typeof updateCartItemSchema>;
//# sourceMappingURL=cart.schema.d.ts.map