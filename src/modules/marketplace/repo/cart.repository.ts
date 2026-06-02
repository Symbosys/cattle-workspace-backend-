import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";

type PrismaClientOrTx = Prisma.TransactionClient | typeof db;

// Shared include for returning cart items with populated variant + product info
const cartItemInclude = {
  cartItems: {
    include: {
      variant: {
        include: {
          product: {
            select: {
              id: true,
              title: true,
              slug: true,
              images: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc" as const,
    },
  },
} satisfies Prisma.CartInclude;

export class CartRepository {
  /**
   * Find a user's cart with all items fully populated
   */
  public static async findByUserId(userId: string, tx: PrismaClientOrTx = db) {
    return tx.cart.findUnique({
      where: { userId },
      include: cartItemInclude,
    });
  }

  /**
   * Create a new empty cart for a user
   */
  public static async create(userId: string, tx: PrismaClientOrTx = db) {
    return tx.cart.create({
      data: { userId },
      include: cartItemInclude,
    });
  }

  /**
   * Find an existing cart item by composite key (cartId + variantId)
   */
  public static async findCartItem(
    cartId: string,
    variantId: string,
    tx: PrismaClientOrTx = db
  ) {
    return tx.cartItem.findUnique({
      where: {
        cartId_variantId: { cartId, variantId },
      },
    });
  }

  /**
   * Find a cart item by its ID
   */
  public static async findCartItemById(id: string, tx: PrismaClientOrTx = db) {
    return tx.cartItem.findUnique({
      where: { id },
      include: {
        variant: true,
      },
    });
  }

  /**
   * Create a new cart item
   */
  public static async createCartItem(
    data: { cartId: string; variantId: string; quantity: number; total: Prisma.Decimal },
    tx: PrismaClientOrTx = db
  ) {
    return tx.cartItem.create({
      data: {
        cartId: data.cartId,
        variantId: data.variantId,
        quantity: data.quantity,
        total: data.total,
      },
    });
  }

  /**
   * Update an existing cart item's quantity and total
   */
  public static async updateCartItem(
    id: string,
    data: { quantity: number; total: Prisma.Decimal },
    tx: PrismaClientOrTx = db
  ) {
    return tx.cartItem.update({
      where: { id },
      data: {
        quantity: data.quantity,
        total: data.total,
      },
    });
  }

  /**
   * Delete a single cart item
   */
  public static async deleteCartItem(id: string, tx: PrismaClientOrTx = db) {
    return tx.cartItem.delete({
      where: { id },
    });
  }

  /**
   * Delete all cart items for a cart (clear cart)
   */
  public static async deleteAllCartItems(cartId: string, tx: PrismaClientOrTx = db) {
    return tx.cartItem.deleteMany({
      where: { cartId },
    });
  }

  /**
   * Update the cart's cached subTotal
   */
  public static async updateSubTotal(
    cartId: string,
    subTotal: Prisma.Decimal,
    tx: PrismaClientOrTx = db
  ) {
    return tx.cart.update({
      where: { id: cartId },
      data: { subTotal },
      include: cartItemInclude,
    });
  }

  /**
   * Recalculate and update the cart's subTotal by summing all item totals
   */
  public static async recalculateSubTotal(cartId: string, tx: PrismaClientOrTx = db) {
    const result = await tx.cartItem.aggregate({
      where: { cartId },
      _sum: { total: true },
    });

    const newSubTotal = result._sum.total ?? new Prisma.Decimal(0);

    return tx.cart.update({
      where: { id: cartId },
      data: { subTotal: newSubTotal },
      include: cartItemInclude,
    });
  }
}
