import { z } from "zod";
export declare const createCommentSchema: z.ZodObject<{
    content: z.ZodString;
}, z.core.$strip>;
export declare const updateCommentSchema: z.ZodObject<{
    content: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateCommentDto = z.infer<typeof createCommentSchema>;
export type UpdateCommentDto = z.infer<typeof updateCommentSchema>;
//# sourceMappingURL=comment.schema.d.ts.map