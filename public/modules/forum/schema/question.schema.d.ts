import { z } from "zod";
export declare const createQuestionSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>>;
}, z.core.$strip>;
export declare const updateQuestionSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>;
}, z.core.$strip>;
export declare const listQuestionsSchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    tag: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    sort: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        votes: "votes";
        recent: "recent";
        unanswered: "unanswered";
    }>>>;
}, z.core.$strip>;
export type CreateQuestionDto = z.infer<typeof createQuestionSchema>;
export type UpdateQuestionDto = z.infer<typeof updateQuestionSchema>;
export type ListQuestionsQuery = z.infer<typeof listQuestionsSchema>;
//# sourceMappingURL=question.schema.d.ts.map