import { z } from "zod";
export declare const createDoctorReviewSchema: z.ZodObject<{
    appointmentId: z.ZodString;
    rating: z.ZodPreprocess<z.ZodNumber>;
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const getDoctorReviewsQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export type CreateDoctorReviewDto = z.infer<typeof createDoctorReviewSchema>;
//# sourceMappingURL=review.schema.d.ts.map