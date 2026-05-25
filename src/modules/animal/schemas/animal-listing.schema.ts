import { z } from "zod";

// Helper preprocessors for multipart/form-data fields
const numberPreprocess = (val: any) => {
  if (val === "" || val === undefined || val === null || val === "null" || val === "undefined") {
    return null;
  }
  const num = Number(val);
  return isNaN(num) ? null : num;
};

const booleanPreprocess = (val: any) => {
  if (val === "true" || val === "1" || val === 1 || val === true) {
    return true;
  }
  return false;
};

export const createAnimalListingSchema = z.object({
  // Animal details
  mainCategoryId: z.string().uuid("Invalid mainCategoryId"),
  subCategoryId: z.string().uuid("Invalid subCategoryId"),
  name: z.string().trim().nullable().optional(),
  category: z.string().trim().min(1, "Category is required"),
  breed: z.string().trim().nullable().optional(),
  ageMonths: z.preprocess(numberPreprocess, z.number().int().nonnegative().nullable().optional()),
  gender: z.string().trim().nullable().optional(),
  weightKg: z.preprocess(numberPreprocess, z.number().positive().nullable().optional()),
  description: z.string().trim().nullable().optional(),
  doesGiveMilk: z.preprocess(booleanPreprocess, z.boolean().default(false)),
  dailyMilkProdLtr: z.preprocess(numberPreprocess, z.number().nonnegative().nullable().optional()),

  // Listing details
  title: z.string().trim().min(1, "Title is required"),
  price: z.preprocess((val) => Number(val), z.number().positive("Price must be a positive number")),
  listingDescription: z.string().trim().min(1, "Listing description is required"),
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
  areaName: z.string().trim().nullable().optional(),
  areaLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
  areaLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
});

export const updateAnimalListingSchema = z.object({
  // Animal details
  mainCategoryId: z.string().uuid("Invalid mainCategoryId").optional(),
  subCategoryId: z.string().uuid("Invalid subCategoryId").optional(),
  name: z.string().trim().nullable().optional(),
  category: z.string().trim().min(1).optional(),
  breed: z.string().trim().nullable().optional(),
  ageMonths: z.preprocess(numberPreprocess, z.number().int().nonnegative().nullable().optional()),
  gender: z.string().trim().nullable().optional(),
  weightKg: z.preprocess(numberPreprocess, z.number().positive().nullable().optional()),
  description: z.string().trim().nullable().optional(),
  doesGiveMilk: z.preprocess(booleanPreprocess, z.boolean().optional()),
  dailyMilkProdLtr: z.preprocess(numberPreprocess, z.number().nonnegative().nullable().optional()),

  // Listing details
  title: z.string().trim().min(1).optional(),
  price: z.preprocess((val) => (val === undefined ? undefined : Number(val)), z.number().positive().optional()),
  listingDescription: z.string().trim().min(1).optional(),
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
  areaName: z.string().trim().nullable().optional(),
  areaLatitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),
  areaLongitude: z.preprocess(numberPreprocess, z.number().nullable().optional()),

  // Images to keep (IDs)
  keepImageIds: z.preprocess(
    (val) => {
      if (typeof val === "string") {
        try {
          return JSON.parse(val);
        } catch {
          return [val];
        }
      }
      return val;
    },
    z.array(z.string().uuid()).optional()
  ),
});

export type CreateAnimalListingDto = z.infer<typeof createAnimalListingSchema>;
export type UpdateAnimalListingDto = z.infer<typeof updateAnimalListingSchema>;
