import { z } from "zod";
const numberPreprocess = (val) => {
    if (val === "" || val === undefined || val === null || val === "null" || val === "undefined") {
        return undefined;
    }
    const num = Number(val);
    return isNaN(num) ? undefined : num;
};
const imageSchema = z.object({
    url: z.string().url("Invalid image URL"),
    public_id: z.string().min(1, "Image public ID is required"),
});
export const createReviewSchema = z.object({
    rating: z.preprocess(numberPreprocess, z.number().int().min(1, "Rating must be at least 1").max(5, "Rating cannot be more than 5")),
    comment: z.string().trim().nullable().optional(),
    images: z.array(imageSchema).nullable().optional(),
});
export const updateReviewSchema = z.object({
    rating: z.preprocess(numberPreprocess, z.number().int().min(1, "Rating must be at least 1").max(5, "Rating cannot be more than 5")).optional(),
    comment: z.string().trim().nullable().optional(),
    images: z.array(imageSchema).nullable().optional(),
});
export const sellerReplySchema = z.object({
    reply: z.string().trim().min(1, "Reply message is required"),
});
//# sourceMappingURL=reviews.schema.js.map