import { z } from "zod";
export declare const createAnswerSchema: z.ZodObject<{
    content: z.ZodString;
}, z.core.$strip>;
export declare const updateAnswerSchema: z.ZodObject<{
    content: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const listAnswersSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    sort: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        votes: "votes";
        oldest: "oldest";
        newest: "newest";
    }>>>;
}, z.core.$strip>;
export type CreateAnswerDto = z.infer<typeof createAnswerSchema>;
export type UpdateAnswerDto = z.infer<typeof updateAnswerSchema>;
export type ListAnswersQuery = z.infer<typeof listAnswersSchema>;
//# sourceMappingURL=answer.schema.d.ts.map