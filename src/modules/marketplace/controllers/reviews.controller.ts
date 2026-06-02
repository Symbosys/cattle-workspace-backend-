import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { createReviewSchema, updateReviewSchema, sellerReplySchema } from "../schema/reviews.schema.js";
import { ReviewsService } from "../services/reviews.service.js";
import { uploadMultipleToCloudinary } from "../../../config/cloudinary.js";
import { db } from "../../../db/db.js";

/**
 * Submit a review for a product
 */
export const createReview = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const productId = req.params.productId as string;
  if (!productId) {
    return next(new ErrorResponse("Product ID is required", 400));
  }

  const body = { ...req.body };
  if (typeof body.images === "string") {
    try {
      body.images = JSON.parse(body.images);
    } catch {}
  }

  const validated = createReviewSchema.parse(body);

  // Upload images to Cloudinary if sent as files
  let imagesList = validated.images || [];
  if (req.files) {
    const files = Array.isArray(req.files)
      ? req.files
      : Object.values(req.files).flat();
    if (files.length > 0) {
      const uploaded = await uploadMultipleToCloudinary(
        files.map((f) => f.buffer),
        "product_reviews"
      );
      const newImages = uploaded.map((img) => ({
        url: img.secure_url,
        public_id: img.public_id,
      }));
      imagesList = [...imagesList, ...newImages];
    }
  }

  const review = await ReviewsService.createReview(req.user.id, productId, {
    rating: validated.rating,
    comment: validated.comment,
    images: imagesList.length > 0 ? imagesList : null,
  });

  return SuccessResponse(res, "Review submitted successfully", review, 201);
});

/**
 * Update an existing review
 */
export const updateReview = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Review ID is required", 400));
  }

  const body = { ...req.body };
  if (typeof body.images === "string") {
    try {
      body.images = JSON.parse(body.images);
    } catch {}
  }

  const validated = updateReviewSchema.parse(body);

  // If new files are uploaded, merge them
  let updatedImagesList = validated.images;
  if (req.files) {
    const files = Array.isArray(req.files)
      ? req.files
      : Object.values(req.files).flat();
    if (files.length > 0) {
      const uploaded = await uploadMultipleToCloudinary(
        files.map((f) => f.buffer),
        "product_reviews"
      );
      const newImages = uploaded.map((img) => ({
        url: img.secure_url,
        public_id: img.public_id,
      }));
      if (updatedImagesList === undefined) {
        const existingReview = await db.productReview.findUnique({ where: { id } });
        if (existingReview) {
          const currentImages = (existingReview.images as any) || [];
          updatedImagesList = [...currentImages, ...newImages];
        } else {
          updatedImagesList = newImages;
        }
      } else {
        updatedImagesList = [...(updatedImagesList || []), ...newImages];
      }
    }
  }

  const updatedReview = await ReviewsService.updateReview(req.user.id, id, {
    rating: validated.rating,
    comment: validated.comment,
    images: updatedImagesList,
  });

  return SuccessResponse(res, "Review updated successfully", updatedReview, 200);
});

/**
 * Add a reply from the seller/brand owner
 */
export const addSellerReply = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Review ID is required", 400));
  }

  const validated = sellerReplySchema.parse(req.body);

  const updatedReview = await ReviewsService.addSellerReply(req.user.id, id, validated.reply);

  return SuccessResponse(res, "Reply submitted successfully", updatedReview, 200);
});

/**
 * Fetch reviews list for a specific product
 */
export const getProductReviews = asyncHandler(async (req, res, next) => {
  const productId = req.params.productId as string;
  if (!productId) {
    return next(new ErrorResponse("Product ID is required", 400));
  }

  const { rating, page, limit } = req.query;

  const parsedRating = rating ? parseInt(rating as string, 10) : undefined;
  const parsedPage = page ? parseInt(page as string, 10) : undefined;
  const parsedLimit = limit ? parseInt(limit as string, 10) : undefined;

  const result = await ReviewsService.getProductReviews(productId, {
    rating: isNaN(parsedRating as any) ? undefined : parsedRating,
    page: isNaN(parsedPage as any) ? undefined : parsedPage,
    limit: isNaN(parsedLimit as any) ? undefined : parsedLimit,
  });

  return SuccessResponse(res, "Reviews fetched successfully", result, 200);
});

/**
 * Delete a product review
 */
export const deleteReview = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Review ID is required", 400));
  }

  await ReviewsService.deleteReview(req.user.id, id);

  return SuccessResponse(res, "Review deleted successfully", null, 200);
});
