import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { createProductSchema, updateProductSchema } from "../schema/products.schema.js";
import { ProductsService } from "../services/products.service.js";
import { uploadMultipleToCloudinary } from "../../../config/cloudinary.js";

/**
 * Create a new marketplace product
 */
export const createProduct = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  // Pre-parse fields that might be sent as JSON strings in multipart form-data
  const body = { ...req.body };
  if (typeof body.images === "string") {
    try {
      body.images = JSON.parse(body.images);
    } catch {}
  }
  if (typeof body.variants === "string") {
    try {
      body.variants = JSON.parse(body.variants);
    } catch {}
  }
  if (typeof body.attributes === "string") {
    try {
      body.attributes = JSON.parse(body.attributes);
    } catch {}
  }

  const validated = createProductSchema.parse(body);

  // Upload images to Cloudinary if provided as files
  let imagesList = validated.images || [];
  if (req.files) {
    const files = Array.isArray(req.files)
      ? req.files
      : Object.values(req.files).flat();
    if (files.length > 0) {
      const uploaded = await uploadMultipleToCloudinary(
        files.map((f) => f.buffer),
        "product_images"
      );
      const newImages = uploaded.map((img) => ({
        url: img.secure_url,
        public_id: img.public_id,
      }));
      imagesList = [...imagesList, ...newImages];
    }
  }

  const product = await ProductsService.createProduct(req.user.id, {
    brandId: validated.brandId,
    categoryId: validated.categoryId,
    title: validated.title,
    description: validated.description,
    status: validated.status,
    metaTitle: validated.metaTitle,
    metaDescription: validated.metaDescription,
    images: imagesList.length > 0 ? imagesList : null,
    attributes: validated.attributes,
    sku: validated.sku,
    price: validated.price,
    compareAtPrice: validated.compareAtPrice,
    stock: validated.stock,
    variants: validated.variants,
  });

  return SuccessResponse(res, "Product created successfully", product, 201);
});

/**
 * Update an existing product
 */
export const updateProduct = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Product ID is required", 400));
  }

  // Pre-parse fields that might be sent as JSON strings in multipart form-data
  const body = { ...req.body };
  if (typeof body.images === "string") {
    try {
      body.images = JSON.parse(body.images);
    } catch {}
  }
  if (typeof body.attributes === "string") {
    try {
      body.attributes = JSON.parse(body.attributes);
    } catch {}
  }

  const validated = updateProductSchema.parse(body);

  // If new image files are uploaded, upload them and merge them
  let updatedImagesList = validated.images;
  if (req.files) {
    const files = Array.isArray(req.files)
      ? req.files
      : Object.values(req.files).flat();
    if (files.length > 0) {
      const uploaded = await uploadMultipleToCloudinary(
        files.map((f) => f.buffer),
        "product_images"
      );
      const newImages = uploaded.map((img) => ({
        url: img.secure_url,
        public_id: img.public_id,
      }));
      // If client didn't supply an images array, we default to maintaining existing list and appending
      if (updatedImagesList === undefined) {
        const existingProduct = await ProductsService.getProductById(id);
        if (existingProduct) {
          const currentImages = (existingProduct.images as any) || [];
          updatedImagesList = [...currentImages, ...newImages];
        } else {
          updatedImagesList = newImages;
        }
      } else {
        // If client supplied an updated images array, append new uploads to it
        updatedImagesList = [...(updatedImagesList || []), ...newImages];
      }
    }
  }

  const updatedProduct = await ProductsService.updateProduct(req.user.id, id, {
    categoryId: validated.categoryId,
    title: validated.title,
    description: validated.description,
    status: validated.status,
    metaTitle: validated.metaTitle,
    metaDescription: validated.metaDescription,
    images: updatedImagesList,
    attributes: validated.attributes,
  });

  return SuccessResponse(res, "Product updated successfully", updatedProduct, 200);
});

/**
 * Get product by ID
 */
export const getProductById = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Product ID is required", 400));
  }

  const product = await ProductsService.getProductById(id);
  if (!product) {
    return next(new ErrorResponse("Product not found", 404));
  }

  return SuccessResponse(res, "Product fetched successfully", product, 200);
});

/**
 * Get product by Slug
 */
export const getProductBySlug = asyncHandler(async (req, res, next) => {
  const slug = req.params.slug as string;
  if (!slug) {
    return next(new ErrorResponse("Product slug is required", 400));
  }

  const product = await ProductsService.getProductBySlug(slug);
  if (!product) {
    return next(new ErrorResponse("Product not found", 404));
  }

  return SuccessResponse(res, "Product fetched successfully", product, 200);
});

/**
 * Get all products matching filters
 */
export const getProducts = asyncHandler(async (req, res, next) => {
  const { brandId, categoryId, status, search, minPrice, maxPrice, page, limit } = req.query;

  const parsedMinPrice = minPrice ? parseFloat(minPrice as string) : undefined;
  const parsedMaxPrice = maxPrice ? parseFloat(maxPrice as string) : undefined;
  const parsedPage = page ? parseInt(page as string, 10) : undefined;
  const parsedLimit = limit ? parseInt(limit as string, 10) : undefined;

  const result = await ProductsService.getProducts({
    brandId: brandId ? (brandId as string) : undefined,
    categoryId: categoryId ? (categoryId as string) : undefined,
    status: status ? (status as any) : undefined,
    search: search ? (search as string) : undefined,
    minPrice: isNaN(parsedMinPrice as any) ? undefined : parsedMinPrice,
    maxPrice: isNaN(parsedMaxPrice as any) ? undefined : parsedMaxPrice,
    page: isNaN(parsedPage as any) ? undefined : parsedPage,
    limit: isNaN(parsedLimit as any) ? undefined : parsedLimit,
  });

  return SuccessResponse(res, "Products fetched successfully", result, 200);
});

/**
 * Delete product
 */
export const deleteProduct = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Product ID is required", 400));
  }

  await ProductsService.deleteProduct(req.user.id, id);

  return SuccessResponse(res, "Product deleted successfully", null, 200);
});
