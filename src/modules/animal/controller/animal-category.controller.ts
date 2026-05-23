import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { AnimalCategoryService } from "../services/animal-category.service.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";
import { createCategorySchema, updateCategorySchema, createSubCategorySchema, updateSubCategorySchema } from "../schemas/animal-category.schema.js";
import { Prisma } from "../../../types/types.js";

// ======================== CATEGORY ========================

export const createCategory = asyncHandler(async (req, res, next) => {
  const validated = createCategorySchema.parse(req.body);

  let imageUrl: any = null;
  if (req.file) {
    imageUrl = await uploadToCloudinary(req.file.buffer, "animal_categories");
  }

  const data: Prisma.CategoryCreateInput = {
    name: validated.name,
    description: validated.description ?? null,
    imageUrl,
  };

  const category = await AnimalCategoryService.createCategory(data);

  return SuccessResponse(res, "Category created successfully", category, 201);
});

export const getAllCategories = asyncHandler(async (req, res, next) => {
  const categories = await AnimalCategoryService.getAllCategories();
  return SuccessResponse(res, "Categories retrieved successfully", categories, 200);
});

export const updateCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const validated = updateCategorySchema.parse(req.body);

  const existingCategory = await AnimalCategoryService.getCategoryById(id);
  if (!existingCategory) {
    return next(new ErrorResponse("Category not found", 404));
  }

  let imageUrl: any = existingCategory.imageUrl;
  if (req.file) {
    if (imageUrl && imageUrl.public_id) {
      await deleteFromCloudinary(imageUrl.public_id).catch((err) => console.error("Cloudinary delete err:", err));
    }
    imageUrl = await uploadToCloudinary(req.file.buffer, "animal_categories");
  }

  const data: Prisma.CategoryUpdateInput = {
    ...(validated.name !== undefined && { name: validated.name }),
    ...(validated.description !== undefined && { description: validated.description }),
    imageUrl,
  };

  const updatedCategory = await AnimalCategoryService.updateCategory(id, data);

  return SuccessResponse(res, "Category updated successfully", updatedCategory, 200);
});

// ======================== SUBCATEGORY ========================

export const createSubCategory = asyncHandler(async (req, res, next) => {
  const validated = createSubCategorySchema.parse(req.body);

  const existingCategory = await AnimalCategoryService.getCategoryById(validated.categoryId);
  if (!existingCategory) {
    return next(new ErrorResponse("Category not found", 404));
  }

  let imageUrl: any = null;
  if (req.file) {
    imageUrl = await uploadToCloudinary(req.file.buffer, "animal_subcategories");
  }

  const data: Prisma.SubCategoryUncheckedCreateInput = {
    categoryId: validated.categoryId,
    name: validated.name,
    description: validated.description ?? null,
    imageUrl,
  };

  const subCategory = await AnimalCategoryService.createSubCategory(data);

  return SuccessResponse(res, "SubCategory created successfully", subCategory, 201);
});

export const getAllSubCategories = asyncHandler(async (req, res, next) => {
  const subCategories = await AnimalCategoryService.getAllSubCategories();
  return SuccessResponse(res, "SubCategories retrieved successfully", subCategories, 200);
});

export const updateSubCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const validated = updateSubCategorySchema.parse(req.body);

  const existingSubCategory = await AnimalCategoryService.getSubCategoryById(id);
  if (!existingSubCategory) {
    return next(new ErrorResponse("SubCategory not found", 404));
  }

  if (validated.categoryId) {
    const existingCategory = await AnimalCategoryService.getCategoryById(validated.categoryId);
    if (!existingCategory) {
      return next(new ErrorResponse("New Category not found", 404));
    }
  }

  let imageUrl: any = existingSubCategory.imageUrl;
  if (req.file) {
    if (imageUrl && imageUrl.public_id) {
      await deleteFromCloudinary(imageUrl.public_id).catch((err) => console.error("Cloudinary delete err:", err));
    }
    imageUrl = await uploadToCloudinary(req.file.buffer, "animal_subcategories");
  }

  const data: Prisma.SubCategoryUncheckedUpdateInput = {
    ...(validated.name !== undefined && { name: validated.name }),
    ...(validated.description !== undefined && { description: validated.description }),
    ...(validated.categoryId !== undefined && { categoryId: validated.categoryId }),
    imageUrl,
  };

  const updatedSubCategory = await AnimalCategoryService.updateSubCategory(id, data);

  return SuccessResponse(res, "SubCategory updated successfully", updatedSubCategory, 200);
});
