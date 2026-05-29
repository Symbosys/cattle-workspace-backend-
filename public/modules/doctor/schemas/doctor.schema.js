import { z } from "zod";
const numberPreprocess = (val) => {
    if (val === "" || val === undefined || val === null || val === "null" || val === "undefined") {
        return null;
    }
    const num = Number(val);
    return isNaN(num) ? null : num;
};
export const registerDoctorSchema = z.object({
    licenseNumber: z.string().trim().nullable().optional(),
    specialization: z.string().trim().min(1, "Specialization is required"),
    experienceYears: z.preprocess((val) => Number(val), z.number().int().nonnegative("Experience years must be non-negative")),
    consultationFee: z.preprocess((val) => Number(val), z.number().nonnegative("Consultation fee must be non-negative")),
    // Location coordinates
    latitude: z.preprocess((val) => Number(val), z.number("Latitude must be a valid number")),
    longitude: z.preprocess((val) => Number(val), z.number("Longitude must be a valid number")),
    // Location details
    stateName: z.string().trim().min(1, "State name is required"),
    stateCode: z.string().trim().nullable().optional(),
    stateLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    stateLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    cityName: z.string().trim().min(1, "City name is required"),
    cityLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    cityLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
});
export const updateDoctorSchema = z.object({
    licenseNumber: z.string().trim().nullable().optional(),
    specialization: z.string().trim().min(1).optional(),
    experienceYears: z.preprocess((val) => (val === undefined ? undefined : Number(val)), z.number().int().nonnegative().optional()),
    consultationFee: z.preprocess((val) => (val === undefined ? undefined : Number(val)), z.number().nonnegative().optional()),
    // Location coordinates
    latitude: z.preprocess((val) => (val === undefined ? undefined : Number(val)), z.number().optional()),
    longitude: z.preprocess((val) => (val === undefined ? undefined : Number(val)), z.number().optional()),
    // Location details
    stateName: z.string().trim().min(1).optional(),
    stateCode: z.string().trim().nullable().optional(),
    stateLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    stateLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    cityName: z.string().trim().min(1).optional(),
    cityLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    cityLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
});
//# sourceMappingURL=doctor.schema.js.map