import { db } from "../../../db/db.js";
import { ErrorResponse } from "../../../utils/response.util.js";
import { ReviewsRepository } from "../repo/reviews.repository.js";
import { ProductsRepository } from "../repo/products.repository.js";
import { deleteFromCloudinary } from "../../../config/cloudinary.js";
export class ReviewsService {
    /**
     * Submit a product review (verifies purchase status automatically)
     */
    static async createReview(userId, productId, data) {
        return await db.$transaction(async (tx) => {
            // 1. Verify product exists
            const product = await ProductsRepository.findById(productId, tx);
            if (!product) {
                throw new ErrorResponse("Product not found", 404);
            }
            // 2. Check if user already reviewed this product (optional check, but good design)
            const existingReviews = await ReviewsRepository.count({
                userId,
                productId,
            }, tx);
            if (existingReviews > 0) {
                throw new ErrorResponse("You have already reviewed this product", 400);
            }
            // 3. Auto-detect verified purchase
            const isVerifiedPurchase = await ReviewsRepository.hasPurchasedProduct(userId, productId, tx);
            // 4. Create review
            return await ReviewsRepository.create({
                productId,
                userId,
                rating: data.rating,
                comment: data.comment ?? null,
                images: data.images,
                isVerifiedPurchase,
            }, tx);
        });
    }
    /**
     * Update an existing product review (allows editing rating/comment/images)
     */
    static async updateReview(userId, reviewId, data) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch review
            const review = await ReviewsRepository.findById(reviewId, tx);
            if (!review) {
                throw new ErrorResponse("Review not found", 404);
            }
            // 2. Verify author ownership
            if (review.userId !== userId) {
                throw new ErrorResponse("You are not authorized to update this review", 403);
            }
            // 3. Cloudinary cleanup for removed images
            if (data.images !== undefined) {
                const oldImages = review.images || [];
                const newImages = data.images || [];
                const newPublicIds = new Set(newImages.map((img) => img.public_id).filter(Boolean));
                for (const oldImg of oldImages) {
                    if (oldImg && oldImg.public_id && !newPublicIds.has(oldImg.public_id)) {
                        try {
                            await deleteFromCloudinary(oldImg.public_id);
                        }
                        catch (err) {
                            console.error(`Failed to delete removed review image: ${oldImg.public_id}`, err);
                        }
                    }
                }
            }
            // 4. Perform update
            const updateData = {};
            if (data.rating !== undefined)
                updateData.rating = data.rating;
            if (data.comment !== undefined)
                updateData.comment = data.comment;
            if (data.images !== undefined)
                updateData.images = data.images;
            return await ReviewsRepository.update(reviewId, updateData, tx);
        });
    }
    /**
     * Add a seller reply to a product review
     */
    static async addSellerReply(ownerId, reviewId, reply) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch review
            const review = await ReviewsRepository.findById(reviewId, tx);
            if (!review) {
                throw new ErrorResponse("Review not found", 404);
            }
            // 2. Verify brand owner ownership
            if (review.product.brand.userId !== ownerId) {
                throw new ErrorResponse("You are not authorized to reply to reviews for this product", 403);
            }
            // 3. Update sellerReply
            return await ReviewsRepository.update(reviewId, {
                sellerReply: reply,
            }, tx);
        });
    }
    /**
     * Delete a product review (author or brand owner can delete)
     */
    static async deleteReview(userId, reviewId) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch review
            const review = await ReviewsRepository.findById(reviewId, tx);
            if (!review) {
                throw new ErrorResponse("Review not found", 404);
            }
            // 2. Verify deletion rights (author or brand owner)
            const isAuthor = review.userId === userId;
            const isBrandOwner = review.product.brand.userId === userId;
            if (!isAuthor && !isBrandOwner) {
                throw new ErrorResponse("You are not authorized to delete this review", 403);
            }
            // 3. Cloudinary cleanups
            const reviewImages = review.images || [];
            for (const img of reviewImages) {
                if (img && img.public_id) {
                    try {
                        await deleteFromCloudinary(img.public_id);
                    }
                    catch (err) {
                        console.error(`Failed to delete review image ${img.public_id} on deletion:`, err);
                    }
                }
            }
            // 4. Delete review
            return await ReviewsRepository.delete(reviewId, tx);
        });
    }
    /**
     * Get reviews list with statistics breakdown
     */
    static async getProductReviews(productId, options) {
        const page = options.page ?? 1;
        const limit = options.limit ?? 10;
        const skip = (page - 1) * limit;
        const where = {
            productId,
        };
        if (options.rating !== undefined) {
            where.rating = options.rating;
        }
        const [reviews, total, stats] = await db.$transaction(async (tx) => {
            const items = await ReviewsRepository.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: "desc" },
            }, tx);
            const count = await ReviewsRepository.count(where, tx);
            const ratingStats = await ReviewsRepository.aggregateRatingStats(productId, tx);
            return [items, count, ratingStats];
        });
        return {
            reviews,
            total,
            page,
            limit,
            pages: Math.ceil(total / limit),
            stats,
        };
    }
}
//# sourceMappingURL=reviews.service.js.map