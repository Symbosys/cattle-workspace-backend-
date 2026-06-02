import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { createVariantSchema, updateVariantSchema } from "../schema/variants.schema.js";
import { VariantsService } from "../services/variants.service.js";
import { uploadToCloudinary } from "../../../config/cloudinary.js";

/**
 * Create a new product variant
 */
export const createVariant = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const productId = req.params.productId as string;
  if (!productId) {
    return next(new ErrorResponse("Product ID is required", 400));
  }

  // Pre-parse potentially JSON stringified body values (useful if form-data is used)
  const body = { ...req.body };
  if (typeof body.imageUrl === "string") {
    try {
      body.imageUrl = JSON.parse(body.imageUrl);
    } catch {}
  }

  const validated = createVariantSchema.parse(body);

  // Upload image to Cloudinary if provided as a file
  let imageUrl = validated.imageUrl || null;
  if (req.file) {
    const uploaded = await uploadToCloudinary(req.file.buffer, "product_variants");
    imageUrl = {
      url: uploaded.secure_url,
      public_id: uploaded.public_id,
    };
  }

  const variant = await VariantsService.createVariant(req.user.id, productId, {
    sku: validated.sku,
    title: validated.title,
    price: validated.price,
    compareAtPrice: validated.compareAtPrice,
    stock: validated.stock,
    imageUrl,
    isActive: validated.isActive,
    isDefault: validated.isDefault,
  });

  return SuccessResponse(res, "Variant created successfully", variant, 201);
});

/**
 * Update an existing product variant
 */
export const updateVariant = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Variant ID is required", 400));
  }

  const body = { ...req.body };
  if (typeof body.imageUrl === "string") {
    try {
      body.imageUrl = JSON.parse(body.imageUrl);
    } catch {}
  }

  const validated = updateVariantSchema.parse(body);

  // Upload image to Cloudinary if provided as a file
  let imageUrl = validated.imageUrl;
  if (req.file) {
    const uploaded = await uploadToCloudinary(req.file.buffer, "product_variants");
    imageUrl = {
      url: uploaded.secure_url,
      public_id: uploaded.public_id,
    };
  }

  const updatedVariant = await VariantsService.updateVariant(req.user.id, id, {
    sku: validated.sku,
    title: validated.title,
    price: validated.price,
    compareAtPrice: validated.compareAtPrice,
    stock: validated.stock,
    imageUrl,
    isActive: validated.isActive,
    isDefault: validated.isDefault,
  });

  return SuccessResponse(res, "Variant updated successfully", updatedVariant, 200);
});

/**
 * Get product variant by ID
 */
export const getVariantById = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Variant ID is required", 400));
  }

  const variant = await VariantsService.getVariantById(id);
  if (!variant) {
    return next(new ErrorResponse("Variant not found", 404));
  }

  return SuccessResponse(res, "Variant fetched successfully", variant, 200);
});

/**
 * Delete a product variant
 */
export const deleteVariant = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Variant ID is required", 400));
  }

  await VariantsService.deleteVariant(req.user.id, id);

  return SuccessResponse(res, "Variant deleted successfully", null, 200);
});
