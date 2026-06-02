import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";

type PrismaClientOrTx = Prisma.TransactionClient | typeof db;

export class CategoriesRepository {
  public static async findById(id: string, tx: PrismaClientOrTx = db) {
    return tx.marketplaceCategory.findUnique({
      where: { id },
      include: {
        parent: true,
        children: true,
        brand: true,
      },
    });
  }



  public static async create(
    data: Prisma.MarketplaceCategoryUncheckedCreateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.marketplaceCategory.create({
      data,
      include: {
        parent: true,
        children: true,
      },
    });
  }

  public static async update(
    id: string,
    data: Prisma.MarketplaceCategoryUncheckedUpdateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.marketplaceCategory.update({
      where: { id },
      data,
      include: {
        parent: true,
        children: true,
      },
    });
  }

  public static async delete(id: string, tx: PrismaClientOrTx = db) {
    return tx.marketplaceCategory.delete({
      where: { id },
    });
  }

  public static async findMany(
    where: Prisma.MarketplaceCategoryWhereInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.marketplaceCategory.findMany({
      where,
      include: {
        parent: true,
        children: true,
      },
    });
  }
}
