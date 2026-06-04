import { z } from "zod";
export declare const toggleBookmarkSchema: z.ZodObject<{
    questionId: z.ZodString;
}, z.core.$strip>;
export declare const listBookmarksSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export type ToggleBookmarkDto = z.infer<typeof toggleBookmarkSchema>;
export type ListBookmarksQuery = z.infer<typeof listBookmarksSchema>;
//# sourceMappingURL=bookmark.schema.d.ts.map