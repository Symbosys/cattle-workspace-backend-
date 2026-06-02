import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
import { ErrorResponse } from "../../../utils/response.util.js";
import { CartRepository } from "../repo/cart.repository.js";

export class CartService {
  /**
   * Get or create the cart for an authenticated user
   */
  public static async getCart(userId: string) {
    let cart = await CartRepository.findByUserId(userId);

    if (!cart) {
      cart = await CartRepository.create(userId);
    }

    return cart;
  }

  /**
   * Add an item to the cart (or increment quantity if it already exists)
   */
  public static async addItem(
    userId: string,
    data: { variantId: string; quantity: number }
  ) {
    return await db.$transaction(async (tx) => {
      // 1. Ensure cart exists
      let cart = await CartRepository.findByUserId(userId, tx);
      if (!cart) {
        cart = await CartRepository.create(userId, tx);
      }

      // 2. Verify the variant exists and is active
      const variant = await tx.productVariant.findUnique({
        where: { id: data.variantId },
        include: {
          product: {
            select: { status: true },
          },
        },
      });

      if (!variant) {
        throw new ErrorResponse("Product variant not found", 404);
      }

      if (!variant.isActive) {
        throw new ErrorResponse("This product variant is currently unavailable", 400);
      }

      if (variant.product.status !== "ACTIVE") {
        throw new ErrorResponse("This product is currently unavailable", 400);
      }

      // 3. Check stock availability
      const existingItem = await CartRepository.findCartItem(cart.id, data.variantId, tx);
      const requestedQty = existingItem
        ? existingItem.quantity + data.quantity
        : data.quantity;

      if (variant.stock < requestedQty) {
        throw new ErrorResponse(
          `Insufficient stock. Only ${variant.stock} units available`,
          400
        );
      }

      // 4. Calculate item total
      const itemTotal = variant.price.mul(requestedQty);

      // 5. Create or update the cart item
      if (existingItem) {
        await CartRepository.updateCartItem(
          existingItem.id,
          { quantity: requestedQty, total: itemTotal },
          tx
        );
      } else {
        await CartRepository.createCartItem(
          {
            cartId: cart.id,
            variantId: data.variantId,
            quantity: data.quantity,
            total: variant.price.mul(data.quantity),
          },
          tx
        );
      }

      // 6. Recalculate and return the updated cart
      return await CartRepository.recalculateSubTotal(cart.id, tx);
    });
  }

  /**
   * Update the quantity of an existing cart item
   */
  public static async updateItem(
    userId: string,
    itemId: string,
    data: { quantity: number }
  ) {
    return await db.$transaction(async (tx) => {
      // 1. Ensure cart exists
      const cart = await CartRepository.findByUserId(userId, tx);
      if (!cart) {
        throw new ErrorResponse("Cart not found", 404);
      }

      // 2. Find the cart item and verify it belongs to this cart
      const cartItem = await CartRepository.findCartItemById(itemId, tx);
      if (!cartItem || cartItem.cartId !== cart.id) {
        throw new ErrorResponse("Cart item not found", 404);
      }

      // 3. Verify stock availability for the new quantity
      const variant = await tx.productVariant.findUnique({
        where: { id: cartItem.variantId },
      });

      if (!variant) {
        throw new ErrorResponse("Product variant no longer exists", 404);
      }

      if (variant.stock < data.quantity) {
        throw new ErrorResponse(
          `Insufficient stock. Only ${variant.stock} units available`,
          400
        );
      }

      // 4. Update item with new quantity and recalculated total
      const itemTotal = variant.price.mul(data.quantity);
      await CartRepository.updateCartItem(
        itemId,
        { quantity: data.quantity, total: itemTotal },
        tx
      );

      // 5. Recalculate and return the updated cart
      return await CartRepository.recalculateSubTotal(cart.id, tx);
    });
  }

  /**
   * Remove a single item from the cart
   */
  public static async removeItem(userId: string, itemId: string) {
    return await db.$transaction(async (tx) => {
      // 1. Ensure cart exists
      const cart = await CartRepository.findByUserId(userId, tx);
      if (!cart) {
        throw new ErrorResponse("Cart not found", 404);
      }

      // 2. Find the cart item and verify ownership
      const cartItem = await CartRepository.findCartItemById(itemId, tx);
      if (!cartItem || cartItem.cartId !== cart.id) {
        throw new ErrorResponse("Cart item not found", 404);
      }

      // 3. Delete the item
      await CartRepository.deleteCartItem(itemId, tx);

      // 4. Recalculate and return the updated cart
      return await CartRepository.recalculateSubTotal(cart.id, tx);
    });
  }

  /**
   * Clear all items from the cart
   */
  public static async clearCart(userId: string) {
    return await db.$transaction(async (tx) => {
      // 1. Ensure cart exists
      const cart = await CartRepository.findByUserId(userId, tx);
      if (!cart) {
        throw new ErrorResponse("Cart not found", 404);
      }

      // 2. Delete all items
      await CartRepository.deleteAllCartItems(cart.id, tx);

      // 3. Reset subTotal to 0
      return await CartRepository.updateSubTotal(
        cart.id,
        new Prisma.Decimal(0),
        tx
      );
    });
  }
}
