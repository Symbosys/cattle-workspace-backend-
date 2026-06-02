import { z } from "zod";
const numberPreprocess = (val) => {
    if (val === "" || val === undefined || val === null || val === "null" || val === "undefined") {
        return undefined;
    }
    const num = Number(val);
    return isNaN(num) ? undefined : num;
};
export const addToCartSchema = z.object({
    variantId: z.string().uuid("Invalid variant ID"),
    quantity: z.preprocess(numberPreprocess, z.number().int().min(1, "Quantity must be at least 1").default(1)),
});
export const updateCartItemSchema = z.object({
    quantity: z.preprocess(numberPreprocess, z.number().int().min(1, "Quantity must be at least 1")),
});
//# sourceMappingURL=cart.schema.js.map