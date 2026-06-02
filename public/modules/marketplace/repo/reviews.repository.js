import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
export class ReviewsRepository {
    static async findById(id, tx = db) {
        return tx.productReview.findUnique({
            where: { id },
            include: {
                product: {
                    include: {
                        brand: true,
                    },
                },
            },
        });
    }
    static async create(data, tx = db) {
        return tx.productReview.create({
            data,
        });
    }
    static async update(id, data, tx = db) {
        return tx.productReview.update({
            where: { id },
            data,
        });
    }
    static async delete(id, tx = db) {
        return tx.productReview.delete({
            where: { id },
        });
    }
    static async findMany(options, tx = db) {
        const args = {
            where: options.where,
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        avatarUrl: true,
                    },
                },
            },
        };
        if (options.skip !== undefined)
            args.skip = options.skip;
        if (options.take !== undefined)
            args.take = options.take;
        if (options.orderBy !== undefined)
            args.orderBy = options.orderBy;
        return tx.productReview.findMany(args);
    }
    static async count(where, tx = db) {
        return tx.productReview.count({
            where,
        });
    }
    static async aggregateRatingStats(productId, tx = db) {
        const aggregate = await tx.productReview.aggregate({
            where: { productId },
            _avg: { rating: true },
            _count: { id: true },
        });
        const groups = await tx.productReview.groupBy({
            by: ["rating"],
            where: { productId },
            _count: { rating: true },
        });
        // Initialize counts for star ratings 1-5
        const breakdown = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 };
        for (const g of groups) {
            const star = g.rating.toString();
            if (star in breakdown) {
                breakdown[star] = g._count.rating;
            }
        }
        return {
            averageRating: aggregate._avg.rating ? parseFloat(aggregate._avg.rating.toFixed(1)) : 0,
            totalReviews: aggregate._count.id,
            breakdown,
        };
    }
    static async hasPurchasedProduct(userId, productId, tx = db) {
        const count = await tx.marketplaceOrder.count({
            where: {
                buyerId: userId,
                paymentStatus: "PAID",
                items: {
                    some: {
                        variant: {
                            productId: productId,
                        },
                    },
                },
            },
        });
        return count > 0;
    }
}
//# sourceMappingURL=reviews.repository.js.map