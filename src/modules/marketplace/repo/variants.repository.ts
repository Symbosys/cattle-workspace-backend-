import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";

type PrismaClientOrTx = Prisma.TransactionClient | typeof db;

export class VariantsRepository {
  public static async findById(id: string, tx: PrismaClientOrTx = db) {
    return tx.productVariant.findUnique({
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

  public static async findBySku(sku: string, tx: PrismaClientOrTx = db) {
    return tx.productVariant.findUnique({
      where: { sku },
    });
  }

  public static async create(
    data: Prisma.ProductVariantUncheckedCreateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.productVariant.create({
      data,
    });
  }

  public static async update(
    id: string,
    data: Prisma.ProductVariantUncheckedUpdateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.productVariant.update({
      where: { id },
      data,
    });
  }

  public static async delete(id: string, tx: PrismaClientOrTx = db) {
    return tx.productVariant.delete({
      where: { id },
    });
  }

  public static async findMany(
    where: Prisma.ProductVariantWhereInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.productVariant.findMany({
      where,
    });
  }
}
