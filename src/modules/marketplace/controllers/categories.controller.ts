import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { createCategorySchema, updateCategorySchema } from "../schema/categories.schema.js";
import { CategoriesService } from "../services/categories.service.js";
import { BrandsService } from "../services/brands.service.js";

/**
 * Create a new marketplace category
 */
export const createCategory = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const validated = createCategorySchema.parse(req.body);

  // Verify brand ownership
  const brand = await BrandsService.getBrandById(validated.brandId);
  if (!brand) {
    return next(new ErrorResponse("Brand profile not found", 404));
  }
  if (brand.userId !== req.user.id) {
    return next(new ErrorResponse("You are not authorized to manage categories for this brand", 403));
  }

  const category = await CategoriesService.createCategory(validated.brandId, {
    name: validated.name,
    description: validated.description,
    parentId: validated.parentId,
    isActive: validated.isActive,
  });

  return SuccessResponse(res, "Category created successfully", category, 201);
});

/**
 * Update an existing marketplace category
 */
export const updateCategory = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Category ID is required", 400));
  }

  const existingCategory = await CategoriesService.getCategoryById(id);
  if (!existingCategory) {
    return next(new ErrorResponse("Category not found", 404));
  }

  // Verify brand ownership
  const brand = await BrandsService.getBrandById(existingCategory.brandId);
  if (!brand || brand.userId !== req.user.id) {
    return next(new ErrorResponse("You are not authorized to update this category", 403));
  }

  const validated = updateCategorySchema.parse(req.body);

  const updatedCategory = await CategoriesService.updateCategory(id, {
    name: validated.name,
    description: validated.description,
    parentId: validated.parentId,
    isActive: validated.isActive,
  });

  return SuccessResponse(res, "Category updated successfully", updatedCategory, 200);
});

/**
 * Get category by ID
 */
export const getCategoryById = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Category ID is required", 400));
  }

  const category = await CategoriesService.getCategoryById(id);
  if (!category) {
    return next(new ErrorResponse("Category not found", 404));
  }

  return SuccessResponse(res, "Category fetched successfully", category, 200);
});

/**
 * Get all categories matching optional filters
 */
export const getCategories = asyncHandler(async (req, res, next) => {
  const { brandId, parentId, isActive } = req.query;

  let parsedParentId: string | null | undefined = undefined;
  if (parentId === "null") {
    parsedParentId = null;
  } else if (typeof parentId === "string") {
    parsedParentId = parentId;
  }

  let parsedIsActive: boolean | undefined = undefined;
  if (isActive === "true") {
    parsedIsActive = true;
  } else if (isActive === "false") {
    parsedIsActive = false;
  }

  const categories = await CategoriesService.getCategories({
    brandId: brandId ? (brandId as string) : undefined,
    parentId: parsedParentId,
    isActive: parsedIsActive,
  });

  return SuccessResponse(res, "Categories fetched successfully", categories, 200);
});

/**
 * Delete a category
 */
export const deleteCategory = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Category ID is required", 400));
  }

  const existingCategory = await CategoriesService.getCategoryById(id);
  if (!existingCategory) {
    return next(new ErrorResponse("Category not found", 404));
  }

  // Verify brand ownership
  const brand = await BrandsService.getBrandById(existingCategory.brandId);
  if (!brand || brand.userId !== req.user.id) {
    return next(new ErrorResponse("You are not authorized to delete this category", 403));
  }

  await CategoriesService.deleteCategory(id);

  return SuccessResponse(res, "Category deleted successfully", null, 200);
});
