import { z } from "zod";
const numberPreprocess = (val) => {
    if (val === "" || val === undefined || val === null || val === "null" || val === "undefined") {
        return null;
    }
    const num = Number(val);
    return isNaN(num) ? null : num;
};
export const registerBrandSchema = z.object({
    brandName: z.string().trim().min(1, "Brand name is required"),
    slug: z
        .string()
        .trim()
        .min(1, "Slug is required")
        .regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
    description: z.string().trim().nullable().optional(),
    contactEmail: z
        .string()
        .trim()
        .email("Invalid contact email format")
        .or(z.literal(""))
        .nullable()
        .optional(),
    contactPhone: z.string().trim().nullable().optional(),
    address: z.string().trim().nullable().optional(),
    gstNumber: z.string().trim().nullable().optional(),
    // Location coordinates
    latitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    longitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    // Location details
    stateName: z.string().trim().min(1, "State name is required"),
    stateCode: z.string().trim().nullable().optional(),
    stateLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    stateLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    cityName: z.string().trim().min(1, "City name is required"),
    cityLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    cityLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
});
export const updateBrandSchema = z.object({
    brandName: z.string().trim().min(1).optional(),
    slug: z
        .string()
        .trim()
        .min(1)
        .regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens")
        .optional(),
    description: z.string().trim().nullable().optional(),
    contactEmail: z
        .string()
        .trim()
        .email("Invalid contact email format")
        .or(z.literal(""))
        .nullable()
        .optional(),
    contactPhone: z.string().trim().nullable().optional(),
    address: z.string().trim().nullable().optional(),
    gstNumber: z.string().trim().nullable().optional(),
    isActive: z.boolean().optional(),
    // Location coordinates
    latitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    longitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    // Location details
    stateName: z.string().trim().min(1).optional(),
    stateCode: z.string().trim().nullable().optional(),
    stateLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    stateLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    cityName: z.string().trim().min(1).optional(),
    cityLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
    cityLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
});
//# sourceMappingURL=brands.schema.js.map