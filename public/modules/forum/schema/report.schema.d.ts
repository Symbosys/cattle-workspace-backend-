import { z } from "zod";
export declare const createReportSchema: z.ZodObject<{
    targetType: z.ZodEnum<{
        QUESTION: "QUESTION";
        ANSWER: "ANSWER";
        COMMENT: "COMMENT";
    }>;
    targetId: z.ZodString;
    reason: z.ZodString;
}, z.core.$strip>;
export declare const reviewReportSchema: z.ZodObject<{
    status: z.ZodEnum<{
        RESOLVED: "RESOLVED";
        DISMISSED: "DISMISSED";
    }>;
    remarks: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const listReportsSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        RESOLVED: "RESOLVED";
        DISMISSED: "DISMISSED";
    }>>;
}, z.core.$strip>;
export type CreateReportDto = z.infer<typeof createReportSchema>;
export type ReviewReportDto = z.infer<typeof reviewReportSchema>;
export type ListReportsQuery = z.infer<typeof listReportsSchema>;
//# sourceMappingURL=report.schema.d.ts.map