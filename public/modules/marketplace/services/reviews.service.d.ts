export declare class ReviewsService {
    /**
     * Submit a product review (verifies purchase status automatically)
     */
    static createReview(userId: string, productId: string, data: {
        rating: number;
        comment?: string | null | undefined;
        images?: {
            url: string;
            public_id: string;
        }[] | null | undefined;
    }): Promise<{
        id: string;
        createdAt: Date;
        images: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string;
        productId: string;
        rating: number;
        comment: string | null;
        isVerifiedPurchase: boolean;
        sellerReply: string | null;
    }>;
    /**
     * Update an existing product review (allows editing rating/comment/images)
     */
    static updateReview(userId: string, reviewId: string, data: {
        rating?: number | undefined;
        comment?: string | null | undefined;
        images?: {
            url: string;
            public_id: string;
        }[] | null | undefined;
    }): Promise<{
        id: string;
        createdAt: Date;
        images: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string;
        productId: string;
        rating: number;
        comment: string | null;
        isVerifiedPurchase: boolean;
        sellerReply: string | null;
    }>;
    /**
     * Add a seller reply to a product review
     */
    static addSellerReply(ownerId: string, reviewId: string, reply: string): Promise<{
        id: string;
        createdAt: Date;
        images: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string;
        productId: string;
        rating: number;
        comment: string | null;
        isVerifiedPurchase: boolean;
        sellerReply: string | null;
    }>;
    /**
     * Delete a product review (author or brand owner can delete)
     */
    static deleteReview(userId: string, reviewId: string): Promise<{
        id: string;
        createdAt: Date;
        images: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string;
        productId: string;
        rating: number;
        comment: string | null;
        isVerifiedPurchase: boolean;
        sellerReply: string | null;
    }>;
    /**
     * Get reviews list with statistics breakdown
     */
    static getProductReviews(productId: string, options: {
        rating?: number | undefined;
        page?: number | undefined;
        limit?: number | undefined;
    }): Promise<{
        reviews: {
            id: string;
            createdAt: Date;
            images: import("@prisma/client/runtime/client").JsonValue | null;
            userId: string;
            productId: string;
            rating: number;
            comment: string | null;
            isVerifiedPurchase: boolean;
            sellerReply: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
        pages: number;
        stats: {
            averageRating: number;
            totalReviews: number;
            breakdown: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
            };
        };
    }>;
}
//# sourceMappingURL=reviews.service.d.ts.map