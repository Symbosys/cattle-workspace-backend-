import { z } from "zod";
export declare const registerDoctorSchema: z.ZodObject<{
    licenseNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    specialization: z.ZodString;
    experienceYears: z.ZodPreprocess<z.ZodNumber>;
    consultationFee: z.ZodPreprocess<z.ZodNumber>;
    latitude: z.ZodPreprocess<z.ZodNumber>;
    longitude: z.ZodPreprocess<z.ZodNumber>;
    stateName: z.ZodString;
    stateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stateLatitude: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    stateLongitude: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    cityName: z.ZodString;
    cityLatitude: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    cityLongitude: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
}, z.core.$strip>;
export declare const updateDoctorSchema: z.ZodObject<{
    licenseNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    specialization: z.ZodOptional<z.ZodString>;
    experienceYears: z.ZodPreprocess<z.ZodOptional<z.ZodNumber>>;
    consultationFee: z.ZodPreprocess<z.ZodOptional<z.ZodNumber>>;
    latitude: z.ZodPreprocess<z.ZodOptional<z.ZodNumber>>;
    longitude: z.ZodPreprocess<z.ZodOptional<z.ZodNumber>>;
    stateName: z.ZodOptional<z.ZodString>;
    stateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stateLatitude: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    stateLongitude: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    cityName: z.ZodOptional<z.ZodString>;
    cityLatitude: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    cityLongitude: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
}, z.core.$strip>;
export type RegisterDoctorDto = z.infer<typeof registerDoctorSchema>;
export type UpdateDoctorDto = z.infer<typeof updateDoctorSchema>;
//# sourceMappingURL=doctor.schema.d.ts.map