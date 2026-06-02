import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";

type PrismaClientOrTx = Prisma.TransactionClient | typeof db;

export class ReviewsRepository {
  public static async findById(id: string, tx: PrismaClientOrTx = db) {
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

  public static async create(
    data: Prisma.ProductReviewUncheckedCreateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.productReview.create({
      data,
    });
  }

  public static async update(
    id: string,
    data: Prisma.ProductReviewUncheckedUpdateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.productReview.update({
      where: { id },
      data,
    });
  }

  public static async delete(id: string, tx: PrismaClientOrTx = db) {
    return tx.productReview.delete({
      where: { id },
    });
  }

  public static async findMany(
    options: {
      where: Prisma.ProductReviewWhereInput;
      skip?: number;
      take?: number;
      orderBy?: Prisma.ProductReviewOrderByWithRelationInput;
    },
    tx: PrismaClientOrTx = db
  ) {
    const args: Prisma.ProductReviewFindManyArgs = {
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

    if (options.skip !== undefined) args.skip = options.skip;
    if (options.take !== undefined) args.take = options.take;
    if (options.orderBy !== undefined) args.orderBy = options.orderBy;

    return tx.productReview.findMany(args);
  }

  public static async count(
    where: Prisma.ProductReviewWhereInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.productReview.count({
      where,
    });
  }

  public static async aggregateRatingStats(productId: string, tx: PrismaClientOrTx = db) {
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
        breakdown[star as keyof typeof breakdown] = g._count.rating;
      }
    }

    return {
      averageRating: aggregate._avg.rating ? parseFloat(aggregate._avg.rating.toFixed(1)) : 0,
      totalReviews: aggregate._count.id,
      breakdown,
    };
  }

  public static async hasPurchasedProduct(userId: string, productId: string, tx: PrismaClientOrTx = db) {
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
