import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";

type PrismaClientOrTx = Prisma.TransactionClient | typeof db;

export class ProductsRepository {
  public static async findById(id: string, tx: PrismaClientOrTx = db) {
    return tx.marketplaceProduct.findUnique({
      where: { id },
      include: {
        brand: true,
        category: true,
        variants: true,
      },
    });
  }

  public static async findBySlug(slug: string, tx: PrismaClientOrTx = db) {
    return tx.marketplaceProduct.findUnique({
      where: { slug },
      include: {
        brand: true,
        category: true,
        variants: true,
      },
    });
  }

  public static async create(
    data: Prisma.MarketplaceProductUncheckedCreateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.marketplaceProduct.create({
      data,
      include: {
        variants: true,
      },
    });
  }

  public static async update(
    id: string,
    data: Prisma.MarketplaceProductUncheckedUpdateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.marketplaceProduct.update({
      where: { id },
      data,
      include: {
        variants: true,
      },
    });
  }

  public static async delete(id: string, tx: PrismaClientOrTx = db) {
    return tx.marketplaceProduct.delete({
      where: { id },
    });
  }

  public static async findMany(
    options: {
      where: Prisma.MarketplaceProductWhereInput;
      skip?: number;
      take?: number;
      orderBy?: Prisma.MarketplaceProductOrderByWithRelationInput;
    },
    tx: PrismaClientOrTx = db
  ) {
    const args: Prisma.MarketplaceProductFindManyArgs = {
      where: options.where,
      include: {
        brand: true,
        category: true,
        variants: true,
      },
    };

    if (options.skip !== undefined) args.skip = options.skip;
    if (options.take !== undefined) args.take = options.take;
    if (options.orderBy !== undefined) args.orderBy = options.orderBy;

    return tx.marketplaceProduct.findMany(args);
  }

  public static async count(
    where: Prisma.MarketplaceProductWhereInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.marketplaceProduct.count({
      where,
    });
  }
}
