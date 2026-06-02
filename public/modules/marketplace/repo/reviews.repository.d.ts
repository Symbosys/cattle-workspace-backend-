import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
type PrismaClientOrTx = Prisma.TransactionClient | typeof db;
export declare class ReviewsRepository {
    static findById(id: string, tx?: PrismaClientOrTx): Promise<({
        product: {
            brand: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                isActive: boolean;
                isVerified: boolean;
                userId: string;
                brandName: string;
                slug: string;
                contactEmail: string | null;
                contactPhone: string | null;
                address: string | null;
                gstNumber: string | null;
                rating: import("@prisma/client-runtime-utils").Decimal;
                logoUrl: import("@prisma/client/runtime/client").JsonValue | null;
                bannerUrl: import("@prisma/client/runtime/client").JsonValue | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../../../generated/prisma/enums.js").ProductStatus;
            description: string;
            categoryId: string;
            title: string;
            images: import("@prisma/client/runtime/client").JsonValue | null;
            slug: string;
            brandId: string;
            metaTitle: string | null;
            metaDescription: string | null;
            attributes: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: string;
        createdAt: Date;
        images: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string;
        productId: string;
        rating: number;
        comment: string | null;
        isVerifiedPurchase: boolean;
        sellerReply: string | null;
    }) | null>;
    static create(data: Prisma.ProductReviewUncheckedCreateInput, tx?: PrismaClientOrTx): Promise<{
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
    static update(id: string, data: Prisma.ProductReviewUncheckedUpdateInput, tx?: PrismaClientOrTx): Promise<{
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
    static delete(id: string, tx?: PrismaClientOrTx): Promise<{
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
    static findMany(options: {
        where: Prisma.ProductReviewWhereInput;
        skip?: number;
        take?: number;
        orderBy?: Prisma.ProductReviewOrderByWithRelationInput;
    }, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        images: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string;
        productId: string;
        rating: number;
        comment: string | null;
        isVerifiedPurchase: boolean;
        sellerReply: string | null;
    }[]>;
    static count(where: Prisma.ProductReviewWhereInput, tx?: PrismaClientOrTx): Promise<number>;
    static aggregateRatingStats(productId: string, tx?: PrismaClientOrTx): Promise<{
        averageRating: number;
        totalReviews: number;
        breakdown: {
            "1": number;
            "2": number;
            "3": number;
            "4": number;
            "5": number;
        };
    }>;
    static hasPurchasedProduct(userId: string, productId: string, tx?: PrismaClientOrTx): Promise<boolean>;
}
export {};
//# sourceMappingURL=reviews.repository.d.ts.map